import React from "react";
import { Link } from "react-router-dom";
import { LiveLoopSymbol } from "./LiveLoopSymbol";

export interface PulseTrackLogoProps {
  /**
   * Logo version per Page 6 & 18:
   * - 'primary': Midnight loop + Ember dot + Midnight text (default)
   * - 'reverse': White loop + Ember dot + White text (for dark backgrounds)
   * - 'stacked': Vertical lockup (symbol on top, wordmark below)
   * - 'symbol': Symbol only
   * - 'app-icon': Squircle icon container
   * - 'monochrome-black': Single-ink black
   * - 'monochrome-white': White on Ember
   * - 'endorsed': Includes "A Kombee Technologies product" sub-label
   */
  variant?:
    | "primary"
    | "reverse"
    | "stacked"
    | "symbol"
    | "app-icon"
    | "monochrome-black"
    | "monochrome-white"
    | "endorsed";
  size?: "sm" | "md" | "lg" | "xl";
  href?: string;
  className?: string;
  /** Whether to render as an interactive link to home */
  asLink?: boolean;
}

export function PulseTrackLogo({
  variant = "primary",
  size = "md",
  href = "/",
  className = "",
  asLink = true,
}: PulseTrackLogoProps) {
  const isDark = variant === "reverse" || variant === "monochrome-white";
  const isMonoBlack = variant === "monochrome-black";
  const isMonoWhite = variant === "monochrome-white";

  // Symbol sizes
  const symbolSizeMap = {
    sm: 22,
    md: 28,
    lg: 38,
    xl: 52,
  };
  const symbolPx = symbolSizeMap[size];

  // Text sizes and tracking per Page 5 & 12
  const textClassesMap = {
    sm: "text-[18px] tracking-[-0.03em]",
    md: "text-[23px] tracking-[-0.03em]",
    lg: "text-[32px] tracking-[-0.03em]",
    xl: "text-[44px] tracking-[-0.03em]",
  };
  const textClass = textClassesMap[size];

  // Text color
  const textColor = isDark ? "#FFFFFF" : isMonoBlack ? "#0F1730" : "#0F1730";

  // Symbol variant passed down
  const symbolVariant =
    variant === "app-icon"
      ? "app-icon"
      : isMonoWhite
      ? "monochrome-white"
      : isMonoBlack
      ? "monochrome-black"
      : isDark
      ? "reverse"
      : "default";

  // Symbol only
  if (variant === "symbol" || variant === "app-icon") {
    const symbolEl = <LiveLoopSymbol size={symbolPx} variant={symbolVariant} />;
    if (asLink) {
      return (
        <Link
          to={href}
          aria-label="Deskmerit home"
          className={`inline-flex items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] ${className}`}
        >
          {symbolEl}
        </Link>
      );
    }
    return <span className={`inline-flex items-center ${className}`}>{symbolEl}</span>;
  }

  // Stacked version
  if (variant === "stacked") {
    const content = (
      <div className={`inline-flex flex-col items-center gap-1 ${className}`}>
        <span
          className={`font-display font-bold leading-none select-none ${textClass}`}
          style={{ color: textColor }}
        >
          deskmerit
        </span>
      </div>
    );
    if (asLink) {
      return (
        <Link to={href} aria-label="Deskmerit home" className="inline-block">
          {content}
        </Link>
      );
    }
    return content;
  }

  // Horizontal version (default and endorsed)
  const isEndorsed = variant === "endorsed";

  const logoContent = (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <div className="inline-flex items-center">
        <span
          className={`font-display font-bold leading-none select-none ${textClass}`}
          style={{ color: textColor }}
        >
          deskmerit
        </span>
      </div>
      {isEndorsed && (
        <span
          className="text-[10px] sm:text-[11px] font-medium tracking-normal text-slate-400 mt-1 pl-[1px]"
          style={{ color: isDark ? "#E6E2D8" : "#4A5370" }}
        >
          A Kombee Technologies product
        </span>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link
        to={href}
        aria-label="Deskmerit home"
        className="group inline-flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] rounded-lg py-1 transition-opacity hover:opacity-90"
      >
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
