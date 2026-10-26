import React from "react";
import { TOKENS } from "../tokens";

export interface ProgressLoopProps {
  /** Value from 0 to 100 */
  value: number;
  /** Size in pixels (default 80) */
  size?: number;
  /** Stroke width in pixels (default 8) */
  strokeWidth?: number;
  /** Color of the progress arc (or automatic by score) */
  color?: string;
  /** Label underneath or center text */
  label?: string;
  className?: string;
}

export function ProgressLoop({
  value,
  size = 80,
  strokeWidth = 8,
  color,
  label,
  className = "",
}: ProgressLoopProps) {
  const clampedValue = Math.min(100, Math.max(0, value));
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clampedValue / 100) * circumference;

  // Auto color by threshold if not provided
  let arcColor = color;
  if (!arcColor) {
    if (clampedValue >= 80) arcColor = TOKENS.mint;
    else if (clampedValue >= 50) arcColor = TOKENS.amber;
    else arcColor = TOKENS.ember;
  }

  return (
    <div className={`inline-flex flex-col items-center gap-1.5 ${className}`}>
      <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={TOKENS.mist}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress arc starting at 12 o'clock and running clockwise */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={arcColor}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-700 ease-out"
          />
        </svg>

        {/* Center score percentage */}
        <div className="absolute inset-0 flex items-center justify-center font-display font-bold text-[#0F1730] tnum" style={{ fontSize: size * 0.28 }}>
          {clampedValue}%
        </div>
      </div>

      {label && (
        <span className="text-[12px] font-medium text-[#4A5370] text-center">
          {label}
        </span>
      )}
    </div>
  );
}
