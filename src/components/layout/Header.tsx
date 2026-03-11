"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navigation = [
  { name: "People", href: "/people" },
  {
    name: "Services",
    href: "/services",
    children: [
      { name: "Transportation Engineering", href: "/services/transportation-engineering" },
      { name: "Sustainable Transportation", href: "/services/sustainable-transportation" },
      { name: "Safety", href: "/services/safety" },
      { name: "Parking", href: "/services/parking" },
      { name: "Design", href: "/services/design" },
      { name: "Public Participation", href: "/services/public-participation" },
    ],
  },
  { name: "Projects", href: "/projects" },
  { name: "AI Tools", href: "/ai-tools" },
  { name: "Insights", href: "/insights" },
  { name: "Working at Bunt", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:!bg-[#101b2e] backdrop-blur-md border-b border-border dark:border-[#2a4060] shadow-sm dark:shadow-lg dark:shadow-black/30">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={`${basePath}/images/bunt-logo.svg`}
              alt="Bunt & Associates"
              width={140}
              height={40}
              className="h-10 w-auto dark:brightness-0 dark:invert"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground dark:text-white hover:text-primary transition-colors rounded-md hover:bg-gray-100 dark:hover:bg-white/10"
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>
                {item.children && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-0 w-64 rounded-lg shadow-xl py-2 bg-white dark:!bg-[#162032] border border-border dark:border-[#2a4060]">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-foreground dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-white/10 hover:text-primary transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/client-portal"
              className="ml-4 px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              Client Portal
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border dark:border-[#2a4060] bg-white dark:!bg-[#101b2e]">
          <div className="px-4 py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground dark:text-white hover:text-primary hover:bg-gray-100 dark:hover:bg-white/10 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.name}
                    href={child.href}
                    className="block pl-8 py-1.5 text-sm text-text-muted dark:text-gray-400 hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            ))}
            <Link
              href="/client-portal"
              className="block mt-4 px-4 py-2 bg-primary text-white text-center font-medium rounded-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Client Portal
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
