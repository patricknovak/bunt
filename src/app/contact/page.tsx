"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Send, CheckCircle } from "lucide-react";
import { offices } from "@/lib/data/offices";
import { services } from "@/lib/data/services";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    service: "",
    office: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    setSubmitted(true);
  };

  return (
    <div className="py-20">
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-white/80 max-w-2xl">
            Ready to discuss your transportation project? Reach out to any of
            our five offices across Western Canada.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Thank You!
                  </h2>
                  <p className="text-text-muted">
                    We&apos;ve received your message and will get back to you
                    within one business day.
                  </p>
                </div>
              ) : (
                <div className="bg-white rounded-2xl border border-border p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Organization</label>
                        <input
                          type="text"
                          value={formData.organization}
                          onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Service Area</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm"
                        >
                          <option value="">Select a service...</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.slug}>{s.title}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Preferred Office</label>
                        <select
                          value={formData.office}
                          onChange={(e) => setFormData({ ...formData, office: e.target.value })}
                          className="w-full px-4 py-2.5 border border-border rounded-lg text-sm"
                        >
                          <option value="">Any office</option>
                          {offices.map((o) => (
                            <option key={o.city} value={o.city}>{o.city}, {o.province}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-2.5 border border-border rounded-lg text-sm resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" /> Send Message
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Office Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Mail className="w-5 h-5 text-primary" /> General Inquiries
                </h3>
                <p className="text-sm text-text-muted mb-2">info@bunteng.com</p>
                <p className="text-sm text-text-muted">
                  We respond to all inquiries within one business day.
                </p>
              </div>

              {offices.map((office) => (
                <div key={office.city} className="bg-white rounded-2xl border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {office.city}{office.isHeadquarters ? " (Headquarters)" : ""}
                  </h3>
                  <p className="text-sm text-text-muted mb-2">{office.address}</p>
                  <p className="text-sm text-primary font-medium flex items-center gap-1">
                    <Phone className="w-3 h-3" /> {office.phone}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
