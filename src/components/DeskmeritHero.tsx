import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
  Clock,
  Layers,
  Users,
  Lock,
  BarChart3,
  FileSpreadsheet,
  Cpu,
  UserCheck,
  CheckCircle2,
  Calendar,
  Activity,
  Laptop,
  EyeOff,
  ChevronRight,
  Info,
  Radio,
} from "lucide-react";

function HeroInteractiveAppCard() {
  const apps = [
    { name: "Visual Studio Code", cat: "Development", time: "3h 40m", pct: 88, status: "Productive" },
    { name: "Figma App", cat: "Product Design", time: "2h 15m", pct: 58, status: "Productive" },
    { name: "Atlassian Jira", cat: "Sprint Tasks", time: "1h 45m", pct: 44, status: "Productive" },
    { name: "Slack", cat: "Team Comms", time: "1h 20m", pct: 32, status: "Neutral" },
  ];

  return (
    <div className="relative pt-6 pb-12 px-2 sm:px-6 w-full max-w-[560px] mx-auto">
      {/* Background Subtle Gradient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] bg-gradient-to-tr from-[#FF5A36]/15 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      {/* ========================================================================= */}
      {/* CARD 1: MAIN BASE CARD — TODAY'S ACTIVITY (Reference Image 2)               */}
      {/* ========================================================================= */}
      <div className="relative z-10 w-full bg-white rounded-3xl p-5 sm:p-7 border border-[#E6E2D8] shadow-[0_20px_50px_rgba(15,23,48,0.08)] hover:shadow-[0_25px_60px_rgba(15,23,48,0.12)] transition-all duration-300">
        {/* Header */}
        <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-[#0F1730]">Today's activity</h3>
            <p className="text-[11px] text-[#64748B]">Timeline · Oct 27, 2026</p>
          </div>
          <span className="text-xs font-bold text-[#4F46E5] bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100/80 shadow-xs">
            6h 40m Tracked
          </span>
        </div>

        {/* Timeline Bar */}
        <div className="mt-4 mb-2.5">
          <div className="h-6 w-full rounded-xl bg-slate-100 flex overflow-hidden p-0.5 border border-slate-200/90 shadow-inner">
            <div className="h-full bg-slate-200/80 w-[8%]" title="Off 08:00 - 08:45" />
            <div className="h-full bg-gradient-to-r from-[#4F46E5] to-[#6366F1] w-[30%]" title="Tracked: VS Code" />
            <div className="h-full bg-[#818CF8] w-[14%]" title="Tracked: Figma" />
            <div className="h-full bg-[#94A3B8] w-[10%]" title="Private Time (Excluded)" />
            <div className="h-full bg-[#FF5A36] w-[5%]" title="Idle Time" />
            <div className="h-full bg-gradient-to-r from-[#4F46E5] to-[#6366F1] w-[33%]" title="Tracked: Jira Sprint" />
          </div>

          <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1.5 px-1">
            <span>08:00</span>
            <span>10:00</span>
            <span>12:00</span>
            <span>14:00</span>
            <span>16:00</span>
            <span>18:00</span>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 mt-3 text-[11px] text-slate-600">
            <span className="flex items-center gap-1.5 font-medium text-[#0F1730]">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#4F46E5]" /> Tracked 5h 25m
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#0F1730]">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#818CF8]" /> Overtime 1h 15m
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#0F1730]">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#94A3B8]" /> Private 45m
            </span>
            <span className="flex items-center gap-1.5 font-medium text-[#0F1730]">
              <span className="w-2.5 h-2.5 rounded-sm bg-[#FF5A36]" /> Idle 20m
            </span>
          </div>
        </div>

        {/* Apps Breakdown */}
        <div className="mt-4 pt-3.5 border-t border-slate-100 space-y-2">
          <div className="flex items-center justify-between text-xs text-[#0F1730] font-bold mb-1.5">
            <span>Apps & websites</span>
            <span className="text-[10px] text-slate-400 font-normal">Active foreground focus</span>
          </div>

          {apps.map((app, i) => (
            <div key={i} className="flex items-center justify-between text-xs py-1.5 px-2.5 rounded-xl hover:bg-slate-50 transition-colors">
              <span className="font-semibold text-[#0F1730] truncate w-36">{app.name}</span>
              <div className="flex-1 mx-3">
                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{
                      width: `${app.pct}%`,
                      backgroundColor: app.status === "Productive" ? "#4F46E5" : "#64748B",
                    }}
                  />
                </div>
              </div>
              <div className="flex items-center gap-2.5 shrink-0">
                <span className="font-mono text-[11px] text-slate-600">{app.time}</span>
                <span
                  className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md ${
                    app.status === "Productive"
                      ? "bg-indigo-50 text-[#4F46E5] border border-indigo-100"
                      : "bg-slate-100 text-slate-600 border border-slate-200"
                  }`}
                >
                  {app.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Privacy Callout */}
        <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FF5A36] shrink-0" />
            <span>Zero keystrokes logged · 45m private time excluded</span>
          </div>
          <span className="text-[10px] text-slate-400 font-mono hidden sm:inline">Encrypted AES-256</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CARD 2: OVERLAPPING TOP-RIGHT CARD — TEAM LIVE STATUS                       */}
      {/* ========================================================================= */}
      <div className="absolute -top-6 -right-2 sm:-right-8 w-64 sm:w-72 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E6E2D8] shadow-[0_20px_45px_rgba(15,23,48,0.14)] z-20 hover:z-30 hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center justify-between pb-2 border-b border-slate-100">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-[#0F1730]">Team live status</span>
          </div>
          <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-bold border border-emerald-100">
            Live sync
          </span>
        </div>

        {/* Counter Pills */}
        <div className="grid grid-cols-3 gap-1.5 my-2.5 text-center">
          <div className="p-1.5 rounded-xl bg-emerald-50/90 border border-emerald-100">
            <div className="text-[9px] text-emerald-800 font-bold uppercase">Track</div>
            <div className="text-xs font-mono font-bold text-emerald-700">33</div>
          </div>
          <div className="p-1.5 rounded-xl bg-amber-50/90 border border-amber-100">
            <div className="text-[9px] text-amber-800 font-bold uppercase">Idle</div>
            <div className="text-xs font-mono font-bold text-amber-700">6</div>
          </div>
          <div className="p-1.5 rounded-xl bg-slate-50 border border-slate-200">
            <div className="text-[9px] text-slate-600 font-bold uppercase">Private</div>
            <div className="text-xs font-mono font-bold text-slate-700">3</div>
          </div>
        </div>

        {/* Members */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-[11px] p-2 rounded-xl bg-slate-50/90 border border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-indigo-100 text-[#4F46E5] font-bold text-[10px] flex items-center justify-center">
                JD
              </span>
              <div>
                <span className="font-bold text-[#0F1730] block leading-none">John Doe</span>
                <span className="text-[9px] text-slate-400">VS Code · API Sync</span>
              </div>
            </div>
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">● 3h 12m</span>
          </div>

          <div className="flex items-center justify-between text-[11px] p-2 rounded-xl bg-slate-50/90 border border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px] flex items-center justify-center">
                AR
              </span>
              <div>
                <span className="font-bold text-[#0F1730] block leading-none">Aisha R.</span>
                <span className="text-[9px] text-slate-400">Figma · Design Sys</span>
              </div>
            </div>
            <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">● 2h 45m</span>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CARD 3: OVERLAPPING BOTTOM-LEFT CARD — PRODUCTIVITY SUMMARY                 */}
      {/* ========================================================================= */}
      <div className="absolute -bottom-8 -left-2 sm:-left-8 w-60 sm:w-68 bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E6E2D8] shadow-[0_20px_45px_rgba(15,23,48,0.14)] z-20 hover:z-30 hover:-translate-y-1 transition-all duration-300">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
            Time tracking summary
          </span>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100 font-mono">
            79% Score
          </span>
        </div>

        <div className="text-lg font-extrabold text-[#0F1730] font-mono mb-2">
          412h 18m
        </div>

        {/* Stacked bar */}
        <div className="h-2.5 w-full bg-slate-100 rounded-full flex overflow-hidden mb-2">
          <div className="bg-[#4F46E5] h-full" style={{ width: "82%" }} />
          <div className="bg-[#94A3B8] h-full" style={{ width: "11%" }} />
          <div className="bg-[#FF5A36] h-full" style={{ width: "7%" }} />
        </div>

        <div className="flex justify-between text-[10px] text-slate-500 font-mono">
          <span className="text-[#4F46E5] font-bold">82% Productive</span>
          <span>11% Neutral</span>
          <span className="text-[#FF5A36] font-bold">7% Idle</span>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* CARD 4: OVERLAPPING BOTTOM-RIGHT ACCENT BADGE — TRACKER PLUS ACTIVE TASK   */}
      {/* ========================================================================= */}
      <div className="hidden sm:flex absolute -bottom-5 right-2 sm:-right-4 bg-[#0F1730] text-white rounded-2xl px-4 py-2.5 border border-slate-700/80 shadow-[0_15px_35px_rgba(15,23,48,0.25)] z-25 items-center gap-3 hover:-translate-y-1 transition-all duration-300">
        <div className="w-8 h-8 rounded-xl bg-[#0052CC] flex items-center justify-center shrink-0">
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
            <path d="M11.53 2c0 5.25 4.25 9.5 9.5 9.5h.97v-1.94c0-4.17-3.39-7.56-7.56-7.56H11.53z" fill="#FFFFFF"/>
            <path d="M6.78 6.75c0 5.25 4.25 9.5 9.5 9.5h.97v-1.94c0-4.17-3.39-7.56-7.56-7.56H6.78z" fill="#FFFFFF" fillOpacity="0.8"/>
            <path d="M2.03 11.5c0 5.25 4.25 9.5 9.5 9.5h.97v-1.94c0-4.17-3.39-7.56-7.56-7.56H2.03z" fill="#FFFFFF" fillOpacity="0.6"/>
          </svg>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold text-indigo-300 bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-800/60">
              SQUAL-142
            </span>
            <span className="text-[10px] font-mono text-emerald-400 font-bold">02:44:18</span>
          </div>
          <div className="text-[11px] font-medium text-slate-200 truncate w-36">
            API Sync & Webhooks
          </div>
        </div>
      </div>
    </div>
  );
}

export function DeskmeritHero() {

  const partnerTools = [
    {
      name: "Jira Software",
      category: "Task Sync",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <path d="M11.53 2c0 5.25 4.25 9.5 9.5 9.5h.97v-1.94c0-4.17-3.39-7.56-7.56-7.56H11.53z" fill="#0052CC"/>
          <path d="M6.78 6.75c0 5.25 4.25 9.5 9.5 9.5h.97v-1.94c0-4.17-3.39-7.56-7.56-7.56H6.78z" fill="#2684FF"/>
          <path d="M2.03 11.5c0 5.25 4.25 9.5 9.5 9.5h.97v-1.94c0-4.17-3.39-7.56-7.56-7.56H2.03z" fill="#0052CC"/>
        </svg>
      ),
    },
    {
      name: "Azure DevOps",
      category: "Sprint Boards",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <path d="M22 6.84L14.7 2 6.5 5.5v4.3l5.2 2.3-5.2 2.3v4.1L14.7 22 22 17.16V6.84z" fill="#0078D7"/>
          <path d="M6.5 9.8l5.2 2.3-5.2 2.3L2 12l4.5-2.2z" fill="#005A9E"/>
        </svg>
      ),
    },
    {
      name: "OpenProject",
      category: "Open Source",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="2" y="2" width="20" height="20" rx="5" fill="#1A5380"/>
          <circle cx="12" cy="12" r="5" fill="#35C4EE"/>
          <circle cx="12" cy="12" r="2.2" fill="#FFFFFF"/>
        </svg>
      ),
    },
    {
      name: "Google Calendar",
      category: "Meeting Presence",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="3" y="4" width="18" height="17" rx="3" fill="#FFFFFF" stroke="#4285F4" strokeWidth="1.5"/>
          <path d="M3 8h18" stroke="#4285F4" strokeWidth="1.5"/>
          <circle cx="8" cy="12" r="1.3" fill="#EA4335"/>
          <circle cx="12" cy="12" r="1.3" fill="#FBBC05"/>
          <circle cx="16" cy="12" r="1.3" fill="#34A853"/>
          <circle cx="8" cy="16" r="1.3" fill="#4285F4"/>
          <circle cx="12" cy="16" r="1.3" fill="#EA4335"/>
          <circle cx="16" cy="16" r="1.3" fill="#34A853"/>
        </svg>
      ),
    },
    {
      name: "Outlook 365",
      category: "Calendar Work",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="7" y="4" width="14" height="16" rx="2" fill="#0078D4"/>
          <rect x="3" y="7" width="9" height="10" rx="1.5" fill="#005A9E"/>
          <circle cx="7.5" cy="12" r="2.3" fill="#FFFFFF" fillOpacity="0.9"/>
        </svg>
      ),
    },
    {
      name: "Slack",
      category: "/status Command",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full">
          <path d="M6 15a2 2 0 1 1-2-2h2v2zm1 0a2 2 0 1 1 2 2v-5H7v3z" fill="#E01E5A"/>
          <path d="M9 6a2 2 0 1 1-2-2v2h2zm0 1a2 2 0 1 1 2 2H6V7h3z" fill="#36C5F0"/>
          <path d="M18 9a2 2 0 1 1 2 2h-2V9zm-1 0a2 2 0 1 1-2-2v5h2V9z" fill="#2EB67D"/>
          <path d="M15 18a2 2 0 1 1 2 2v-2h-2zm0-1a2 2 0 1 1-2-2h5v2h-3z" fill="#ECB22E"/>
        </svg>
      ),
    },
    {
      name: "Microsoft Teams",
      category: "Daily Feed",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="7" y="4" width="14" height="16" rx="3" fill="#5059C9"/>
          <rect x="3" y="7" width="9" height="10" rx="2" fill="#7B83EB"/>
          <path d="M6 10h3v4H6z" fill="#FFFFFF"/>
        </svg>
      ),
    },
    {
      name: "Sqalible HRMS",
      category: "Native 1-Click Module",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="5" fill="#0F1730"/>
          <circle cx="12" cy="12" r="5" fill="#FF5A36"/>
          <circle cx="12" cy="12" r="2" fill="#FFFFFF"/>
        </svg>
      ),
    },
    {
      name: "Claude MCP Server",
      category: "AI Workforce Query",
      icon: (
        <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="5" fill="#CC785C"/>
          <path d="M12 6l1.8 4.2L18 12l-4.2 1.8L12 18l-1.8-4.2L6 12l4.2-1.8L12 6z" fill="#FFFFFF"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-[#FFFFFF] font-sans">
      {/* Background Subtle Technical Grid (Reference Image 4) */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#0F1730 1px, transparent 1px), linear-gradient(90deg, #0F1730 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Bold Typography & Lead Capture (Reference Image 4) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8FAFC] border border-slate-200 shadow-sm text-xs font-semibold text-[#0F1730]">
              <span className="pulse-dot" />
              <span>Automatic time tracking for modern teams</span>
            </div>

            {/* H1 Headline Matching Reference Image 4 Style */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A2540] tracking-[-0.035em] leading-[1.08]">
              Know where the work goes.{" "}
              <span className="block text-[#FF5A36]">
                Without watching over shoulders.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed max-w-xl font-normal">
              Deskmerit is the automatic time tracking software your team will actually trust.
              Connect Jira or Azure DevOps, press start, and defensible client hours and attendance build on their own.
            </p>

            {/* Direct High-Converting CTAs (Email input removed as requested) */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#FF5A36] hover:bg-[#E04422] text-white font-bold text-sm shadow-[0_4px_16px_rgba(255,90,54,0.32)] hover:shadow-[0_6px_22px_rgba(255,90,54,0.45)] transition-all"
              >
                <span>Start free trial</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0F1730] font-bold text-sm border border-slate-300 shadow-sm hover:border-slate-400 transition-all"
              >
                <span>Book a demo</span>
              </Link>
            </div>

            {/* Standalone Trust & Platform Badges (Clean, Responsive, Independent Modern Pills) */}
            <div className="pt-4 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-emerald-50/80 border border-emerald-200/80 text-xs font-bold text-[#0F1730] shadow-xs hover:border-emerald-300 transition-colors">
                <span className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-[#12B886] shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </span>
                <span>14-day free trial</span>
                <span className="text-[11px] font-normal text-emerald-800">· No card needed</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-[#0F1730] shadow-xs hover:border-slate-300 transition-colors">
                <span className="w-5 h-5 rounded-full bg-slate-200/80 flex items-center justify-center text-[#0F1730] shrink-0 text-[10px] font-mono font-black">
                  OS
                </span>
                <span>Windows, macOS & Linux</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#FFE6DF]/70 border border-[#FFD4CA] text-xs font-bold text-[#0F1730] shadow-xs hover:border-[#FF5A36] transition-colors">
                <span className="w-5 h-5 rounded-full bg-[#FFE6DF] flex items-center justify-center text-[#FF5A36] shrink-0">
                  <Clock className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
                <span>10-minute setup</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Clean Application Cards (Reference Images 2, 3, 4) */}
          <div className="lg:col-span-6 relative">
            <HeroInteractiveAppCard />
          </div>
        </div>

        {/* Integration Partner Badges (Screenshot 1: Infinite Auto-Scrolling Marquee) */}
        <div className="mt-16 sm:mt-20 pt-8 sm:pt-10 border-t border-slate-100 relative overflow-hidden">
          <p className="text-center text-[11px] font-bold uppercase tracking-wider text-[#9AA1B2] mb-6">
            Trusted by modern delivery teams across Jira, Azure DevOps, and Sqalible HRMS
          </p>

          {/* Left & Right gradient edge masks for smooth fade */}
          <div className="absolute left-0 top-16 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-16 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

          {/* Continuous Auto-Scrolling Marquee Track */}
          <div className="flex overflow-hidden py-2 select-none">
            <div className="marquee-content flex items-center gap-3.5 sm:gap-4 shrink-0">
              {[...partnerTools, ...partnerTools].map((tool, idx) => (
                <div
                  key={`${tool.name}-${idx}`}
                  className="group shrink-0 px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50/80 border border-slate-200/90 hover:border-[#FF5A36] shadow-subtle hover:shadow-md transition-all flex items-center gap-3 cursor-pointer"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-1.5 group-hover:scale-105 transition-transform">
                    {tool.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-bold text-[#0F1730] whitespace-nowrap">
                      {tool.name}
                    </div>
                    <div className="text-[10px] text-[#4A5370] whitespace-nowrap">
                      {tool.category}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
