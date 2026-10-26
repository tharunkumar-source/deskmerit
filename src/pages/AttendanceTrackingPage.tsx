import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DeskmeritHeader } from "../components/DeskmeritHeader";
import { DeskmeritFooter } from "../components/DeskmeritFooter";
import { DeskmeritFaq } from "../components/DeskmeritFaq";
import { DeskmeritCtaBand } from "../components/DeskmeritCtaBand";
import {
  Calendar,
  Clock,
  Globe2,
  Moon,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  AlertCircle,
  ArrowRight,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MapPin,
  Check,
} from "lucide-react";

export function AttendanceTrackingPage() {
  const [selectedDay, setSelectedDay] = useState<number | null>(18);
  const [minPresentHours, setMinPresentHours] = useState(6);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // June 2026 calendar days: 1 is Monday, 30 days total
  const calendarDays = [
    { day: 1, status: "Present" },
    { day: 2, status: "Present" },
    { day: 3, status: "Present" },
    { day: 4, status: "Present" },
    { day: 5, status: "Present" },
    { day: 6, status: "Weekend" },
    { day: 7, status: "Weekend" },
    { day: 8, status: "Present" },
    { day: 9, status: "Present" },
    { day: 10, status: "Leave" },
    { day: 11, status: "Leave" },
    { day: 12, status: "Present" },
    { day: 13, status: "Weekend" },
    { day: 14, status: "Weekend" },
    { day: 15, status: "Present" },
    { day: 16, status: "Present" },
    { day: 17, status: "Present" },
    { day: 18, status: "Corrected", note: "18 Jun · corrected by HR (Nikita S.) — client workshop logged as other work · before: Absent → after: Present" },
    { day: 19, status: "Present" },
    { day: 20, status: "Weekend" },
    { day: 21, status: "Weekend" },
    { day: 22, status: "Present" },
    { day: 23, status: "Present" },
    { day: 24, status: "Present" },
    { day: 25, status: "Present" },
    { day: 26, status: "Present" },
    { day: 27, status: "Weekend" },
    { day: 28, status: "Weekend" },
    { day: 29, status: "Present" },
    { day: 30, status: "Present" },
  ];

  const timezones = [
    { city: "Bengaluru", zone: "Asia/Kolkata", week: "Mon–Fri · closes 00:00 local" },
    { city: "Dubai", zone: "Asia/Dubai", week: "Mon–Fri · closes 00:00 local" },
    { city: "Riyadh", zone: "Asia/Riyadh", week: "Sun–Thu · closes 00:00 local" },
    { city: "Sydney", zone: "Australia/Sydney", week: "Mon–Fri · DST aware · closes 00:00" },
    { city: "Auckland", zone: "Pacific/Auckland", week: "Mon–Fri · DST aware · closes 00:00" },
  ];

  const faqs = [
    {
      q: "Do we need biometric thumb scanners or punch cards?",
      a: "No hardware required. Attendance is calculated automatically from actual computer activity, accepted calendar events, and manual entries for client travel.",
    },
    {
      q: "Does Deskmerit feed attendance directly into our HRMS?",
      a: "Yes. Deskmerit is built directly into Sqalible HRMS with 1-click provisioning. It also offers a versioned REST API for BambooHR, Darwinbox, Workday, and Zoho People.",
    },
    {
      q: "How does Deskmerit handle night shifts crossing midnight?",
      a: "An overnight shift session (e.g. 21:00 to 03:00) is evaluated as a contiguous shift against your daily threshold so employees aren't unfairly marked absent on either day.",
    },
    {
      q: "Can HR administrators manually correct attendance?",
      a: "Yes. Every correction is audited with timestamp, author, previous status, and justification reason. Historical logs can never be silently overwritten.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#0F1730] font-sans">
      <DeskmeritHeader />

      <main>
        {/* SECTION 1: Deep Navy Hero (Sqalible Screenshot 1) */}
        <section className="bg-[#0A0F1D] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-[#24305A] relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#38BDF8]/10 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb matching Reference */}
            <div className="text-xs text-[#FF5A36] font-semibold flex items-center gap-2 mb-6">
              <Link to="/" className="hover:underline text-slate-300">Home</Link>
              <span className="text-slate-500">/</span>
              <Link to="/features" className="hover:underline text-slate-300">Product</Link>
              <span className="text-slate-500">/</span>
              <span>Attendance Tracking</span>
            </div>

            <div className="grid grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Copy */}
              <div className="col-span-12 lg:col-span-6 space-y-6">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36] bg-[#FFE6DF]/15 px-3.5 py-1 rounded-full inline-block border border-[#FF5A36]/30">
                  WORKFORCE PRESENCE · ZERO BIOMETRICS
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-tight text-white">
                  Attendance that reflects real work,{" "}
                  <span className="text-[#FF5A36] block">not just a login.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                  Deskmerit computes daily attendance from tracked work, accepted calendar meetings, and manually logged off-computer sessions — so team members in client workshops all day are never marked absent.
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

              {/* Right Framed App Mockup (macOS Window + Authentic Attendance Matrix) */}
              <div className="col-span-12 lg:col-span-6">
                <div className="rounded-2xl border border-slate-700/80 bg-[#0F1E36] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                  <div className="bg-[#0A1628] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-[#ED6A5E]" />
                      <span className="w-3 h-3 rounded-full bg-[#F5BF4F]" />
                      <span className="w-3 h-3 rounded-full bg-[#62C554]" />
                    </div>
                    <div className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-3 py-1 rounded-md border border-slate-800">
                      app.deskmerit.com/attendance/matrix
                    </div>
                    <span className="text-[11px] font-bold text-[#FF5A36] flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#FF5A36] animate-pulse" />
                      Live Verified
                    </span>
                  </div>

                  <div className="bg-slate-950 p-1 sm:p-2">
                    <img
                      src="/images/figma/attendance-company-matrix.png"
                      alt="Deskmerit Workforce Attendance Matrix and Daily Work Verification"
                      className="w-full h-auto object-contain rounded-lg block shadow-inner"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Key Capabilities (Sqalible Screenshot 1) */}
        {/* SECTION 2: Key Capabilities (Matching Capabilities Section Style on White BG) */}
        <section className="py-20 lg:py-24 bg-[#FFFFFF] border-b border-[#E6E2D8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
                Core Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-tight">
                Key Capabilities of Attendance Tracking
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] hover:border-[#FF5A36] hover:bg-white transition-all hover:shadow-card flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E6E2D8] text-[#0F1730] group-hover:bg-[#FF5A36] group-hover:border-[#FF5A36] group-hover:text-white flex items-center justify-center mb-6 shadow-xs transition-all duration-200">
                    <Globe2 className="w-6 h-6 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-3">
                    Every Employee's Own Timezone
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                    Days close at each person's local midnight. Teams distributed across Bengaluru, Dubai, Riyadh, Sydney, and Auckland get accurate days for everyone.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E6E2D8] text-xs font-semibold text-[#FF5A36]">
                  DST Aware · Multi-Region
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] hover:border-[#FF5A36] hover:bg-white transition-all hover:shadow-card flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E6E2D8] text-[#0F1730] group-hover:bg-[#FF5A36] group-hover:border-[#FF5A36] group-hover:text-white flex items-center justify-center mb-6 shadow-xs transition-all duration-200">
                    <Moon className="w-6 h-6 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-3">
                    Fair for Late Nights & Shifts
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                    A session crossing midnight is judged as a whole against your shift minimum — so a 6-hour night shift counts as present, never two separate absences.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E6E2D8] text-xs font-semibold text-[#FF5A36]">
                  Overnight Shift Integrity
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-[#F7F4EE] border border-[#E6E2D8] hover:border-[#FF5A36] hover:bg-white transition-all hover:shadow-card flex flex-col justify-between group">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E6E2D8] text-[#0F1730] group-hover:bg-[#FF5A36] group-hover:border-[#FF5A36] group-hover:text-white flex items-center justify-center mb-6 shadow-xs transition-all duration-200">
                    <FileCheck className="w-6 h-6 transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0F1730] group-hover:text-[#FF5A36] transition-colors mb-3">
                    Audited HR Corrections
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4A5370] leading-relaxed">
                    Set the minimum threshold for a present day. Every admin correction is logged with author, reason, and before/after values that are never overwritten.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E6E2D8] text-xs font-semibold text-[#FF5A36]">
                  Immutable Audit Trail
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Deep Dark Section "How Attendance Operates in Practice" (Architectural Line-Divided Segmented Grid) */}
        <section className="py-20 lg:py-28 bg-[#0A0F1D] text-white border-b border-[#24305A]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2 font-mono">
                AUTOMATED VERIFICATION
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                How Attendance Operates in Practice
              </h2>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-2xl">
                A transparent 4-stage operational process designed for speed, accountability, and statutory compliance integrity.
              </p>
            </div>

            {/* Architectural Line-Divided Segmented Grid (Matching Sqalible Reference) */}
            <div className="border-t border-b border-slate-800">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
                {/* Step 1 */}
                <div className="py-10 px-6 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                  <div className="text-xs font-bold font-mono text-[#FF5A36] mb-4">STEP 01</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-3">
                    Passive Work Ingestion
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Desktop agent detects first user input in employee's local timezone and begins passive tally.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="py-10 px-6 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                  <div className="text-xs font-bold font-mono text-[#FF5A36] mb-4">STEP 02</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-3">
                    Calendar Meeting Blend
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Accepted Google & Outlook meetings merge seamlessly so off-keyboard Zoom/client calls count as work.
                  </p>
                </div>

                {/* Step 3 */}
                <div className="py-10 px-6 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                  <div className="text-xs font-bold font-mono text-[#FF5A36] mb-4">STEP 03</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-3">
                    Threshold Evaluation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    At local midnight, engine compares total active + meeting minutes against team policy (e.g. 6h minimum).
                  </p>
                </div>

                {/* Step 4 */}
                <div className="py-10 px-6 sm:px-8 flex flex-col justify-start hover:bg-white/[0.02] transition-colors group">
                  <div className="text-xs font-bold font-mono text-[#FF5A36] mb-4">STEP 04</div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-snug mb-3">
                    HRMS & Payroll Feed
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    Validated status (Present, Half-Day, Leave) pushes directly to Sqalible HRMS or payroll REST API.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Signature Split FAQ Layout */}
        <DeskmeritFaq
          title="Attendance Tracking FAQs"
          category="COMMON QUESTIONS"
          customFaqs={faqs}
          helpTitle="Need Custom Roster or Shift Rules?"
          helpDescription="Configure rotating contact center rosters, 24/7 support shifts, or regional Sunday–Thursday schedules in minutes."
        />

        {/* SECTION 5: Standard Deskmerit CTA Band */}
        <DeskmeritCtaBand
          pretitle="DEPLOY IN MINUTES"
          title="Attendance without the punch clock or biometric queues."
          subtitle="Set up in under 10 minutes. Windows, macOS & Linux supported."
        />
      </main>

      <DeskmeritFooter />
    </div>
  );
}
