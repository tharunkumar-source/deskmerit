import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";

export function DeskmeritTestimonials() {
  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "VP Engineering",
      company: "Cognitive Scale · Pune",
      image: "/images/testimonials/ananya-sharma.jpg",
      quote:
        "We closed the 357-hour gap between Jira tasks and client invoices in our first month. The delivery team never has to fill a Friday timesheet from memory again.",
      rating: "5.0",
      stars: 5,
    },
    {
      name: "Marcus Taylor",
      role: "Delivery Director",
      company: "Apex Digital · Sydney",
      image: "/images/testimonials/marcus-taylor.jpg",
      quote:
        "Our engineers didn't want another surveillance tracker. Deskmerit's privacy promise — no keystrokes, no webcams, employee-first view — won over the entire team.",
      rating: "5.0",
      stars: 5,
    },
    {
      name: "Tariq Al-Mansoor",
      role: "Head of Operations",
      company: "Gulf Tech Logistics · Dubai",
      image: "/images/testimonials/tariq-al-mansoor.jpg",
      quote:
        "Running teams between Dubai and Riyadh used to mean constant attendance mismatches across different work weeks. Deskmerit solved Sunday–Thursday shifts out of the box.",
      rating: "5.0",
      stars: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === 0 ? testimonials.length - 1 : prevIdx - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIdx) =>
      prevIdx === testimonials.length - 1 ? 0 : prevIdx + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#FBF9F5] border-b border-[#E8D5EC] font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Kombee reference layout */}
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-2">
            OUR CLIENTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F1730] tracking-[-0.03em] leading-tight mt-2 max-w-3xl">
            Read Real Stories from Distributed Teams Worldwide
          </h2>
        </div>

        {/* 2-Card Split Layout matching Kombee structure with Deskmerit Brand Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* 1. Left Card: The Testimonial Story Card (Col 1-8) */}
          <div className="lg:col-span-8 bg-[#0B1426] border border-slate-800 rounded-none sm:rounded-2xl p-6 sm:p-7 md:p-8 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-7 items-start">
              {/* Client Portrait Photo */}
              <div className="w-full sm:w-48 md:w-52 aspect-square sm:aspect-[4/5] shrink-0 rounded-none sm:rounded-xl overflow-hidden border border-slate-800 bg-slate-900 shadow-md">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover object-top transition-all duration-500"
                />
              </div>

              {/* Client Details & Quote */}
              <div className="flex-1 flex flex-col justify-between h-full min-h-[220px]">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-snug">
                    {current.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-slate-400 mt-1 mb-4 font-mono">
                    {current.role} · {current.company}
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {current.quote}
                  </p>
                </div>

                {/* Rating Stars on LEFT and Navigation Controls on RIGHT */}
                <div className="flex items-center justify-between pt-2 mt-auto">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold text-sm">
                    <div className="flex items-center gap-1">
                      {[...Array(current.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-slate-300 text-xs ml-1 font-mono">
                      ({current.rating})
                    </span>
                  </div>

                  {/* Navigation Arrows right of ratings */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      className="w-9 h-9 rounded-full border border-slate-700 bg-slate-800/90 hover:bg-[#61126E] hover:border-[#61126E] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      className="w-9 h-9 rounded-full border border-slate-700 bg-slate-800/90 hover:bg-[#61126E] hover:border-[#61126E] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Right Card: Deskmerit Branded Value/CTA Spotlight Card (Col 9-12) */}
          <div className="lg:col-span-4 bg-gradient-to-br from-[#0B1426] via-[#111D36] to-[#080E1C] border border-slate-800 rounded-none sm:rounded-2xl p-6 sm:p-7 md:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            {/* High-tech SVG pattern overlay matching Kombee aesthetic with Deskmerit Brand Guidelines */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
              <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient id="emberGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#61126E" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#61126E" stopOpacity="0" />
                  </radialGradient>
                  <linearGradient id="gridGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#61126E" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#12B886" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#0F1730" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Concentric Telemetry Orbit Rings */}
                <circle cx="280" cy="240" r="140" stroke="url(#gridGrad)" strokeWidth="1" strokeDasharray="3 3" />
                <circle cx="280" cy="240" r="100" stroke="#61126E" strokeWidth="1" strokeOpacity="0.3" />
                <circle cx="280" cy="240" r="60" stroke="#12B886" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="4 2" />
                <circle cx="280" cy="240" r="24" fill="url(#emberGlow)" />
                {/* Constellation Nodes and Rays */}
                <line x1="280" y1="100" x2="280" y2="380" stroke="#61126E" strokeWidth="0.8" strokeOpacity="0.2" />
                <line x1="140" y1="240" x2="420" y2="240" stroke="#12B886" strokeWidth="0.8" strokeOpacity="0.2" />
                <line x1="180" y1="140" x2="380" y2="340" stroke="#61126E" strokeWidth="0.8" strokeOpacity="0.15" />
                <circle cx="280" cy="140" r="3" fill="#61126E" />
                <circle cx="380" cy="240" r="3.5" fill="#12B886" />
                <circle cx="220" cy="280" r="2.5" fill="#61126E" />
                <circle cx="340" cy="180" r="2" fill="#FFFFFF" />
                {/* Digital telemetry grid points */}
                <pattern id="telemetryDots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="1" fill="#4A5370" fillOpacity="0.35" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#telemetryDots)" />
              </svg>
            </div>

            {/* Top Brand Mark */}
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl font-extrabold tracking-tight text-white font-mono">
                  Deskmerit
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#61126E]" />
              </div>

              {/* Center Headline & Subtext */}
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-[1.25] mb-3">
                Still Wondering Where Your Team's Hours Really Go?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed mb-6">
                Discover how automatic background tracking, role-aware app scoring, and Jira sprint sync eliminate guesswork without intrusive surveillance.
              </p>
            </div>

            {/* Bottom CTA Button */}
            <div className="relative z-10 pt-2">
              <Link
                to="/signup"
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#FBF9F5] text-[#0F1730] font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 w-fit group/btn cursor-pointer"
              >
                <span>Contact</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#61126E] group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Subtle Deskmerit Ember Ambient Glow */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full bg-[#61126E]/15 blur-3xl pointer-events-none" />
            <div className="absolute -left-12 -top-12 w-40 h-40 rounded-full bg-[#12B886]/10 blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
