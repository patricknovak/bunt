import Link from "next/link";
import { MapPin, Phone, Mail, Linkedin } from "lucide-react";
import { offices } from "@/lib/data/offices";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">BUNT</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The leading transportation planning and engineering consulting
              firm in Western Canada. Over 30 years of expertise delivering
              innovative, data-driven solutions.
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
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/client-portal" className="hover:text-white transition-colors">
                  Client Portal
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
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
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
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
