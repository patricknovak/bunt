"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, User, Bot, Phone, Mail, ArrowRight } from "lucide-react";
import { offices } from "@/lib/data/offices";
import { services } from "@/lib/data/services";
import { openings } from "@/lib/data/jobs";

interface Message {
  id: number;
  role: "user" | "bot";
  content: string;
  options?: ChatOption[];
}

interface ChatOption {
  label: string;
  value: string;
}

interface CollectedInfo {
  name?: string;
  email?: string;
  phone?: string;
  interest?: string;
  office?: string;
  message?: string;
}

type ChatStep =
  | "greeting"
  | "ask_interest"
  | "ask_service"
  | "ask_office"
  | "service_info"
  | "ask_name"
  | "ask_email"
  | "ask_phone"
  | "ask_message"
  | "summary"
  | "free_chat";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState<ChatStep>("greeting");
  const [collectedInfo, setCollectedInfo] = useState<CollectedInfo>({});
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      setHasGreeted(true);
      setMessages([
        {
          id: 1,
          role: "bot",
          content:
            "Welcome to Bunt & Associates! I'm here to help you with your transportation planning and engineering needs. How can I assist you today?",
          options: [
            { label: "Learn about services", value: "services" },
            { label: "Start a project inquiry", value: "inquiry" },
            { label: "Find an office", value: "offices" },
            { label: "Career opportunities", value: "careers" },
          ],
        },
      ]);
      setStep("ask_interest");
    }
  }, [isOpen, hasGreeted]);

  const addBotMessage = (content: string, options?: ChatOption[]) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: "bot", content, options },
    ]);
  };

  const addUserMessage = (content: string) => {
    setMessages((prev) => [
      ...prev,
      { id: Date.now(), role: "user", content },
    ]);
  };

  const handleOptionClick = (option: ChatOption) => {
    addUserMessage(option.label);
    processResponse(option.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");
    addUserMessage(text);
    processResponse(text);
  };

  const processResponse = (text: string) => {
    setTimeout(() => {
      switch (step) {
        case "ask_interest":
          handleInterest(text);
          break;
        case "ask_service":
          handleServiceSelection(text);
          break;
        case "ask_office":
          handleOfficeSelection(text);
          break;
        case "ask_name":
          setCollectedInfo((prev) => ({ ...prev, name: text }));
          setStep("ask_email");
          addBotMessage(
            `Nice to meet you, ${text}! What's the best email address to reach you?`
          );
          break;
        case "ask_email":
          setCollectedInfo((prev) => ({ ...prev, email: text }));
          setStep("ask_phone");
          addBotMessage(
            "And a phone number? (You can type 'skip' if you prefer not to share)"
          );
          break;
        case "ask_phone":
          if (text.toLowerCase() !== "skip") {
            setCollectedInfo((prev) => ({ ...prev, phone: text }));
          }
          setStep("ask_message");
          addBotMessage(
            "Great! Please briefly describe your project or what you need help with."
          );
          break;
        case "ask_message":
          setCollectedInfo((prev) => ({ ...prev, message: text }));
          setStep("summary");
          showSummary(text);
          break;
        case "free_chat":
          handleFreeChat(text);
          break;
        default:
          handleFreeChat(text);
      }
    }, 500);
  };

  const handleInterest = (interest: string) => {
    const lower = interest.toLowerCase();

    if (lower.includes("service")) {
      setStep("ask_service");
      addBotMessage("We offer six core service areas. Which interests you most?", [
        ...services.map((s) => ({ label: s.shortTitle, value: s.slug })),
      ]);
    } else if (lower.includes("inquiry") || lower.includes("project")) {
      setCollectedInfo((prev) => ({ ...prev, interest: "Project Inquiry" }));
      setStep("ask_service");
      addBotMessage(
        "I'd love to help connect you with the right team! First, which service area is your project related to?",
        services.map((s) => ({ label: s.shortTitle, value: s.slug }))
      );
    } else if (lower.includes("office")) {
      showOfficeInfo();
    } else if (lower.includes("career")) {
      addBotMessage(
        `We're always looking for talented transportation professionals!${openings.length > 0 ? ` We currently have ${openings.length} open position${openings.length > 1 ? "s" : ""}: ${openings.map(j => `${j.title} in ${j.location}`).join(", ")}.` : ""}\n\nYou can send your resume directly to careers@bunteng.com. We welcome general applications and keep resumes on file for six months.\n\nWould you like to know anything else?`,
        [
          { label: "Learn about services", value: "services" },
          { label: "Start a project inquiry", value: "inquiry" },
          { label: "Find an office", value: "offices" },
        ]
      );
      setStep("ask_interest");
    } else {
      handleFreeChat(interest);
    }
  };

  const handleServiceSelection = (serviceSlug: string) => {
    const service = services.find((s) => s.slug === serviceSlug);
    if (service) {
      setCollectedInfo((prev) => ({ ...prev, interest: service.title }));
      addBotMessage(
        `Great choice! Our **${service.title}** services include:\n\n${service.features
          .slice(0, 5)
          .map((f) => `- ${f}`)
          .join("\n")}\n\nWould you like to connect with our team about a specific project?`,
        [
          { label: "Yes, connect me", value: "connect" },
          { label: "Tell me more", value: "more_info" },
          { label: "Different service", value: "different" },
        ]
      );
      setStep("service_info");
    } else {
      setCollectedInfo((prev) => ({ ...prev, interest: serviceSlug }));
      startInquiryFlow();
    }
  };

  const handleOfficeSelection = (office: string) => {
    const found = offices.find(
      (o) => o.city.toLowerCase() === office.toLowerCase()
    );
    if (found) {
      setCollectedInfo((prev) => ({ ...prev, office: found.city }));
      addBotMessage(
        `Our ${found.city} office:\n\n${found.address}\nPhone: ${found.phone}\nEmail: ${found.email}\n\nWould you like to start a project inquiry with this office?`,
        [
          { label: "Yes, start inquiry", value: "connect" },
          { label: "Different office", value: "offices" },
          { label: "Something else", value: "other" },
        ]
      );
      setStep("service_info");
    } else {
      showOfficeInfo();
    }
  };

  const showOfficeInfo = () => {
    setStep("ask_office");
    addBotMessage(
      "We have five offices across Western Canada. Which location works best for you?",
      offices.map((o) => ({
        label: `${o.city}, ${o.province}`,
        value: o.city,
      }))
    );
  };

  const startInquiryFlow = () => {
    setStep("ask_name");
    addBotMessage(
      "I'll gather some information so the right team member can reach out to you. What's your name?"
    );
  };

  const showSummary = (message: string) => {
    const info = { ...collectedInfo, message };

    // Build mailto link so inquiry goes to the right office
    const officeData = info.office
      ? offices.find((o) => o.city === info.office)
      : null;
    const toEmail = officeData?.email || "info@bunteng.com";
    const subject = encodeURIComponent(
      `Website Inquiry: ${info.interest || "General"} - ${info.name || "New Lead"}`
    );
    const body = encodeURIComponent(
      `New inquiry from website chatbot:\n\nName: ${info.name || "Not provided"}\nEmail: ${info.email || "Not provided"}\nPhone: ${info.phone || "Not provided"}\nInterest: ${info.interest || "General"}\nPreferred Office: ${info.office || "Any"}\n\nMessage:\n${info.message}`
    );
    const mailtoLink = `mailto:${toEmail}?subject=${subject}&body=${body}`;

    // Open mailto to send the inquiry
    if (typeof window !== "undefined") {
      window.open(mailtoLink, "_blank");
    }

    addBotMessage(
      `Thank you! Here's a summary of your inquiry:\n\n` +
        `**Name:** ${info.name || "Not provided"}\n` +
        `**Email:** ${info.email || "Not provided"}\n` +
        `**Phone:** ${info.phone || "Not provided"}\n` +
        `**Interest:** ${info.interest || "General inquiry"}\n` +
        `**Office:** ${info.office || "Any"}\n` +
        `**Message:** ${info.message}\n\n` +
        `We've prepared an email to ${toEmail} with your inquiry details. A team member will follow up within one business day.\n\nIs there anything else I can help with?`,
      [
        { label: "Learn about services", value: "services" },
        { label: "Find an office", value: "offices" },
        { label: "That's all, thanks!", value: "done" },
      ]
    );
    setStep("ask_interest");
    setCollectedInfo({});
  };

  const handleFreeChat = (text: string) => {
    const lower = text.toLowerCase();

    if (lower.includes("done") || lower.includes("thank") || lower.includes("bye")) {
      addBotMessage(
        "Thank you for chatting with us! Don't hesitate to reach out anytime. You can also contact us at info@bunteng.com. Have a great day!"
      );
      setStep("ask_interest");
      return;
    }

    if (lower.includes("service")) {
      handleInterest("services");
      return;
    }
    if (lower.includes("office") || lower.includes("location") || lower.includes("address")) {
      handleInterest("offices");
      return;
    }
    if (lower.includes("career") || lower.includes("job") || lower.includes("hiring")) {
      handleInterest("careers");
      return;
    }
    if (lower.includes("project") || lower.includes("inquiry") || lower.includes("help")) {
      handleInterest("inquiry");
      return;
    }

    // Handle service_info step responses
    if (step === "service_info") {
      if (lower.includes("connect") || lower.includes("yes")) {
        startInquiryFlow();
        return;
      }
      if (lower.includes("more")) {
        const service = services.find((s) => s.title === collectedInfo.interest);
        if (service) {
          addBotMessage(
            `${service.description}\n\n**Key highlights:**\n${service.highlights
              .map((h) => `- ${h}`)
              .join("\n")}\n\nReady to discuss your project with our team?`,
            [
              { label: "Yes, connect me", value: "connect" },
              { label: "Different service", value: "different" },
            ]
          );
          return;
        }
      }
      if (lower.includes("different")) {
        setStep("ask_service");
        addBotMessage("No problem! Which service area interests you?", [
          ...services.map((s) => ({ label: s.shortTitle, value: s.slug })),
        ]);
        return;
      }
      if (lower.includes("other")) {
        addBotMessage("What else can I help you with?", [
          { label: "Learn about services", value: "services" },
          { label: "Start a project inquiry", value: "inquiry" },
          { label: "Find an office", value: "offices" },
        ]);
        setStep("ask_interest");
        return;
      }
    }

    // Default response
    addBotMessage(
      "I'd be happy to help! Here are some things I can assist with:",
      [
        { label: "Learn about services", value: "services" },
        { label: "Start a project inquiry", value: "inquiry" },
        { label: "Find an office", value: "offices" },
        { label: "Career opportunities", value: "careers" },
      ]
    );
    setStep("ask_interest");
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-lg hover:bg-primary-dark transition-all flex items-center justify-center group"
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-pulse" />
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-48px)] bg-white rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden" style={{ height: "min(600px, calc(100vh - 160px))" }}>
          {/* Header */}
          <div className="bg-primary text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-semibold text-sm">Bunt Assistant</h3>
              <p className="text-xs text-white/70">
                Transportation Planning & Engineering
              </p>
            </div>
          </div>

          {/* Quick Contact Bar */}
          <div className="bg-surface px-4 py-2 flex items-center gap-4 text-xs border-b border-border">
            <a
              href="tel:6046856427"
              className="flex items-center gap-1 text-text-muted hover:text-primary transition-colors"
            >
              <Phone className="w-3 h-3" /> (604) 685-6427
            </a>
            <a
              href="mailto:info@bunteng.com"
              className="flex items-center gap-1 text-text-muted hover:text-primary transition-colors"
            >
              <Mail className="w-3 h-3" /> info@bunteng.com
            </a>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id}>
                <div
                  className={`flex gap-2 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === "user"
                        ? "bg-primary text-white rounded-br-md"
                        : "bg-surface text-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.content.split(/(\*\*.*?\*\*)/).map((part, i) => {
                      if (part.startsWith("**") && part.endsWith("**")) {
                        return (
                          <strong key={i}>
                            {part.slice(2, -2)}
                          </strong>
                        );
                      }
                      return part;
                    })}
                  </div>
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                {/* Option buttons */}
                {msg.options && (
                  <div className="ml-9 mt-2 flex flex-wrap gap-2">
                    {msg.options.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => handleOptionClick(option)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-white text-primary text-xs font-medium rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-colors"
                      >
                        {option.label}
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-border flex gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 text-sm border border-border rounded-full focus:outline-none focus:border-primary"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="w-9 h-9 bg-primary text-white rounded-full flex items-center justify-center hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
