import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin, Instagram } from "lucide-react";
import { offices } from "@/lib/data/offices";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">BUNT</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              We envision a future where all communities are healthy and
              connected in equitable and sustainable ways.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Western Canada&apos;s leading transportation planning and engineering
              consulting firm. Over 30 years of expertise.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/buntandassociates"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/buntengineering/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://bsky.app/profile/bunteng.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Bluesky"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.785 2.627 3.6 3.476 6.152 3.228-4.56.444-8.14 2.395-4.544 8.168C5.58 27.775 13.167 19.535 12 16.424c-1.166 3.111 6.42 11.351 9.768 5.22 3.596-5.774.016-7.725-4.544-8.169 2.552.248 5.367-.6 6.152-3.228C23.622 9.418 24 4.458 24 3.768c0-.69-.139-1.861-.902-2.203-.659-.3-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services/transportation-engineering" className="hover:text-white transition-colors">
                  Transportation Engineering
                </Link>
              </li>
              <li>
                <Link href="/services/sustainable-transportation" className="hover:text-white transition-colors">
                  Sustainable Transportation
                </Link>
              </li>
              <li>
                <Link href="/services/safety" className="hover:text-white transition-colors">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="/services/parking" className="hover:text-white transition-colors">
                  Parking
                </Link>
              </li>
              <li>
                <Link href="/services/design" className="hover:text-white transition-colors">
                  Design
                </Link>
              </li>
              <li>
                <Link href="/services/public-participation" className="hover:text-white transition-colors">
                  Public Participation
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/people" className="hover:text-white transition-colors">
                  People
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/ai-tools" className="hover:text-white transition-colors">
                  AI Tools
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition-colors">
                  Working at Bunt
                </Link>
              </li>
              <li>
                <Link href="/client-portal" className="hover:text-white transition-colors">
                  Client Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Offices */}
          <div>
            <h4 className="font-semibold mb-4">Offices</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              {offices.map((office) => (
                <li key={office.city} className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <div>
                    <span className="text-white font-medium">{office.city}</span>
                    <br />
                    <span className="flex items-center gap-1">
                      <Phone className="w-3 h-3" />
                      {office.phone}
                    </span>
                    <a href={`mailto:${office.email}`} className="flex items-center gap-1 hover:text-white transition-colors">
                      <Mail className="w-3 h-3" />
                      {office.email}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Indigenous Acknowledgment */}
        <div className="border-t border-gray-800 mt-12 pt-8 mb-8">
          <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
            Bunt & Associates acknowledges the Indigenous Peoples of the lands on which our offices are located
            and where we work. We are committed to supporting reconciliation efforts and fostering respectful
            relationships with Indigenous communities.
          </p>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Bunt & Associates Engineering Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/contact" className="hover:text-white transition-colors">
              <Mail className="w-4 h-4 inline mr-1" />
              info@bunteng.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
