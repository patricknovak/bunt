"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, ArrowRight, Filter } from "lucide-react";
import { projects } from "@/lib/data/projects";
import { services } from "@/lib/data/services";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.services.includes(activeFilter));

  return (
    <div className="py-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Thousands of transportation planning and engineering projects
            delivered across Western Canada, from complex urban sites to regional
            network planning.
          </p>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <Filter className="w-5 h-5 text-text-muted" />
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === "all"
                  ? "bg-primary text-white"
                  : "bg-surface text-text-muted hover:bg-surface-dark"
              }`}
            >
              All Projects
            </button>
            {services.map((s) => (
              <button
                key={s.slug}
                onClick={() => setActiveFilter(s.slug)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === s.slug
                    ? "bg-primary text-white"
                    : "bg-surface text-text-muted hover:bg-surface-dark"
                }`}
              >
                {s.shortTitle}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group overflow-hidden rounded-2xl bg-white border border-border hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 relative overflow-hidden">
                  <Image
                    src={`${basePath}${project.image}`}
                    alt={project.title}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-sm">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.services.map((s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {s.replace(/-/g, " ")}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-2">
                    {project.client} &middot; {project.year}
                  </p>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {project.description.slice(0, 120)}...
                  </p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4">
                    Read More <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
