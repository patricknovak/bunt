import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Route,
  Bike,
  Shield,
  ParkingCircle,
  PenTool,
  Users,
  ArrowRight,
} from "lucide-react";
import { services } from "@/lib/data/services";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive transportation planning and engineering services including traffic engineering, sustainable planning, safety, parking, design, and public participation.",
};

const iconMap: Record<string, React.ReactNode> = {
  Route: <Route className="w-10 h-10" />,
  Bike: <Bike className="w-10 h-10" />,
  Shield: <Shield className="w-10 h-10" />,
  ParkingCircle: <ParkingCircle className="w-10 h-10" />,
  PenTool: <PenTool className="w-10 h-10" />,
  Users: <Users className="w-10 h-10" />,
};

export default function ServicesPage() {
  return (
    <div className="py-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Six specialized service areas delivering comprehensive
            transportation solutions, now enhanced with AI-powered analysis
            tools.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={service.slug}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                {/* Visual */}
                <div className="lg:w-1/2">
                  <div className="rounded-2xl overflow-hidden relative min-h-[300px]">
                    <Image
                      src={`${basePath}${service.image}`}
                      alt={service.title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                    <div
                      className="absolute inset-0 rounded-2xl flex flex-col items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${service.color}40, ${service.color}20)`,
                      }}
                    >
                      <div
                        className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 !bg-white/90 backdrop-blur-sm"
                        style={{ color: service.color }}
                      >
                        {iconMap[service.icon]}
                      </div>
                      <div className="space-y-2">
                        {service.highlights.map((h) => (
                          <div
                            key={h}
                            className="flex items-center gap-2 text-sm text-white font-medium"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-text-muted leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-foreground"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2 shrink-0"
                          style={{ backgroundColor: service.color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-white transition-colors"
                    style={{ backgroundColor: service.color }}
                  >
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
