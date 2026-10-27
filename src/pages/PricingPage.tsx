import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { useCurrency, CURRENCIES, CurrencyCode } from "../utils/currencyContext";
import {
  Check,
  Minus,
  ArrowRight,
  Sparkles,
  Building2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Sliders,
  ShieldCheck,
  CreditCard,
} from "lucide-react";

export function PricingPage() {
  const { currencyCode, setCurrencyCode, billingInterval, setBillingInterval, currency } = useCurrency();
  const [teamSize, setTeamSize] = useState(25);
  const [selectedPlanForCalc, setSelectedPlanForCalc] = useState<"pro" | "premium">("pro");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const isAnnual = billingInterval === "annual";
  const proRate = isAnnual ? currency.annual.pro : currency.monthly.pro;
  const premiumRate = isAnnual ? currency.annual.premium : currency.monthly.premium;

  const activeRate = selectedPlanForCalc === "pro" ? proRate : premiumRate;
  const totalCalculated = (teamSize * activeRate).toLocaleString();

  const billingFaqs = [
    {
      q: "Can I change plans or seat count any time?",
      a: "Yes. Upgrades and seat adjustments are prorated automatically. Any unused days apply directly toward your next billing cycle.",
    },
    {
      q: "What happens if a payment fails?",
      a: "You get a 7-day grace period. After that, your workspace is paused — never deleted — and any active sessions in progress finish and sync safely first.",
    },
    {
      q: "Do you offer annual invoicing and purchase orders?",
      a: "Yes, available on Pro, Premium, and Enterprise. Enterprise accounts can be paid via annual bank wire (NEFT/RTGS/ACH/SWIFT) or quarterly true-ups.",
    },
    {
      q: "Do you provide GST-compliant invoices in India?",
      a: "Yes. Indian companies receive automated GST-compliant tax invoices with GSTIN validation and reverse-charge accounting support.",
    },
    {
      q: "Is there a discount for non-profits or open-source projects?",
      a: "Yes! We offer a 30% discount for registered non-profits, academic institutions, and open-source foundation teams. Contact sales@deskmerit.com.",
    },
  ];

  const matrixSections = [
    {
      category: "Time & Activity Tracking",
      features: [
        { name: "Automatic background tracking", starter: true, pro: true, premium: true, ent: true },
        { name: "App, URL & window title tracking", starter: true, pro: true, premium: true, ent: true },
        { name: "Role-based productivity scoring", starter: "Basic", pro: "Advanced", premium: "Custom rules", ent: "Enterprise matrix" },
        { name: "Private Time one-click pause", starter: true, pro: true, premium: true, ent: true },
        { name: "Offline tracking & automatic queue", starter: true, pro: true, premium: true, ent: true },
      ],
    },
    {
      category: "Project & Task Management",
      features: [
        { name: "Tracker Plus (Jira, Azure DevOps, OpenProject)", starter: false, pro: true, premium: true, ent: true },
        { name: "Multi-tenant engineer tokens", starter: false, pro: true, premium: true, ent: true },
        { name: "Billable vs non-billable categorization", starter: false, pro: true, premium: true, ent: true },
        { name: "Client billing rates per role/project", starter: false, pro: true, premium: true, ent: true },
        { name: "Budget overrun alerts (90% & 100%)", starter: false, pro: true, premium: true, ent: true },
      ],
    },
    {
      category: "Attendance & Workforce",
      features: [
        { name: "Calendar-aware attendance (Google & Outlook)", starter: false, pro: true, premium: true, ent: true },
        { name: "Overnight shift logic crossing midnight", starter: false, pro: true, premium: true, ent: true },
        { name: "Leave request & team absence calendar", starter: false, pro: true, premium: true, ent: true },
        { name: "Audited HR attendance corrections", starter: false, pro: true, premium: true, ent: true },
      ],
    },
    {
      category: "Security & Governance",
      features: [
        { name: "Optional screenshots (off by default)", starter: false, pro: "Blurred only", premium: "Configurable", ent: "Configurable + Audit" },
        { name: "REST API & Claude MCP Server", starter: false, pro: true, premium: true, ent: true },
        { name: "White-label & reseller branding", starter: false, false: false, premium: true, ent: true },
        { name: "SAML 2.0 / OIDC SSO & SCIM", starter: false, pro: false, premium: false, ent: true },
        { name: "Dedicated database & data residency choice", starter: false, pro: false, premium: false, ent: true },
        { name: "99.9% Uptime SLA & 24/7 Priority Support", starter: false, pro: false, premium: false, ent: true },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730] font-sans">
      <DeskmeritHeader />

      <main>
        {/* SECTION 1: Deep Navy Hero Matching Platform Standard with Product Showcase */}
        <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-8 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden mb-8">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#24305A]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF5A36]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="text-xs text-[#FF5A36] font-semibold flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">Home</Link>
              <span className="text-slate-500">/</span>
              <span>Pricing</span>
            </div>

            <div className="grid grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="col-span-12 lg:col-span-6 space-y-6">
                <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#FFE6DF]/15 border border-[#FF5A36]/30 text-[11px] font-bold uppercase tracking-wider text-[#FF5A36]">
                  Transparent, Predictable Pricing
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  Simple plans,{" "}
                  <span className="text-[#FF5A36] block">predictable pricing.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  Every plan starts with a 14-day full trial with every feature included. No credit card required. Flat seat pricing with zero lock-in contracts.
                </p>

                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-sm shadow-[0_4px_16px_rgba(255,90,54,0.35)] hover:shadow-[0_6px_22px_rgba(255,90,54,0.45)] transition-all"
                  >
                    <span>Start free 14-day trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#10192A] hover:bg-[#1A264F] text-white font-bold text-sm border border-slate-700 hover:border-slate-500 transition-all"
                  >
                    <span>Talk to sales</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Authentic Figma Product Screenshot in macOS Browser Window Frame */}
              <div className="col-span-12 lg:col-span-6">
                <div className="rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden group">
                  <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                      <div className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
                      <div className="w-3 h-3 rounded-full bg-[#62C554]" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                      app.deskmerit.com/executive/dashboard
                    </div>
                    <div className="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      All Features Active
                    </div>
                  </div>

                  <div className="bg-[#070E1A] p-2 max-h-[380px] overflow-hidden flex items-center justify-center">
                    <img
                      src="/images/figma/dashboard-executive-overview.png"
                      alt="Deskmerit Executive Overview Dashboard Included on Pro & Premium"
                      className="w-full h-auto rounded-lg object-cover object-top shadow-md transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: 3-Tier Cards with Highlighted Pro Tier (Sqalible Screenshot 2) */}
        <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
              Flexible Subscriptions
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
              Plans that scale with your workforce
            </h2>

            {/* Monthly / Annual Toggle */}
            <div className="mt-6 inline-flex items-center p-1.5 rounded-2xl bg-[#FFFFFF] border border-[#E6E2D8] shadow-sm">
              <button
                type="button"
                onClick={() => setBillingInterval("monthly")}
                className={`px-5 py-2 text-xs font-bold rounded-xl transition-all ${
                  !isAnnual ? "bg-[#0F1730] text-white shadow-sm" : "text-[#4A5370] hover:text-[#0F1730]"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setBillingInterval("annual")}
                className={`px-5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 ${
                  isAnnual ? "bg-[#0F1730] text-white shadow-sm" : "text-[#4A5370] hover:text-[#0F1730]"
                }`}
              >
                <span>Annual</span>
                <span className="px-2 py-0.5 rounded-md text-[10px] bg-[#FFE6DF] text-[#C2361A] font-bold">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* 3 Main Tier Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* 1. Starter */}
            <div className="rounded-3xl p-8 bg-white border border-[#E6E2D8] shadow-card flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5370] bg-[#F7F4EE] px-3 py-1 rounded-full border border-[#E6E2D8] inline-block mb-4">
                  Starter Plan
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F1730]">Free</h3>
                <p className="text-xs text-[#4A5370] mt-1 mb-6">
                  For freelancers and small bootstrapped teams up to 5 seats.
                </p>

                <div className="mb-6 pb-6 border-b border-[#E6E2D8]">
                  <span className="text-4xl font-extrabold text-[#0F1730]">Free</span>
                  <span className="text-xs text-[#4A5370] ml-2">up to 5 users forever</span>
                </div>

                <ul className="space-y-3 text-xs text-[#0F1730] mb-8">
                  {[
                    "Automatic background time tracking",
                    "Productivity scoring per app and URL",
                    "Private Time one-click pause",
                    "Basic attendance presence tracking",
                    "Windows, macOS & Linux agents",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/signup"
                className="w-full py-3.5 rounded-xl border border-[#0F1730] hover:bg-[#F7F4EE] text-[#0F1730] font-bold text-xs text-center transition-all"
              >
                Start free forever
              </Link>
            </div>

            {/* 2. Pro (Highlighted Middle Card with Sqalible Styling) */}
            <div className="rounded-3xl p-8 bg-white border-2 border-[#FF5A36] shadow-2xl relative flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#FF5A36] text-white text-[10px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-md">
                ★ Most Popular
              </div>

              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] bg-[#FFE6DF] px-3 py-1 rounded-full inline-block mb-4 mt-2">
                  Pro Plan
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F1730]">Growing Teams</h3>
                <p className="text-xs text-[#4A5370] mt-1 mb-6">
                  For agencies and engineering teams that bill client time.
                </p>

                <div className="mb-6 pb-6 border-b border-[#E6E2D8]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-[#0F1730]">{currency.symbol}{proRate}</span>
                    <span className="text-xs text-[#4A5370]">/ user / month</span>
                  </div>
                  <span className="text-[11px] text-[#FF5A36] font-semibold mt-1 block">
                    Billed {isAnnual ? "annually (20% off)" : "monthly"}
                  </span>
                </div>

                <ul className="space-y-3 text-xs text-[#0F1730] mb-8">
                  {[
                    "Everything in Starter, plus:",
                    "Tracker Plus (Jira, Azure DevOps, OpenProject)",
                    "Calendar integration (Google & Outlook)",
                    "Optional blurred screenshots with notifications",
                    "Project billing, rates & budget alerts",
                    "Shifts scheduling & leave calendar",
                    "Slack, Teams, Zapier & Make integrations",
                    "REST API & Claude MCP server",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span className={i === 0 ? "font-bold text-[#FF5A36]" : ""}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/signup"
                className="w-full py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-xs text-center transition-all shadow-md hover:shadow-glow-ember"
              >
                Start 14-day free trial →
              </Link>
            </div>

            {/* 3. Enterprise */}
            <div className="rounded-3xl p-8 bg-white border border-[#E6E2D8] shadow-card flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A5370] bg-[#F7F4EE] px-3 py-1 rounded-full border border-[#E6E2D8] inline-block mb-4">
                  Enterprise
                </span>
                <h3 className="text-2xl font-extrabold text-[#0F1730]">Regulated & Large</h3>
                <p className="text-xs text-[#4A5370] mt-1 mb-6">
                  For 200+ seat organizations requiring governance & compliance.
                </p>

                <div className="mb-6 pb-6 border-b border-[#E6E2D8]">
                  <span className="text-4xl font-extrabold text-[#0F1730]">Custom</span>
                  <span className="text-xs text-[#4A5370] ml-2">Annual invoice billing</span>
                </div>

                <ul className="space-y-3 text-xs text-[#0F1730] mb-8">
                  {[
                    "Everything in Pro, plus:",
                    "SAML 2.0 / OIDC SSO & SCIM directory sync",
                    "Custom roles & IP allowlisting",
                    "Dedicated database & data residency selection",
                    "Audit-log streaming to SIEM",
                    "Custom MSA, DPA & 99.9% uptime SLA",
                    "Dedicated Customer Success Manager in your timezone",
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <Check className="w-4 h-4 text-[#12B886] shrink-0" />
                      <span className={i === 0 ? "font-bold text-[#0F1730]" : ""}>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/demo"
                className="w-full py-3.5 rounded-xl bg-[#0F1730] hover:bg-[#1A264F] text-white font-bold text-xs text-center transition-all"
              >
                Talk to enterprise sales
              </Link>
            </div>
          </div>

          {/* Sqalible HRMS Add-on Banner (Sqalible Screenshot 2) */}
          <div className="mt-12 p-6 rounded-2xl bg-[#E6F4EA] border border-[#B7E1CD] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-[#12B886] text-white flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" />
              </span>
              <div>
                <span className="text-xs font-bold text-[#0F1730] block">
                  Already using Sqalible HRMS?
                </span>
                <span className="text-xs text-[#4A5370]">
                  Turn Deskmerit on from your HRMS admin console. Billed as a single consolidated line-item on your Sqalible invoice.
                </span>
              </div>
            </div>
            <Link
              to="/hrms-add-on"
              className="text-xs font-bold text-[#0F1730] hover:text-[#12B886] flex items-center gap-1 shrink-0"
            >
              Explore HRMS add-on →
            </Link>
          </div>
        </section>

        {/* SECTION 3: Deep Dark Interactive Cost Calculator Card (Sqalible Screenshot 2) */}
        <section className="py-16 sm:py-20 bg-[#0A0F1D] text-white border-b border-[#24305A]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#111A33] rounded-[28px] p-8 sm:p-12 border border-[#24305A] shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                {/* Left: Interactive Controls */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A264F] text-xs font-semibold text-[#FF5A36]">
                    <Sliders className="w-3.5 h-3.5" />
                    <span>Live Cost Estimator</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Calculate your exact monthly investment
                  </h3>

                  {/* Plan Picker */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-[#9AA1B2]">Select plan:</span>
                    <button
                      type="button"
                      onClick={() => setSelectedPlanForCalc("pro")}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedPlanForCalc === "pro"
                          ? "bg-[#FF5A36] text-white font-extrabold shadow-sm"
                          : "bg-[#1A264F] text-white border border-[#2B3969]"
                      }`}
                    >
                      Pro Plan ({currency.symbol}{proRate}/mo)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedPlanForCalc("premium")}
                      className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        selectedPlanForCalc === "premium"
                          ? "bg-[#FF5A36] text-white font-extrabold shadow-sm"
                          : "bg-[#1A264F] text-white border border-[#2B3969]"
                      }`}
                    >
                      Premium Plan ({currency.symbol}{premiumRate}/mo)
                    </button>
                  </div>

                  {/* Slider */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#9AA1B2]">Team size:</span>
                      <span className="font-extrabold text-white text-base font-mono">{teamSize} seats</span>
                    </div>
                    <input
                      type="range"
                      min={5}
                      max={250}
                      step={5}
                      value={teamSize}
                      onChange={(e) => setTeamSize(Number(e.target.value))}
                      className="w-full accent-[#FF5A36] cursor-pointer"
                    />
                    <div className="flex justify-between text-[11px] text-[#9AA1B2] font-mono">
                      <span>5 seats</span>
                      <span>50</span>
                      <span>100</span>
                      <span>150</span>
                      <span>200</span>
                      <span>250+</span>
                    </div>
                  </div>
                </div>

                {/* Right: Estimated Output Badge */}
                <div className="lg:col-span-5 bg-[#0A0F1D] rounded-2xl p-8 border border-[#24305A] text-center space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#9AA1B2]">
                    Total Estimated Investment
                  </span>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white font-mono">
                    {currency.symbol}{totalCalculated}
                    <span className="text-xs font-normal text-[#9AA1B2] ml-1">/ mo</span>
                  </div>
                  <p className="text-xs text-[#9AA1B2] leading-relaxed">
                    Includes all Tracker Plus features, unlimited Jira tasks, attendance automation, and live customer support.
                  </p>

                  <Link
                    to="/signup"
                    className="block w-full py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-xs text-center transition-all shadow-md hover:shadow-glow-ember"
                  >
                    Start 14-day free trial for {teamSize} users
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Full Feature Matrix by Module (Sqalible Screenshot 2) */}
        <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                Detailed Comparison
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                Full feature matrix by module
              </h2>
            </div>

            <div className="overflow-x-auto border border-[#E6E2D8] rounded-2xl shadow-card">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-[#0F1730] text-white">
                    <th className="py-4 px-6 font-bold text-sm">Capability</th>
                    <th className="py-4 px-4 font-bold text-center">Starter</th>
                    <th className="py-4 px-4 font-bold text-center bg-[#FF5A36] text-white font-extrabold">Pro</th>
                    <th className="py-4 px-4 font-bold text-center">Premium</th>
                    <th className="py-4 px-4 font-bold text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#E6E2D8]">
                  {matrixSections.map((sec, secIdx) => (
                    <React.Fragment key={secIdx}>
                      <tr className="bg-[#F7F4EE]">
                        <td colSpan={5} className="py-3 px-6 font-extrabold text-xs text-[#0F1730] uppercase tracking-wider">
                          {sec.category}
                        </td>
                      </tr>
                      {sec.features.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-[#F7F4EE]/50 transition-colors">
                          <td className="py-3.5 px-6 font-medium text-[#0F1730]">{row.name}</td>
                          <td className="py-3.5 px-4 text-center">
                            {typeof row.starter === "boolean" ? (
                              row.starter ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-[#9AA1B2] mx-auto" />
                            ) : (
                              <span className="font-semibold text-[#4A5370]">{row.starter}</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center bg-[#FFE6DF]/30">
                            {typeof row.pro === "boolean" ? (
                              row.pro ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-[#9AA1B2] mx-auto" />
                            ) : (
                              <span className="font-bold text-[#FF5A36]">{row.pro}</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {typeof row.premium === "boolean" ? (
                              row.premium ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-[#9AA1B2] mx-auto" />
                            ) : (
                              <span className="font-semibold text-[#0F1730]">{row.premium}</span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-center">
                            {typeof row.ent === "boolean" ? (
                              row.ent ? <Check className="w-4 h-4 text-[#12B886] mx-auto" /> : <Minus className="w-4 h-4 text-[#9AA1B2] mx-auto" />
                            ) : (
                              <span className="font-semibold text-[#0F1730]">{row.ent}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 5: Signature Split FAQ Layout (Deskmerit Standard) */}
        <DeskmeritFaq
          title="Questions, Answered Honestly"
          category="FAQS"
          customFaqs={billingFaqs}
          helpTitle="Need a Custom Enterprise Quote?"
          helpDescription="Have 200+ employees, specific data residency requirements, or need custom MSA and DPA terms? Our executive team can prepare a tailor-made proposal."
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}