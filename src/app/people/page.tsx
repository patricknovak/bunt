import type { Metadata } from "next";
import { MapPin, Users, User } from "lucide-react";
import { leadership, teamByOffice } from "@/lib/data/team";

export const metadata: Metadata = {
  title: "People",
  description:
    "Meet the team at Bunt & Associates - over 50 transportation professionals across five offices in Western Canada.",
};

export default function PeoplePage() {
  return (
    <div className="py-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our People</h1>
          <p className="text-xl text-white/80 max-w-3xl">
            We take pride in our reputation as highly skilled and motivated
            professionals who also happen to be great to work with. Our strength
            is our people.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-text-muted mt-1">Professional & Technical Staff</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">5</div>
              <div className="text-sm text-text-muted mt-1">Offices Across Western Canada</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-sm text-text-muted mt-1">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">1000+</div>
              <div className="text-sm text-text-muted mt-1">Projects Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Leadership</h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Our principals bring decades of experience leading transportation projects across Western Canada.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((person) => (
              <div
                key={person.name}
                className="bg-white p-6 rounded-2xl border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{person.name}</h3>
                <p className="text-sm text-primary font-medium">{person.title}</p>
                <p className="text-xs text-text-muted mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {person.office}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team by Office */}
      <section className="py-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-4 text-center">Our Team</h2>
          <p className="text-text-muted text-center mb-12 max-w-2xl mx-auto">
            Engineers, planners, technologists, and support staff working together across five offices.
          </p>
          {teamByOffice.map((office) => (
            <div key={office.city} className="mb-12 last:mb-0">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                {office.city}
                <span className="text-sm font-normal text-text-muted">
                  ({office.members.length} team members)
                </span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {office.members.map((member) => (
                  <div
                    key={member.name}
                    className="bg-white p-4 rounded-xl border border-border flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-foreground text-sm truncate">{member.name}</div>
                      <div className="text-xs text-text-muted truncate">{member.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
