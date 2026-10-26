import React from "react";
import { TOKENS } from "../tokens";

export interface PulseDotProps {
  /** Size in pixels (default 8px per brand guidelines) */
  size?: number;
  /** Whether the dot pulses (1.6s ease) */
  pulse?: boolean;
  className?: string;
}

export function PulseDot({
  size = 8,
  pulse = true,
  className = "",
}: PulseDotProps) {
  return (
    <span
      className={`inline-block rounded-full shrink-0 ${pulse ? "pulse-dot" : ""} ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: TOKENS.ember,
      }}
      aria-hidden="true"
    />
  );
}
