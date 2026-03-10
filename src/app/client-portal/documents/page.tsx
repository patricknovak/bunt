import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ClientDocumentsPage() {
  return (
    <div className="py-20 bg-surface min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <Link href="/client-portal" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <h1 className="text-2xl font-bold text-foreground mb-6">Documents</h1>
        <div className="bg-white rounded-xl border border-border p-12 text-center">
          <p className="text-text-muted">
            Document management system coming soon. This will include versioned document uploads, commenting, and approval workflows.
          </p>
        </div>
      </div>
    </div>
  );
}
