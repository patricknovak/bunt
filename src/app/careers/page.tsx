import type { Metadata } from "next";
import Link from "next/link";
import { openings } from "@/lib/data/jobs";
import {
  Briefcase,
  MapPin,
  Users,
  TrendingUp,
  Heart,
  Brain,
  ArrowRight,
  Calendar,
  Coffee,
  Laptop,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Working at Bunt",
  description:
    "Join Bunt & Associates - Western Canada's leading transportation consulting firm. Explore career opportunities in transportation planning and engineering.",
};

const benefits = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Career Growth",
    description: "Comprehensive onboarding and personalized professional development plans",
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Cutting-Edge Technology",
    description: "Work with AI tools, simulation software, and emerging tech",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Work-Life Balance",
    description: "Minimum 3 weeks vacation plus one week personal days, hybrid work options",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Collaborative Culture",
    description: "Community-type culture with social events and wellness activities",
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: "Flexible Schedules",
    description: "Maternity leave top-up, flexible schedules, and hybrid work arrangements",
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Great Benefits",
    description: "Competitive compensation, comprehensive benefits, and regular social events",
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Innovation Focus",
    description: "Emphasis on sustainability and innovation in every project",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "Diverse Projects",
    description: "Work on everything from campus plans to First Nations communities",
  },
];

export default function CareersPage() {
  return (
    <div className="py-20">
      <section className="bg-gradient-to-r from-secondary to-secondary-light text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Working at Bunt</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Our strength is our people. We&apos;ve grown significantly over 30
            years through careful team building. We take pride in our reputation
            as highly skilled and motivated professionals who also happen to be
            great to work with.
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
            A Community-Type Culture
          </h2>
          <p className="text-text-muted text-center max-w-3xl mx-auto mb-8">
            We work to live, not live to work. From competitive pitch &amp; putt to
            board games and community volunteering, our team enjoys a supportive
            environment across all five Canadian offices. Our culture centers on
            people, diversity, integrity, and teamwork.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
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
      <section className="py-16 bg-surface">
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
                  <a
                    href="mailto:careers@bunteng.com"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors shrink-0"
                  >
                    Apply <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-white rounded-xl border border-border">
            <h3 className="font-semibold text-foreground mb-2">Don&apos;t See Your Role?</h3>
            <p className="text-sm text-text-muted mb-4">
              We welcome general applications and maintain resumes on file for six months.
              Send your resume directly to{" "}
              <a href="mailto:careers@bunteng.com" className="text-primary font-medium hover:underline">
                careers@bunteng.com
              </a>.
            </p>
            <p className="text-xs text-text-muted">
              Candidates must currently reside in Canada and be legally entitled to work.
              We rarely use external recruiters.
            </p>
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Our Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-3">
                1
              </div>
              <h3 className="font-semibold text-foreground mb-1">Apply</h3>
              <p className="text-sm text-text-muted">Send your resume to careers@bunteng.com</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-3">
                2
              </div>
              <h3 className="font-semibold text-foreground mb-1">Video Call</h3>
              <p className="text-sm text-text-muted">Initial video call to get to know each other</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-3">
                3
              </div>
              <h3 className="font-semibold text-foreground mb-1">In-Person Meeting</h3>
              <p className="text-sm text-text-muted">An informal meeting focused on fit and goals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
