import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { Check, ArrowRight, ShieldCheck, Download, CheckCircle2, Clock } from "lucide-react";
import { useCurrency } from "../utils/currencyContext";

export function TrialSignupPage() {
  const navigate = useNavigate();
  const { currency } = useCurrency();

  const [step, setStep] = useState<"form" | "provisioning" | "ready">("form");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    plan: "pro",
    region: "India (Mumbai · ap-south-1)",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("provisioning");
    setTimeout(() => {
      setStep("ready");
    }, 1800);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730]">
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
              <span className="text-slate-300">Workspace</span>
              <span className="text-slate-500">/</span>
              <span>Start Free Trial</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Heading & Value Proposition */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-block px-3.5 py-1 rounded-full bg-[#FFE6DF]/15 border border-[#FF5A36]/30 text-[11px] font-bold uppercase tracking-wider text-[#FF5A36]">
                  14-DAY FULL ENTERPRISE TRIAL
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  Start your Deskmerit workspace <span className="text-[#FF5A36] block">in 60 seconds.</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  No credit card required. Includes Tracker Plus (Jira, Azure DevOps, OpenProject), automated attendance tracking, and AI workforce queries via REST & MCP.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "14-day full feature trial with unlimited seats",
                    "Dedicated tenant isolation in your chosen cloud region",
                    "Connects with Jira, Azure DevOps or OpenProject in 2 minutes",
                    "Permanent zero keystroke logging and zero webcam guarantee",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Trust guarantee card */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-left flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Statutory Compliance Certified
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      GDPR, DPDP 2023, and NSW Workplace Surveillance Act compliant.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: macOS Provisioning Window (White Background Standard) */}
              <div className="lg:col-span-7 min-w-0 max-w-full">
                <div className="w-full max-w-full rounded-2xl border border-slate-200/90 bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] overflow-hidden">
                  {/* Window Body Form */}
                  <div className="p-4 sm:p-8 bg-white">
                    {step === "form" && (
                      <form onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div className="mb-2">
                          <h3 className="text-lg font-bold text-[#0F1730]">Create your workspace</h3>
                          <p className="text-xs text-slate-500 mt-0.5">Free 14-day sandbox · No payment method needed</p>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#0F1730] mb-1">Full name *</label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            placeholder="Ananya Sharma"
                            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-white text-[#0F1730] placeholder-slate-400 focus:outline-none focus:border-[#FF5A36] shadow-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#0F1730] mb-1">Work email *</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="ananya@company.com"
                            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-white text-[#0F1730] placeholder-slate-400 focus:outline-none focus:border-[#FF5A36] shadow-xs"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#0F1730] mb-1">Company name *</label>
                          <input
                            type="text"
                            required
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Cognitive Scale Solutions"
                            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-white text-[#0F1730] placeholder-slate-400 focus:outline-none focus:border-[#FF5A36] shadow-xs"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-[#0F1730] mb-1">Trial Plan</label>
                            <select
                              value={formData.plan}
                              onChange={(e) => setFormData({ ...formData, plan: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-white text-[#0F1730] focus:outline-none focus:border-[#FF5A36] shadow-xs cursor-pointer"
                            >
                              <option value="pro">Pro (Tracker Plus + Calendars)</option>
                              <option value="premium">Premium (White-label + Reseller)</option>
                              <option value="enterprise">Enterprise (SSO + SCIM + Residency)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-[#0F1730] mb-1">Data Residency Region</label>
                            <select
                              value={formData.region}
                              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-white text-[#0F1730] focus:outline-none focus:border-[#FF5A36] shadow-xs cursor-pointer"
                            >
                              <option value="India (Mumbai · ap-south-1)">India (Mumbai · ap-south-1)</option>
                              <option value="Australia (Sydney · ap-southeast-2)">Australia (Sydney · ap-southeast-2)</option>
                              <option value="Middle East (UAE · me-central-1)">Middle East (UAE · me-central-1)</option>
                              <option value="United States (N. Virginia · us-east-1)">United States (N. Virginia · us-east-1)</option>
                            </select>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E94A27] text-white font-extrabold text-xs shadow-md transition-colors flex items-center justify-center gap-2 mt-2 cursor-pointer"
                        >
                          Create workspace →
                        </button>

                        <div className="text-[11px] text-slate-500 text-center pt-2">
                          🔒 No credit card required. You agree to our <Link to="/legal/terms" className="underline hover:text-[#FF5A36]">Terms</Link> and <Link to="/legal/privacy" className="underline hover:text-[#FF5A36]">Privacy Policy</Link>.
                        </div>
                      </form>
                    )}

                    {step === "provisioning" && (
                      <div className="text-center py-16 space-y-4">
                        <div className="w-12 h-12 rounded-full border-4 border-[#FF5A36] border-t-transparent animate-spin mx-auto" />
                        <h3 className="text-xl font-bold text-white">Setting up your secure workspace...</h3>
                        <p className="text-xs text-slate-400">
                          Configuring tenant isolation in {formData.region}
                        </p>
                      </div>
                    )}

                    {step === "ready" && (
                      <div className="text-center py-8 space-y-6 max-w-xl mx-auto">
                        <div className="w-16 h-16 rounded-full bg-[#FFE6DF] text-[#FF5A36] flex items-center justify-center mx-auto">
                          <CheckCircle2 className="w-10 h-10" />
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-white">
                            Workspace created for {formData.company}!
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-300 mt-1.5 leading-relaxed">
                            Your 14-day full trial is now active. Next step: download the lightweight desktop agent to start tracking from your Jira or Azure tickets.
                          </p>
                        </div>

                        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-left text-xs space-y-2">
                          <div className="font-bold text-white">Quick Setup Steps:</div>
                          <div className="flex items-center gap-2 text-slate-300">
                            <Check className="w-3.5 h-3.5 text-[#FF5A36]" /> 1. Download the agent for your OS below
                          </div>
                          <div className="flex items-center gap-2 text-slate-300">
                            <Check className="w-3.5 h-3.5 text-[#FF5A36]" /> 2. Sign in with <strong>{formData.email}</strong>
                          </div>
                          <div className="flex items-center gap-2 text-slate-300">
                            <Check className="w-3.5 h-3.5 text-[#FF5A36]" /> 3. Connect your Jira personal access token and press Start
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                          <Link
                            to="/download"
                            className="w-full sm:w-auto px-6 py-3 rounded-[12px] bg-[#FF5A36] text-white font-extrabold text-xs flex items-center justify-center gap-2 hover:bg-[#E94A27] shadow-md hover:shadow-glow-ember transition-colors"
                          >
                            <Download className="w-4 h-4" /> Download Desktop Agent
                          </Link>
                          <Link
                            to="/"
                            className="w-full sm:w-auto px-6 py-3 rounded-[12px] bg-slate-900 border border-slate-700 text-white font-semibold text-xs text-center hover:bg-slate-800"
                          >
                            Go to dashboard preview
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {step === "form" && (
          <DeskmeritFaq
            title="Trial & Onboarding FAQs"
            category="FAQS"
            helpTitle="Need Help Rolling Out to Your Team?"
            helpDescription="Our enterprise onboarding engineers can pre-provision your team workspaces, configure Jira tokens, and coordinate pilot trials."
            customFaqs={[
              {
                q: "Is a credit card required to start the 14-day free trial?",
                a: "No. You never need to enter credit card details to start a trial. At the end of the 14 days, you can decide whether to upgrade or continue on our free tier."
              },
              {
                q: "Can I invite other team members during the trial period?",
                a: "Yes. All trial workspaces support unlimited seat invitations with full access to Tracker Plus, calendar sync, and payroll reporting."
              },
              {
                q: "What happens to our tracked data after the trial ends?",
                a: "All your team members' time records, projects, and custom settings remain securely saved in your tenant. If you do not upgrade immediately, your workspace gracefully shifts to the free Starter plan."
              },
              {
                q: "Can we switch between Pro and Premium during the trial?",
                a: "Yes. You can switch plan features anytime within your Workspace Settings to test white-label reporting, API webhooks, or additional PM tool integrations."
              }
            ]}
          />
        )}
      </main>

      <DeskmeritFooter />
    </div>
  );
}
