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
      ? "max-w-[360px] sm:max-w-[400px]"
      : type === "card" || type === "compact"
      ? "max-w-[420px] sm:max-w-[460px]"
      : "max-w-full sm:max-w-[640px] lg:max-w-[680px]";

  return (
    <div className={`relative w-full ${maxWidth} mx-auto group cursor-pointer ${className}`}>
      {/* 100% Native Image - Zero dark solid background box behind mockup */}
      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full h-auto block object-contain select-none drop-shadow-[0_16px_36px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_24px_48px_rgba(0,0,0,0.48)] transition-all duration-500 ease-out group-hover:scale-[1.015] group-hover:-translate-y-1"
        style={{ imageRendering: "auto" }}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
}
