import Link from "next/link";
import { Home, ArrowRight, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="text-3xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-text-muted mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let us help you find what you need.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
          >
            <Home className="w-4 h-4" /> Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            { label: "Services", href: "/services" },
            { label: "Projects", href: "/projects" },
            { label: "AI Tools", href: "/ai-tools" },
            { label: "People", href: "/people" },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="p-4 bg-surface rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all text-center"
            >
              <Search className="w-5 h-5 text-primary mx-auto mb-2" />
              <span className="text-sm font-medium text-foreground">{link.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
