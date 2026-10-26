import React from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { InteractiveTrackerWidget } from "../components/InteractiveTrackerWidget";
import {
  ShieldCheck,
  Lock,
  EyeOff,
  VideoOff,
  FileCheck,
  Server,
  ArrowRight,
  Database,
  Key,
  Check,
} from "lucide-react";

export function PrivacyPromisePage() {
  const promises = [
    {
      num: "01",
      title: "We never record keystroke content.",
      desc: "Idle detection monitors only whether hardware input occurred, never individual keystrokes, passwords, or personal messages.",
      icon: EyeOff,
    },
    {
      num: "02",
      title: "We never use the webcam or microphone.",
      desc: "Not under any plan, toggle or setting. There is no media recording code in our desktop application binary.",
      icon: VideoOff,
    },
    {
      num: "03",
      title: "We never read the content of your documents — titles only.",
      desc: "Deskmerit records active window titles to calculate project time, and never scans, uploads, or inspects document bodies.",
      icon: FileCheck,
    },
    {
      num: "04",
      title: "Screenshots are off by default, blurred by default, and you are told.",
      desc: "If an enterprise admin switches on screenshot capture for a compliance contract, the capture is blurred by default and employees receive an explicit notification.",
      icon: Lock,
    },
    {
      num: "05",
      title: "Private Time is yours: nothing is tracked, and it is never labelled idle.",
      desc: "One single click puts you in Private Time. App names, URLs, window titles and timers stop immediately until you choose to resume.",
      icon: ShieldCheck,
    },
    {
      num: "06",
      title: "You can always see your own data.",
      desc: "Every team member has access to their personal dashboard showing the exact same numbers, hours and scores their manager sees.",
      icon: Database,
    },
    {
      num: "07",
      title: "Nothing is tracked before you have seen the consent screen.",
      desc: "When the desktop agent is installed, a clear consent modal explicitly details what will and won't be recorded before any telemetry starts.",
      icon: Key,
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
              <span className="text-slate-300">Trust & Security</span>
              <span className="text-slate-500">/</span>
              <span>Employee Privacy Promise</span>
            </div>

            <div className="grid grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="col-span-12 lg:col-span-6 space-y-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] bg-[#FFE6DF]/15 px-3 py-1 rounded-full inline-block border border-[#FF5A36]/30">
                  BINDING TRANSPARENCY CHARTER
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  What Deskmerit will never do.{" "}
                  <span className="text-[#FF5A36] block">Non-invasive by design.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  We build time tracking for people we’d want to work with. These promises hold on every plan and cannot be switched off by any admin.
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

              {/* Right Column: Authentic Privacy & Security Charter Screenshot in macOS Browser Window Frame */}
              <div className="col-span-12 lg:col-span-6">
                <div className="rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden group">
                  <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                      app.deskmerit.com/security/charter-audit
                    </div>
                    <div className="text-[11px] font-bold text-[#FF5A36] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse" />
                      Audited Code
                    </div>
                  </div>

                  <div className="bg-[#070E1A] p-2">
                    <img
                      src="/images/figma/privacy-settings-audit.png"
                      alt="Deskmerit Enterprise Privacy Settings & Security Audit Controls"
                      className="w-full h-auto rounded-lg object-contain shadow-md transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The 7 Promises: 3 Cards in a Row Grid (Matching Solution Cards Design) */}
        <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
              EMPLOYEE TRANSPARENCY CHARTER
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em] mt-2">
              Our 7 Non-Negotiable Privacy Commitments
            </h2>
            <p className="text-sm text-[#4A5370] mt-3 leading-relaxed">
              These promises hold on every plan — starter, pro, and enterprise. They are enforced in our desktop binary and cannot be overridden by any administrator.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {promises.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  className="p-7 rounded-2xl bg-white border border-[#E6E2D8] hover:border-[#FF5A36] transition-all hover:shadow-card flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-[#E6E2D8] text-[#0F1730] group-hover:bg-[#FF5A36] group-hover:border-[#FF5A36] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs">
                        <Icon className="w-5 h-5 transition-colors" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#FF5A36] bg-[#FFE6DF]/60 px-2.5 py-1 rounded-full border border-[#FF5A36]/30">
                        PROMISE {p.num}
                      </span>
                    </div>
                    <h3 className="font-bold text-base text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2.5 leading-snug">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#4A5370] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="pt-5 mt-5 border-t border-[#E6E2D8]/70 flex items-center gap-2 text-xs font-semibold text-[#0F1730]">
                    <div className="w-4 h-4 rounded-full bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span>Guaranteed in desktop binary</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Your Data, First Section */}
        <section className="py-20 bg-[#FFFFFF] border-y border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36]">
                  What employees see
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                  Your data, first.
                </h2>
                <p className="text-sm sm:text-base text-[#4A5370] leading-relaxed">
                  Every employee has a self-view of their own day, timeline and productivity scores — the same numbers their manager sees. No secret calculations, no covert surveillance feeds, no surprise reviews.
                </p>

                <div className="space-y-2 text-xs text-[#0F1730]">
                  <div className="p-3 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8] flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF5A36]" />
                    <span>Personal timeline reviewable at any point of the day</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8] flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#FF5A36]" />
                    <span>One-click export of your own timesheets and attendance history</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 flex justify-center">
                <InteractiveTrackerWidget />
              </div>
            </div>
          </div>
        </section>

        {/* Backed By How We Build (Infrastructure & Security) */}
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
              Security architecture
            </div>
            <h3 className="text-3xl font-extrabold text-[#0F1730]">
              Backed by how we build.
            </h3>
            <p className="text-xs text-[#4A5370] mt-1">
              Engineered with enterprise-grade tenant isolation, cryptography and audit trails.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Database-level isolation",
                desc: "Row-level security enforced directly on Postgres tables; no client data can bleed across tenants.",
                icon: Database,
              },
              {
                title: "Encrypted everywhere",
                desc: "TLS 1.3 in transit and AES-256 at rest; encryption keys managed via dedicated AWS KMS.",
                icon: Lock,
              },
              {
                title: "Full audit trail",
                desc: "Every configuration toggle and manual correction is immutably logged with before and after states.",
                icon: FileCheck,
              },
              {
                title: "Your region",
                desc: "Enterprise customers select their AWS data region: India (Mumbai), Australia (Sydney), UAE, or US.",
                icon: Server,
              },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] rounded-2xl p-6 border border-[#E6E2D8] hover:border-[#FF5A36] transition-all shadow-subtle hover:shadow-card flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-[#E6E2D8] text-[#0F1730] group-hover:bg-[#FF5A36] group-hover:border-[#FF5A36] group-hover:text-white flex items-center justify-center mb-4 transition-all duration-200 shadow-xs">
                      <Icon className="w-5 h-5 transition-colors" />
                    </div>
                    <h4 className="font-bold text-sm text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-1.5">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#4A5370] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] text-center max-w-2xl mx-auto text-xs text-[#4A5370]">
            <strong className="text-[#0F1730]">Compliance Roadmap:</strong> SOC 2 Type II and ISO 27001 programmes are actively in progress with third-party auditors. Security questionnaires and DPAs available upon request.
          </div>
        </section>

        {/* Signature Split FAQ Section */}
        <DeskmeritFaq
          title="Privacy & Compliance FAQs"
          category="FAQS"
          helpTitle="Have Compliance or Legal Inquiries?"
          helpDescription="Our security and data governance officers can provide completed standard security questionnaires (CAIQ/SIG) and sign custom enterprise DPAs."
          customFaqs={[
            {
              q: "Can an employer turn on keystroke logging or webcam recording?",
              a: "No, never. Neither keystroke logging nor webcam/audio recording code exists anywhere in our software. Deskmerit was architected from day one without surveillance mechanisms."
            },
            {
              q: "How does Private Time work from the employee's perspective?",
              a: "Team members can activate Private Time with a single click in their desktop agent. While Private Time is active, all application logging, URL tracking, and timers cease immediately, and the period is never categorized as unexcused idle time."
            },
            {
              q: "Are screenshots mandatory, and how are they handled?",
              a: "Screenshots are turned OFF by default across all plans. If an organization enables screenshots for strict regulatory audit compliance, captures are blurred by default, and team members are clearly notified in advance."
            },
            {
              q: "Do employees have access to view their own recorded data?",
              a: "Yes. Every team member has access to an Employee First-View dashboard where they can review their complete timeline, active applications, and logged task hours before timesheets are locked for payroll."
            },
            {
              q: "What data privacy regulations does Deskmerit comply with?",
              a: "Deskmerit is compliant with the EU General Data Protection Regulation (GDPR), the Indian Digital Personal Data Protection (DPDP) Act 2023, Australian Privacy Principles (APPs), and the NSW Workplace Surveillance Act."
            }
          ]}
        />

        <DeskmeritCtaBand
          title="Tracking your team won't resent."
          subtitle="Install in minutes, start from a task, and get your first report this week."
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
