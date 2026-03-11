import Link from "next/link";
import {
  Sparkles,
  Activity,
  ParkingCircle,
  Shield,
  Calculator,
  FileText,
  ArrowRight,
} from "lucide-react";

const tools = [
  {
    name: "Traffic Simulator",
    description:
      "AI-powered traffic flow visualization and Level of Service analysis. Describe your intersection and get instant insights.",
    href: "/ai-tools/traffic-simulator",
    icon: <Activity className="w-6 h-6" />,
    color: "#0f4c75",
    badge: "Flagship",
  },
  {
    name: "Parking Analyzer",
    description:
      "Smart parking demand forecasting using ITE rates and AI-driven right-sizing recommendations.",
    href: "/ai-tools/parking-analyzer",
    icon: <ParkingCircle className="w-6 h-6" />,
    color: "#3282b8",
  },
  {
    name: "Safety Audit",
    description:
      "Preliminary road safety screening with AI-assisted risk identification and countermeasure recommendations.",
    href: "/ai-tools/safety-audit",
    icon: <Shield className="w-6 h-6" />,
    color: "#e8630a",
  },
  {
    name: "Trip Generator",
    description:
      "ITE-based trip generation calculator with context-aware AI analysis and mode split recommendations.",
    href: "/ai-tools/trip-generator",
    icon: <Calculator className="w-6 h-6" />,
    color: "#1b998b",
  },
  {
    name: "Report Assistant",
    description:
      "AI-powered report writing tool that generates professional transportation study sections and summaries.",
    href: "/ai-tools/report-assistant",
    icon: <FileText className="w-6 h-6" />,
    color: "#6c5ce7",
  },
];

export default function AIShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1a1a2e] to-[#0b3d5e] dark:from-[#0a0e1a] dark:to-[#0c2240] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 text-white/90 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Industry First: AI-Powered Tools
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            AI Transportation Tools
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            The first transportation consulting firm in Canada to offer
            interactive AI-powered analysis tools. Try them free and see the
            future of transportation planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              {tool.badge && (
                <span className="absolute top-4 right-4 px-2.5 py-0.5 bg-accent text-white text-xs rounded-full font-bold">
                  {tool.badge}
                </span>
              )}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: tool.color + "30", color: tool.color }}
              >
                {tool.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-secondary-light transition-colors">
                {tool.name}
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                {tool.description}
              </p>
              <div className="flex items-center gap-2 text-secondary-light text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Try Now <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/ai-tools"
            className="inline-flex items-center gap-2 px-8 py-3 !bg-white !text-[#0f4c75] font-semibold rounded-lg hover:!bg-gray-100 transition-colors shadow-lg"
          >
            Explore All AI Tools
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
