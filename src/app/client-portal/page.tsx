"use client";

import { useState } from "react";
import Link from "next/link";
import {
  LayoutDashboard,
  FolderOpen,
  FileText,
  Clock,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Calendar,
} from "lucide-react";

const demoProjects = [
  {
    id: "P-2026-041",
    name: "Westside Mixed-Use TIA",
    client: "Westcorp Development",
    status: "active",
    progress: 65,
    dueDate: "2026-04-30",
    lead: "Sarah Chen, P.Eng.",
  },
  {
    id: "P-2026-038",
    name: "Downtown Parking Study",
    client: "City of Kelowna",
    status: "review",
    progress: 90,
    dueDate: "2026-03-15",
    lead: "Mark Davidson, P.Eng.",
  },
  {
    id: "P-2026-032",
    name: "University District ATP",
    client: "University of Victoria",
    status: "active",
    progress: 40,
    dueDate: "2026-06-30",
    lead: "Lisa Park, MCIP RPP",
  },
  {
    id: "P-2025-098",
    name: "Industrial Park Road Safety Audit",
    client: "City of Edmonton",
    status: "complete",
    progress: 100,
    dueDate: "2025-12-15",
    lead: "James Wright, P.Eng.",
  },
];

const recentActivity = [
  { action: "Draft TIA report uploaded", project: "P-2026-041", time: "2 hours ago" },
  { action: "Comment on parking analysis", project: "P-2026-038", time: "5 hours ago" },
  { action: "Milestone completed: Data Collection", project: "P-2026-032", time: "1 day ago" },
  { action: "Final report approved", project: "P-2025-098", time: "2 days ago" },
  { action: "Invoice #2026-041-02 issued", project: "P-2026-041", time: "3 days ago" },
];

const statusColors: Record<string, string> = {
  active: "bg-blue-100 text-blue-700",
  review: "bg-yellow-100 text-yellow-700",
  complete: "bg-green-100 text-green-700",
};

export default function ClientPortalPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Demo password - in production, this would be a real auth system
    if (password === "buntclient2026") {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!authenticated) {
    return (
      <div className="py-20 min-h-screen flex items-center justify-center bg-surface">
        <div className="w-full max-w-md px-4">
          <div className="bg-white rounded-2xl border border-border p-8 shadow-lg">
            <div className="text-center mb-8">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <LayoutDashboard className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-2xl font-bold text-foreground">Client Portal</h1>
              <p className="text-text-muted text-sm mt-2">
                Sign in to access your project dashboard
              </p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => { setPassword(e.target.value); setError(false); }}
                  className={`w-full px-4 py-2.5 border rounded-lg text-sm ${error ? "border-red-400" : "border-border"}`}
                  placeholder="Enter your client password"
                />
                {error && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> Incorrect password
                  </p>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors"
              >
                Sign In
              </button>
            </form>
            <p className="text-xs text-text-muted text-center mt-6">
              Don&apos;t have access?{" "}
              <a href="mailto:info@bunteng.com" className="text-primary hover:underline">
                Contact us
              </a>{" "}
              to request portal access.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-surface min-h-screen">
      {/* Header */}
      <section className="bg-primary text-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <LayoutDashboard className="w-6 h-6" />
            <h1 className="text-2xl font-bold">Client Portal</h1>
          </div>
          <p className="text-white/70">
            Track your projects, documents, and communications
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: <FolderOpen />, value: "3", label: "Active Projects", color: "text-blue-600" },
            { icon: <Clock />, value: "1", label: "In Review", color: "text-yellow-600" },
            { icon: <CheckCircle />, value: "1", label: "Completed", color: "text-green-600" },
            { icon: <FileText />, value: "12", label: "Documents", color: "text-purple-600" },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl border border-border p-5">
              <div className={`w-10 h-10 rounded-lg bg-surface flex items-center justify-center mb-3 ${stat.color}`}>
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Projects */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-border">
              <div className="px-6 py-4 border-b border-border flex items-center justify-between">
                <h2 className="font-semibold text-foreground">Your Projects</h2>
                <Link href="/client-portal/projects" className="text-sm text-primary font-medium">
                  View All
                </Link>
              </div>
              <div className="divide-y divide-border">
                {demoProjects.map((project) => (
                  <div key={project.id} className="px-6 py-4 hover:bg-surface/50 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-medium text-foreground">{project.name}</h3>
                        <p className="text-sm text-text-muted">{project.id} &middot; {project.client}</p>
                      </div>
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${statusColors[project.status]}`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex-1">
                        <div className="w-full bg-surface-dark rounded-full h-2">
                          <div className="h-2 rounded-full bg-primary transition-all" style={{ width: `${project.progress}%` }} />
                        </div>
                      </div>
                      <span className="text-xs text-text-muted font-medium">{project.progress}%</span>
                    </div>
                    <div className="flex items-center justify-between mt-2 text-xs text-text-muted">
                      <span>Lead: {project.lead}</span>
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Due: {project.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div>
            <div className="bg-white rounded-xl border border-border">
              <div className="px-6 py-4 border-b border-border">
                <h2 className="font-semibold text-foreground">Recent Activity</h2>
              </div>
              <div className="divide-y divide-border">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="px-6 py-3">
                    <p className="text-sm text-foreground">{activity.action}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-primary font-medium">{activity.project}</span>
                      <span className="text-xs text-text-muted">{activity.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl border border-border p-6 mt-6">
              <h3 className="font-semibold text-foreground mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Link href="/client-portal/documents" className="block w-full p-3 text-left bg-surface rounded-lg text-sm hover:bg-surface-dark transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4 text-primary" /> View Documents
                </Link>
                <Link href="/contact" className="block w-full p-3 text-left bg-surface rounded-lg text-sm hover:bg-surface-dark transition-colors flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" /> Request Update
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
