import React, { useState } from "react";
import {
  brandIdentity,
  brandColors,
  brandAccessiblePairings,
  brandTypography,
  TOKENS,
} from "../tokens";
import { LiveLoopSymbol } from "./LiveLoopSymbol";
import { PulseTrackLogo } from "./PulseTrackLogo";
import { Button } from "./Button";
import { StatusBadge } from "./StatusBadge";
import { DayLine } from "./DayLine";
import { ProgressLoop } from "./ProgressLoop";
import { PulseDot } from "./PulseDot";
import { DesktopWidget } from "./DesktopWidget";

export function BrandGuidelinesShowcase() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "colors" | "typography" | "logo" | "components" | "voice"
  >("overview");

  return (
    <div className="min-w-full bg-[#F7F4EE] text-[#0F1730] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Header */}
        <div className="border-b border-[#E6E2D8] pb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="text-[12px] uppercase tracking-[0.14em] font-semibold text-[#FF5A36] bg-[#FFE6DF] px-2.5 py-0.5 rounded-full">
                  Design System & Brand Guidelines v1.0
                </span>
                <span className="text-[12px] text-[#4A5370]">October 2026</span>
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl text-[#0F1730] tracking-tight">
                Deskmerit Brand Guidelines
              </h1>
              <p className="mt-2 text-lg text-[#4A5370] font-normal">
                Single Source of Truth in Code for colors, typography, logos, and UI tokens.
              </p>
            </div>
            <PulseTrackLogo variant="primary" size="lg" asLink={false} />
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-8 overflow-x-auto no-scrollbar border-b border-[#E6E2D8]/60 pb-1">
            {[
              { id: "overview", label: "01 Brand Idea" },
              { id: "logo", label: "02 Logo" },
              { id: "colors", label: "03 Colour & Contrast" },
              { id: "typography", label: "04 Typography" },
              { id: "components", label: "05 UI Components" },
              { id: "voice", label: "06 Voice & Tone" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-[#0F1730] text-white shadow-sm"
                    : "text-[#4A5370] hover:text-[#0F1730] hover:bg-[#E6E2D8]/50"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* TAB 1: OVERVIEW & BRAND IDEA */}
        {activeTab === "overview" && (
          <div className="space-y-10">
            {/* Mission Hero Banner */}
            <div className="bg-[#0F1730] rounded-[24px] p-8 sm:p-12 text-white relative overflow-hidden">
              <div className="relative z-10 max-w-2xl">
                <div className="text-[#FF5A36] font-semibold text-xs tracking-wider uppercase mb-2">
                  01 · Brand Idea
                </div>
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight leading-tight">
                  Time tracking people trust.
                </h2>
                <p className="mt-4 text-base sm:text-lg text-[#E6E2D8] font-normal leading-relaxed">
                  Most tools in this category were designed for the person watching. Deskmerit is designed for both sides of the screen: managers get honest answers, employees keep their dignity.
                </p>
                <div className="mt-8 pt-6 border-t border-[#24305A] flex flex-wrap gap-4 items-center">
                  <span className="font-human text-xl text-[#FFE6DF]">
                    “{brandIdentity.taglines.secondary}”
                  </span>
                </div>
              </div>

              {/* Watermark loop in dusk */}
              <div className="absolute -right-16 -bottom-16 opacity-10 pointer-events-none">
                <LiveLoopSymbol size={400} variant="reverse" />
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-[20px] p-6 border border-[#E6E2D8] shadow-sm">
                <div className="text-[12px] font-semibold tracking-wider uppercase text-[#4A5370]">
                  PURPOSE
                </div>
                <div className="mt-2 text-xl font-display font-bold text-[#0F1730]">
                  Make work time honest.
                </div>
                <p className="mt-2 text-sm text-[#4A5370] leading-relaxed">
                  {brandIdentity.purpose}
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-6 border border-[#E6E2D8] shadow-sm">
                <div className="text-[12px] font-semibold tracking-wider uppercase text-[#4A5370]">
                  PROMISE
                </div>
                <div className="mt-2 text-xl font-display font-bold text-[#0F1730]">
                  One click. Three answers.
                </div>
                <p className="mt-2 text-sm text-[#4A5370] leading-relaxed">
                  {brandIdentity.promise}
                </p>
              </div>

              <div className="bg-white rounded-[20px] p-6 border border-[#E6E2D8] shadow-sm">
                <div className="text-[12px] font-semibold tracking-wider uppercase text-[#4A5370]">
                  POSITIONING
                </div>
                <div className="mt-2 text-xl font-display font-bold text-[#0F1730]">
                  The trust-first tracker.
                </div>
                <p className="mt-2 text-sm text-[#4A5370] leading-relaxed">
                  {brandIdentity.positioning}
                </p>
              </div>
            </div>

            {/* Personality Bar */}
            <div className="bg-white rounded-[20px] p-8 border border-[#E6E2D8] shadow-sm">
              <div className="text-[12px] font-semibold tracking-wider uppercase text-[#4A5370] mb-4">
                BRAND PERSONALITY
              </div>
              <div className="flex flex-wrap gap-3">
                {brandIdentity.personality.map((trait) => (
                  <span
                    key={trait}
                    className="px-4 py-2 rounded-xl bg-[#0F1730] text-white font-semibold text-sm"
                  >
                    {trait}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[#4A5370] italic">
                "{brandIdentity.metaphor}"
              </p>
            </div>
          </div>
        )}

        {/* TAB 2: LOGO */}
        {activeTab === "logo" && (
          <div className="space-y-10">
            {/* The Live Loop Concept */}
            <div className="bg-white rounded-[20px] p-8 border border-[#E6E2D8] shadow-sm">
              <div className="text-[#FF5A36] font-semibold text-xs tracking-wider uppercase mb-2">
                02 · LOGO
              </div>
              <h2 className="text-3xl font-display font-bold text-[#0F1730]">
                The Live Loop
              </h2>
              <p className="mt-2 text-base text-[#4A5370] max-w-3xl">
                Our symbol is a lowercase p drawn as a time ring that is three-quarters complete. The ember dot is the pulse: the live moment being tracked right now.
              </p>

              {/* Anatomy cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                <div className="p-4 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8]">
                  <div className="font-bold text-[#0F1730] text-sm">The ring</div>
                  <p className="mt-1 text-xs text-[#4A5370]">
                    A progress dial — time accumulating, never a surveillance eye.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8]">
                  <div className="font-bold text-[#0F1730] text-sm">The stem</div>
                  <p className="mt-1 text-xs text-[#4A5370]">
                    One straight stroke: the single click that starts everything.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8]">
                  <div className="font-bold text-[#0F1730] text-sm">The pulse</div>
                  <p className="mt-1 text-xs text-[#4A5370]">
                    A warm ember dot that sits apart from the ring — present, alive, not pushy.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F4EE] border border-[#E6E2D8]">
                  <div className="font-bold text-[#0F1730] text-sm">The wordmark</div>
                  <p className="mt-1 text-xs text-[#4A5370]">
                    Lowercase Inter Display Bold, tracked −3%. Approachable, not corporate.
                  </p>
                </div>
              </div>
            </div>

            {/* Construction Specs Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-[20px] p-8 border border-[#E6E2D8] shadow-sm">
              <div className="flex flex-col items-center justify-center p-8 bg-[#F7F4EE] rounded-2xl border border-dashed border-[#E6E2D8]">
                <div className="relative p-6 bg-white rounded-xl shadow-sm border border-[#E6E2D8]">
                  <LiveLoopSymbol size={160} variant="default" />
                  <div className="text-[10px] text-center font-mono text-[#4A5370] mt-3">
                    64 × 64 master grid · r=13 · Ø10.8 pulse dot
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-display font-bold text-xl text-[#0F1730]">
                  Construction Geometry (64×64 Unit Grid)
                </h3>
                <div className="divide-y divide-[#E6E2D8] text-sm">
                  <div className="py-2 flex justify-between">
                    <span className="text-[#4A5370]">Grid</span>
                    <span className="font-mono font-semibold text-[#0F1730]">64 × 64 units</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#4A5370]">Ring radius</span>
                    <span className="font-mono font-semibold text-[#0F1730]">13 units, centre (34, 25)</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#4A5370]">Stroke weight</span>
                    <span className="font-mono font-semibold text-[#0F1730]">8.5 units, round caps</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#4A5370]">Ring sweep</span>
                    <span className="font-mono font-semibold text-[#0F1730]">Starts at stem, ends at 45°</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#4A5370]">Pulse dot</span>
                    <span className="font-mono font-semibold text-[#0F1730]">Ø 10.8 units, centre (31.2, 37.7)</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#4A5370]">Stem</span>
                    <span className="font-mono font-semibold text-[#0F1730]">Vertical, from 25 to 52 (27 units)</span>
                  </div>
                  <div className="py-2 flex justify-between">
                    <span className="text-[#4A5370]">Wordmark</span>
                    <span className="font-mono font-semibold text-[#0F1730]">Inter Display Bold, −3% tracking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo Versions Showcase */}
            <div className="space-y-4">
              <h3 className="font-display font-bold text-2xl text-[#0F1730]">
                Official Versions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Primary Horizontal */}
                <div className="bg-white rounded-[20px] p-6 border border-[#E6E2D8] flex flex-col justify-between h-48">
                  <div className="flex items-center justify-center h-full">
                    <PulseTrackLogo variant="primary" size="md" asLink={false} />
                  </div>
                  <div className="text-[12px] text-[#4A5370] border-t border-[#E6E2D8] pt-2">
                    <strong className="text-[#0F1730]">Primary horizontal</strong> — default for web, product, print
                  </div>
                </div>

                {/* Reverse */}
                <div className="bg-[#0F1730] rounded-[20px] p-6 border border-[#24305A] flex flex-col justify-between h-48">
                  <div className="flex items-center justify-center h-full">
                    <PulseTrackLogo variant="reverse" size="md" asLink={false} />
                  </div>
                  <div className="text-[12px] text-[#E6E2D8] border-t border-[#24305A] pt-2">
                    <strong className="text-white">Reverse</strong> — on Midnight or dark surfaces
                  </div>
                </div>

                {/* Stacked */}
                <div className="bg-white rounded-[20px] p-6 border border-[#E6E2D8] flex flex-col justify-between h-48">
                  <div className="flex items-center justify-center h-full">
                    <PulseTrackLogo variant="stacked" size="md" asLink={false} />
                  </div>
                  <div className="text-[12px] text-[#4A5370] border-t border-[#E6E2D8] pt-2">
                    <strong className="text-[#0F1730]">Stacked</strong> — square spaces, merchandise
                  </div>
                </div>

                {/* One colour black */}
                <div className="bg-white rounded-[20px] p-6 border border-[#E6E2D8] flex flex-col justify-between h-48">
                  <div className="flex items-center justify-center h-full">
                    <PulseTrackLogo variant="monochrome-black" size="md" asLink={false} />
                  </div>
                  <div className="text-[12px] text-[#4A5370] border-t border-[#E6E2D8] pt-2">
                    <strong className="text-[#0F1730]">One colour black</strong> — fax, stamps, single-ink
                  </div>
                </div>

                {/* One colour white on Ember */}
                <div className="bg-[#FF5A36] rounded-[20px] p-6 border border-[#E94A27] flex flex-col justify-between h-48">
                  <div className="flex items-center justify-center h-full">
                    <PulseTrackLogo variant="monochrome-white" size="md" asLink={false} />
                  </div>
                  <div className="text-[12px] text-white/90 border-t border-white/20 pt-2">
                    <strong className="text-white">One colour white</strong> — on Ember, large sizes only
                  </div>
                </div>

                {/* Symbol and app icon */}
                <div className="bg-white rounded-[20px] p-6 border border-[#E6E2D8] flex flex-col justify-between h-48">
                  <div className="flex items-center justify-center gap-6 h-full">
                    <LiveLoopSymbol size={44} variant="default" />
                    <LiveLoopSymbol size={44} variant="app-icon" />
                  </div>
                  <div className="text-[12px] text-[#4A5370] border-t border-[#E6E2D8] pt-2">
                    <strong className="text-[#0F1730]">Symbol & app icon</strong> — favicon, agent, avatars
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: COLORS & CONTRAST */}
        {activeTab === "colors" && (
          <div className="space-y-12">
            {/* Core Palette */}
            <div>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
                <div>
                  <div className="text-[#FF5A36] font-semibold text-xs tracking-wider uppercase mb-1">
                    03 · COLOUR
                  </div>
                  <h2 className="text-3xl font-display font-bold text-[#0F1730]">
                    Core Palette
                  </h2>
                  <p className="text-sm text-[#4A5370]">
                    Midnight and Paper do most of the work. Ember is the pulse: use it sparingly so it always means "this matters".
                  </p>
                </div>

                {/* Recommended proportion preview bar */}
                <div className="text-xs text-[#4A5370]">
                  <div className="font-semibold mb-1">Recommended page proportion:</div>
                  <div className="flex h-4 w-72 rounded-full overflow-hidden border border-[#E6E2D8]">
                    <div style={{ width: "45%" }} className="bg-[#F7F4EE]" title="Paper 45%" />
                    <div style={{ width: "25%" }} className="bg-[#0F1730]" title="Midnight 25%" />
                    <div style={{ width: "15%" }} className="bg-[#FFFFFF]" title="White 15%" />
                    <div style={{ width: "10%" }} className="bg-[#4A5370]" title="Slate 10%" />
                    <div style={{ width: "5%" }} className="bg-[#FF5A36]" title="Ember 5%" />
                  </div>
                  <div className="flex justify-between text-[10px] mt-1 text-[#4A5370]">
                    <span>Paper 45</span>
                    <span>Midnight 25</span>
                    <span>White 15</span>
                    <span>Slate 10</span>
                    <span>Ember 5</span>
                  </div>
                </div>
              </div>

              {/* Swatch Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {Object.entries(brandColors.core).map(([key, item]) => {
                  const isLight =
                    key === "paper" || key === "white" || key === "mist" || key === "emberTint";
                  return (
                    <div
                      key={key}
                      className="rounded-[16px] overflow-hidden border border-[#E6E2D8] bg-white shadow-sm flex flex-col"
                    >
                      <div
                        className="h-28 p-4 flex flex-col justify-between"
                        style={{ backgroundColor: item.hex }}
                      >
                        <div
                          className={`font-display font-bold text-lg capitalize ${
                            isLight ? "text-[#0F1730]" : "text-white"
                          }`}
                        >
                          {key.replace(/([A-Z])/g, " $1")}
                        </div>
                        <div
                          className={`text-xs font-mono ${
                            isLight ? "text-[#0F1730]/80" : "text-white/80"
                          }`}
                        >
                          {item.hex} · RGB {item.rgb}
                        </div>
                      </div>
                      <div className="p-3 text-[12px] text-[#4A5370] bg-white">
                        {item.role}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live-State Colours */}
            <div>
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-[#0F1730]">
                  Live-State Colours
                </h3>
                <p className="text-sm text-[#4A5370] mt-1">
                  These five colours carry meaning in the product and in data. Use them only for these meanings — never as decoration — and always pair them with a label or icon, never colour alone.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {Object.entries(brandColors.liveState).map(([key, item]) => (
                  <div
                    key={key}
                    className="bg-white rounded-[16px] p-4 border border-[#E6E2D8] shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span
                          className="w-4 h-4 rounded-full shrink-0 shadow-sm"
                          style={{ backgroundColor: item.hex }}
                        />
                        <span className="font-display font-bold text-[#0F1730] text-sm">
                          {item.name}
                        </span>
                      </div>
                      <div className="text-[12px] font-semibold text-[#0F1730]">
                        {item.meaning}
                      </div>
                      <p className="text-[11px] text-[#4A5370] mt-1">
                        {item.description}
                      </p>
                    </div>
                    <div className="font-mono text-[11px] text-[#4A5370] border-t border-[#E6E2D8] pt-2 mt-4">
                      {item.hex}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Accessible Pairings Table */}
            <div>
              <div className="mb-4">
                <h3 className="text-2xl font-display font-bold text-[#0F1730]">
                  Accessible Pairings (WCAG 2.2 AA)
                </h3>
                <p className="text-sm text-[#4A5370]">
                  Primary buttons are Ember with Midnight text — white on Ember is reserved for display sizes (24 px bold and above).
                </p>
              </div>

              <div className="bg-white rounded-[20px] overflow-hidden border border-[#E6E2D8] shadow-sm divide-y divide-[#E6E2D8]">
                {brandAccessiblePairings.map((pair, idx) => (
                  <div
                    key={idx}
                    className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-4">
                      {/* Live visual pairing preview */}
                      <span
                        className="px-3 py-1.5 rounded-lg text-sm font-semibold border"
                        style={{
                          backgroundColor:
                            pair.element.includes("on White")
                              ? "#FFFFFF"
                              : pair.element.includes("on Paper")
                              ? "#F7F4EE"
                              : pair.element.includes("on Ember")
                              ? "#FF5A36"
                              : "#0F1730",
                          color: pair.element.startsWith("Midnight")
                            ? "#0F1730"
                            : pair.element.startsWith("Slate")
                            ? "#4A5370"
                            : pair.element.startsWith("Ember Deep")
                            ? "#C2361A"
                            : "#FFFFFF",
                          borderColor: "#E6E2D8",
                        }}
                      >
                        Aa
                      </span>
                      <div>
                        <div className="font-semibold text-sm text-[#0F1730]">
                          {pair.element}
                        </div>
                        <div className="text-xs text-[#4A5370]">{pair.rule}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono">
                      <span className="text-[#0F1730] font-bold">{pair.ratio}</span>
                      <span
                        className={`px-2 py-0.5 rounded-full font-bold uppercase text-[10px] ${
                          pair.rating === "AAA"
                            ? "bg-emerald-100 text-emerald-800"
                            : pair.rating === "AA"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-amber-100 text-amber-800"
                        }`}
                      >
                        {pair.rating}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: TYPOGRAPHY */}
        {activeTab === "typography" && (
          <div className="space-y-12">
            <div>
              <div className="text-[#FF5A36] font-semibold text-xs tracking-wider uppercase mb-1">
                04 · TYPOGRAPHY
              </div>
              <h2 className="text-3xl font-display font-bold text-[#0F1730]">
                Three Typefaces, One Voice
              </h2>
              <p className="text-sm text-[#4A5370] mt-1">
                All three are open-source (SIL Open Font License) and free for web, product, and print.
              </p>
            </div>

            {/* 3 Font Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Inter Display */}
              <div className="bg-white rounded-[20px] p-6 border border-[#E6E2D8] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#FF5A36]">
                    DISPLAY
                  </div>
                  <div className="font-display font-extrabold text-6xl text-[#0F1730] my-4">
                    Aa
                  </div>
                  <div className="font-display font-bold text-xl text-[#0F1730]">
                    Inter Display
                  </div>
                  <p className="text-xs text-[#4A5370] mt-2">
                    Bold & ExtraBold, tracking −2.5% to −3%. Headlines, numbers in hero stats, the wordmark.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E6E2D8] font-display text-xs text-[#0F1730] tracking-[-0.025em]">
                  ABCDEFGHIJKLM abcdefghijklm 0123456789
                </div>
              </div>

              {/* Inter Text & UI */}
              <div className="bg-white rounded-[20px] p-6 border border-[#E6E2D8] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#0F1730]">
                    TEXT & UI
                  </div>
                  <div className="font-sans font-bold text-6xl text-[#0F1730] my-4">
                    Aa
                  </div>
                  <div className="font-sans font-bold text-xl text-[#0F1730]">
                    Inter
                  </div>
                  <p className="text-xs text-[#4A5370] mt-2">
                    Regular, Medium, SemiBold. Body copy, interface, tables. Turn on tabular figures for data.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E6E2D8] font-sans text-xs text-[#0F1730] tnum">
                  08:42 · 6h 14m · 92% (Tabular numbers)
                </div>
              </div>

              {/* Lora Italic */}
              <div className="bg-white rounded-[20px] p-6 border border-[#E6E2D8] shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-[#C2361A]">
                    HUMAN ACCENT
                  </div>
                  <div className="font-human text-6xl text-[#0F1730] my-4">
                    Aa
                  </div>
                  <div className="font-human text-xl text-[#0F1730]">
                    Lora Italic
                  </div>
                  <p className="text-xs text-[#4A5370] mt-2">
                    Medium Italic only. One phrase per layout: quotes, promises, the human moment.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#E6E2D8] font-human text-sm text-[#0F1730]">
                  “Every hour, honestly accounted for.”
                </div>
              </div>
            </div>

            {/* Live Type Scale */}
            <div className="bg-white rounded-[20px] p-8 border border-[#E6E2D8] shadow-sm space-y-8">
              <h3 className="font-display font-bold text-2xl text-[#0F1730]">
                Type Scale (Web & Desktop)
              </h3>

              <div className="space-y-6 divide-y divide-[#E6E2D8]">
                {/* Display XL */}
                <div className="pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[#4A5370] w-48">
                    <strong>Display XL</strong> · 88/92px · −3%
                  </div>
                  <div className="font-display font-extrabold text-4xl sm:text-6xl text-[#0F1730] tracking-[-0.03em] leading-tight">
                    Know where the work goes.
                  </div>
                </div>

                {/* H1 */}
                <div className="pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[#4A5370] w-48">
                    <strong>H1</strong> · 60/64px · −2.5%
                  </div>
                  <div className="font-display font-bold text-3xl sm:text-5xl text-[#0F1730] tracking-[-0.025em] leading-tight">
                    Automatic time tracking
                  </div>
                </div>

                {/* H2 */}
                <div className="pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[#4A5370] w-48">
                    <strong>H2</strong> · 40/46px · −2%
                  </div>
                  <div className="font-display font-bold text-2xl sm:text-3xl text-[#0F1730] tracking-[-0.02em]">
                    One click. Three answers.
                  </div>
                </div>

                {/* H3 */}
                <div className="pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[#4A5370] w-48">
                    <strong>H3</strong> · 24/30px · −1%
                  </div>
                  <div className="font-display font-semibold text-xl text-[#0F1730] tracking-[-0.01em]">
                    Attendance that reflects real work
                  </div>
                </div>

                {/* Body L */}
                <div className="pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[#4A5370] w-48">
                    <strong>Body L</strong> · 20/31px · 0
                  </div>
                  <div className="font-sans text-[20px] text-[#0F1730] leading-[31px]">
                    Deskmerit records time where the work actually happens.
                  </div>
                </div>

                {/* Body */}
                <div className="pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[#4A5370] w-48">
                    <strong>Body</strong> · 16/25px · 0
                  </div>
                  <div className="font-sans text-[16px] text-[#4A5370] leading-[25px]">
                    Idle after 5 minutes without input; Private Time is never counted as idle.
                  </div>
                </div>

                {/* Label */}
                <div className="pt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[#4A5370] w-48">
                    <strong>Label</strong> · 13/16px · +14%
                  </div>
                  <div className="font-sans font-semibold text-[13px] text-[#0F1730] tracking-[0.14em] uppercase">
                    LIVE STATUS
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#FFE6DF]/60 text-xs text-[#C2361A] font-medium">
                Rule: Mobile scales Display and H1 to 70%. Sentence case everywhere — never Title Case Headlines, never all-caps paragraphs.
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: UI COMPONENTS */}
        {activeTab === "components" && (
          <div className="space-y-12">
            <div>
              <div className="text-[#FF5A36] font-semibold text-xs tracking-wider uppercase mb-1">
                05 · UI COMPONENTS & GRAPHIC LANGUAGE
              </div>
              <h2 className="text-3xl font-display font-bold text-[#0F1730]">
                Reusable Brand Components
              </h2>
            </div>

            {/* Buttons & Radii */}
            <div className="bg-white rounded-[20px] p-8 border border-[#E6E2D8] shadow-sm space-y-6">
              <h3 className="font-display font-bold text-xl text-[#0F1730]">
                Buttons (12 px radius · 48 px tall · Ember for main action)
              </h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary">Start free trial</Button>
                <Button variant="secondary">Book a demo</Button>
                <Button variant="outline">See features</Button>
                <Button variant="ghost">Learn more →</Button>
              </div>
              <div className="text-xs text-[#4A5370]">
                Primary button strictly pairs Ember background with Midnight text for WCAG 2.2 AA (5.7:1) compliance.
              </div>
            </div>

            {/* The Pulse Dot & Day Line */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Pulse Dot */}
              <div className="bg-white rounded-[20px] p-6 border border-[#E6E2D8] shadow-sm space-y-4">
                <h3 className="font-display font-bold text-lg text-[#0F1730]">
                  The Pulse Dot (1.6s ease)
                </h3>
                <p className="text-xs text-[#4A5370]">
                  A single Ember dot marks what is live or new. One per view.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0F1730]">
                    <PulseDot />
                    <span>Live now · 14 tracking</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm font-semibold text-[#0F1730]">
                    <PulseDot />
                    <span>New: Tracker Plus for Azure DevOps</span>
                  </div>
                </div>
              </div>

              {/* Progress Loops */}
              <div className="bg-white rounded-[20px] p-6 border border-[#E6E2D8] shadow-sm space-y-4">
                <h3 className="font-display font-bold text-lg text-[#0F1730]">
                  Progress Loops (12 o'clock clockwise)
                </h3>
                <div className="flex items-center justify-around pt-2">
                  <ProgressLoop value={92} size={84} label="Productive" />
                  <ProgressLoop value={64} size={84} label="Billable" />
                  <ProgressLoop value={38} size={84} label="Focus" />
                </div>
              </div>
            </div>

            {/* Signature Data Visual: The Day Line */}
            <div className="bg-white rounded-[20px] p-8 border border-[#E6E2D8] shadow-sm space-y-4">
              <h3 className="font-display font-bold text-xl text-[#0F1730]">
                The Day Line (Signature Data Visual)
              </h3>
              <p className="text-xs text-[#4A5370]">
                A person's day as one rounded bar of live-state colours.
              </p>
              <div className="pt-2">
                <DayLine height={14} showTimeLabels={true} showLegend={true} />
              </div>
            </div>

            {/* Desktop Widget */}
            <div className="bg-white rounded-[20px] p-8 border border-[#E6E2D8] shadow-sm space-y-4">
              <h3 className="font-display font-bold text-xl text-[#0F1730]">
                Desktop Widget (Product UI)
              </h3>
              <div className="pt-2 flex justify-center">
                <DesktopWidget />
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: VOICE & TONE */}
        {activeTab === "voice" && (
          <div className="space-y-10">
            <div className="bg-white rounded-[20px] p-8 border border-[#E6E2D8] shadow-sm">
              <div className="text-[#FF5A36] font-semibold text-xs tracking-wider uppercase mb-1">
                07 · VOICE
              </div>
              <h2 className="text-3xl font-display font-bold text-[#0F1730]">
                Say it like a trusted colleague
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                <div className="p-4 rounded-xl bg-[#F7F4EE]">
                  <div className="font-bold text-[#0F1730] text-sm">Plain, not technical</div>
                  <p className="mt-1 text-xs text-[#4A5370]">
                    Short sentences. Everyday words. Explain once, then stop.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F4EE]">
                  <div className="font-bold text-[#0F1730] text-sm">Honest, not hyped</div>
                  <p className="mt-1 text-xs text-[#4A5370]">
                    Say what we do and what we don't. Name limits openly — it is why people trust us.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F4EE]">
                  <div className="font-bold text-[#0F1730] text-sm">Warm, not cute</div>
                  <p className="mt-1 text-xs text-[#4A5370]">
                    Respect both managers and employees. No jokes at anyone's expense, no fear tactics.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#F7F4EE]">
                  <div className="font-bold text-[#0F1730] text-sm">Local, not generic</div>
                  <p className="mt-1 text-xs text-[#4A5370]">
                    British English spelling. Name real places, currencies and work weeks.
                  </p>
                </div>
              </div>
            </div>

            {/* We Say vs We Don't Say */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-[20px] p-6 border border-[#12B886]/30 shadow-sm">
                <div className="text-emerald-700 font-bold text-sm mb-4">
                  ✓ WE SAY
                </div>
                <ul className="space-y-3 text-sm text-[#0F1730]">
                  {brandIdentity.voice.weSay.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-[20px] p-6 border border-[#E5484D]/30 shadow-sm">
                <div className="text-rose-700 font-bold text-sm mb-4">
                  ✕ WE DON'T SAY
                </div>
                <ul className="space-y-3 text-sm text-[#0F1730]">
                  {brandIdentity.voice.weAvoid.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold">✕</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Preferred / Avoided Vocabulary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-[20px] p-6 border border-[#E6E2D8] shadow-sm">
                <div className="font-bold text-xs uppercase tracking-wider text-[#4A5370] mb-3">
                  WORDS WE PREFER
                </div>
                <div className="flex flex-wrap gap-2">
                  {brandIdentity.voice.wordsWePrefer.map((w) => (
                    <span
                      key={w}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E8F8F3] text-[#0E8E66]"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[20px] p-6 border border-[#E6E2D8] shadow-sm">
                <div className="font-bold text-xs uppercase tracking-wider text-[#4A5370] mb-3">
                  WORDS WE AVOID
                </div>
                <div className="flex flex-wrap gap-2">
                  {brandIdentity.voice.wordsWeAvoid.map((w) => (
                    <span
                      key={w}
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FDECEE] text-[#C2361A] line-through"
                    >
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
