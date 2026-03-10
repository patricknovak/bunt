import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const slugs = [
  "ai-traffic-analysis-future",
  "complete-streets-design-guide",
  "parking-right-sizing-strategies",
  "vision-zero-implementation",
  "transit-oriented-development-tips",
  "micro-simulation-best-practices",
];

export function generateStaticParams() {
  return slugs.map((slug) => ({ slug }));
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <div className="py-20">
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 capitalize">
            {slug.replace(/-/g, " ")}
          </h1>
          <div className="prose prose-lg max-w-none text-text-muted">
            <p>
              This article is coming soon. Our team of transportation planning
              experts is preparing in-depth insights on this topic. Check back
              for the full article.
            </p>
            <p>
              In the meantime, explore our{" "}
              <Link href="/ai-tools" className="text-primary">
                AI-powered tools
              </Link>{" "}
              or learn more about our{" "}
              <Link href="/services" className="text-primary">
                services
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
