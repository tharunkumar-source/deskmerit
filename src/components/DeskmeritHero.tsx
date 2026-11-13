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

function HeroGraphic() {
  return (
    <div className="relative w-full max-w-full sm:max-w-[620px] mx-auto">
      {/* Background Subtle Gradient Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[480px] h-[280px] sm:h-[480px] bg-gradient-to-tr from-[#61126E]/15 via-indigo-500/10 to-transparent rounded-full blur-2xl sm:blur-3xl pointer-events-none -z-0" />
      <img
        src="/images/figma/hero-mockup-composite.png"
        alt="Deskmerit Live Team Activity, Timeline, and Time Tracking Summary"
        className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(15,23,48,0.12)]"
        loading="eager"
      />
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
          <circle cx="12" cy="12" r="5" fill="#61126E"/>
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
          <div className="lg:col-span-6 text-left">
            {/* Clean Eyebrow Standard */}
            <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#61126E] animate-pulse" />
              <span>AUTOMATIC TIME TRACKING FOR MODERN TEAMS</span>
            </div>

            {/* H1 Headline Matching Reference Image 4 Style */}
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-[#0A2540] tracking-[-0.035em] leading-[1.22] sm:leading-[1.18] lg:leading-[1.15] mb-6">
              Know where the work goes.{" "}
              <span className="text-[#61126E]">
                Without watching over shoulders.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed max-w-xl font-normal mb-6">
              Deskmerit is the automatic time tracking software your team will actually trust.
              Connect Jira or Azure DevOps, press start, and defensible client hours and attendance build on their own.
            </p>

            {/* Direct High-Converting CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#61126E] hover:bg-[#4E0E58] text-white font-bold text-sm shadow-[0_4px_16px_rgba(97, 18, 110,0.32)] hover:shadow-[0_6px_22px_rgba(97, 18, 110,0.45)] transition-all cursor-pointer"
              >
                <span>Start free trial</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0F1730] font-bold text-sm border border-slate-300 shadow-sm hover:border-slate-400 transition-all cursor-pointer"
              >
                <span>Book a demo</span>
              </Link>
            </div>

            {/* Clean Key Value Signals (No AI Pill Capsules) */}
            <div className="pt-3 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-[#4A5370]">
              <div className="flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-[#12B886] stroke-[2.5]" />
                <span className="text-[#0F1730] font-bold">14-day free trial</span>
                <span className="text-slate-400">· No card needed</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Laptop className="w-4 h-4 text-slate-500" />
                <span>Windows, macOS & Linux</span>
              </div>
              <div className="flex items-center gap-1.5 font-medium">
                <Clock className="w-4 h-4 text-[#61126E]" />
                <span>10-minute setup</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Graphic from Figma (Image instead of code) */}
          <div className="lg:col-span-6 relative">
            <HeroGraphic />
          </div>
        </div>
      </div>
    </section>
  );
}
