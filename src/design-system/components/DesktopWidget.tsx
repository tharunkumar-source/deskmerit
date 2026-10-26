import React, { useState, useEffect } from "react";
import { LiveLoopSymbol } from "./LiveLoopSymbol";
import { Button } from "./Button";
import { TOKENS } from "../tokens";

export interface DesktopWidgetProps {
  initialTask?: string;
  initialCode?: string;
  initialSeconds?: number;
  className?: string;
}

export function DesktopWidget({
  initialTask = "Checkout API refactor",
  initialCode = "JIRA · KMB-482",
  initialSeconds = 8049, // 02:14:09
  className = "",
}: DesktopWidgetProps) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(true);
  const [isPrivate, setIsPrivate] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (totalSec: number) => {
    const hrs = Math.floor(totalSec / 3600);
    const mins = Math.floor((totalSec % 3600) / 60);
    const secs = totalSec % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div
      className={`rounded-[18px] bg-[#0F1730] border border-[#24305A] p-5 text-white shadow-xl max-w-md w-full select-none ${className}`}
    >
      <div className="flex items-center justify-between pb-3 border-b border-[#24305A]/80">
        <div className="flex items-center gap-3">
          <LiveLoopSymbol size={32} variant="reverse" />
          <div>
            <div className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
              {initialCode}
            </div>
            <div className="text-[14px] font-semibold text-white truncate max-w-[200px]">
              {initialTask}
            </div>
          </div>
        </div>

        {/* Live digital timer in tabular numerals */}
        <div className="font-display font-bold text-[20px] tracking-tight tnum text-white">
          {formatTime(seconds)}
        </div>
      </div>

      {/* Action buttons adhering to guidelines Page 16 */}
      <div className="grid grid-cols-2 gap-3 mt-4">
        <Button
          variant="widget-stop"
          size="sm"
          onClick={() => setIsRunning(!isRunning)}
          className="h-10 text-[13px] rounded-[10px]"
        >
          {isRunning ? "Stop" : "Resume"}
        </Button>
        <Button
          variant="widget-sub"
          size="sm"
          onClick={() => setIsPrivate(!isPrivate)}
          className={`h-10 text-[13px] rounded-[10px] ${
            isPrivate ? "border border-[#5B6CFF] text-[#5B6CFF]" : ""
          }`}
        >
          {isPrivate ? "In Private Time" : "Private Time"}
        </Button>
      </div>

      {isPrivate && (
        <div className="mt-3 flex items-center gap-2 text-[11px] text-[#5B6CFF] bg-[#5B6CFF]/10 py-1.5 px-3 rounded-lg">
          <span className="w-1.5 h-1.5 rounded-full bg-[#5B6CFF]" />
          <span>Private Time is active — never counted as idle.</span>
        </div>
      )}
    </div>
  );
}
