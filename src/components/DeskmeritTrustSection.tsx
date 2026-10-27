import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeOff, Lock, Shield, User, ArrowRight, CheckCircle2 } from "lucide-react";

export function DeskmeritTrustSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      title: "No keystrokes",
      description: "Idle detection checks whether input happened — never what was typed.",
      icon: EyeOff,
      badge: "Real-time keylog suppression",
    },
    {
      title: "No webcam or mic",
      description: "Not on any plan, under any setting. Zero surveillance creep.",
      icon: Lock,
      badge: "OS hardware drivers disabled",
    },
    {
      title: "Private Time",
      description: "One click. Shown as its own distinct state in reports, never as idle slacking.",
      icon: Shield,
      badge: "1-click employee exemption",
    },
    {
      title: "Your data, first",
      description: "Every employee sees their own day, timeline and scores before anyone else.",
      icon: User,
      badge: "100% employee audit priority",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E6E2D8] font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Eyebrow, Heading, Paragraph, Quote & Link (Exact Site Standard) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="text-xs font-bold uppercase tracking-wider text-[#FF5A36] mb-2">
              BUILT FOR TRUST
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-[-0.03em] leading-[1.15] text-[#0F1730]">
              Time tracking employees <span className="block">don't resent.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed max-w-xl font-normal">
              Monitoring software fails when people feel watched. Deskmerit is designed the other way round.
              Screenshots stay off unless an admin turns them on — and even then they are blurred and announced.
              We are the colleague who keeps good notes, not the supervisor behind the glass.
            </p>

            <div className="pt-2 pb-1">
              <blockquote className="font-serif italic text-2xl sm:text-[26px] text-[#0F1730] leading-snug border-l-2 border-[#FF5A36] pl-4">
                “Every hour, honestly accounted for.”
              </blockquote>
            </div>

            <div className="pt-1">
              <Link
                to="/privacy-promise"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#FF5A36] hover:text-[#E94A27] hover:underline transition-colors group cursor-pointer"
              >
                <span>Read our employee privacy promise</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 Interactive White Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {cards.map((c, idx) => {
              const Icon = c.icon;
              const isHovered = activeCard === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveCard(idx)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => setActiveCard(activeCard === idx ? null : idx)}
                  className={`bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between cursor-pointer group select-none ${
                    isHovered
                      ? "border-[#FF5A36] shadow-[0_16px_36px_rgba(255,90,54,0.12)] -translate-y-1.5 ring-1 ring-[#FF5A36]/30"
                      : "border-[#E6E2D8] shadow-subtle hover:border-slate-300 hover:shadow-card hover:-translate-y-1"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isHovered
                            ? "bg-[#FF5A36] border-[#FF5A36] text-white scale-110 shadow-sm"
                            : "bg-slate-50 border-slate-200/70 text-slate-600 group-hover:border-slate-300"
                        }`}
                      >
                        <Icon className="w-5 h-5 stroke-[1.8]" />
                      </div>

                      {/* Interactive Telemetry Verified Badge */}
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full transition-all duration-300 flex items-center gap-1 ${
                          isHovered
                            ? "bg-[#FFE6DF] text-[#FF5A36] border border-[#FFD4CA] opacity-100"
                            : "bg-slate-50 text-slate-400 border border-slate-100 opacity-60"
                        }`}
                      >
                        <CheckCircle2 className="w-2.5 h-2.5 text-emerald-500" />
                        <span>Verified</span>
                      </span>
                    </div>

                    <h3
                      className={`text-base sm:text-lg font-bold mb-2 leading-snug transition-colors ${
                        isHovered ? "text-[#FF5A36]" : "text-[#0F1730]"
                      }`}
                    >
                      {c.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#64748B] leading-relaxed font-normal">
                      {c.description}
                    </p>
                  </div>

                  {/* Micro verified guarantee info expanding on hover */}
                  <div
                    className={`mt-4 pt-3 border-t border-slate-100 text-[10px] font-mono text-slate-500 flex items-center gap-1.5 transition-all duration-300 ${
                      isHovered ? "text-[#FF5A36] opacity-100 font-semibold" : "opacity-0"
                    }`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    <span>{c.badge}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
