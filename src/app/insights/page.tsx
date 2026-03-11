import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { posts } from "@/lib/data/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Expert insights, industry trends, and thought leadership in transportation planning and engineering from Bunt & Associates.",
};

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
