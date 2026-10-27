import React, { useState, useEffect } from "react";
import { MousePointerClick, PlayCircle, BarChart3, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export function DeskmeritHowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      num: "1",
      tabTitle: "1. Pick your task",
      tabSub: "Jira & DevOps Sync",
      icon: MousePointerClick,
      badge: "Zero-Second Login",
      badgeColor: "bg-[#E6F8F3] text-[#0E8A64] border-[#B3EAD9]",
      headline: "Pick Your Task from Jira, Azure DevOps, or OpenProject",
      description:
        "Open the Deskmerit desktop agent and select your assigned ticket. Task ID, client billing rates, and project budgets are pre-mapped with zero manual configuration.",
      bullets: [
        "Bi-directional sync with Jira, Azure DevOps & OpenProject",
        "Pre-mapped hourly rates, client accounts & burn budgets",
        "Zero-second login friction — launches directly from system tray",
      ],
      url: "app.deskmerit.com/tasks/sync",
      tag: "JIRA & PM SYNC",
      image: "/images/figma/tray-pm-tasks-sync.png",
      screenAlt: "Deskmerit Task Selection Modal showing Jira and Azure DevOps tickets with client billable rate",
    },
    {
      num: "2",
      tabTitle: "2. Press Start",
      tabSub: "Background Capture",
      icon: PlayCircle,
      badge: "Works 100% Offline",
      badgeColor: "bg-[#FFE6DF] text-[#C2361A] border-[#FFD2C8]",
      headline: "Press Start for Instant, Privacy-First Background Capture",
      description:
        "Tracking begins instantly with zero stopwatch friction, even without internet access. The lightweight native agent records active window titles and application focus without ever inspecting inner document contents.",
      bullets: [
        "Operates 100% offline with zero data loss on reconnect",
        "OS window title tracking only — never logs keystrokes or webcams",
        "Dignified Private Time toggle for personal unmonitored breaks",
      ],
      url: "app.deskmerit.com/tracker/live",
      tag: "DESKTOP AGENT",
      image: "/images/figma/tray-active-tracking.png",
      screenAlt: "Deskmerit Live Desktop Tracker showing running timer, real-time app scoring, and Private Time toggle",
    },
    {
      num: "3",
      tabTitle: "3. Get the answers",
      tabSub: "Defensible Timesheets",
      icon: BarChart3,
      badge: "3-in-1 Automated Yield",
      badgeColor: "bg-[#EEF2F6] text-[#0F1730] border-slate-300",
      headline: "Get the Answers: Invoices, Timesheets & Attendance",
      description:
        "Managers see real-time team progress, finance receives down-to-the-second billable hours for client invoicing, and HR gets regional attendance automatically computed across diverse team workweeks.",
      bullets: [
        "Defensible time ledger balanced to the exact second",
        "1-click CSV, Excel, and automated client billing exports",
        "Multi-shift attendance computed without invasive biometric scanners",
      ],
      url: "app.deskmerit.com/reports/summary",
      tag: "DEFENSIBLE REPORTING",
      image: "/images/figma/reports-summary-overview.png",
      screenAlt: "Deskmerit Workforce Intelligence Dashboard with billable hours, team attendance, and Excel export",
    },
  ];

  // Auto-advance progress timer for interactive demonstration (6s per tab, pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const stepDurationMs = 6000;
    const intervalTickMs = 50;
    const increment = (intervalTickMs / stepDurationMs) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((currentIdx) => (currentIdx + 1) % steps.length);
          return 0;
        }
        return prev + increment;
      });
    }, intervalTickMs);

    return () => clearInterval(timer);
  }, [isPaused, activeStep, steps.length]);

  const selectStep = (idx: number) => {
    setActiveStep(idx);
    setProgress(0);
  };

  const prevStep = () => {
    setActiveStep((current) => (current === 0 ? steps.length - 1 : current - 1));
    setProgress(0);
  };

  const nextStep = () => {
    setActiveStep((current) => (current === steps.length - 1 ? 0 : current + 1));
    setProgress(0);
  };

  const current = steps[activeStep];

  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#E6E2D8] font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
            CONTINUOUS WORKFORCE AUTOMATION
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-[#0F1730] tracking-[-0.03em] leading-[1.24]">
            One Click. Three Answers.
          </h2>
          <p className="text-sm sm:text-base text-[#4A5370] mt-3 max-w-2xl mx-auto leading-relaxed">
            Every hour honestly accounted for from task selection to invoice rollup. Select any step to inspect the live software workflow.
          </p>
        </div>

        {/* 1. Horizontal Step Navigation Tabs (Fills Full Width) */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="border-b border-[#E6E2D8] mb-8 w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 w-full">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const Icon = step.icon;
              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => selectStep(idx)}
                  className={`group relative text-center transition-all duration-200 cursor-pointer w-full px-4 sm:px-6 py-4 sm:py-5 select-none ${isActive
                      ? "bg-white border-t border-x border-[#E6E2D8] shadow-xs z-10"
                      : "bg-transparent hover:bg-white/60 border-t border-x border-transparent z-0"
                    }`}
                  style={{
                    marginBottom: "-1px",
                  }}
                >
                  <div className="flex flex-col items-center justify-center">
                    {/* Top Line: Icon + Step Title */}
                    <div className="flex items-center justify-center gap-2.5">
                      <Icon
                        className={`w-4 h-4 transition-colors shrink-0 ${isActive ? "text-[#FF5A36]" : "text-slate-400 group-hover:text-[#0F1730]"
                          }`}
                      />
                      <span
                        className={`text-sm sm:text-base font-extrabold tracking-tight transition-colors ${isActive ? "text-[#FF5A36]" : "text-[#0F1730] group-hover:text-[#FF5A36]"
                          }`}
                      >
                        {step.tabTitle}
                      </span>
                    </div>

                    {/* Subtitle underneath matching reference */}
                    <div className="text-xs text-slate-400 font-medium mt-1">
                      {step.tabSub}
                    </div>
                  </div>

                  {/* Active Step Bottom Highlight Bar matching user screenshot */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FF5A36] overflow-hidden">
                      {/* Smooth Progress Fill */}
                      <div
                        className="h-full bg-[#12B886] transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. Main Interactive Showcase Card with Figma UI */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="bg-white border border-[#E6E2D8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-sm transition-all"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Pill, Title, Description, Bullets & Architecture Link (Col 1-5) */}
            <div className="lg:col-span-5 flex flex-col justify-between transition-all duration-300">
              <div>
                {/* Pill Tag */}
                <div className="mb-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border shadow-2xs ${current.badgeColor}`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{current.badge}</span>
                  </span>
                </div>

                {/* Headline */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F1730] tracking-tight leading-[1.2] mb-4">
                  {current.headline}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#4A5370] leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* 3 Bullets with Teal checkmarks */}
                <ul className="space-y-3 mb-8">
                  {current.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#0F1730]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#12B886] mt-2 shrink-0" />
                      <span className="leading-relaxed font-medium">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Footer Row: Explore Link & Stage X of 3 + Prev/Next Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-[#E6E2D8]/80">
                <Link
                  to="/features/tracker-plus"
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF5A36] hover:text-[#C2361A] group transition-colors"
                >
                  <span>Inspect detailed architecture</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400">
                    Stage {activeStep + 1} of 3
                  </span>
                  <div className="flex items-center gap-1">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="w-7 h-7 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-[#0F1730] transition-all cursor-pointer active:scale-95 shadow-2xs"
                      aria-label="Previous step"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-7 h-7 rounded-full border border-slate-300 bg-white hover:bg-slate-100 flex items-center justify-center text-[#0F1730] transition-all cursor-pointer active:scale-95 shadow-2xs"
                      aria-label="Next step"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Browser / App Mock Window Frame with Real Figma UI (Col 6-12) */}
            <div className="lg:col-span-7">
              <div className="rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-[#0F1730]">
                {/* Top Window Header with traffic light dots and URL */}
                <div className="px-4 py-3 bg-[#0F1730] flex items-center justify-between border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <div className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                    {current.url}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono uppercase tracking-wider hidden sm:inline-block">
                    {current.tag}
                  </span>
                </div>

                {/* Screenshot Display with Live Product UI Badge */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    key={current.image}
                    src={current.image}
                    alt={current.screenAlt}
                    className="w-full h-full object-contain object-top transition-all duration-300"
                    loading="lazy"
                  />

                  {/* Corner Live Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#0F1730]/90 backdrop-blur-md text-[11px] font-bold text-white flex items-center gap-1.5 shadow-md border border-white/10">
                    <span className="w-2 h-2 rounded-full bg-[#12B886] animate-pulse" />
                    <span>Live product UI</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
