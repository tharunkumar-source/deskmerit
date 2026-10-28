import React from "react";

export type LiveStateType =
  | "tracking"     // Mint #12B886 (Productive)
  | "idle"         // Amber #F5A524 (Neutral)
  | "private"      // Iris #5B6CFF (Private Time)
  | "offline"      // Fog #9AA1B2 (Offline)
  | "unproductive" // Rose #E5484D (Alert)
  | "ember"        // Ember highlight
  | "midnight";    // Dark badge

export interface StatusBadgeProps {
  state: LiveStateType;
  label?: string;
  count?: number | string;
  variant?: "pill" | "dot-only" | "soft";
  className?: string;
  children?: React.ReactNode;
}

const stateConfig: Record<
  LiveStateType,
  {
    name: string;
    dotColor: string;
    bgSoft: string;
    textColor: string;
    borderColor: string;
  }
> = {
  tracking: {
    name: "Tracking",
    dotColor: "#12B886",
    bgSoft: "#E8F8F3",
    textColor: "#0E8E66",
    borderColor: "#12B88630",
  },
  idle: {
    name: "Idle",
    dotColor: "#F5A524",
    bgSoft: "#FEF6E9",
    textColor: "#B37107",
    borderColor: "#F5A52430",
  },
  private: {
    name: "Private Time",
    dotColor: "#5B6CFF",
    bgSoft: "#EEF0FF",
    textColor: "#3F4FD6",
    borderColor: "#5B6CFF30",
  },
  offline: {
    name: "Offline",
    dotColor: "#9AA1B2",
    bgSoft: "#F3F4F6",
    textColor: "#4A5370",
    borderColor: "#9AA1B230",
  },
  unproductive: {
    name: "Unproductive",
    dotColor: "#E5484D",
    bgSoft: "#FDECEE",
    textColor: "#4E0E58",
    borderColor: "#E5484D30",
  },
  ember: {
    name: "Highlight",
    dotColor: "#61126E",
    bgSoft: "#F6EDF8",
    textColor: "#4E0E58",
    borderColor: "#61126E30",
  },
  midnight: {
    name: "Dark",
    dotColor: "#FFFFFF",
    bgSoft: "#0F1730",
    textColor: "#FFFFFF",
    borderColor: "#24305A",
  },
};

/**
 * StatusBadge component.
 * Page 10 rule: Always pair live-state colors with a label or icon — never colour alone.
 */
export function StatusBadge({
  state,
  label,
  count,
  variant = "pill",
  className = "",
  children,
}: StatusBadgeProps) {
  const cfg = stateConfig[state] || stateConfig.tracking;
  const displayLabel = label ?? children ?? cfg.name;

  if (variant === "dot-only") {
    return (
      <span
        className={`inline-block w-2.5 h-2.5 rounded-full shrink-0 ${className}`}
        style={{ backgroundColor: cfg.dotColor }}
        title={`${cfg.name}${count !== undefined ? `: ${count}` : ""}`}
      />
    );
  }

  if (variant === "soft") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[12px] font-semibold border ${className}`}
        style={{
          backgroundColor: cfg.bgSoft,
          color: cfg.textColor,
          borderColor: cfg.borderColor,
        }}
      >
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: cfg.dotColor }}
        />
        <span>{displayLabel}</span>
        {count !== undefined && (
          <span className="font-bold tnum opacity-80">{count}</span>
        )}
      </span>
    );
  }

  // Default "pill" style as shown in Page 16 (e.g. ● 14 Tracking)
  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[13px] font-medium text-[#0F1730] ${className}`}
    >
      <span
        className="w-2 h-2 rounded-full shrink-0"
        style={{ backgroundColor: cfg.dotColor }}
      />
      {count !== undefined && (
        <span className="font-semibold tnum">{count}</span>
      )}
      <span>{displayLabel}</span>
    </span>
  );
}
