import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Star, ArrowRight } from "lucide-react";
import { DeskmeritLogo } from "./DeskmeritLogo";

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
    <section className="py-20 lg:py-28 bg-[#FAF4FB] border-b border-[#E8D5EC] font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header matching Kombee reference layout */}
        <div className="mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-[#61126E] mb-3">
            OUR CLIENTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#0F1730] tracking-[-0.025em] leading-[1.28] sm:leading-[1.25] max-w-3xl">
            Read Real Stories from Distributed Teams Worldwide
          </h2>
        </div>

        {/* 2-Card Split Layout matching Kombee structure with Deskmerit Brand Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          {/* 1. Left Card: The Testimonial Story Card (Col 1-7) — adjusted based on contact card height */}
          <div className="lg:col-span-7 bg-[#140A1C] border border-[#2A1433] rounded-2xl p-5 sm:p-6 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-stretch h-full">
              {/* Client Portrait Photo — compact, balanced with contact card height */}
              <div className="w-full sm:w-44 md:w-48 lg:w-52 shrink-0 rounded-xl overflow-hidden border border-[#2A1433] bg-[#1C0F27] shadow-md self-stretch flex min-h-[220px] sm:min-h-0">
                <img
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover object-top transition-all duration-500"
                />
              </div>

              {/* Client Details & Quote */}
              <div className="flex-1 flex flex-col justify-between py-0.5">
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug">
                    {current.name}
                  </h3>
                  <div className="text-xs font-medium text-purple-300/80 mt-0.5 mb-3 font-display">
                    {current.role} · {current.company}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-4 font-normal">
                    "{current.quote}"
                  </p>
                </div>

                {/* Rating Stars on LEFT and Navigation Controls on RIGHT */}
                <div className="flex items-center justify-between pt-3 mt-auto border-t border-[#2A1433]/70">
                  <div className="flex items-center gap-1.5 text-amber-400 font-bold text-xs sm:text-sm">
                    <div className="flex items-center gap-1">
                      {[...Array(current.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>
                    <span className="text-slate-300 text-xs ml-1 font-display">
                      ({current.rating})
                    </span>
                  </div>

                  {/* Navigation Arrows right of ratings */}
                  <div className="flex items-center gap-1.5">
                    <button
                      type="button"
                      onClick={prev}
                      className="w-8 h-8 rounded-full border border-[#3A1B45] bg-[#24122C] hover:bg-[#61126E] hover:border-[#61126E] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      className="w-8 h-8 rounded-full border border-[#3A1B45] bg-[#24122C] hover:bg-[#61126E] hover:border-[#61126E] text-white flex items-center justify-center transition-all cursor-pointer shadow-sm active:scale-95"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Right Card: Deskmerit Branded Value/CTA Spotlight Card (Col 8-12) */}
          <div className="lg:col-span-5 rounded-2xl bg-gradient-to-br from-[#1F0728] via-[#14061A] to-[#280B33] border border-[#61126E]/50 p-5 sm:p-6 lg:p-7 flex flex-col justify-between shadow-xl relative overflow-hidden group">
            {/* Geometric Concentric Rings & Tech Dot Grid Pattern radiating from BOTTOM RIGHT */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <svg
                className="w-full h-full"
                viewBox="0 0 400 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
              >
                <defs>
                  {/* Linear gradient starting brightest at bottom-right (100%, 100%) and radiating to top-left (0%, 0%) */}
                  <linearGradient id="geomArcGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#E9D5FF" stopOpacity="0.9" />
                    <stop offset="20%" stopColor="#C084FC" stopOpacity="0.75" />
                    <stop offset="55%" stopColor="#A855F7" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#61126E" stopOpacity="0.1" />
                  </linearGradient>
                  <pattern id="geomDotGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.1" fill="#C084FC" fillOpacity="0.18" />
                  </pattern>
                </defs>

                {/* Geometric Dot Grid Texture */}
                <rect width="100%" height="100%" fill="url(#geomDotGrid)" />

                {/* Concentric Circular Arcs starting from BOTTOM RIGHT corner (390, 350) */}
                <g fill="none" stroke="url(#geomArcGrad)" strokeWidth="1.25">
                  <circle cx="390" cy="350" r="35" />
                  <circle cx="390" cy="350" r="70" />
                  <circle cx="390" cy="350" r="110" />
                  <circle cx="390" cy="350" r="155" />
                  <circle cx="390" cy="350" r="205" />
                  <circle cx="390" cy="350" r="260" />
                  <circle cx="390" cy="350" r="320" />
                  <circle cx="390" cy="350" r="385" />
                  <circle cx="390" cy="350" r="455" />
                  <circle cx="390" cy="350" r="530" />
                  <circle cx="390" cy="350" r="610" />
                  <circle cx="390" cy="350" r="695" />
                  <circle cx="390" cy="350" r="785" />
                </g>

                {/* Diagonal Geometric Rays radiating from BOTTOM RIGHT corner (390, 350) */}
                <line x1="390" y1="350" x2="0" y2="0" stroke="#C084FC" strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.28" />
                <line x1="390" y1="350" x2="0" y2="175" stroke="#C084FC" strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.22" />
                <line x1="390" y1="350" x2="160" y2="0" stroke="#C084FC" strokeWidth="0.8" strokeDasharray="3 4" strokeOpacity="0.22" />
              </svg>
            </div>

            {/* Top Brand Logo matching FAQ Contact Card */}
            <div className="relative z-10">
              <div className="mb-4">
                <DeskmeritLogo variant="reverse" size="md" />
              </div>

              {/* Center Headline & Subtext */}
              <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight leading-snug mb-2">
                Still Wondering Where Your Team's Hours Really Go?
              </h3>
              <p className="text-xs sm:text-[13px] text-purple-200/80 leading-relaxed mb-4">
                Discover how automatic background tracking, role-aware app scoring, and Jira sprint sync eliminate guesswork without intrusive surveillance.
              </p>
            </div>

            {/* Bottom CTA Button (Sentence/Title case) */}
            <div className="relative z-10 pt-1">
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-[#FAF4FB] text-[#0F1730] hover:text-[#61126E] font-bold text-xs sm:text-sm shadow-md hover:shadow-xl transition-all inline-flex items-center gap-2 group/btn cursor-pointer"
              >
                <span>Contact us</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#61126E] group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
