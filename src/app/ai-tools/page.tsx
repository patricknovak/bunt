import type { Metadata } from "next";
import Link from "next/link";
import {
  Sparkles,
  Activity,
  ParkingCircle,
  Shield,
  Calculator,
  FileText,
  ArrowRight,
  Zap,
  Brain,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Transportation Tools",
  description:
    "Industry-first AI-powered transportation planning and engineering tools. Traffic simulation, parking analysis, safety audits, trip generation, and report writing.",
};

const tools = [
  {
    name: "Traffic Simulator",
    description:
      "Describe an intersection scenario in natural language and get AI-powered traffic flow visualization, Level of Service analysis, and improvement recommendations using Highway Capacity Manual methodologies.",
    href: "/ai-tools/traffic-simulator",
    icon: <Activity className="w-8 h-8" />,
    color: "#0f4c75",
    features: [
      "Natural language scenario input",
      "Real-time traffic visualization",
      "HCM-based LOS analysis",
      "Signal timing recommendations",
    ],
    badge: "Flagship",
  },
  {
    name: "Parking Demand Analyzer",
    description:
      "AI-powered parking demand forecasting using ITE rates with intelligent right-sizing recommendations. Input your land use and get context-aware supply analysis.",
    href: "/ai-tools/parking-analyzer",
    icon: <ParkingCircle className="w-8 h-8" />,
    color: "#3282b8",
    features: [
      "ITE Parking Generation rates",
      "Transit proximity adjustments",
      "Shared parking analysis",
      "Cost-benefit comparison",
    ],
  },
  {
    name: "Road Safety Assessment",
    description:
      "Preliminary safety screening tool using FHWA/TAC methodologies. Identify potential road safety concerns and get evidence-based countermeasure recommendations.",
    href: "/ai-tools/safety-audit",
    icon: <Shield className="w-8 h-8" />,
    color: "#e8630a",
    features: [
      "Risk scoring (0-100)",
      "Multi-user safety analysis",
      "Countermeasure database",
      "Priority-ranked solutions",
    ],
  },
  {
    name: "Trip Generation Calculator",
    description:
      "ITE Trip Generation Manual rates with AI-powered context analysis. Calculate trip generation for any land use with intelligent mode split and TDM adjustments.",
    href: "/ai-tools/trip-generator",
    icon: <Calculator className="w-8 h-8" />,
    color: "#1b998b",
    features: [
      "ITE 11th Edition rates",
      "Multi-modal analysis",
      "TDM effectiveness",
      "Context-aware adjustments",
    ],
  },
  {
    name: "Report Writing Assistant",
    description:
      "AI-powered report generation for transportation studies. Generate professional executive summaries, analysis sections, and recommendations in Bunt's style.",
    href: "/ai-tools/report-assistant",
    icon: <FileText className="w-8 h-8" />,
    color: "#6c5ce7",
    features: [
      "Multiple report templates",
      "Professional formatting",
      "Technical accuracy",
      "Customizable sections",
    ],
  },
];

export default function AIToolsPage() {
  return (
    <div className="py-20">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#1a1a2e] via-primary-dark to-primary text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/90 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Industry First
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            AI Transportation Tools
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            The first transportation consulting firm in Canada to offer
            interactive, AI-powered analysis tools. Try them free and experience
            the future of transportation planning.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: <Brain className="w-6 h-6" />,
                title: "AI-Powered Analysis",
                desc: "Leveraging Claude AI for intelligent, context-aware transportation analysis",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Instant Results",
                desc: "Get preliminary analysis in seconds, not days",
              },
              {
                icon: <BarChart3 className="w-6 h-6" />,
                title: "Data-Driven",
                desc: "Built on ITE, HCM, FHWA, and TAC methodologies",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="text-secondary-light mb-3">{item.icon}</div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {tools.map((tool, index) => (
              <Link
                key={tool.name}
                href={tool.href}
                className={`group flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-8 p-8 rounded-2xl border border-border hover:shadow-xl hover:border-primary/20 transition-all duration-300`}
              >
                {/* Icon & Visual */}
                <div className="lg:w-1/3">
                  <div
                    className="rounded-2xl p-12 flex flex-col items-center justify-center min-h-[250px]"
                    style={{
                      background: `linear-gradient(135deg, ${tool.color}15, ${tool.color}08)`,
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4"
                      style={{
                        backgroundColor: tool.color + "20",
                        color: tool.color,
                      }}
                    >
                      {tool.icon}
                    </div>
                    {tool.badge && (
                      <span className="px-3 py-1 bg-accent text-white text-xs rounded-full font-bold">
                        {tool.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-2/3 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {tool.name}
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {tool.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {tool.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: tool.color }}
                        />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-primary font-medium">
                    Try Now <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-12 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-text-muted max-w-2xl mx-auto">
            These AI tools provide preliminary analysis for educational and
            planning purposes. Professional transportation engineering
            assessment should be conducted by qualified engineers for final
            design and approval purposes. Contact Bunt & Associates for
            comprehensive project support.
          </p>
        </div>
      </section>
    </div>
  );
}
