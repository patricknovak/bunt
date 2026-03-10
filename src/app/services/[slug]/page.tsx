import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { services } from "@/lib/data/services";
import { getProjectsByService } from "@/lib/data/projects";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = services.find((s) => s.slug === slug);
    return {
      title: service?.title || "Service",
      description: service?.description || "",
    };
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <Link href="/services" className="text-primary mt-4 inline-block">
          Back to Services
        </Link>
      </div>
    );
  }

  const relatedProjects = getProjectsByService(slug);

  return (
    <div className="py-20">
      {/* Header */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(135deg, ${service.color}15, ${service.color}05)`,
        }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> All Services
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            {service.title}
          </h1>
          <p className="text-xl text-text-muted max-w-3xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-4 rounded-xl bg-surface border border-border"
              >
                <CheckCircle
                  className="w-5 h-5 shrink-0 mt-0.5"
                  style={{ color: service.color }}
                />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>

          {/* AI Highlights */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              AI-Enhanced Capabilities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.highlights.map((h) => (
                <div
                  key={h}
                  className="p-6 rounded-xl border-2 text-center"
                  style={{
                    borderColor: service.color + "30",
                    background: service.color + "08",
                  }}
                >
                  <p className="font-medium" style={{ color: service.color }}>
                    {h}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-20 bg-surface">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group p-6 bg-white rounded-xl border border-border hover:shadow-lg transition-all"
                >
                  <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-2">
                    {project.client}
                  </p>
                  <p className="text-sm text-text-muted">
                    {project.description.slice(0, 100)}...
                  </p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4">
                    View Project <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            Contact us to discuss how our {service.title.toLowerCase()} services
            can support your project.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 text-white rounded-lg font-semibold transition-colors"
            style={{ backgroundColor: service.color }}
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
