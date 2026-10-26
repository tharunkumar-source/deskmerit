import React from "react";

export interface LiveLoopSymbolProps {
  className?: string;
  size?: number;
  /**
   * Symbol variation:
   * - 'default': Midnight loop + Ember pulse dot
   * - 'reverse': White loop + Ember pulse dot
   * - 'monochrome-black': All black (single-ink print, stamps)
   * - 'monochrome-white': All white (for placement on Ember backgrounds)
   * - 'app-icon': Loop inside squircle app icon container
   */
  variant?: "default" | "reverse" | "monochrome-black" | "monochrome-white" | "app-icon";
}

/**
 * PulseTrack Live Loop Symbol
 * Constructed strictly per Page 5 of Brand Guidelines:
 * - Grid: 64 × 64 units
 * - Ring radius: 13 units, centre (34, 25)
 * - Stroke weight: 8.5 units, round caps
 * - Ring sweep: Starts at the stem (180°), ends at 45° (three-quarters closed)
 * - Pulse dot: Ø 10.8 units (r = 5.4), centre (31.2, 37.7)
 * - Stem: Vertical, from ring centre-line (25) to 27 units below (52)
 */
export function LiveLoopSymbol({
  className = "",
  size = 32,
  variant = "default",
}: LiveLoopSymbolProps) {
  // Determine loop stroke color
  let loopColor = "#0F1730"; // Midnight default
  let dotColor = "#FF5A36";  // Ember default

  if (variant === "reverse") {
    loopColor = "#FFFFFF";
    dotColor = "#FF5A36";
  } else if (variant === "monochrome-black") {
    loopColor = "#0F1730";
    dotColor = "#0F1730";
  } else if (variant === "monochrome-white") {
    loopColor = "#FFFFFF";
    dotColor = "#FFFFFF";
  }

  const svgContent = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* 
        Ring & Stem Path:
        - Stem starts at (21, 52) and goes vertically up to ring centerline at (21, 25)
        - Arc sweeps clockwise with radius 13 from (21, 25) to angle 45°:
          x = 34 + 13 * cos(45°) = 43.19
          y = 25 + 13 * sin(45°) = 34.19
      */}
      <path
        d="M 21 52 L 21 25 A 13 13 0 1 1 43.19 34.19"
        stroke={loopColor}
        strokeWidth="8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Pulse Dot: Ø 10.8 (r = 5.4) at centre (31.2, 37.7) */}
      <circle cx="31.2" cy="37.7" r="5.4" fill={dotColor} />
    </svg>
  );

  if (variant === "app-icon") {
    return (
      <div
        className="inline-flex items-center justify-center rounded-[22%] bg-[#0F1730] p-[16%] shadow-md"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M 21 52 L 21 25 A 13 13 0 1 1 43.19 34.19"
            stroke="#FFFFFF"
            strokeWidth="8.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="31.2" cy="37.7" r="5.4" fill="#FF5A36" />
        </svg>
      </div>
    );
  }

  return svgContent;
}
