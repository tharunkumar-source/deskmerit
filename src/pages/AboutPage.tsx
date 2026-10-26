import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import {
  ShieldCheck,
  MousePointer,
  Lock,
  ArrowRight,
  Briefcase,
  Users,
  Building,
  Award,
  Download,
  Share2,
  CheckCircle2,
  Sparkles,
  FileText,
  Mail,
  Send,
} from "lucide-react";

export function AboutPage() {
  const location = useLocation();
  const path = location.pathname.toLowerCase();

  const isCareers = path.includes("careers");
  const isPartners = path.includes("partners");
  const isPress = path.includes("press");
  const isAbout = !isCareers && !isPartners && !isPress;

  const beliefs = [
    {
      title: "Trust first",
      desc: "If an employee would be embarrassed by a feature, we don't build it. No keystroke keyloggers, no secret webcam snaps.",
      icon: ShieldCheck,
    },
    {
      title: "One click",
      desc: "Every extra login or manual step is a tax on creative engineering work. We start from the ticket and remove friction.",
      icon: MousePointer,
    },
    {
      title: "Your data stays yours",
      desc: "Isolated at the database level, encrypted in transit and at rest, fully exportable in standard formats, and erasable upon request.",
      icon: Lock,
    },
  ];

  const offices = [
    { country: "India", role: "Headquarters, Engineering & Support", location: "Pune & Bengaluru", flag: "🇮🇳" },
    { country: "Middle East", role: "Sales & Customer Success", location: "Dubai, UAE", flag: "🇦🇪" },
    { country: "Australia & NZ", role: "Sales & Strategic Partnerships", location: "Sydney, NSW", flag: "🇦🇺" },
    { country: "United States", role: "Enterprise Sales & Accounts", location: "San Francisco, CA", flag: "🇺🇸" },
  ];

  const openRoles = [
    {
      title: "Senior Rust Systems Engineer",
      dept: "Desktop Engineering",
      location: "Remote (India / APAC)",
      type: "Full-Time",
      desc: "Optimize Deskmerit's lightweight native desktop client across macOS, Windows, and Linux (< 25MB RAM footprint).",
    },
    {
      title: "Staff Full-Stack Engineer (React & TypeScript)",
      dept: "Web & Analytics Platform",
      location: "Bengaluru, Pune or Remote",
      type: "Full-Time",
      desc: "Build lightning-fast timesheet visualizations, custom report builders, and real-time WebSocket sync engines.",
    },
    {
      title: "Integration Solutions Architect",
      dept: "Product & Ecosystem",
      location: "Sydney or Remote",
      type: "Full-Time",
      desc: "Deepen our integrations with Jira, Azure DevOps, OpenProject, and develop new MCP (Model Context Protocol) AI tooling.",
    },
    {
      title: "Enterprise Customer Success Lead",
      dept: "Growth & Operations",
      location: "Dubai or Pune",
      type: "Full-Time",
      desc: "Partner with CTOs, VP Eng, and HR leaders rolling out transparent productivity and time tracking for 500+ seat delivery teams.",
    },
  ];

  const partnerTiers = [
    {
      name: "White-Label & Reseller",
      desc: "Deliver Deskmerit under your own brand and domain with your logo, custom domain URL, and unified client billing.",
      benefit: "30% recurring margin",
      features: ["Custom white-label domain", "Branded desktop agent installer", "Multi-tenant master admin panel", "Dedicated reseller support manager"],
    },
    {
      name: "MSP & IT Services Partner",
      desc: "Standardize client time tracking and billable efficiency across all your managed service contracts.",
      benefit: "Volume tiered discounts",
      features: ["Consolidated partner invoicing", "Direct Jira & Azure DevOps tokens", "Client onboarding assistance", "Quarterly business reviews"],
    },
    {
      name: "HRMS & Ecosystem ISV",
      desc: "Deep API and webhook integration connecting Deskmerit's attendance telemetry into your HRMS or payroll engine.",
      benefit: "Co-marketing & marketplace listing",
      features: ["REST API & Webhooks sandbox", "Pre-built sync connectors", "Joint press releases and webinars", "Certified partner badge"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* ========================================================================= */}
        {/* DARK HERO SECTION (Consistent Platform Standard)                          */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-8 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden mb-12">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#24305A]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF5A36]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="text-xs text-[#FF5A36] font-semibold flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">Home</Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">Company</span>
              <span className="text-slate-500">/</span>
              <span>{isCareers ? "Careers" : isPartners ? "Partners" : isPress ? "Press & Media Kit" : "About Us"}</span>
            </div>

            <div className="grid grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="col-span-12 lg:col-span-6 space-y-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] bg-[#FFE6DF]/15 px-3.5 py-1 rounded-full inline-block border border-[#FF5A36]/30">
                  {isCareers
                    ? "CAREERS AT DESKMERIT"
                    : isPartners
                    ? "PARTNER ECOSYSTEM"
                    : isPress
                    ? "PRESS & BRAND ASSETS"
                    : "ABOUT DESKMERIT"}
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  {isCareers ? (
                    <>
                      Build software that respects{" "}
                      <span className="text-[#FF5A36] block">the craft of knowledge work.</span>
                    </>
                  ) : isPartners ? (
                    <>
                      Grow your consulting practice with{" "}
                      <span className="text-[#FF5A36] block">transparent time tracking.</span>
                    </>
                  ) : isPress ? (
                    <>
                      Press, brand guidelines, and{" "}
                      <span className="text-[#FF5A36] block">official media assets.</span>
                    </>
                  ) : (
                    <>
                      We believe time data should be honest —{" "}
                      <span className="text-[#FF5A36] block">and fair to both sides.</span>
                    </>
                  )}
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  {isCareers
                    ? "We are a distributed engineering and product team solving one of the most fraught challenges in modern work: honest proof of work without dehumanizing surveillance."
                    : isPartners
                    ? "Whether you want to white-label Deskmerit under your agency domain, earn recurring referral commissions, or build custom HR integrations, we give partners high margins and dedicated engineering backing."
                    : isPress
                    ? "Download verified high-resolution SVG and PNG logos, brand guidelines, executive bios, and company boilerplate."
                    : "Deskmerit is built by Kombee Technologies, serving remote, hybrid, and IT services teams globally with zero-surveillance telemetry."}
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-sm shadow-[0_4px_16px_rgba(255,90,54,0.35)] hover:shadow-[0_6px_22px_rgba(255,90,54,0.45)] transition-all"
                  >
                    <span>Start free trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#10192A] hover:bg-[#1A264F] text-white font-bold text-sm border border-slate-700 hover:border-slate-500 transition-all"
                  >
                    <span>Book a demo</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Browser Window Mockup with macOS Controls */}
              <div className="col-span-12 lg:col-span-6">
                <div className="rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                      <div className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
                      <div className="w-3 h-3 rounded-full bg-[#62C554]" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                      app.deskmerit.com/company/{isCareers ? "careers" : isPartners ? "partners" : isPress ? "press" : "overview"}
                    </div>
                    <div className="text-[11px] font-bold text-[#FF5A36] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse" />
                      Active Operations
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-lg bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center font-bold text-sm">
                          DM
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white">Deskmerit Worldwide</div>
                          <div className="text-[10px] text-slate-400">Kombee Technologies Pvt. Ltd.</div>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-[#FF5A36]">Global Team</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 text-left">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Workplace Model</div>
                        <div className="text-sm font-bold text-white mt-1">100% Async Remote</div>
                      </div>
                      <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 text-left">
                        <div className="text-[10px] text-slate-400 font-bold uppercase">Regional Hubs</div>
                        <div className="text-sm font-bold text-[#FF5A36] mt-1">IN · US · ME · AU</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-center justify-between text-xs">
                      <span className="text-slate-400 font-medium">Core Architecture</span>
                      <span className="text-[#FF5A36] font-bold">Zero-Spyware Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dynamic Content based on which Company page is active */}
        {isCareers ? (
          /* ================= CAREERS PAGE ================= */
          <section className="py-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Culture / Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-subtle hover:border-[#FF5A36] hover:shadow-card transition-all group">
                <span className="text-2xl mb-3 block">🌍</span>
                <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2">Remote-First & Async</h3>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  We judge outcomes, not green status dots. Work when and where you are most productive.
                </p>
              </div>
              <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-subtle hover:border-[#FF5A36] hover:shadow-card transition-all group">
                <span className="text-2xl mb-3 block">🦀</span>
                <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2">High Craft Standards</h3>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  Rust on the desktop, TypeScript on the web, robust WebSocket replication. We care deeply about sub-20ms interactions.
                </p>
              </div>
              <div className="p-7 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-subtle hover:border-[#FF5A36] hover:shadow-card transition-all group">
                <span className="text-2xl mb-3 block">🤝</span>
                <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2">Ethical Integrity</h3>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  We never build features we wouldn't want running on our own personal computers.
                </p>
              </div>
            </div>

            {/* Open Roles List */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#0F1730] mb-6">Open Positions</h2>
              {openRoles.map((role) => (
                <div
                  key={role.title}
                  className="p-6 rounded-2xl bg-white border border-[#E6E2D8] hover:border-[#FF5A36] transition-all shadow-subtle flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-base text-[#0F1730]">{role.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-[#FFE6DF] text-[#C2361A] text-[10px] font-bold">
                        {role.type}
                      </span>
                    </div>
                    <div className="text-xs text-[#4A5370]">
                      {role.dept} · {role.location}
                    </div>
                    <p className="text-xs text-[#4A5370] leading-relaxed pt-1 max-w-2xl">
                      {role.desc}
                    </p>
                  </div>

                  <a
                    href="mailto:careers@deskmerit.com?subject=Application for Senior Role"
                    className="px-5 py-2.5 rounded-xl bg-[#0F1730] hover:bg-[#24305A] text-white font-bold text-xs shrink-0 transition-colors flex items-center gap-1.5 self-start md:self-center"
                  >
                    Apply for role <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        ) : isPartners ? (
          /* ================= PARTNERS PAGE ================= */
          <section className="py-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {partnerTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="p-7 rounded-2xl bg-white border border-[#E6E2D8] shadow-subtle flex flex-col justify-between hover:border-[#FF5A36] hover:shadow-card transition-all group"
                >
                  <div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#FFE6DF] text-[#C2361A] inline-block mb-3">
                      {tier.benefit}
                    </span>
                    <h3 className="font-bold text-lg text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2">{tier.name}</h3>
                    <p className="text-xs text-[#4A5370] leading-relaxed mb-6">{tier.desc}</p>
                    <ul className="space-y-2.5 text-xs text-[#0F1730] border-t border-[#E6E2D8] pt-4">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF5A36] shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E6E2D8]">
                    <Link
                      to="/contact?type=partner"
                      className="w-full py-2.5 rounded-xl bg-[#0F1730] hover:bg-[#24305A] text-white font-bold text-xs text-center block transition-colors"
                    >
                      Apply as Partner
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : isPress ? (
          /* ================= PRESS & MEDIA KIT ================= */
          <section className="py-6 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Brand Logo Assets Card */}
              <div className="p-8 rounded-2xl bg-white border border-[#E6E2D8] shadow-subtle space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg text-[#0F1730]">Official Brand Assets</h3>
                  <Download className="w-5 h-5 text-[#FF5A36]" />
                </div>
                <p className="text-xs text-[#4A5370] leading-relaxed">
                  Includes full vector SVGs, PNG marks on dark and light backgrounds, and our signature Ember flame emblem.
                </p>
                <div className="p-6 bg-[#0F1730] rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold tracking-tight text-white font-display">
                    desk<span className="text-[#FF5A36]">merit</span>
                  </span>
                </div>
                <a
                  href="/download"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#F7F4EE] hover:bg-[#E6E2D8] text-xs font-bold text-[#0F1730] transition-colors"
                >
                  <Download className="w-3.5 h-3.5" /> Download Media Package (.ZIP)
                </a>
              </div>

              {/* Media Inquiries & Press Contact */}
              <div className="p-8 rounded-2xl bg-white border border-[#E6E2D8] shadow-subtle space-y-6 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-[#0F1730] mb-2">Media & Press Inquiries</h3>
                  <p className="text-xs text-[#4A5370] leading-relaxed mb-4">
                    For interview requests with founders, briefings on workplace monitoring trends, or background commentary:
                  </p>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2 text-[#0F1730]">
                      <Mail className="w-4 h-4 text-[#FF5A36]" />
                      <span className="font-bold">press@deskmerit.com</span>
                    </div>
                    <div className="text-[#4A5370]">Average turnaround: under 4 business hours.</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6E2D8]">
                  <Link
                    to="/demo"
                    className="w-full py-2.5 rounded-xl bg-[#0F1730] hover:bg-[#24305A] text-white font-bold text-xs text-center block transition-colors"
                  >
                    Request Executive Interview
                  </Link>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* ================= ABOUT US (DEFAULT) ================= */
          <>
            {/* What We Believe */}
            <section className="py-20 bg-[#FFFFFF] border-y border-[#E6E2D8]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                    Our philosophy
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
                    What we believe
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {beliefs.map((b) => {
                    const Icon = b.icon;
                    return (
                      <div
                        key={b.title}
                        className="p-8 rounded-2xl bg-white border border-[#E6E2D8] shadow-subtle hover:border-[#FF5A36] hover:shadow-card transition-all group"
                      >
                        <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-[#E6E2D8] text-[#0F1730] group-hover:bg-[#FF5A36] group-hover:border-[#FF5A36] group-hover:text-white flex items-center justify-center mb-5 transition-all duration-200 shadow-xs">
                          <Icon className="w-5 h-5 transition-colors" />
                        </div>
                        <h3 className="text-xl font-bold text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-3">{b.title}</h3>
                        <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">{b.desc}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Where We Work */}
            <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                  Global Presence
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
                  Where we work
                </h2>
                <p className="text-xs text-[#4A5370] mt-1">
                  Serving distributed delivery and software teams worldwide.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {offices.map((off) => (
                  <div key={off.country} className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E6E2D8] shadow-subtle hover:border-[#FF5A36] hover:shadow-card transition-all group">
                    <span className="text-3xl block mb-3">{off.flag}</span>
                    <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-1">{off.country}</h3>
                    <div className="text-xs font-semibold text-[#FF5A36] mb-2">{off.location}</div>
                    <p className="text-xs text-[#4A5370]">{off.role}</p>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}

        {/* Signature Split FAQ Section */}
        <DeskmeritFaq
          title="Company & Partnership FAQs"
          category="FAQS"
          helpTitle="Looking to Partner with Deskmerit?"
          helpDescription="Whether you are an MSP reseller, HR technology ISV, or delivery consultancy, connect with our alliances team to explore partnership tiers."
          customFaqs={[
            {
              q: "What is Deskmerit's founding mission and philosophy?",
              a: "Deskmerit was founded on the conviction that software teams and agencies deserve transparent, auditable time data without invasive employee surveillance. We build high-trust productivity tooling that starts from the task token, not from webcam or keystroke snooping."
            },
            {
              q: "Where is Deskmerit hosted and where is customer data stored?",
              a: "Deskmerit provides multi-region data residency across AWS data centers in India (Mumbai), Australia (Sydney), UAE (me-central-1), and the United States (us-east-1), complying fully with local DPDP, NSW, and GDPR frameworks."
            },
            {
              q: "How does Deskmerit partner with IT services providers and MSPs?",
              a: "Our MSP and Reseller program provides multi-tenant agency dashboards, white-label client reporting, volume seat tier discounts, and dedicated priority migration assistance."
            },
            {
              q: "What open career opportunities are currently available?",
              a: "We hire globally across distributed engineering, product design, and enterprise customer success. View our open roles on this page or email careers@deskmerit.com."
            },
            {
              q: "How can journalists and media outlets request press briefings?",
              a: "Download our media kit directly from the Press tab, or reach out to press@deskmerit.com for executive commentary and high-resolution brand assets."
            }
          ]}
        />

        <DeskmeritCtaBand />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
