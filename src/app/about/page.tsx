import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Users,
  Award,
  TrendingUp,
  Heart,
  Lightbulb,
  Target,
  Sparkles,
  Shield,
} from "lucide-react";
import { offices } from "@/lib/data/offices";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Bunt & Associates - Western Canada's leading transportation planning and engineering consulting firm with 30+ years of expertise.",
};

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "People",
    description:
      "Our strength is our people. We support learning, continuous growth, and recognize our team members have lives outside of work.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Integrity",
    description:
      "We make decisions based on trust and doing what's right for our clients, communities, and each other.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Teamwork",
    description:
      "We foster collaboration for better client solutions and staff development across all five offices.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Innovation",
    description:
      "Embracing AI and emerging technologies to push our industry forward and deliver better outcomes.",
  },
];

const coreValues = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Foster Relationships",
    description: "Building lasting partnerships with clients, communities, and stakeholders.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Engage Diverse Perspectives",
    description: "Amplifying all voices to create inclusive transportation solutions.",
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Encourage Curiosity & Innovation",
    description: "Embracing AI and emerging technologies to push our industry forward.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Be Experts Today & Tomorrow",
    description: "Continuous learning and professional development across our team.",
  },
];

export default function AboutPage() {
  return (
    <div className="py-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Bunt</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            We envision a future where all communities are healthy and connected
            in equitable and sustainable ways. For over 30 years, Bunt &
            Associates has been shaping the future of transportation across
            Western Canada.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Award />, value: "30+", label: "Years Experience" },
              { icon: <Users />, value: "50+", label: "Team Members" },
              { icon: <MapPin />, value: "5", label: "Offices" },
              { icon: <TrendingUp />, value: "1000+", label: "Projects" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-text-muted mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">
            People, Integrity & Teamwork
          </h2>
          <p className="text-text-muted text-center max-w-2xl mx-auto mb-12">
            These three pillars guide everything we do at Bunt & Associates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-2xl border border-border text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Founded over 30 years ago, Bunt & Associates has grown into one
                  of the largest specialist transportation planning and engineering
                  consulting firms in Western Canada.
                </p>
                <p>
                  Today, our team of over 50 transportation engineers, planners,
                  technologists, and support staff operates from five offices
                  in British Columbia and Alberta. We have completed over 1,000
                  projects since 2017 alone for municipalities, developers,
                  institutions, and First Nations communities.
                </p>
                <p>
                  We are proud to have hundreds of repeat public and private
                  sector clients who trust us with their transportation needs.
                  Our service areas span from the West Coast to the Prairies.
                </p>
                <p>
                  We acknowledge the Indigenous Peoples of the lands on which
                  our offices are located and where we work, and we are committed
                  to supporting reconciliation efforts.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 flex flex-col items-center justify-center">
              <Sparkles className="w-16 h-16 text-primary mb-6" />
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">AI-First</div>
                <p className="text-text-muted">
                  Among the first transportation consulting firms in Canada with
                  AI-powered analysis tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value) => (
              <div key={value.title} className="bg-white p-8 rounded-2xl border border-border text-center">
                <div className="w-14 h-14 mx-auto rounded-xl bg-secondary/10 text-secondary flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Meet Our Team</h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            Over 50 transportation professionals across five offices, working together to deliver exceptional results.
          </p>
          <Link
            href="/people"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            <Users className="w-5 h-5" />
            View Our People
          </Link>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="bg-white p-6 rounded-xl border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground text-lg">
                    {office.city}{office.isHeadquarters ? " (HQ)" : ""}
                  </h3>
                </div>
                <p className="text-sm text-text-muted mb-2">{office.address}</p>
                <p className="text-sm text-primary font-medium">{office.phone}</p>
                <a href={`mailto:${office.email}`} className="text-sm text-text-muted hover:text-primary transition-colors">
                  {office.email}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
