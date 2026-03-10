import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { getFeaturedProjects } from "@/lib/data/projects";

export default function FeaturedProjects() {
  const featured = getFeaturedProjects();

  return (
    <section className="py-20 bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-16 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-text-muted max-w-xl">
              Delivering impactful transportation solutions across Western Canada.
            </p>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className={`group relative overflow-hidden rounded-2xl bg-white border border-border hover:shadow-xl transition-all duration-300 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
            >
              {/* Image placeholder */}
              <div
                className={`${
                  index === 0 ? "h-64" : "h-48"
                } bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-white/80 flex items-center justify-center mb-2">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <span className="text-sm text-primary/60 font-medium">
                    {project.location}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.services.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium"
                    >
                      {s.replace(/-/g, " ")}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-text-muted mb-3">
                  {project.client}
                </p>
                <p className="text-text-muted text-sm leading-relaxed">
                  {project.description.slice(0, 200)}...
                </p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium mt-4">
                  Read Case Study <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
