import React, { useState } from "react";
import { ChevronDown, Plus, Minus, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { DeskmeritLogo } from "./DeskmeritLogo";

interface FaqItem {
  q: string;
  a: string;
}

interface DeskmeritFaqProps {
  title?: string;
  category?: string;
  customFaqs?: FaqItem[];
  helpTitle?: string;
  helpDescription?: string;
}

export function DeskmeritFaq({
  title = "Questions, Answered Honestly",
  category = "FAQs",
  customFaqs,
  helpTitle = "Need Help Choosing the Right Solution?",
  helpDescription = "Connect with our product specialists to determine the optimal configuration for your engineering, agency, or enterprise workflows.",
}: DeskmeritFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const defaultFaqs: FaqItem[] = [
    {
      q: "Can startups customize tracking and privacy policies per role?",
      a: "Yes. Deskmerit lets you assign role-based tracking rules. Developers can track by Jira issue tokens with zero screenshots, while operational teams can log time against client shift rosters without intrusive surveillance.",
    },
    {
      q: "How long does onboarding and rollout take?",
      a: "Under 10 minutes. Your team connects their Jira or Azure DevOps account, downloads the lightweight desktop daemon, and begins tracking billable time immediately. No IT tickets or server configuration required.",
    },
    {
      q: "Does Deskmerit record keystrokes or use webcams?",
      a: "No, never. Under no configuration does Deskmerit capture keystroke content, webcam video, or audio feeds. Activity detection verifies input cadence without inspecting private text or passwords.",
    },
    {
      q: "Are screenshots mandatory?",
      a: "No. Screenshots are disabled by default across all plans. If an organization enables optional screenshots for audit compliance, they are blurred by default, and team members are clearly notified.",
    },
    {
      q: "Which operating systems are supported?",
      a: "macOS (Apple Silicon & Intel, notarized), Windows 10 & 11 (.exe / .msi), and Linux (.deb, .rpm, AppImage) — with 100% feature parity and local SQLite offline queueing across all three platforms.",
    },
    {
      q: "How does the native Sqalible HRMS integration work?",
      a: "Deskmerit is embedded natively into Sqalible HRMS as a 1-click add-on. Attendance, approved leave calendars, and billable timesheets flow automatically into payroll with zero manual CSV exports.",
    },
  ];

  const faqs = customFaqs && customFaqs.length > 0 ? customFaqs : defaultFaqs;

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-slate-100 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-3">
            {category}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em] leading-[1.28] sm:leading-[1.25]">
            {title}
          </h2>
        </div>

        {/* 2-Column Split Layout (Matching Reference Image 2) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Dark Purple Accent Callout Highlight Box */}
          <div className="col-span-1 lg:col-span-5 min-w-0 max-w-full w-full">
            <div className="rounded-3xl bg-gradient-to-br from-[#1C0A24] via-[#14061A] to-[#250B30] p-8 sm:p-10 text-white shadow-xl border border-[#61126E]/40 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
              {/* Subtle Radial Purple Glows in background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A855F7]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#61126E]/25 rounded-full blur-2xl pointer-events-none -ml-16 -mb-16" />

              <div>
                {/* Brand Logo in Reverse (White Wordmark) */}
                <div className="mb-8">
                  <DeskmeritLogo variant="reverse" size="md" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-[-0.025em] leading-snug">
                  {helpTitle}
                </h3>

                <p className="text-sm text-purple-200/80 leading-relaxed mt-4">
                  {helpDescription}
                </p>
              </div>

              <div className="pt-8">
                <Link
                  to="/demo"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0F1730] hover:bg-[#FAF4FB] hover:text-[#61126E] font-bold text-xs sm:text-sm shadow-md transition-all group cursor-pointer"
                >
                  <span>Contact our team</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-[#61126E]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Accordion List */}
          <div className="col-span-1 lg:col-span-7 divide-y divide-slate-100 min-w-0 max-w-full w-full">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left flex items-start justify-between gap-4 font-bold text-base sm:text-[17px] text-[#0F1730] hover:text-[#61126E] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="shrink-0 text-slate-400 hover:text-[#61126E] mt-0.5">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#61126E]" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 text-sm text-[#4A5370] leading-relaxed animate-fade-in pr-6">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
