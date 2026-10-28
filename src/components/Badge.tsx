import React from "react";

type BadgeTone = "success" | "warning" | "error" | "info" | "neutral" | "ai" | "primary" | "accent";

// Strictly maps to PulseTrack Live-State and Core Palette
const toneClasses: Record<BadgeTone, string> = {
  // Mint (Tracking / Productive)
  success: "bg-[#E8F8F3] text-[#0E8E66] border-[#12B886]/30",
  // Amber (Idle / Neutral)
  warning: "bg-[#FEF6E9] text-[#B37107] border-[#F5A524]/30",
  // Rose (Unproductive / Alert)
  error: "bg-[#FDECEE] text-[#4E0E58] border-[#E5484D]/30",
  // Iris (Private Time)
  info: "bg-[#EEF0FF] text-[#3F4FD6] border-[#5B6CFF]/30",
  // Slate / Mist (Neutral)
  neutral: "bg-[#FAF4FB] text-[#4A5370] border-[#E8D5EC]",
  // Iris (AI / Technology)
  ai: "bg-[#EEF0FF] text-[#3F4FD6] border-[#5B6CFF]/30",
  // Ember Tint / Ember Deep (Primary brand highlight)
  primary: "bg-[#F6EDF8] text-[#4E0E58] border-[#61126E]/30",
  // Ember Deep accent
  accent: "bg-[#F6EDF8] text-[#4E0E58] border-[#61126E]/30",
};

export function Badge({
  tone = "neutral",
  children,
  className = "",
}: {
  tone?: BadgeTone;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold ${toneClasses[tone]} ${className}`}
    >
      {children}
    </span>
  );
}