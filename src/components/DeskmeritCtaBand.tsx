import React from "react";
import { Link } from "react-router-dom";

export interface DeskmeritCtaBandProps {
  pretitle?: string;
  title?: string;
  subtitle?: string;
  trialText?: string;
  demoText?: string;
  trialHref?: string;
  demoHref?: string;
}

/**
 * Global Call to Action Band — Styled after Sqalible reference with Deskmerit branding.
 * Clean, horizontal, simple and clear layout with side-by-side action pills.
 */
export function DeskmeritCtaBand({
  pretitle = "Get Started",
  title = "Experience automatic time tracking and task binding in action with our engineering specialists.",
  subtitle,
  trialText = "Start free trial",
  demoText = "Book a demo",
  trialHref = "/signup",
  demoHref = "/demo",
}: DeskmeritCtaBandProps) {
  return (
    <section className="bg-[#0F1730] text-white py-12 lg:py-16 border-t border-[#24305A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* Left: Overline + Headline (Sqalible Style) */}
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 rounded-full bg-[#61126E]/40 border border-[#A81CD0]/50 text-[11px] font-bold uppercase tracking-wider text-[#F0ABFC] shadow-xs mb-2">{pretitle}</div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold text-white leading-snug tracking-[-0.02em]">
              {title}
            </h2>
            {subtitle && (
              <p className="text-sm text-slate-300 mt-2 font-normal leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right: Side-by-side Action Buttons (Matching Home Section Buttons) */}
          <div className="flex flex-row items-center gap-2.5 sm:gap-3 shrink-0">
            <Link
              to={trialHref}
              className="inline-flex items-center justify-center text-xs sm:text-sm font-bold text-[#0F1730] bg-white hover:bg-slate-100 px-4 sm:px-7 py-2.5 sm:py-3 rounded-xl transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer shrink-0"
            >
              {trialText}
            </Link>

            <Link
              to={demoHref}
              className="inline-flex items-center justify-center text-xs sm:text-sm font-bold text-white bg-transparent hover:bg-white/10 border border-white/80 hover:border-white px-4 sm:px-7 py-2.5 sm:py-3 rounded-xl transition-all whitespace-nowrap cursor-pointer shrink-0"
            >
              {demoText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
