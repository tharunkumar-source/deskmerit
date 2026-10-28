import React from "react";
import { Link } from "react-router-dom";
import { EyeOff, Lock, Shield, User, ArrowRight } from "lucide-react";

export function DeskmeritTrustSection() {
  const cards = [
    {
      title: "No keystrokes",
      description: "Idle detection checks whether input happened — never what was typed.",
      icon: EyeOff,
    },
    {
      title: "No webcam or mic",
      description: "Not on any plan, under any setting. Zero surveillance creep.",
      icon: Lock,
    },
    {
      title: "Private Time",
      description: "One click. Shown as its own distinct state in reports, never as idle slacking.",
      icon: Shield,
    },
    {
      title: "Your data, first",
      description: "Every employee sees their own day, timeline and scores before anyone else.",
      icon: User,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FFFFFF] border-b border-[#E8D5EC] font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Eyebrow, Heading, Paragraph, Quote & Link (Exact Site Standard) */}
          <div className="col-span-1 lg:col-span-6 space-y-6 text-left min-w-0 max-w-full w-full">
            <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-3">
              BUILT FOR TRUST
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F1730] tracking-[-0.025em] leading-[1.2]">
              Time tracking employees <span className="block text-[#61126E]">don't resent.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#4A5370] leading-relaxed max-w-xl font-normal">
              Monitoring software fails when people feel watched. Deskmerit is designed the other way round.
              Screenshots stay off unless an admin turns them on — and even then they are blurred and announced.
              We are the colleague who keeps good notes, not the supervisor behind the glass.
            </p>

            <div className="pt-2 pb-1">
              <blockquote className="font-serif italic text-2xl sm:text-[26px] text-[#0F1730] leading-snug border-l-2 border-[#61126E] pl-4">
                “Every hour, honestly accounted for.”
              </blockquote>
            </div>

            <div className="pt-1">
              <Link
                to="/privacy-promise"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#61126E] hover:text-[#4E0E58] hover:underline transition-colors group cursor-pointer"
              >
                <span>Read our employee privacy promise</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 2x2 White Cards (Exact Match to User Screenshot 2) */}
          <div className="col-span-1 lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 min-w-0 max-w-full w-full">
            {cards.map((c, idx) => {
              const Icon = c.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#FFFFFF] rounded-2xl p-6 sm:p-7 border border-[#E8D5EC] hover:border-slate-300 hover:shadow-subtle transition-all duration-200 text-left"
                >
                  <div className="w-11 h-11 rounded-xl border border-slate-200/90 bg-[#FBF9F5] flex items-center justify-center text-[#0F1730] mb-5">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#0F1730] mb-2 leading-snug">
                    {c.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#4A5370] leading-relaxed font-normal">
                    {c.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
