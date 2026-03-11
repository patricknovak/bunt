import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { posts, getPostBySlug } from "@/lib/data/insights";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const post = getPostBySlug(slug);
    return {
      title: post?.title || "Insight",
      description: post?.excerpt || "",
    };
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div className="py-40 text-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link href="/insights" className="text-primary mt-4 inline-block">
          Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <div className="py-20">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
          <span className="inline-block px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full font-medium mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
            <span className="flex items-center gap-1">
              <User className="w-4 h-4" /> {post.author}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.content.map((block, i) => {
              if (block.startsWith("## ")) {
                return (
                  <h2
                    key={i}
                    className="text-2xl font-bold text-foreground mt-10 mb-4"
                  >
                    {block.replace("## ", "")}
                  </h2>
                );
              }
              if (block.startsWith("**") && block.includes("** —")) {
                const parts = block.split("** —");
                const title = parts[0].replace("**", "");
                const desc = parts.slice(1).join("** —");
                return (
                  <p key={i} className="text-text-muted leading-relaxed mb-4">
                    <strong className="text-foreground">{title}</strong> —{desc}
                  </p>
                );
              }
              return (
                <p key={i} className="text-text-muted leading-relaxed mb-4">
                  {block}
                </p>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-surface rounded-2xl border border-border text-center">
            <h3 className="text-xl font-bold text-foreground mb-3">
              Need Help With Your Project?
            </h3>
            <p className="text-text-muted mb-6 max-w-lg mx-auto">
              Our team of transportation professionals is ready to help with
              your planning and engineering challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/ai-tools"
                className="px-6 py-2.5 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
              >
                Try Our AI Tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
