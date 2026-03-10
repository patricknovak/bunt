import Link from "next/link";
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

const iconMap: Record<string, React.ReactNode> = {
  Route: <Route className="w-8 h-8" />,
  Bike: <Bike className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  ParkingCircle: <ParkingCircle className="w-8 h-8" />,
  PenTool: <PenTool className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
};

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Comprehensive transportation planning and engineering solutions,
            enhanced with cutting-edge AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group p-8 rounded-2xl border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 bg-white"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors"
                style={{
                  backgroundColor: service.color + "15",
                  color: service.color,
                }}
              >
                {iconMap[service.icon]}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                {service.description.slice(0, 150)}...
              </p>
              <div className="flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
