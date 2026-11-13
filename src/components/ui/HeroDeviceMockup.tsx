import React from "react";

interface HeroDeviceMockupProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
  type?: "tablet" | "laptop" | "mobile" | "tray" | "card" | "compact";
}

export function HeroDeviceMockup({
  src,
  alt,
  priority = true,
  className = "",
  type = "tablet",
}: HeroDeviceMockupProps) {
  // 1. Mobile Phone Mockup (Requested for cards like Jira, India edition, Integrations)
  if (type === "mobile") {
    return (
      <div className={`relative max-w-[340px] sm:max-w-[370px] w-full mx-auto group ${className}`}>
        {/* Luminous Light-Colored Ambient Glow for Dark Hero */}
        <div className="absolute -inset-3.5 bg-gradient-to-tr from-[#9333EA]/35 via-[#D8B4FE]/30 to-[#61126E]/45 rounded-[50px] blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Sleek Mobile Phone Chassis with Light-Colored Shadow */}
        <div className="relative rounded-[44px] sm:rounded-[48px] p-2.5 sm:p-3 bg-[#0C0714] border-2 border-white/25 ring-1 ring-purple-300/35 shadow-[0_0_55px_rgba(216,180,254,0.30),0_25px_65px_-12px_rgba(168,85,247,0.45)] transition-all duration-300 group-hover:shadow-[0_0_70px_rgba(216,180,254,0.40),0_30px_75px_-12px_rgba(168,85,247,0.55)]">
          {/* Top Dynamic Island / Speaker Pill */}
          <div className="flex justify-center items-center pb-2 pt-1">
            <div className="w-20 sm:w-24 h-3.5 sm:h-4 bg-black rounded-full flex items-center justify-between px-2.5 shadow-inner">
              <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            </div>
          </div>

          {/* Inner Phone Screen - Hugs Card with Clean Radius and No Wasted Vertical Space */}
          <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden bg-white shadow-inner border border-black/5">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto block select-none"
              style={{ imageRendering: "auto" }}
              loading={priority ? "eager" : "lazy"}
            />
          </div>

          {/* Bottom Home Indicator Bar */}
          <div className="flex justify-center pt-2 pb-0.5">
            <div className="w-24 sm:w-28 h-1 rounded-full bg-white/35" />
          </div>
        </div>
      </div>
    );
  }

  // 2. Screen with Less Height / Compact Screen Mockup (Tight uniform bezel, zero empty vertical gaps)
  if (type === "card" || type === "compact") {
    return (
      <div className={`relative max-w-[420px] sm:max-w-[460px] w-full mx-auto group ${className}`}>
        {/* Luminous Light-Colored Ambient Glow for Dark Hero */}
        <div className="absolute -inset-3 bg-gradient-to-tr from-[#9333EA]/35 via-[#D8B4FE]/30 to-[#61126E]/40 rounded-[38px] blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Compact Screen Mockup with Less Height */}
        <div className="relative rounded-[26px] sm:rounded-[30px] p-2 sm:p-2.5 bg-[#0C0714] border border-white/25 ring-1 ring-purple-300/35 shadow-[0_0_55px_rgba(216,180,254,0.28),0_25px_65px_-12px_rgba(168,85,247,0.40)] transition-all duration-300 group-hover:shadow-[0_0_70px_rgba(216,180,254,0.38),0_30px_75px_-12px_rgba(168,85,247,0.50)]">
          {/* Top Camera / Sensor Pill */}
          <div className="flex items-center justify-center pb-1 pt-0.5">
            <div className="w-8 sm:w-10 h-1 rounded-full bg-white/25" />
          </div>

          {/* Inner Screen - Hugs Card snug without any vertical gaps */}
          <div className="relative rounded-[18px] sm:rounded-[22px] overflow-hidden bg-white shadow-inner">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto block select-none"
              style={{ imageRendering: "auto" }}
              loading={priority ? "eager" : "lazy"}
            />
          </div>
        </div>
      </div>
    );
  }

  // 3. Desktop System Tray Agent Mockup (Compact window, dark frame, light glow)
  if (type === "tray") {
    return (
      <div className={`relative max-w-[380px] w-full mx-auto group ${className}`}>
        {/* Luminous Light-Colored Ambient Glow for Dark Hero */}
        <div className="absolute -inset-3 bg-gradient-to-tr from-[#9333EA]/35 via-[#D8B4FE]/30 to-[#61126E]/45 rounded-[36px] blur-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Sleek Tray Window Mockup with Light Rim & Light-Colored Shadow */}
        <div className="relative rounded-[24px] sm:rounded-[28px] p-2 sm:p-2.5 bg-[#0C0714] border border-white/20 ring-1 ring-purple-300/35 shadow-[0_0_45px_rgba(216,180,254,0.25),0_25px_60px_-12px_rgba(168,85,247,0.40)] transition-all duration-300">
          <div className="relative rounded-[16px] sm:rounded-[20px] overflow-hidden bg-[#12081B] border border-white/10">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto block object-contain select-none"
              style={{ imageRendering: "auto" }}
              loading={priority ? "eager" : "lazy"}
            />
          </div>
        </div>
      </div>
    );
  }

  // 4. Laptop Device Mockup (Matches User's Laptop Reference Image)
  if (type === "laptop") {
    return (
      <div className={`relative w-full max-w-full mx-auto group ${className}`}>
        {/* Luminous Light-Colored Ambient Glow for Dark Hero */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-[#9333EA]/30 via-[#D8B4FE]/25 to-[#61126E]/40 rounded-[38px] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Laptop Display Top Lid */}
        <div className="relative rounded-t-[20px] sm:rounded-t-[24px] p-2 sm:p-2.5 bg-[#0C0714] border border-white/20 border-b-0 ring-1 ring-purple-300/30 shadow-[0_0_55px_rgba(216,180,254,0.25),0_20px_50px_-10px_rgba(168,85,247,0.35)]">
          {/* Top Camera Dot */}
          <div className="flex items-center justify-center pb-1.5 pt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-500 ring-1 ring-slate-400" />
          </div>

          {/* Inner Screen - 100% Quality & Full Readability */}
          <div className="relative rounded-t-[14px] sm:rounded-t-[18px] overflow-hidden bg-[#12081B] border border-white/10 shadow-inner">
            <img
              src={src}
              alt={alt}
              className="w-full h-auto block object-contain object-top select-none"
              style={{ imageRendering: "auto" }}
              loading={priority ? "eager" : "lazy"}
            />
          </div>
        </div>

        {/* Laptop Bottom Aluminum Base & Opening Notch */}
        <div className="relative">
          <div className="relative h-2.5 sm:h-3 rounded-b-xl bg-gradient-to-b from-[#2A2D35] via-[#1E2026] to-[#121317] border-t border-slate-700 border-x border-b border-white/20 shadow-[0_12px_24px_rgba(0,0,0,0.4)] flex items-start justify-center">
            {/* Center Opening Notch */}
            <div className="w-14 sm:w-16 h-1 bg-[#0C0714] rounded-b-sm border-b border-white/15" />
          </div>
          {/* Bottom Foot Lip */}
          <div className="mx-auto w-[92%] h-1 bg-gradient-to-r from-transparent via-[#61126E]/40 to-transparent blur-xs" />
        </div>
      </div>
    );
  }

  // 5. Default: Tablet / Screen Bezel Mockup (Matches User's Tablet Reference Image)
  return (
    <div className={`relative w-full max-w-full mx-auto group ${className}`}>
      {/* Luminous Light-Colored Ambient Glow for Dark Hero */}
      <div className="absolute -inset-3 bg-gradient-to-tr from-[#9333EA]/30 via-[#D8B4FE]/25 to-[#61126E]/40 rounded-[38px] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Sleek Device Bezel Frame matching Reference Image with Light-Colored Shadow */}
      <div className="relative rounded-[26px] sm:rounded-[32px] p-2 sm:p-2.5 bg-[#0C0714] border border-white/20 ring-1 ring-purple-300/30 shadow-[0_0_55px_rgba(216,180,254,0.25),0_25px_65px_-12px_rgba(168,85,247,0.38)] transition-all duration-300 group-hover:shadow-[0_0_70px_rgba(216,180,254,0.35),0_30px_75px_-12px_rgba(168,85,247,0.48)]">
        {/* Top Camera / Sensor Pill */}
        <div className="flex items-center justify-center pb-1.5 pt-0.5">
          <div className="w-10 sm:w-12 h-1 rounded-full bg-white/25" />
        </div>

        {/* Inner Screen - Retains Full Native Quality & Text Sharpness */}
        <div className="relative rounded-[18px] sm:rounded-[22px] overflow-hidden bg-[#12081B] border border-white/10 shadow-inner">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto block object-contain object-top select-none"
            style={{ imageRendering: "auto" }}
            loading={priority ? "eager" : "lazy"}
          />
        </div>
      </div>
    </div>
  );
}
