import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { Check, ArrowRight, ToggleLeft, ToggleRight, Sparkles, ShieldCheck } from "lucide-react";

export function HrmsAddonPage() {
  const [addonEnabled, setAddonEnabled] = useState(true);

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* ========================================================================= */}
        {/* DARK HERO SECTION (Consistent Platform Standard)                          */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-8 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#24305A]/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-[#FF5A36]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="text-xs text-[#FF5A36] font-semibold flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">Home</Link>
              <span className="text-slate-500">/</span>
              <Link to="/solutions/it-services" className="hover:underline text-slate-300">Solutions</Link>
              <span className="text-slate-500">/</span>
              <span>HRMS Add-on</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column */}
              <div className="col-span-1 lg:col-span-6 space-y-6 min-w-0 max-w-full w-full">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] bg-[#FFE6DF]/15 px-3.5 py-1 rounded-full inline-block border border-[#FF5A36]/30">
                  NATIVE 1-CLICK MODULE · ZERO RE-ENROLLMENT
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  Time tracking,{" "}
                  <span className="text-[#FF5A36] block">switched on inside your HRMS.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  If you run an HRMS, Deskmerit is one toggle away. No new vendor, no new login, no separate invoice — attendance and work telemetry flow straight into your core employee directory.
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

              {/* Right Column: Authentic HRMS Integration Screenshot in macOS Browser Window Frame */}
              <div className="col-span-1 lg:col-span-6 min-w-0 max-w-full w-full">
                <div className="w-full max-w-full rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden group">
                  <div className="bg-[#070E1A] p-1.5 sm:p-2 overflow-hidden w-full max-w-full">
                    <img
                      src="/images/figma/hrms-employee-profile.png"
                      alt="Deskmerit Switched On Inside Sqalible HRMS Workforce Insights"
                      className="w-full max-w-full h-auto rounded-lg object-contain shadow-md transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Steps How It Works */}
        <section className="py-20 bg-[#FFFFFF] border-y border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                How it works
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.025em]">
                Live in an afternoon.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Enable", desc: "Your HRMS admin switches Deskmerit on in Sqalible settings." },
                { step: "02", title: "Provision", desc: "Employees are created automatically from your existing directory." },
                { step: "03", title: "Install", desc: "Staff sign in to the desktop agent with their regular HRMS login." },
                { step: "04", title: "Report", desc: "Attendance, productivity and project time appear inside Sqalible." },
              ].map((s) => (
                <div key={s.step} className="p-6 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] hover:border-[#FF5A36] hover:bg-white hover:shadow-card transition-all group">
                  <span className="text-sm font-mono font-extrabold text-[#0F1730] bg-white border border-[#E6E2D8] group-hover:bg-[#FF5A36] group-hover:border-[#FF5A36] group-hover:text-white px-2.5 py-1 rounded-md inline-block mb-4 transition-colors shadow-xs">
                    {s.step}
                  </span>
                  <h3 className="text-base font-bold text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-2">{s.title}</h3>
                  <p className="text-xs text-[#4A5370] leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Add-on vs Standalone Comparison */}
        <section className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730]">
              Add-on or standalone? Same product.
            </h3>
            <p className="text-xs text-[#4A5370] mt-1">
              The tracking agent, data accuracy and reports are identical. Only the front door is different.
            </p>
          </div>

          <div className="bg-[#FFFFFF] rounded-2xl border border-[#E6E2D8] overflow-hidden shadow-card">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="bg-[#F7F4EE] border-b border-[#E6E2D8] text-[#4A5370]">
                  <th className="py-3 px-6 font-semibold">Aspect</th>
                  <th className="py-3 px-6 font-bold text-[#C2361A]">Inside Sqalible HRMS</th>
                  <th className="py-3 px-6 font-bold text-[#0F1730]">Deskmerit standalone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6E2D8]/60 text-[#0F1730]">
                <tr>
                  <td className="py-4 px-6 font-semibold">Sign-in</td>
                  <td className="py-4 px-6">Your regular HRMS credentials</td>
                  <td className="py-4 px-6">Deskmerit login or company SAML SSO</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Employees</td>
                  <td className="py-4 px-6">Auto-provisioned from HRMS directory</td>
                  <td className="py-4 px-6">Invited by email or SCIM bridge</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Reports</td>
                  <td className="py-4 px-6">Inside Sqalible dashboards</td>
                  <td className="py-4 px-6">Deskmerit web dashboard</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Billing</td>
                  <td className="py-4 px-6">Simple line item on Sqalible invoice</td>
                  <td className="py-4 px-6">Card (Stripe) or Enterprise PO invoice</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Calendar</td>
                  <td className="py-4 px-6">Handled natively by the HRMS</td>
                  <td className="py-4 px-6">Connect Google or Outlook calendar</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Signature Split FAQ Section */}
        <DeskmeritFaq
          title="Sqalible HRMS Add-On FAQs"
          category="INTEGRATION FAQS"
          helpTitle="Have Existing Biometric or Payroll Systems?"
          helpDescription="Our solutions architects can configure zero-disruption sync between your current biometric logs, Jira workflows, and Sqalible payroll."
          customFaqs={[
            {
              q: "How do I activate Deskmerit inside my Sqalible HRMS account?",
              a: "Navigate to your Sqalible Admin Portal > Add-ons Marketplace, and toggle 'Deskmerit Automatic Time Tracking' to On. Your employee master directory and project codes sync instantly."
            },
            {
              q: "Do employees need a separate password or portal login?",
              a: "No. Employees authenticate using their standard Sqalible credentials or company SAML SSO. There are no secondary passwords to manage or forget."
            },
            {
              q: "How does timesheet data transfer into monthly payroll?",
              a: "Deskmerit's verified attendance hours, approved overtime, and project timesheets populate directly into Sqalible's payroll calculation engine automatically. No CSV downloads or manual ledger entry required."
            },
            {
              q: "Can we activate Deskmerit for only select departments?",
              a: "Yes. You can enable Deskmerit per department, role, or team. For instance, you can turn on Tracker Plus for engineering and delivery squads while keeping back-office staff on standard attendance."
            },
            {
              q: "How are public holidays and approved leaves reconciled?",
              a: "Because Deskmerit is natively unified with Sqalible HRMS, approved leaves and gazetted holidays on the company calendar are automatically accounted for, so team members on leave are never erroneously flagged as absent."
            }
          ]}
        />

        <DeskmeritCtaBand
          title="Already on Sqalible? Switch it on today."
          subtitle="Talk to your Kombee account manager or enable Deskmerit from your admin panel."
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
