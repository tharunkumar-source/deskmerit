import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { CheckCircle2, Check, ArrowRight, ShieldCheck, Clock, User, Sparkles } from "lucide-react";

export function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "16–50",
    country: "India",
    pmTool: "Jira",
    isSqalibleUser: "No",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF4FB] text-[#0F1730]">
      <DeskmeritHeader />

      <main>
        {/* Standard Consistent Dark Hero */}
        <section className="bg-gradient-to-b from-[#0A1628] via-[#0D1D35] to-[#0A1628] text-white pt-8 pb-16 lg:pt-12 lg:pb-24 relative overflow-hidden">
          {/* Dual Radial Glows */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#24305A]/40 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -top-24 right-10 w-[400px] h-[250px] bg-[#61126E]/10 blur-[100px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <div className="text-xs text-slate-400 font-medium flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">Home</Link>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">Product Walkthrough</span>
              <span className="text-slate-500">/</span>
              <span className="text-[#D8B4FE] font-bold">Book a Demo</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Column: Heading & Value Proposition */}
              <div className="lg:col-span-5 space-y-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#F0ABFC] bg-[#61126E]/40 px-3.5 py-1 rounded-full inline-block border border-[#A81CD0]/50 shadow-xs">
                  20-MINUTE LIVE WALKTHROUGH
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  See Deskmerit with your own workflow <span className="text-[#D8B4FE]">in 20 minutes.</span>
                </h1>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                  We will walk you through your exact setup — whether you're syncing Jira issues, configuring attendance for Sunday–Thursday shifts, or connecting Sqalible HRMS.
                </p>

                <div className="space-y-3 pt-2">
                  {[
                    "Tracker Plus live demonstration with your own PM tool",
                    "Attendance rules tailored to your country and work week",
                    "Reports your finance & delivery team will actually defend",
                    "Transparent proposal in your local currency (INR, AUD, NZD, AED, USD)",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-[#F6EDF8] text-[#D8B4FE] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                        <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Specialist Card */}
                <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-left flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#61126E] text-white font-bold text-xs flex items-center justify-center shrink-0 shadow-xs">
                    DM
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">
                      Direct engineering product specialist
                    </div>
                    <div className="text-[11px] text-slate-400 mt-0.5">
                      Available in India (IST), Gulf (GST), and Australia/NZ (AEST) timezones.
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Clean White Window with Booking Form (White Background Only for Form) */}
              <div className="lg:col-span-7 min-w-0 max-w-full">
                <div className="w-full max-w-full rounded-2xl border border-slate-200/90 bg-white shadow-2xl overflow-hidden text-[#0F1730]">
                  {/* Window Body Form */}
                  <div className="p-4 sm:p-8 bg-white">
                    {submitted ? (
                      <div className="text-center py-10 space-y-4">
                        <div className="w-14 h-14 rounded-full bg-[#F6EDF8] text-[#D8B4FE] flex items-center justify-center mx-auto shadow-sm">
                          <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0F1730]">Demo Walkthrough Scheduled!</h3>
                        <p className="text-xs sm:text-sm text-[#4A5370] max-w-md mx-auto leading-relaxed">
                          Thank you, <strong>{formData.name}</strong>. A product specialist will email you at <strong>{formData.email}</strong> within one working day with a calendar link.
                        </p>
                        <div className="pt-4">
                          <Link
                            to="/"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D8B4FE] hover:underline"
                          >
                            Return to home page <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4 text-left">
                        <div className="mb-2">
                          <h3 className="text-lg font-bold text-[#0F1730]">Book your live walkthrough</h3>
                          <p className="text-xs text-slate-500 mt-0.5">We’ll reply within one working day with calendar slots.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Full name *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Ananya Sharma"
                              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/70 text-[#0F1730] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#61126E] focus:ring-2 focus:ring-[#61126E]/10"
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
                              placeholder="ananya@company.com"
                              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/70 text-[#0F1730] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#61126E] focus:ring-2 focus:ring-[#61126E]/10"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Company *
                            </label>
                            <input
                              type="text"
                              required
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              placeholder="Acme Technologies"
                              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/70 text-[#0F1730] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#61126E] focus:ring-2 focus:ring-[#61126E]/10"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Team size *
                            </label>
                            <select
                              value={formData.teamSize}
                              onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/70 text-[#0F1730] focus:bg-white focus:outline-none focus:border-[#61126E]"
                            >
                              <option value="1–15">1–15 seats</option>
                              <option value="16–50">16–50 seats</option>
                              <option value="51–150">51–150 seats</option>
                              <option value="151–500">151–500 seats</option>
                              <option value="500+">500+ seats</option>
                            </select>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Country / Region *
                            </label>
                            <select
                              value={formData.country}
                              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/70 text-[#0F1730] focus:bg-white focus:outline-none focus:border-[#61126E]"
                            >
                              <option value="India">India (₹ INR)</option>
                              <option value="Australia">Australia (A$ AUD)</option>
                              <option value="New Zealand">New Zealand (NZ$ NZD)</option>
                              <option value="UAE">United Arab Emirates (AED)</option>
                              <option value="Saudi Arabia">Saudi Arabia (SAR)</option>
                              <option value="United States">United States (USD)</option>
                              <option value="Other">Other Region</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Project tools you use
                            </label>
                            <input
                              type="text"
                              value={formData.pmTool}
                              onChange={(e) => setFormData({ ...formData, pmTool: e.target.value })}
                              placeholder="Jira, Azure DevOps, OpenProject, etc."
                              className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/70 text-[#0F1730] placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#61126E] focus:ring-2 focus:ring-[#61126E]/10"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Already on Sqalible HRMS?
                          </label>
                          <select
                            value={formData.isSqalibleUser}
                            onChange={(e) => setFormData({ ...formData, isSqalibleUser: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-50/70 text-[#0F1730] focus:bg-white focus:outline-none focus:border-[#61126E]"
                          >
                            <option value="No">No, evaluating standalone Deskmerit</option>
                            <option value="Yes">Yes, want to activate the HRMS add-on</option>
                          </select>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3.5 rounded-xl bg-[#61126E] hover:bg-[#4E0E58] text-white font-bold text-xs transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2 cursor-pointer"
                        >
                          Schedule Product Demo →
                        </button>

                        <p className="text-[11px] text-slate-500 text-center pt-1">
                          By submitting you agree to our <Link to="/legal/privacy" className="underline hover:text-[#0F1730]">Privacy Policy</Link>. We never sell or share data.
                        </p>
                      </form>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Split FAQ Section */}
        <DeskmeritFaq
          title="Demo & Evaluation FAQs"
          category="FAQS"
          helpTitle="Prefer to Test Immediately?"
          helpDescription="You can start an instant 14-day self-serve trial right now with no credit card required and full enterprise feature access."
          customFaqs={[
            {
              q: "How long does a typical product walkthrough call take?",
              a: "Our product specialists tailor the call to your requirements in 25–30 minutes, covering Jira/Azure DevOps integration setup, attendance automation, and client billing reporting."
            },
            {
              q: "Can other team leaders or stakeholders join the session?",
              a: "Yes. Feel free to invite your CTO, Engineering Leads, HR Operations Managers, or delivery directors so all technical and compliance questions are answered together."
            },
            {
              q: "Do we need IT involvement before booking the demo?",
              a: "No IT preparation or server setup is required. We demonstrate the agent workflow and dashboard analytics in real-time using live sandbox workspaces."
            },
            {
              q: "Can we test custom billing rates or local currency in the demo?",
              a: "Yes. We configure sample timesheet rates in your local currency (INR, AUD, NZD, AED, SAR, or USD) and show you how project budgets and margins calculate automatically."
            }
          ]}
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
