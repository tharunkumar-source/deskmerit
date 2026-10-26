import React from "react";
import { TOKENS } from "../tokens";

export interface DaySegment {
  state: "tracking" | "idle" | "private" | "offline" | "unproductive";
  durationMinutes: number;
  label?: string;
}

export interface DayLineProps {
  /** Array of segments representing the day's timeline */
  segments?: DaySegment[];
  /** Height of the bar (default 12px per guidelines) */
  height?: number;
  /** Whether to show time indicators (09:00, 13:00, 18:00) */
  showTimeLabels?: boolean;
  /** Whether to render the legend below */
  showLegend?: boolean;
  className?: string;
}

const colorMap = {
  tracking: TOKENS.mint,
  idle: TOKENS.amber,
  private: TOKENS.iris,
  offline: TOKENS.fog,
  unproductive: TOKENS.rose,
};

const defaultSegments: DaySegment[] = [
  { state: "tracking", durationMinutes: 180 },    // 9:00 - 12:00
  { state: "idle", durationMinutes: 25 },         // 12:00 - 12:25
  { state: "tracking", durationMinutes: 35 },     // 12:25 - 13:00
  { state: "private", durationMinutes: 45 },      // 13:00 - 13:45
  { state: "tracking", durationMinutes: 195 },    // 13:45 - 17:00
  { state: "unproductive", durationMinutes: 20 }, // 17:00 - 17:20
  { state: "tracking", durationMinutes: 40 },     // 17:20 - 18:00
];

export function DayLine({
  segments = defaultSegments,
  height = 12,
  showTimeLabels = true,
  showLegend = true,
  className = "",
}: DayLineProps) {
  const totalMinutes = segments.reduce((acc, seg) => acc + seg.durationMinutes, 0);

  return (
    <div className={`w-full flex flex-col gap-2 ${className}`}>
      {/* Time indicators */}
      {showTimeLabels && (
        <div className="flex justify-between items-center text-[11px] font-medium text-[#4A5370] tnum px-0.5">
          <span>09:00</span>
          <span>13:00</span>
          <span>18:00</span>
        </div>
      )}

      {/* Rounded bar */}
      <div
        className="w-full rounded-full overflow-hidden flex bg-[#E6E2D8] shadow-inner"
        style={{ height }}
      >
        {segments.map((seg, idx) => {
          const widthPercent = totalMinutes > 0 ? (seg.durationMinutes / totalMinutes) * 100 : 0;
          return (
            <div
              key={idx}
              style={{
                width: `${widthPercent}%`,
                backgroundColor: colorMap[seg.state],
              }}
              className="h-full transition-all duration-300 relative group"
              title={`${seg.label || seg.state}: ${seg.durationMinutes}m (${Math.round(widthPercent)}%)`}
            />
          );
        })}
      </div>

      {/* Legend */}
      {showLegend && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 pt-1 text-[12px] text-[#4A5370]">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: TOKENS.mint }} />
            <span>Tracking</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: TOKENS.amber }} />
            <span>Idle</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: TOKENS.iris }} />
            <span>Private</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: TOKENS.fog }} />
            <span>Offline</span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: TOKENS.rose }} />
            <span>Unproductive</span>
          </span>
        </div>
      )}
    </div>
  );
}
