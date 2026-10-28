import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { DeskmeritLogo } from "./DeskmeritLogo";

export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqSectionProps {
  title?: string;
  pretitle?: string;
  faqs?: FaqItem[];
  className?: string;
  containerClassName?: string;
  cardTitle?: string;
  cardDescription?: string;
  cardButtonText?: string;
  cardButtonHref?: string;
}

export function FaqSection({
  title = "Questions, Answered Honestly",
  pretitle = "FAQS",
  faqs = [],
  className = "py-20 lg:py-28 bg-[#FFFFFF] border-t border-slate-100 font-sans",
  containerClassName = "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  cardTitle = "Need Help Choosing the Right Solution?",
  cardDescription = "Connect with our product specialists to determine the optimal configuration for your engineering, agency, or enterprise workflows.",
  cardButtonText = "Contact our team",
  cardButtonHref = "/demo",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={className} aria-labelledby="faq-title">
      <div className={containerClassName}>
        {/* Section Heading */}
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-3">
            {pretitle}
          </div>
          <h2 id="faq-title" className="text-3xl sm:text-4xl font-extrabold text-[#0F1730] tracking-[-0.03em] leading-[1.28] sm:leading-[1.25]">
            {title}
          </h2>
        </div>

        {/* 2-Column Split: Left Promo Card + Right Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Dark Purple Accent Callout Highlight Box */}
          <div className="col-span-1 lg:col-span-5 min-w-0 max-w-full w-full">
            <div className="rounded-3xl bg-gradient-to-br from-[#1C0A24] via-[#14061A] to-[#250B30] p-8 sm:p-10 text-white shadow-xl border border-[#61126E]/40 relative overflow-hidden flex flex-col justify-between min-h-[380px]">
              {/* Subtle Radial Purple Glows in background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#A855F7]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#61126E]/25 rounded-full blur-2xl pointer-events-none -ml-16 -mb-16" />

              <div>
                {/* Brand Logo in Reverse (White Wordmark) */}
                <div className="mb-8">
                  <DeskmeritLogo variant="reverse" size="md" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-[-0.025em] leading-snug">
                  {cardTitle}
                </h3>

                <p className="text-sm text-purple-200/80 leading-relaxed mt-4">
                  {cardDescription}
                </p>
              </div>

              <div className="pt-8">
                <Link
                  to={cardButtonHref}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#0F1730] hover:bg-[#FAF4FB] hover:text-[#61126E] font-bold text-xs sm:text-sm shadow-md transition-all group cursor-pointer"
                >
                  <span>{cardButtonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-[#61126E]" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Accordion List */}
          <div className="col-span-1 lg:col-span-7 divide-y divide-slate-100 min-w-0 max-w-full w-full">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="py-5">
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    className="w-full text-left flex items-start justify-between gap-4 font-bold text-base sm:text-[17px] text-[#0F1730] hover:text-[#61126E] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="shrink-0 text-slate-400 hover:text-[#61126E] mt-0.5">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#61126E]" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 text-sm text-[#4A5370] leading-relaxed animate-fade-in pr-6">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}