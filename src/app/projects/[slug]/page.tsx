import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Calendar, Building2, CheckCircle } from "lucide-react";
import { projects, getProjectBySlug } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const project = getProjectBySlug(slug);
    return {
      title: project?.title || "Project",
      description: project?.description || "",
    };
  });
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/projects" className="text-primary mt-4 inline-block">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-6 text-white/80">
            <span className="flex items-center gap-2">
              <Building2 className="w-4 h-4" /> {project.client}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> {project.location}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {project.year}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Overview
                </h2>
                <p className="text-text-muted leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  The Challenge
                </h2>
                <p className="text-text-muted leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Our Solution
                </h2>
                <p className="text-text-muted leading-relaxed">
                  {project.solution}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Results
                </h2>
                <ul className="space-y-3">
                  {project.results.map((result) => (
                    <li key={result} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-foreground">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="p-6 bg-surface rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-4">
                  Project Details
                </h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-text-muted">Client</dt>
                    <dd className="text-foreground font-medium">
                      {project.client}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-text-muted">Location</dt>
                    <dd className="text-foreground font-medium">
                      {project.location}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-text-muted">Year</dt>
                    <dd className="text-foreground font-medium">
                      {project.year}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-text-muted">Services</dt>
                    <dd className="flex flex-wrap gap-1.5 mt-1">
                      {project.services.map((s) => (
                        <Link
                          key={s}
                          href={`/services/${s}`}
                          className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full hover:bg-primary/20"
                        >
                          {s.replace(/-/g, " ")}
                        </Link>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="p-6 bg-primary text-white rounded-xl">
                <h3 className="font-semibold mb-2">
                  Have a Similar Project?
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  Contact us to discuss how we can help with your transportation
                  planning needs.
                </p>
                <Link
                  href="/contact"
                  className="inline-block w-full text-center px-4 py-2 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
