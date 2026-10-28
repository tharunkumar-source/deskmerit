import React from "react";
import { Link } from "react-router-dom";

export interface DeskmeritLogoProps {
  variant?: "horizontal" | "reverse" | "stacked" | "symbol";
  className?: string;
  size?: "sm" | "md" | "lg";
  endorsement?: boolean;
}

/**
 * Brand Logo component rendering the official Deskmerit logo asset.
 * Includes D icon with clock accent and DESKMERIT typography in official deep purple #61126E.
 */
export function DeskmeritLogo({
  variant = "horizontal",
  className = "",
  size = "md",
}: DeskmeritLogoProps) {
  const isDark = variant === "reverse";

  const heightClasses = {
    sm: "h-6 sm:h-7",
    md: "h-7 sm:h-8",
    lg: "h-9 sm:h-10",
  };
  const hClass = heightClasses[size] || "h-7 sm:h-8";

  return (
    <Link
      to="/"
      aria-label="Deskmerit home"
      className={`inline-flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#61126E] rounded-md transition-opacity hover:opacity-95 shrink-0 ${className}`}
    >
      <img
        src="/images/deskmerit-logo.png"
        alt="Deskmerit"
        className={`${hClass} w-auto object-contain block ${isDark ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
