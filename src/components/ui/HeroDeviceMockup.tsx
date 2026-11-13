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
  // Sizing container based on image type
  const maxWidth =
    type === "mobile" || type === "tray"
      ? "max-w-[360px] sm:max-w-[390px]"
      : type === "card" || type === "compact"
      ? "max-w-[440px] sm:max-w-[480px]"
      : "max-w-full sm:max-w-[640px] lg:max-w-[680px]";

  // Rounded radius corresponding to the baked device frame shape
  const deviceRadius =
    type === "mobile"
      ? "rounded-[46px]"
      : type === "card" || type === "compact"
      ? "rounded-[36px]"
      : "rounded-[32px] sm:rounded-[36px]";

  return (
    <div className={`relative w-full ${maxWidth} mx-auto group cursor-pointer ${className}`}>
      {/* 1. Luminous Light-Colored Ambient Glow / Diffuse Aura */}
      <div
        className={`absolute -inset-4 sm:-inset-5 bg-gradient-to-tr from-[#9333EA]/45 via-[#D8B4FE]/35 to-[#61126E]/50 ${deviceRadius} blur-2xl opacity-75 group-hover:opacity-100 group-hover:scale-105 group-hover:blur-3xl transition-all duration-500 ease-out pointer-events-none`}
      />

      {/* 2. Direct Chassis Glow & Elevation Shadow (Restores tactile 3D hover response) */}
      <div
        className={`absolute inset-0 ${deviceRadius} shadow-[0_0_55px_rgba(216,180,254,0.32),0_25px_65px_-12px_rgba(168,85,247,0.48)] group-hover:shadow-[0_0_80px_rgba(216,180,254,0.55),0_32px_85px_-8px_rgba(168,85,247,0.70)] transition-all duration-500 ease-out pointer-events-none`}
      />

      {/* 3. 100% Native Image - Zero hardcoded device frame code in React */}
      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full h-auto block object-contain select-none drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_20px_35px_rgba(0,0,0,0.50)] transition-all duration-500 ease-out group-hover:scale-[1.02] group-hover:-translate-y-1"
        style={{ imageRendering: "auto" }}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}
