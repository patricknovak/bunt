import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Expert insights, industry trends, and thought leadership in transportation planning and engineering from Bunt & Associates.",
};

const posts = [
  {
    slug: "ai-traffic-analysis-future",
    title: "How AI is Transforming Traffic Analysis: A Practitioner's Perspective",
    excerpt: "AI-powered tools are revolutionizing how we analyze traffic patterns and predict future conditions. Here's what it means for transportation planning.",
    date: "2026-03-01",
    category: "AI & Technology",
    readTime: "5 min read",
  },
  {
    slug: "complete-streets-design-guide",
    title: "Complete Streets Design: Balancing All Road Users",
    excerpt: "A practical guide to designing streets that work for pedestrians, cyclists, transit users, and drivers - based on our project experience across Western Canada.",
    date: "2026-02-15",
    category: "Design",
    readTime: "7 min read",
  },
  {
    slug: "parking-right-sizing-strategies",
    title: "Right-Sizing Parking: Reducing Oversupply Without Underserving",
    excerpt: "How modern parking analysis techniques and shared parking strategies can reduce parking requirements by 20-40% while meeting actual demand.",
    date: "2026-02-01",
    category: "Parking",
    readTime: "6 min read",
  },
  {
    slug: "vision-zero-implementation",
    title: "Implementing Vision Zero: Lessons from Canadian Cities",
    excerpt: "Examining the successes and challenges of Vision Zero programs across Canada, with practical recommendations for municipalities.",
    date: "2026-01-15",
    category: "Safety",
    readTime: "8 min read",
  },
  {
    slug: "transit-oriented-development-tips",
    title: "Making TOD Work: Transportation Planning for Transit-Oriented Development",
    excerpt: "Key transportation planning considerations for successful transit-oriented development, from TIA methodology to parking strategies.",
    date: "2026-01-01",
    category: "Planning",
    readTime: "6 min read",
  },
  {
    slug: "micro-simulation-best-practices",
    title: "Micro-Simulation Modelling: When, Why, and How",
    excerpt: "A guide to when micro-simulation modelling adds value over traditional HCM analysis, and best practices for effective modelling.",
    date: "2025-12-15",
    category: "Engineering",
    readTime: "7 min read",
  },
];

export default function InsightsPage() {
  return (
    <div className="py-20">
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Insights</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Expert perspectives on transportation planning, engineering
            innovation, and the future of mobility from our team.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <Tag className="w-10 h-10 text-primary/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted">{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-muted line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-text-muted">
                      <Calendar className="w-3 h-3" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1 text-primary text-sm font-medium">
                      Read <ArrowRight className="w-3 h-3" />
                    </span>
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
