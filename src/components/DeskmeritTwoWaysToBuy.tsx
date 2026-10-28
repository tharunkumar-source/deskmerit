import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Laptop, Building2, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

export function DeskmeritTwoWaysToBuy() {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF4FB] border-b border-[#E8D5EC] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-3">
            TWO WAYS TO BUY
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0F1730] tracking-[-0.025em] leading-[1.28] sm:leading-[1.25]">
            Use it on its own, or inside your HRMS.
          </h2>
          <p className="text-base sm:text-lg text-[#4A5370] mt-4 leading-relaxed font-normal">
            Whether you want a modern standalone tracker or a native module embedded in Sqalible HRMS, the tracking agent, privacy guarantees, and timesheet reports are 100% identical.
          </p>
        </div>

        {/* 2 Symmetrical, Clean & Professional Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          {/* Card 1: Standalone */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E8D5EC] shadow-[0_4px_20px_rgba(15,23,48,0.04)] hover:shadow-[0_12px_32px_rgba(15,23,48,0.08)] hover:border-[#61126E]/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              {/* Clean Badge & Icon Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4A5370]">
                  <Laptop className="w-4 h-4 text-[#61126E]" />
                  <span>Standalone Edition</span>
                </div>
                <span className="text-xs font-semibold text-slate-400">Self-Serve Ready</span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730] tracking-tight mb-3">
                Deskmerit on its own
              </h3>
              <p className="text-sm text-[#4A5370] leading-relaxed mb-6 font-normal">
                Deploy in under 10 minutes for any engineering team, consultancy, or distributed squad. Your own dedicated web dashboard, custom integrations, and team management.
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-[#FAF4FB]/80 border border-[#E8D5EC] mb-6 text-center">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Setup</div>
                  <div className="text-xs font-extrabold text-[#0F1730] mt-0.5">&lt; 10 mins</div>
                </div>
                <div className="border-x border-[#E8D5EC]">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Billing</div>
                  <div className="text-xs font-extrabold text-[#0F1730] mt-0.5">Card or PO</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Directory</div>
                  <div className="text-xs font-extrabold text-[#0F1730] mt-0.5">Google / Okta</div>
                </div>
              </div>

              {/* Included Capabilities List */}
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                What's included:
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Standalone web analytics portal with role-based permissions",
                  "Cross-platform desktop agents (macOS, Windows, Linux)",
                  "1-click timer sync for Jira, Azure DevOps & GitHub",
                  "Defensible CSV, Excel and client-ready PDF invoice exports",
                  "Self-serve seat provisioning & Google/Okta Single Sign-On",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-[#0F1730]">
                    <div className="w-4 h-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <Link
                to="/signup"
                className="w-full py-3.5 px-6 rounded-xl bg-[#61126E] hover:bg-[#4E0E58] text-white font-bold text-sm text-center transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Start 14-day free trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center">
                <Link
                  to="/pricing"
                  className="text-xs font-bold text-[#4A5370] hover:text-[#61126E] transition-colors"
                >
                  View standalone plans & pricing →
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: HRMS Add-on */}
          <div className="bg-gradient-to-br from-[#61126E] to-[#430B4D] text-white rounded-3xl p-8 sm:p-10 border border-[#7C1B8C]/40 shadow-[0_12px_36px_rgba(97,18,110,0.22)] flex flex-col justify-between group relative overflow-hidden">
            <div>
              {/* Clean Badge & Icon Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/15">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-purple-200">
                  <Building2 className="w-4 h-4 text-purple-200" />
                  <span>HRMS Native Module</span>
                </div>
                <span className="text-xs font-semibold text-emerald-300 flex items-center gap-1.5 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Recommended for Sqalible</span>
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Deskmerit for Sqalible HRMS
              </h3>
              <p className="text-sm text-purple-100/90 leading-relaxed mb-6 font-normal">
                Already on Sqalible? Switch Deskmerit on with a single toggle in your admin console. Employees are auto-provisioned from your directory and reports appear in your HRMS.
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-3 gap-2 p-3.5 rounded-2xl bg-white/10 border border-white/15 mb-6 text-center">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-purple-200/80">Setup</div>
                  <div className="text-xs font-extrabold text-white mt-0.5">&lt; 1-Click Toggle</div>
                </div>
                <div className="border-x border-white/15">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-purple-200/80">Billing</div>
                  <div className="text-xs font-extrabold text-white mt-0.5">Unified Invoice</div>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-purple-200/80">Directory</div>
                  <div className="text-xs font-extrabold text-white mt-0.5">Auto-Synced</div>
                </div>
              </div>

              {/* Included Capabilities List */}
              <div className="text-xs font-bold uppercase tracking-wider text-purple-200/80 mb-3">
                What's included:
              </div>
              <ul className="space-y-3 mb-8">
                {[
                  "Real-time attendance feeds directly into Sqalible payroll engine",
                  "Automated shift adherence, midnight roster math & leave deductions",
                  "Single sign-on using your team's existing Sqalible credentials",
                  "Single consolidated invoice line-item with zero vendor overhead",
                  "No second login or browser tab for employees and managers",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-purple-100">
                    <div className="w-4 h-4 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div className="pt-6 border-t border-white/15 space-y-3">
              <Link
                to="/hrms-add-on"
                className="w-full py-3.5 px-6 rounded-xl bg-white hover:bg-slate-100 text-[#61126E] font-bold text-sm text-center transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore the HRMS add-on</span>
                <ArrowRight className="w-4 h-4 text-[#61126E]" />
              </Link>
              <div className="text-center">
                <Link
                  to="/demo"
                  className="text-xs font-bold text-purple-200 hover:text-white transition-colors"
                >
                  Book architecture walkthrough with an engineer →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Reassurance Banner (Aligned with full width of cards above) */}
        <div className="w-full mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-[#E8D5EC] flex items-center gap-3.5 text-left shadow-xs">
          <div className="hidden sm:flex w-10 h-10 rounded-xl bg-[#F6EDF8] text-[#61126E] items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="text-xs text-[#4A5370] leading-relaxed">
            <span className="font-bold text-[#0F1730]">Identical Privacy Guarantee:</span> Both deployment models run the exact same privacy-first desktop agent with zero keystroke logging, blurred screenshots, and 100% employee audit priority.
          </div>
        </div>
      </div>
    </section>
  );
}
