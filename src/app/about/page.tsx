import type { Metadata } from "next";
import {
  MapPin,
  Users,
  Award,
  TrendingUp,
  Heart,
  Lightbulb,
  Target,
  Sparkles,
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

const teamHighlights = [
  { name: "Transportation Engineers", count: "25+" },
  { name: "Transportation Planners", count: "15+" },
  { name: "Technologists", count: "10+" },
  { name: "AI & Data Specialists", count: "5+" },
  { name: "Support Staff", count: "10+" },
];

export default function AboutPage() {
  return (
    <div className="py-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Bunt</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            For over 30 years, Bunt & Associates has been shaping the future of
            transportation across Western Canada. We combine deep engineering
            expertise with cutting-edge AI technology to deliver solutions that
            move communities forward.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Award />, value: "30+", label: "Years Experience" },
              { icon: <Users />, value: "60+", label: "Team Members" },
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

      {/* Our Story */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-text-muted leading-relaxed">
                <p>
                  Founded in 1993, Bunt & Associates has grown from a small
                  Vancouver-based practice into one of the largest specialist
                  transportation planning and engineering consulting firms in
                  Western Canada.
                </p>
                <p>
                  Today, our team of over 60 transportation engineers, planners,
                  technologists, and support staff operates from five offices
                  across British Columbia and Alberta. We have completed
                  thousands of projects for municipalities, developers,
                  institutions, and First Nations communities.
                </p>
                <p>
                  What sets us apart is our relentless focus on innovation. We
                  were among the first firms in Canada to integrate AI-powered
                  tools into our practice, enabling faster, more accurate
                  analysis and better outcomes for our clients.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-12 flex flex-col items-center justify-center">
              <Sparkles className="w-16 h-16 text-primary mb-6" />
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">AI-First</div>
                <p className="text-text-muted">
                  The first transportation consulting firm in Canada with
                  AI-powered analysis tools
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Values</h2>
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

      {/* Team */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {teamHighlights.map((team) => (
              <div key={team.name} className="text-center p-6 rounded-xl bg-surface border border-border">
                <div className="text-3xl font-bold text-primary mb-2">{team.count}</div>
                <div className="text-sm text-text-muted">{team.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-surface">
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
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
