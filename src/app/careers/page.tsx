import type { Metadata } from "next";
import Link from "next/link";
import {
  Briefcase,
  MapPin,
  Users,
  TrendingUp,
  Heart,
  Brain,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join Bunt & Associates - Western Canada's leading transportation consulting firm. Explore career opportunities in transportation planning and engineering.",
};

const openings = [
  {
    title: "Senior Transportation Engineer",
    location: "Vancouver, BC",
    type: "Full-time",
    description: "Lead complex transportation impact assessments and micro-simulation modelling projects for major developments and infrastructure projects.",
  },
  {
    title: "Transportation Planner",
    location: "Calgary, AB",
    type: "Full-time",
    description: "Develop active transportation plans, travel demand management strategies, and sustainable transportation solutions for municipal clients.",
  },
  {
    title: "AI/Data Analyst",
    location: "Vancouver, BC",
    type: "Full-time",
    description: "Apply AI and machine learning to transportation analysis, develop predictive models, and build innovative analysis tools.",
  },
  {
    title: "Transportation Engineer-in-Training",
    location: "Edmonton, AB",
    type: "Full-time",
    description: "Support senior engineers on transportation impact assessments, data collection, and traffic analysis projects while developing your career.",
  },
  {
    title: "Technologist / CAD Designer",
    location: "Kelowna, BC",
    type: "Full-time",
    description: "Create detailed intersection designs, road cross-sections, and transportation drawings using AutoCAD, MicroStation, and visualization tools.",
  },
];

const benefits = [
  { icon: <TrendingUp className="w-6 h-6" />, title: "Career Growth", description: "Mentorship, professional development, and clear advancement paths" },
  { icon: <Brain className="w-6 h-6" />, title: "Cutting-Edge Technology", description: "Work with AI tools, simulation software, and emerging tech" },
  { icon: <Heart className="w-6 h-6" />, title: "Work-Life Balance", description: "Flexible schedules, remote work options, and generous time off" },
  { icon: <Users className="w-6 h-6" />, title: "Collaborative Culture", description: "Supportive team environment across all five offices" },
];

export default function CareersPage() {
  return (
    <div className="py-20">
      <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Careers at Bunt</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Join a team that&apos;s shaping the future of transportation. We&apos;re
            looking for curious, passionate people who want to make a real impact
            on how communities move.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Why Bunt?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white p-6 rounded-xl border border-border text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-3">
                  {b.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-text-muted">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Current Openings</h2>
          <div className="space-y-4">
            {openings.map((job) => (
              <div key={job.title} className="bg-white rounded-xl border border-border p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{job.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-text-muted mb-2">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" /> {job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" /> {job.type}</span>
                    </div>
                    <p className="text-sm text-text-muted">{job.description}</p>
                  </div>
                  <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shrink-0">
                    Apply <ArrowRight className="w-4 h-4" />
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
