import { MapPin } from "lucide-react";
import { offices } from "@/lib/data/offices";

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Trusted Across Canada
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Hundreds of repeat clients trust us with their most complex
            transportation challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              quote:
                "Bunt's AI-powered traffic analysis gave us insights that transformed our development approach. Their innovative tools are unlike anything else in the industry.",
              author: "Development Director",
              org: "Major Vancouver Developer",
            },
            {
              quote:
                "Outstanding technical expertise combined with genuine community engagement. Bunt consistently delivers solutions that work for everyone.",
              author: "Transportation Manager",
              org: "City of Calgary",
            },
            {
              quote:
                "Their campus transportation plan has fundamentally improved how our students and faculty move around campus. A true partnership.",
              author: "Campus Planning Director",
              org: "University of British Columbia",
            },
          ].map((testimonial) => (
            <div
              key={testimonial.org}
              className="p-8 rounded-2xl bg-surface border border-border"
            >
              <p className="text-foreground leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div>
                <div className="font-semibold text-foreground">
                  {testimonial.author}
                </div>
                <div className="text-sm text-text-muted">{testimonial.org}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Office Locations */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Five Offices Across Western Canada
          </h3>
          <p className="text-text-muted">
            With offices spanning from Victoria to Edmonton, we&apos;re always close to
            your project.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {offices.map((office) => (
            <div
              key={office.city}
              className="text-center p-6 rounded-xl bg-surface border border-border hover:border-primary/30 hover:shadow-md transition-all"
            >
              <MapPin className="w-6 h-6 text-primary mx-auto mb-3" />
              <div className="font-semibold text-foreground">{office.city}</div>
              <div className="text-xs text-text-muted mt-1">
                {office.province}
              </div>
              <div className="text-xs text-text-muted mt-2">{office.phone}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
