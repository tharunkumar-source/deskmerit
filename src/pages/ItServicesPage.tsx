import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import {
  Code2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  FileText,
  AlertTriangle,
  ArrowRight,
  BarChart3,
  Users,
  Check,
  Zap,
  Clock,
  Layers,
  Sparkles,
  FileSpreadsheet,
  Workflow,
  Cpu,
} from "lucide-react";

export function ItServicesPage() {
  const [activeTab, setActiveTab] = useState<"utilization" | "tasks">("utilization");

  const budgets = [
    { project: "Acme Retail · Checkout API", percent: 72, hours: "144h / 200h", color: "bg-[#12B886]", alert: null },
    { project: "Northwind · Cloud Pipeline", percent: 108, hours: "162h / 150h", color: "bg-[#E5484D]", alert: "Exceeded budget (+8%)" },
    { project: "Contoso · Infra Audit", percent: 46, hours: "46h / 100h", color: "bg-[#12B886]", alert: null },
    { project: "Fabrikam · Core Services", percent: 91, hours: "182h / 200h", color: "bg-[#F5A524]", alert: "Approaching cap" },
  ];

  const itFaqs = [
    {
      q: "Can startups customize salary structures and rate cards?",
      a: "Yes. Deskmerit supports role-based and project-based rate cards. You can assign billable rates per engineer seniority ($45/hr to $150+/hr) and compare revenue generated against underlying payroll costs.",
    },
    {
      q: "How long does team rollout and Jira onboarding take?",
      a: "Under 10 minutes. Engineers generate a personal scoped Jira or Azure DevOps token, connect it to the Deskmerit desktop agent, and immediately start tracking time against assigned sprint backlog tasks.",
    },
    {
      q: "How does Deskmerit prevent timesheet disputes with clients?",
      a: "By tethering every minute to active issue ticket IDs (e.g., KMB-482). When invoices are generated, clients receive transparent audit logs showing exact ticket timestamps, eliminating contested hours.",
    },
    {
      q: "Can we track non-billable bench time separately?",
      a: "Yes. Deskmerit automatically distinguishes client-billable project time from internal training, bench standby, and administrative meetings, giving leadership true margin and utilization metrics.",
    },
    {
      q: "Will our developers push back against surveillance?",
      a: "No, because Deskmerit is built on a zero-surveillance architecture: zero keystroke logging, zero webcam spying, and zero covert snooping. Engineers retain full visibility into what is recorded.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#0F1730] font-sans">
      <DeskmeritHeader />

      <main>
        {/* ========================================================================= */}
        {/* 1. BRAND DARK HERO SECTION (Exact Reference Image 2 Layout)               */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-b from-[#180C24] via-[#12081B] to-[#180C24] text-white pt-8 pb-20 lg:pt-12 lg:pb-28 relative overflow-hidden">
          {/* Subtle radial glow */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#61126E]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#A81CD0]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb matching Reference */}
            <div className="text-xs text-slate-400 font-medium flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">Home</Link>
              <span className="text-slate-500">/</span>
              <Link to="/solutions" className="hover:underline text-slate-300">Solutions</Link>
              <span className="text-slate-500">/</span>
              <span className="text-[#D8B4FE] font-bold">Startups & High-Growth Scaleups</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Headline, Overline, Description & CTAs */}
              <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
                <div className="text-xs font-bold uppercase tracking-wider text-[#D8B4FE] mb-3">
                  FOR HIGH-GROWTH SCALEUPS & IT SERVICES
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.28] sm:leading-[1.25] text-white mb-6">
                  Deskmerit for Startups & <span className="text-[#D8B4FE]">High-Growth Scaleups</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mb-6">
                  Automate delivery tracking, prove every billable hour to clients, and streamline sprint operations without micro-management or keystroke surveillance.
                </p>

                <div className="flex flex-row items-center gap-3 sm:gap-3.5 pt-2">
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#61126E] hover:bg-[#4E0E58] text-white font-extrabold text-xs sm:text-sm shadow-[0_4px_16px_rgba(97, 18, 110,0.35)] hover:shadow-[0_6px_22px_rgba(97, 18, 110,0.45)] transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Start free trial</span>
                    <ArrowRight className="w-4 h-4 ml-0.5" />
                  </Link>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-white/10 hover:bg-white text-white hover:text-[#0F1730] font-bold text-xs sm:text-sm border border-white/20 hover:border-white transition-all cursor-pointer whitespace-nowrap shrink-0 shadow-sm backdrop-blur-xs"
                  >
                    <span>Book a demo</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Authentic Figma Product Screenshot in macOS Browser Window Frame */}
              <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
                <div className="w-full max-w-full rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden group">
                  {/* Product Screenshot Preview */}
                  <div className="bg-[#070E1A] p-1.5 sm:p-2 overflow-hidden w-full max-w-full">
                    <img
                      src="/images/figma/reports-cost-profitability.png"
                      alt="Deskmerit Project Cost, Profitability & Utilization Analytics"
                      className="w-full max-w-full h-auto rounded-lg object-contain shadow-md transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. WORKFLOWS FEATURE GRID (White background matching Reference Image 2)   */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#FFFFFF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-2">
                CORE CAPABILITIES / WORKFLOWS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.03em]">
                Workflows Engineered for Startups & High-Growth Scaleups
              </h2>
              <p className="text-sm sm:text-base text-[#4A5370] mt-2 max-w-2xl">
                Built specifically for rapid delivery teams needing audit-grade time tracking without administrative overhead.
              </p>
            </div>

            {/* 3 Column Cards with Icons & Checkmark Bullets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {/* Card 1 */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#61126E] hover:shadow-card transition-all group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-slate-200 text-[#0F1730] group-hover:bg-[#61126E] group-hover:border-[#61126E] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs">
                    <Workflow className="w-5 h-5 transition-colors" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-[#F6EDF8] text-[#4E0E58] border border-[#61126E]/20">
                    ★ Key Module
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors">
                  Autonomous Jira & DevOps Tracking
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed mt-2 mb-6">
                  Engineers start tracking straight from their assigned Jira or Azure DevOps task ticket with a single shortcut key.
                </p>
                <ul className="space-y-2.5 text-xs text-[#0F1730]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#61126E] shrink-0" /> Scoped personal tokens, zero admin passwords
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#61126E] shrink-0" /> Automatic ticket number & title binding
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#61126E] shrink-0" /> Full offline sync queue via Rust daemon
                  </li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#61126E] hover:shadow-card transition-all group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-slate-200 text-[#0F1730] group-hover:bg-[#61126E] group-hover:border-[#61126E] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs">
                    <FileSpreadsheet className="w-5 h-5 transition-colors" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                    Billing Automation
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors">
                  Zero-Friction Invoicing & Margins
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed mt-2 mb-6">
                  Turn sprint logs into client-ready billing invoices with exact hourly rates, retainer burn rates, and budget caps.
                </p>
                <ul className="space-y-2.5 text-xs text-[#0F1730]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#61126E] shrink-0" /> Multi-tier rate cards by engineer seniority
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#61126E] shrink-0" /> Automated budget overrun warning alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#61126E] shrink-0" /> Audit-matched Excel, CSV & REST API export
                  </li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className="p-6 sm:p-8 rounded-2xl border border-slate-200 bg-white hover:border-[#61126E] hover:shadow-card transition-all group">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 rounded-xl bg-[#F8F9FA] border border-slate-200 text-[#0F1730] group-hover:bg-[#61126E] group-hover:border-[#61126E] group-hover:text-white flex items-center justify-center transition-all duration-200 shadow-xs">
                    <BarChart3 className="w-5 h-5 transition-colors" />
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded bg-slate-100 text-slate-700">
                    Resource Intelligence
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#0F1730] group-hover:text-[#61126E] transition-colors">
                  Real-Time Bench & Capacity Planning
                </h3>
                <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed mt-2 mb-6">
                  Spot unassigned engineers and project scope creep weeks before they turn into costly unbilled overhead.
                </p>
                <ul className="space-y-2.5 text-xs text-[#0F1730]">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#61126E] shrink-0" /> Weekly billable vs non-billable ratio
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#61126E] shrink-0" /> Early alert on approaching contract caps
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#61126E] shrink-0" /> 1-click sync with Sqalible HRMS attendance
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. MEASURABLE IMPACT / STATS (Slate-50 background matching Image 2)       */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/70">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-2">
                MEASURABLE IMPACT
              </div>
              <h2 className="text-3xl font-extrabold text-[#0F1730] tracking-[-0.03em]">
                Why Choose Deskmerit for Startups & High-Growth Scaleups?
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-4xl sm:text-5xl font-black text-[#0F1730] tracking-tight">10x</div>
                <div className="text-xs font-bold text-[#4A5370] mt-2">Faster client audit sign-offs</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-4xl sm:text-5xl font-black text-[#0F1730] tracking-tight">100%</div>
                <div className="text-xs font-bold text-[#4A5370] mt-2">Defensible Jira-verified hours</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-4xl sm:text-5xl font-black text-[#0F1730] tracking-tight">2 mins</div>
                <div className="text-xs font-bold text-[#4A5370] mt-2">Per-engineer rollout time</div>
              </div>
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="text-4xl sm:text-5xl font-black text-[#0F1730] tracking-tight">Zero</div>
                <div className="text-xs font-bold text-[#4A5370] mt-2">Keystroke or surveillance friction</div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. ADDRESSING CRITICAL FRICTION (Brand Dark tone)                          */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-28 bg-[#140A1C] text-white border-b border-[#2A1433]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#D8B4FE] mb-3">
                CRITICAL FRICTION POINTS
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-[-0.03em] leading-[1.28] sm:leading-[1.25]">
                Addressing Critical Friction for Modern Delivery Teams
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-400 leading-relaxed max-w-3xl">
                Purpose-engineered architecture designed to eliminate operational bottlenecks, billing disputes, and ghost bench time.
              </p>
            </div>

            {/* Architectural Line-Divided Segmented Grid (Matching Sqalible Reference) */}
            <div className="border-t border-b border-slate-800">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                {/* Friction 1 */}
                <div className="py-10 px-6 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-[#61126E]/30 border border-[#A81CD0]/40 text-[#F0ABFC] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#61126E]/50 transition-all duration-200 shadow-sm">
                    <Zap className="w-6 h-6 text-[#F0ABFC]" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-3">
                    Manual Timesheet Bottlenecks
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Engineers guessing hours on Friday afternoons leads to under-reported billable time and invoice friction. Deskmerit logs directly as work happens.
                  </p>
                </div>

                {/* Friction 2 */}
                <div className="py-10 px-6 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-[#61126E]/30 border border-[#A81CD0]/40 text-[#F0ABFC] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#61126E]/50 transition-all duration-200 shadow-sm">
                    <FileSpreadsheet className="w-6 h-6 text-[#F0ABFC]" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-3">
                    Messy Client Retainer Disputes
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Enterprise clients dispute vague monthly timesheets. Deskmerit gives them transparent task timestamps and sprint milestone links.
                  </p>
                </div>

                {/* Friction 3 */}
                <div className="py-10 px-6 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                  <div className="w-12 h-12 rounded-xl bg-[#61126E]/30 border border-[#A81CD0]/40 text-[#F0ABFC] flex items-center justify-center mb-6 group-hover:scale-105 group-hover:bg-[#61126E]/50 transition-all duration-200 shadow-sm">
                    <Layers className="w-6 h-6 text-[#F0ABFC]" strokeWidth={2} />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-3">
                    Scattered Records & Ghost Bench
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Disconnected HR, Jira, and spreadsheets conceal bench time until profitability takes a hit. Deskmerit unifies time and attendance in one record.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. SPLIT FAQ SECTION (Matching Reference Image 2)                         */}
        {/* ========================================================================= */}
        <DeskmeritFaq
          title="Startups & High-Growth Scaleups FAQs"
          category="COMMON QUESTIONS"
          customFaqs={itFaqs}
          helpTitle="Need Help Choosing the Right Scaleup Setup?"
          helpDescription="Speak directly with our engineering delivery specialists to tailor Deskmerit for your pods, clients, and contracts."
        />

        {/* ========================================================================= */}
        {/* 6. FINAL CTA BAND                                                         */}
        {/* ========================================================================= */}
        <DeskmeritCtaBand
          title="Ready to transform workforce operations with Deskmerit for Startups & Scaleups?"
          subtitle="Install in under 2 minutes. Free 14-day trial, no credit card required."
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
