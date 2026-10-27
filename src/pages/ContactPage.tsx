import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import {
  CheckCircle2,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  Building2,
  ArrowRight,
  Send,
  MessageSquare,
} from "lucide-react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "Enterprise Deployment & Custom SLA",
    teamSize: "50–200",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const offices = [
    {
      city: "Bengaluru, India",
      address: "Outer Ring Road, Bellandur, Bengaluru 560103",
      email: "india@deskmerit.com",
      hours: "9:00 AM – 6:30 PM IST",
    },
    {
      city: "Sydney, Australia",
      address: "Barangaroo Avenue, Sydney NSW 2000",
      email: "apac@deskmerit.com",
      hours: "8:30 AM – 5:30 PM AEST",
    },
    {
      city: "Dubai, UAE",
      address: "DIFC, Gate District, Dubai",
      email: "mena@deskmerit.com",
      hours: "9:00 AM – 6:00 PM GST (Sun–Thu)",
    },
    {
      city: "San Francisco, USA",
      address: "Market Street, San Francisco, CA 94105",
      email: "us@deskmerit.com",
      hours: "8:00 AM – 5:00 PM PST",
    },
  ];

  const contactFaqs = [
    {
      q: "How fast does your enterprise sales team respond?",
      a: "Enterprise inquiries are assigned to a regional solutions engineer within 4 business hours. If you need immediate assistance, email sales@deskmerit.com.",
    },
    {
      q: "Can you complete our company's security questionnaire?",
      a: "Yes. We regularly complete SOC 2, ISO 27001, GDPR, and DPDP Act compliance questionnaires for enterprise clients. Attach or mention your vendor assessment in the message.",
    },
    {
      q: "Do you offer custom master services agreements (MSAs) and SLAs?",
      a: "Yes. For teams with 100+ seats, we provide custom enterprise MSAs, customized 99.95% uptime SLAs, dedicated account management, and tailored payment terms.",
    },
    {
      q: "Can we request a private cloud or on-premise deployment?",
      a: "We support dedicated single-tenant AWS/Azure instances in Mumbai, Sydney, Frankfurt, Dublin, and UAE with custom encryption keys and strict data residency.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730] font-sans">
      <DeskmeritHeader />

      <main>
        {/* Standard Consistent Dark Hero */}
        <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-8 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden">
          {/* Dual Radial Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#24305A]/40 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -top-24 right-10 w-[400px] h-[250px] bg-[#FF5A36]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="text-xs text-[#FF5A36] font-semibold flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">Home</Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">Company</span>
              <span className="text-slate-500">/</span>
              <span>Contact Us</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Heading, Direct Inquiries & Global Office Directory */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-[#FFE6DF]/15 border border-[#FF5A36]/30 text-[11px] font-bold uppercase tracking-wider text-[#FF5A36]">
                  ENTERPRISE SALES & SUPPORT
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  Talk to our team. <span className="text-[#FF5A36] block">We reply within 4 hours.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  Have questions about enterprise deployment, custom SLAs, volume pricing, or security compliance? Our solutions engineers are ready to assist.
                </p>

                {/* Direct Channel Badges (High Contrast & Clear Readability) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-4 rounded-xl bg-[#0F1E36] border border-slate-700/80 text-left shadow-md hover:border-[#FF5A36]/60 transition-all">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200 mb-1.5">
                      <Mail className="w-4 h-4 text-[#FF5A36]" />
                      <span>Sales inquiries</span>
                    </div>
                    <a
                      href="mailto:sales@deskmerit.com"
                      className="text-xs font-mono font-bold text-white hover:text-[#FF5A36] transition-colors block bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-700/70"
                    >
                      sales@deskmerit.com
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0F1E36] border border-slate-700/80 text-left shadow-md hover:border-[#FF5A36]/60 transition-all">
                    <div className="flex items-center gap-2 text-xs font-bold text-slate-200 mb-1.5">
                      <ShieldCheck className="w-4 h-4 text-[#FF5A36]" />
                      <span>Security & Legal</span>
                    </div>
                    <a
                      href="mailto:security@deskmerit.com"
                      className="text-xs font-mono font-bold text-white hover:text-[#FF5A36] transition-colors block bg-slate-800/80 px-2.5 py-1.5 rounded-lg border border-slate-700/70"
                    >
                      security@deskmerit.com
                    </a>
                  </div>
                </div>

                {/* Regional Presence Preview */}
                <div className="pt-4 border-t border-slate-800/80">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-3">
                    GLOBAL PRESENCE & REGIONAL SUPPORT
                  </p>
                  <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-300">
                    {offices.map((off) => (
                      <div key={off.city} className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-[#FF5A36] shrink-0" />
                        <span className="truncate">{off.city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Clean White Window with Contact Form (White Background Only for Form) */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl border border-slate-200/90 bg-white shadow-2xl overflow-hidden text-[#0F1730]">
                  {/* Window Titlebar */}
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 border-b border-slate-200">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-600 bg-white px-3 py-1 rounded-md border border-slate-200 shadow-xs">
                      app.deskmerit.com/contact/inquiry
                    </div>
                    <div className="text-[11px] font-bold text-[#FF5A36] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse" />
                      Priority Queue
                    </div>
                  </div>

                  {/* Window Body Form */}
                  <div className="p-6 sm:p-8 bg-white">
                    {submitted ? (
                      <div className="text-center py-10 space-y-4">
                        <div className="w-14 h-14 rounded-full bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center mx-auto shadow-sm">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0F1730]">Message Received!</h3>
                        <p className="text-xs sm:text-sm text-[#4A5370] max-w-md mx-auto leading-relaxed">
                          Thank you, <strong>{formData.name}</strong>. Our enterprise solutions squad has received your inquiry regarding <strong>{formData.inquiryType}</strong> and will reply to <strong>{formData.email}</strong> within 4 business hours.
                        </p>
                        <div className="pt-4 flex items-center justify-center gap-4">
                          <Link
                            to="/"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5A36] hover:underline"
                          >
                            Return to home page <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <span className="text-slate-300">·</span>
                          <Link
                            to="/demo"
                            className="text-xs font-semibold text-slate-600 hover:text-[#0F1730]"
                          >
                            Book live demo instead
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div className="mb-2">
                          <h3 className="text-lg font-bold text-[#0F1730]">Send us a message</h3>
                          <p className="text-xs text-slate-500 mt-0.5">
                            Fill out the details below and we will route you to the appropriate specialist.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Your full name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Rahul Mehta"
                              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/70 text-[#0F1730] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#FF5A36] focus:ring-2 focus:ring-[#FF5A36]/10"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Work email *
                            </label>
                            <input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="rahul@enterprise.com"
                              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/70 text-[#0F1730] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#FF5A36] focus:ring-2 focus:ring-[#FF5A36]/10"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Company name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="Apex Global Systems"
                              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/70 text-[#0F1730] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#FF5A36] focus:ring-2 focus:ring-[#FF5A36]/10"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Estimated team size
                            </label>
                            <select
                              value={formData.teamSize}
                              onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/70 text-[#0F1730] focus:bg-white focus:outline-none focus:border-[#FF5A36]"
                            >
                              <option value="1–15">1–15 members</option>
                              <option value="16–50">16–50 members</option>
                              <option value="51–200">51–200 members</option>
                              <option value="201–1000">201–1,000 members</option>
                              <option value="1000+">1,000+ members (Enterprise)</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Inquiry subject *
                          </label>
                          <select
                            value={formData.inquiryType}
                            onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/70 text-[#0F1730] focus:bg-white focus:outline-none focus:border-[#FF5A36]"
                          >
                            <option value="Enterprise Deployment & Custom SLA">
                              Enterprise Deployment & Custom SLA
                            </option>
                            <option value="Pricing & Volume Discount Inquiry">
                              Pricing & Volume Discount Inquiry
                            </option>
                            <option value="Security & Compliance Questionnaire">
                              Security & Compliance Questionnaire
                            </option>
                            <option value="Partner & Reseller Program">
                              Partner & Reseller Program
                            </option>
                            <option value="General Product Inquiry">
                              General Product Inquiry
                            </option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Your message *
                          </label>
                          <textarea
                            required
                            rows={3}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us about your team setup, timeline, or specific compliance requirements..."
                            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/70 text-[#0F1730] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#FF5A36] focus:ring-2 focus:ring-[#FF5A36]/10 resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E04422] text-white font-bold text-xs transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2 cursor-pointer"
                        >
                          <Send className="w-3.5 h-3.5" />
                          <span>Send Message →</span>
                        </button>

                        <p className="text-[11px] text-slate-500 text-center pt-1">
                          By submitting you agree to our <Link to="/legal/privacy" className="underline hover:text-[#0F1730]">Privacy Policy</Link>. We never share data with third parties.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Offices Cards Section */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
              DIRECT LOCATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730] mt-1.5">
              Our regional hubs & local support
            </h2>
            <p className="text-sm text-neutral-600 mt-2">
              Reach out directly to your local desk for regional billing, statutory currency invoicing, and support SLAs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office) => (
              <div
                key={office.city}
                className="group rounded-2xl bg-white border border-[#E6E2D8] p-6 shadow-sm hover:border-[#FF5A36] hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F7F4EE] text-[#0F1730] group-hover:bg-[#FF5A36] group-hover:text-white flex items-center justify-center transition-colors mb-4 border border-[#E6E2D8]/60">
                    <Building2 className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#FF5A36] transition-colors">
                    {office.city}
                  </h3>
                  <p className="text-xs text-neutral-600 mt-1 leading-relaxed">
                    {office.address}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-100 space-y-1.5">
                  <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{office.hours}</span>
                  </div>
                  <a
                    href={`mailto:${office.email}`}
                    className="text-xs font-bold text-[#FF5A36] hover:underline block"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <DeskmeritFaq customFaqs={contactFaqs} />
      </main>

      <DeskmeritFooter />
    </div>
  );
}