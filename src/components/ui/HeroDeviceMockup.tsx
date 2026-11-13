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
      ? "max-w-[390px]"
      : type === "card" || type === "compact"
      ? "max-w-[480px]"
      : "max-w-full sm:max-w-[620px]";

  return (
    <div className={`relative w-full ${maxWidth} mx-auto group ${className}`}>
      {/* Luminous Light-Colored Ambient Glow / Shadow Behind the Mockup Image */}
      <div className="absolute -inset-3 bg-gradient-to-tr from-[#9333EA]/35 via-[#D8B4FE]/30 to-[#61126E]/40 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* 100% Native Image - Zero hardcoded mockup UI or device frames in code */}
      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full h-auto block object-contain select-none transition-transform duration-300 group-hover:scale-[1.01]"
        style={{ imageRendering: "auto" }}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}
