import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import {
  Calculator,
  Download,
  FileSpreadsheet,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  ArrowRight,
} from "lucide-react";

export function ToolsAndTemplatesPage() {
  const location = useLocation();
  const path = location.pathname;

  // Active tool mode
  const isOvertime = path.includes("overtime");
  const isTimesheet = path.includes("timesheet");
  const isPolicy = path.includes("policy");

  // Utilisation Calculator State
  const [billableHours, setBillableHours] = useState(32);
  const [availableHours, setAvailableHours] = useState(40);
  const utilisationRate = availableHours > 0 ? ((billableHours / availableHours) * 100).toFixed(1) : "0.0";

  // Overtime Calculator State
  const [hourlyRate, setHourlyRate] = useState(35);
  const [standardHours, setStandardHours] = useState(40);
  const [actualHours, setActualHours] = useState(48);
  const [otMultiplier, setOtMultiplier] = useState(1.5);

  const otHours = Math.max(0, actualHours - standardHours);
  const basePay = Math.min(actualHours, standardHours) * hourlyRate;
  const otPay = otHours * hourlyRate * otMultiplier;
  const totalPay = basePay + otPay;

  // Policy Generator State
  const [companyName, setCompanyName] = useState("Acme Technologies");
  const [copiedPolicy, setCopiedPolicy] = useState(false);

  const handleCopyPolicy = () => {
    navigator.clipboard.writeText(`EMPLOYEE WORKPLACE TIME TRACKING POLICY (${companyName})
1. Purpose: Accurate client billing and objective presence accounting.
2. Transparency: No keystroke logging, no webcam, and screenshots off by default.
3. Private Time: Staff may activate Private Time at any moment for personal breaks.
4. Access: Every employee retains full access to their own recorded logs and timesheets.`);
    setCopiedPolicy(true);
    setTimeout(() => setCopiedPolicy(false), 3000);
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
              <Link to="/tools" className="hover:underline text-slate-300">Resources</Link>
              <span className="text-slate-500">/</span>
              <span>
                {isOvertime
                  ? "Overtime Calculator"
                  : isTimesheet
                  ? "Timesheet Template"
                  : isPolicy
                  ? "Monitoring Policy"
                  : "Utilisation Calculator"}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Heading & Pitch */}
              <div className="lg:col-span-7 space-y-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#F0ABFC] bg-[#61126E]/40 px-3.5 py-1 rounded-full inline-block border border-[#A81CD0]/50 shadow-xs">
                  {isTimesheet || isPolicy ? "FREE COMPLIANCE TEMPLATE" : "FREE PRODUCTIVITY TOOL"}
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  {isOvertime ? (
                    <>
                      Work out overtime hours & pay <span className="text-[#D8B4FE]">with statutory accuracy.</span>
                    </>
                  ) : isTimesheet ? (
                    <>
                      Professional weekly timesheet <span className="text-[#D8B4FE]">Excel & Sheets template.</span>
                    </>
                  ) : isPolicy ? (
                    <>
                      A fair employee monitoring policy <span className="text-[#D8B4FE]">built on mutual trust.</span>
                    </>
                  ) : (
                    <>
                      Calculate billable utilisation <span className="text-[#D8B4FE]">in seconds.</span>
                    </>
                  )}
                </h1>
                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  {isOvertime
                    ? "Calculate overtime hours, standard thresholds, and overtime multipliers (1.5x, 2.0x) with regional support for India, Australia, NZ, and the Middle East."
                    : isTimesheet
                    ? "Formula-ready, printable weekly timesheet templates designed for client billing, project reconciliation, and automated Deskmerit sync."
                    : isPolicy
                    ? "A legally audited workplace transparency policy template aligned with DPDP, NSW surveillance acts, and zero-keylogging standards."
                    : "Billable hours divided by available hours with automated team benchmarks. Stop guessing utilization and optimize your engineering delivery."}
                </p>
                <div className="flex flex-row items-center gap-3 sm:gap-3.5 pt-2">
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#61126E] hover:bg-[#4E0E58] text-white font-extrabold text-xs sm:text-sm shadow-lg hover:shadow-glow-ember transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Start free trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#10192A] hover:bg-[#1A264F] text-white font-bold text-xs sm:text-sm border border-slate-700 hover:border-slate-500 transition-all cursor-pointer whitespace-nowrap shrink-0"
                  >
                    <span>Book a demo</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Authentic Tool & Template Screenshot in macOS Browser Window Frame */}
              <div className="lg:col-span-5 min-w-0 max-w-full">
                <div className="w-full max-w-full rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-2xl overflow-hidden group">
                  <div className="bg-[#070E1A] p-1.5 sm:p-2 overflow-hidden w-full max-w-full">
                    <img
                      src={
                        isOvertime
                          ? "/images/figma/reports-extra-hours.png"
                          : isTimesheet
                          ? "/images/figma/timesheet-time-ledger.png"
                          : isPolicy
                          ? "/images/figma/privacy-settings-audit.png"
                          : "/images/figma/productivity-breakdown.png"
                      }
                      alt="Deskmerit Workplace Tool and Compliance Template Preview"
                      className="w-full max-w-full h-auto rounded-lg object-contain shadow-md transition-transform duration-300 group-hover:scale-[1.01]"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content depending on active tab */}
        <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isOvertime && !isTimesheet && !isPolicy && (
            /* UTILISATION CALCULATOR */
            <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E8D5EC] shadow-card space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-2">
                  Free Tool
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                  Calculate billable utilisation in seconds.
                </h1>
                <p className="text-xs sm:text-sm text-[#4A5370] mt-2">
                  Billable hours ÷ available hours, with team benchmarks and automated tracking.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-2">
                    Billable hours logged this week: <strong className="text-sm font-bold text-[#61126E]">{billableHours}h</strong>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="60"
                    value={billableHours}
                    onChange={(e) => setBillableHours(Number(e.target.value))}
                    className="w-full accent-[#61126E] h-2 bg-[#E8D5EC] rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-2">
                    Total available working hours: <strong className="text-sm font-bold text-[#0F1730]">{availableHours}h</strong>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    value={availableHours}
                    onChange={(e) => setAvailableHours(Number(e.target.value))}
                    className="w-full accent-[#0F1730] h-2 bg-[#E8D5EC] rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              {/* Result Callout */}
              <div className="p-8 rounded-2xl bg-[#FAF4FB] border border-[#E8D5EC] text-center space-y-2">
                <div className="text-xs font-semibold text-[#4A5370] uppercase tracking-wider">
                  Calculated Billable Utilisation
                </div>
                <div className="text-5xl font-extrabold text-[#0F1730] font-display tnum">
                  {utilisationRate}%
                </div>
                <div className="text-xs text-[#12B886] font-semibold pt-1">
                  {Number(utilisationRate) >= 80 ? "✓ Healthy billable rate for IT services" : "⚠ Below standard 80% delivery target"}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8D5EC] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#4A5370]">
                  Tired of manual formulas? Deskmerit tracks billable rates automatically from Jira.
                </div>
                <Link
                  to="/signup"
                  className="px-5 py-2.5 rounded-[12px] bg-[#61126E] hover:bg-[#4E0E58] text-white font-extrabold text-xs shadow-md hover:shadow-glow-ember transition-colors shrink-0"
                >
                  Automate utilisation →
                </Link>
              </div>
            </div>
          )}

          {isOvertime && (
            /* OVERTIME CALCULATOR */
            <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E8D5EC] shadow-card space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-2">
                  Free Tool
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                  Work out overtime hours and pay.
                </h1>
                <p className="text-xs sm:text-sm text-[#4A5370] mt-2">
                  Hours, threshold and overtime multiplier with presets for IN, AU, NZ and UAE.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-1">Base hourly rate ($ or ₹)</label>
                  <input
                    type="number"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8D5EC] bg-[#FAF4FB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-1">Standard weekly hours (Threshold)</label>
                  <input
                    type="number"
                    value={standardHours}
                    onChange={(e) => setStandardHours(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8D5EC] bg-[#FAF4FB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-1">Actual hours worked</label>
                  <input
                    type="number"
                    value={actualHours}
                    onChange={(e) => setActualHours(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8D5EC] bg-[#FAF4FB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0F1730] mb-1">Overtime multiplier</label>
                  <select
                    value={otMultiplier}
                    onChange={(e) => setOtMultiplier(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#E8D5EC] bg-[#FAF4FB]"
                  >
                    <option value={1.5}>1.5x (Time and a half - standard)</option>
                    <option value={2.0}>2.0x (Double time - weekend/public holiday)</option>
                    <option value={1.25}>1.25x (125% rate)</option>
                  </select>
                </div>
              </div>

              {/* Overtime Results */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 rounded-xl bg-[#FAF4FB] border border-[#E8D5EC]">
                  <div className="text-xs text-[#4A5370]">Overtime hours</div>
                  <div className="text-2xl font-bold text-[#0F1730] mt-1 font-display tnum">{otHours}h</div>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF4FB] border border-[#E8D5EC]">
                  <div className="text-xs text-[#4A5370]">Overtime pay</div>
                  <div className="text-2xl font-bold text-[#4E0E58] mt-1 font-display tnum">${otPay.toFixed(2)}</div>
                </div>
                <div className="p-4 rounded-xl bg-[#F6EDF8] border border-[#61126E]/30">
                  <div className="text-xs text-[#4E0E58] font-semibold">Total pay</div>
                  <div className="text-2xl font-bold text-[#0F1730] mt-1 font-display tnum">${totalPay.toFixed(2)}</div>
                </div>
              </div>
            </div>
          )}

          {isTimesheet && (
            /* TIMESHEET TEMPLATE */
            <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E8D5EC] shadow-card space-y-8">
              <div className="text-center max-w-2xl mx-auto">
                <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-2">
                  Free Template
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                  Free weekly timesheet template.
                </h1>
                <p className="text-xs sm:text-sm text-[#4A5370] mt-2">
                  Clean, printable and formula-ready Excel & Google Sheets template — or let Deskmerit fill it for you.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF4FB] border border-[#E8D5EC] space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#E8D5EC]">
                  <span className="font-bold text-xs text-[#0F1730]">Template Preview: Weekly_Timesheet_v1.0.xlsx</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                    Formula enabled
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-[#E8D5EC] text-[#4A5370]">
                        <th className="py-2">Day</th>
                        <th className="py-2">Task / Project</th>
                        <th className="py-2">Start</th>
                        <th className="py-2">End</th>
                        <th className="py-2">Hours</th>
                        <th className="py-2">Billable</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8D5EC]/60 text-[#0F1730]">
                      <tr>
                        <td className="py-2">Mon</td>
                        <td>Acme Retail (Checkout API)</td>
                        <td>09:00</td>
                        <td>17:30</td>
                        <td className="font-mono">8.0h</td>
                        <td className="text-[#12B886]">Yes</td>
                      </tr>
                      <tr>
                        <td className="py-2">Tue</td>
                        <td>Northwind (Pipeline fix)</td>
                        <td>09:30</td>
                        <td>18:00</td>
                        <td className="font-mono">8.0h</td>
                        <td className="text-[#12B886]">Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => alert("Downloaded Weekly_Timesheet_Template.csv")}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0F1730] text-white text-xs font-bold hover:bg-[#24305A] transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Template (.xlsx)
                  </button>
                </div>
              </div>
            </div>
          )}

          {isPolicy && (
            /* POLICY TEMPLATE */
            <div className="bg-[#FFFFFF] rounded-[24px] p-8 sm:p-12 border border-[#E8D5EC] shadow-card space-y-6">
              <div className="text-center max-w-2xl mx-auto">
                <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-2">
                  Free Policy Template
                </div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730]">
                  A fair employee monitoring policy you can adapt.
                </h1>
                <p className="text-xs sm:text-sm text-[#4A5370] mt-2">
                  Aligned with Deskmerit's privacy promise, India DPDP Act, and NSW Workplace Surveillance rules.
                </p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F1730] mb-1">Company name</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full max-w-md px-3 py-2 text-xs rounded-xl border border-[#E8D5EC] bg-[#FAF4FB] text-[#0F1730]"
                />
              </div>

              <div className="p-6 rounded-2xl bg-[#0F1730] text-white font-mono text-xs leading-relaxed space-y-3 relative">
                <button
                  type="button"
                  onClick={handleCopyPolicy}
                  className="absolute top-4 right-4 px-3 py-1.5 rounded-lg bg-[#24305A] hover:bg-[#61126E] text-white text-[11px] font-sans font-bold flex items-center gap-1.5 transition-colors"
                >
                  {copiedPolicy ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedPolicy ? "Copied!" : "Copy text"}
                </button>

                <div className="text-[#F0ABFC] font-bold font-sans">
                  EMPLOYEE WORKPLACE TIME TRACKING POLICY ({companyName})
                </div>
                <p className="text-[#9AA1B2]">
                  1. Purpose: {companyName} records computer work time strictly for billing accuracy, project budgeting, and payroll presence.
                </p>
                <p className="text-[#9AA1B2]">
                  2. Privacy Non-Negotiables: No keystrokes are recorded. Webcam and microphones are permanently disabled.
                </p>
                <p className="text-[#9AA1B2]">
                  3. Private Time: Every team member has the unilateral right to engage Private Time without explanation.
                </p>
                <p className="text-[#9AA1B2]">
                  4. Employee First-View: Employees may review their complete timeline before weekly timesheets are finalized.
                </p>
              </div>
            </div>
          )}
        </section>

        {/* Signature Split FAQ Section */}
        <DeskmeritFaq
          title="Tools & Template FAQs"
          category="FAQS"
          helpTitle="Ready to Automate Calculations?"
          helpDescription="Rather than maintaining manual spreadsheets and calculators, let Deskmerit calculate utilization, overtime and payroll exports automatically."
          customFaqs={[
            {
              q: "Are these calculators and templates completely free for commercial use?",
              a: "Yes. All Excel templates, policy documents, and calculators on this page are 100% free with no registration or credit card required. You may adapt and distribute them within your organization."
            },
            {
              q: "How does Deskmerit automate employee utilization calculations?",
              a: "Deskmerit maps logged hours directly to billable task tags and client contracts from Jira or Azure DevOps, automatically dividing billable hours by total shift duration to generate instant utilization percentages."
            },
            {
              q: "Can the employee monitoring policy template be tailored to our jurisdiction?",
              a: "Yes. The text is designed as an open starting point that complies with the core requirements of GDPR, India DPDP Act 2023, and Australian workplace surveillance standards."
            },
            {
              q: "Does Deskmerit export timesheet reports into Excel or CSV?",
              a: "Yes. Deskmerit offers automated one-click CSV and Excel exports, direct API endpoints, and automatic synchronization into accounting software like QuickBooks and Xero."
            }
          ]}
        />

        <DeskmeritCtaBand />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
