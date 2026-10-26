import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight, Layers, ShieldCheck, Sparkles, AlertTriangle } from "lucide-react";

export function DeskmeritTrackerPlusSpotlight() {
  const [activeTab, setActiveTab] = useState<"Jira" | "Azure DevOps" | "OpenProject">("Jira");

  return (
    <section className="py-20 lg:py-28 bg-[#0F1730] text-[#F7F4EE] relative overflow-hidden">
      {/* Background Graphic Loop */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-[650px] h-[650px] rounded-full border-[70px] border-[#24305A]/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#24305A] text-xs font-semibold text-[#FFE6DF] border border-[#334173]">
              <Sparkles className="w-3.5 h-3.5 text-[#FF5A36]" />
              <span>Flagship innovation</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.025em] leading-tight">
              Start the timer from the task.{" "}
              <span className="text-[#FF5A36]">That's it.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#9AA1B2] leading-relaxed">
              Most trackers treat your PM tool as one more integration to keep in sync. With Tracker Plus, the desktop agent shows each person the tasks they're assigned to across every connected tool. They pick one and press Start.
            </p>

            <ul className="space-y-3.5 pt-2">
              {[
                "Jira, Azure DevOps and OpenProject, in any combination",
                "Each employee's own access only — nothing they can't already see",
                "Manual entry is always there for work outside your PM tools",
                "Identically named projects never merged: tasks are keyed by tool and ID",
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-[#E6E2D8]">
                  <span className="w-5 h-5 rounded-full bg-white text-[#0F1730] flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </span>
                  <span>{text}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                to="/features/tracker-plus"
                className="inline-flex items-center justify-center text-sm font-bold text-[#0F1730] bg-white hover:bg-slate-100 px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group"
              >
                <span>See how Tracker Plus works</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1 text-[#0F1730]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive PM Tools Display */}
          <div className="lg:col-span-6">
            <div className="bg-[#172348] rounded-[24px] p-4 sm:p-5 border border-[#24305A] shadow-2xl overflow-hidden group">
              <div className="flex items-center justify-between pb-3 px-2 border-b border-[#24305A]/80">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ED6A5E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F5BF4F]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#62C554]" />
                  <span className="text-xs font-mono text-slate-300 ml-2">Deskmerit Tray · Task Search</span>
                </div>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#12B886]/20 text-[#12B886] border border-[#12B886]/30">
                  Active Sync
                </span>
              </div>

              <div className="pt-3">
                <img
                  src="/images/figma/tray-project-search.png"
                  alt="Deskmerit Desktop Tray Task & Project Search Interface"
                  className="w-full h-auto rounded-xl object-contain shadow-md transition-transform duration-300 group-hover:scale-[1.01]"
                  loading="lazy"
                />
              </div>

              {/* 3 Step Flow Indicator */}
              <div className="mt-4 pt-3 border-t border-[#24305A] grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded-lg bg-[#0F1730] text-[11px]">
                  <span className="text-[#FF5A36] font-bold block mb-0.5">1 · Search</span>
                  <span className="text-[#9AA1B2]">Jira & DevOps tasks</span>
                </div>
                <div className="p-2 rounded-lg bg-[#0F1730] text-[11px]">
                  <span className="text-[#FF5A36] font-bold block mb-0.5">2 · Start</span>
                  <span className="text-[#9AA1B2]">One-click timer</span>
                </div>
                <div className="p-2 rounded-lg bg-[#0F1730] text-[11px]">
                  <span className="text-[#FF5A36] font-bold block mb-0.5">3 · Answer</span>
                  <span className="text-[#9AA1B2]">Billing & HR filled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
