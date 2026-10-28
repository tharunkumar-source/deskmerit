/**
 * PulseTrack Official Design System Tokens (v1.0 - October 2026)
 * Single Source of Truth for Brand Guidelines
 * 
 * Rules:
 * 1. ONLY use colors defined in this file.
 * 2. ONLY use the 3 approved font variants (Inter Display, Inter, Lora Italic).
 * 3. Primary buttons are Ember (#61126E) with Midnight (#0F1730) text (WCAG 2.2 AA compliant).
 * 4. Tabular figures (.tnum) are strictly required for data, timers, and figures.
 * 5. Do not invent arbitrary shades or tints outside of this specification.
 */

export const brandIdentity = {
  name: "Deskmerit",
  company: "Kombee Technologies",
  endorsementText: "A Kombee Technologies product",
  version: "1.0",
  date: "October 2026",
  taglines: {
    primary: "Know where the work goes.",
    secondary: "Every hour, honestly accounted for.",
  },
  purpose: "Make work time honest. Give every distributed team an accurate, automatic picture of how time is spent — through a single click.",
  promise: "One click. Three answers. Start from the task; get what was worked on, who was present and what can be billed — without a second login.",
  positioning: "The trust-first tracker. No keystrokes, no webcam, screenshots off by default. Sold on its own or inside Sqalible HRMS.",
  personality: ["Honest", "Calm", "Precise", "Warm", "Quietly confident"],
  metaphor: "We are the colleague who keeps good notes — not the supervisor behind the glass.",
  voice: {
    weSay: [
      "Your team's real week, in one report.",
      "We never record keystrokes.",
      "Private Time is yours.",
      "Start from the task.",
    ],
    weAvoid: [
      "Unlock unparalleled workforce visibility!",
      "Advanced activity monitoring capabilities.",
      "Employees can request breaks.",
      "Seamlessly synergise your PM ecosystem.",
    ],
    wordsWePrefer: [
      "time tracking",
      "work insights",
      "attendance",
      "Private Time",
      "team",
      "honest",
      "start from the task",
    ],
    wordsWeAvoid: [
      "spy",
      "surveillance",
      "catch",
      "slacker",
      "stealth",
      "control",
    ],
  },
} as const;

export const brandColors = {
  /**
   * Core Palette:
   * Midnight and Paper do most of the work.
   * Ember is the pulse: use it sparingly so it always means "this matters".
   * Recommended proportions: Paper 45 · Midnight 25 · White 15 · Slate 10 · Ember 5
   */
  core: {
    midnight: {
      hex: "#0F1730",
      rgb: "15, 23, 48",
      role: "Primary text, dark surfaces, logo",
    },
    ember: {
      hex: "#61126E",
      rgb: "97, 18, 110",
      role: "Pulse dot, primary buttons, highlights",
    },
    paper: {
      hex: "#FAF4FB",
      rgb: "247, 244, 238",
      role: "Default page background",
    },
    dusk: {
      hex: "#24305A",
      rgb: "36, 48, 90",
      role: "Secondary dark surfaces, dark cards, footer cards",
    },
    emberDeep: {
      hex: "#4E0E58",
      rgb: "78, 14, 88",
      role: "Links and Ember text on light backgrounds",
    },
    emberTint: {
      hex: "#F6EDF8",
      rgb: "246, 237, 248",
      role: "Highlight panels, badge backgrounds",
    },
    slate: {
      hex: "#4A5370",
      rgb: "74, 83, 112",
      role: "Body text, secondary metadata",
    },
    mist: {
      hex: "#E8D5EC",
      rgb: "230, 226, 216",
      role: "Borders, dividers, subtle outlines",
    },
    white: {
      hex: "#FFFFFF",
      rgb: "255, 255, 255",
      role: "Cards, inputs, modals",
    },
  },

  /**
   * Live-State Colours:
   * These five colours carry meaning in the product and in data.
   * Use them ONLY for these meanings — never as decoration — and always
   * pair them with a label or icon, never colour alone.
   */
  liveState: {
    mint: {
      hex: "#12B886",
      name: "Mint",
      meaning: "Tracking / Productive",
      description: "Active time recording, focused productive work",
    },
    amber: {
      hex: "#F5A524",
      name: "Amber",
      meaning: "Idle / Neutral",
      description: "Idle after 5 minutes without input; neutral tasks",
    },
    iris: {
      hex: "#5B6CFF",
      name: "Iris",
      meaning: "Private Time",
      description: "User-invoked private time; never counted as idle",
    },
    fog: {
      hex: "#9AA1B2",
      name: "Fog",
      meaning: "Offline",
      description: "App closed, off the clock, system standby",
    },
    rose: {
      hex: "#E5484D",
      name: "Rose",
      meaning: "Unproductive / Alert",
      description: "Unproductive category, manual review flag, alerts",
    },
  },

  proportions: {
    paper: 45,
    midnight: 25,
    white: 15,
    slate: 10,
    ember: 5,
  },
} as const;

export const brandAccessiblePairings = [
  {
    element: "Midnight on White",
    ratio: "17.7:1",
    rating: "AAA",
    rule: "Text on light cards and inputs",
  },
  {
    element: "Midnight on Paper",
    ratio: "16.1:1",
    rating: "AAA",
    rule: "Primary text and headlines on page background",
  },
  {
    element: "Slate on Paper",
    ratio: "6.9:1",
    rating: "AA",
    rule: "Body text on page background",
  },
  {
    element: "Midnight on Ember",
    ratio: "5.7:1",
    rating: "AA",
    rule: "Primary buttons: Ember background with Midnight text (Strict)",
  },
  {
    element: "Ember Deep on Paper",
    ratio: "5.0:1",
    rating: "AA",
    rule: "Hyperlinks and Ember text accents on light surfaces",
  },
  {
    element: "White on Ember",
    ratio: "3.1:1",
    rating: "Large text only",
    rule: "Reserved ONLY for display sizes (24 px bold and above)",
  },
] as const;

export const brandTypography = {
  typefaces: {
    display: {
      family: "'Inter Display', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      role: "Headlines, numbers in hero stats, the wordmark",
      weights: [700, 800],
      tracking: "-2.5% to -3%",
    },
    textAndUi: {
      family: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      role: "Body copy, interface, tables. Turn on tabular figures for data.",
      weights: [400, 500, 600],
      features: "tabular-nums",
    },
    humanAccent: {
      family: "'Lora', Georgia, serif",
      role: "Medium Italic only. One phrase per layout: quotes, promises, human moment.",
      weights: [500],
      style: "italic",
    },
  },

  scale: {
    displayXl: {
      name: "Display XL",
      font: "Inter Display ExtraBold",
      fontSize: "88px",
      lineHeight: "92px",
      letterSpacing: "-0.03em",
      weight: 800,
      tailwind: "text-[88px] leading-[92px] tracking-[-0.03em] font-extrabold font-display",
    },
    h1: {
      name: "H1",
      font: "Inter Display Bold",
      fontSize: "60px",
      lineHeight: "64px",
      letterSpacing: "-0.025em",
      weight: 700,
      tailwind: "text-[60px] leading-[64px] tracking-[-0.025em] font-bold font-display",
    },
    h2: {
      name: "H2",
      font: "Inter Display Bold",
      fontSize: "40px",
      lineHeight: "46px",
      letterSpacing: "-0.02em",
      weight: 700,
      tailwind: "text-[40px] leading-[46px] tracking-[-0.02em] font-bold font-display",
    },
    h3: {
      name: "H3",
      font: "Inter Display SemiBold",
      fontSize: "24px",
      lineHeight: "30px",
      letterSpacing: "-0.01em",
      weight: 600,
      tailwind: "text-[24px] leading-[30px] tracking-[-0.01em] font-semibold font-display",
    },
    bodyL: {
      name: "Body L",
      font: "Inter Regular",
      fontSize: "20px",
      lineHeight: "31px",
      letterSpacing: "0",
      weight: 400,
      tailwind: "text-[20px] leading-[31px] tracking-normal font-normal font-sans",
    },
    body: {
      name: "Body",
      font: "Inter Regular",
      fontSize: "16px",
      lineHeight: "25px",
      letterSpacing: "0",
      weight: 400,
      tailwind: "text-[16px] leading-[25px] tracking-normal font-normal font-sans",
    },
    label: {
      name: "Label",
      font: "Inter SemiBold caps",
      fontSize: "13px",
      lineHeight: "16px",
      letterSpacing: "0.14em",
      weight: 600,
      tailwind: "text-[13px] leading-[16px] tracking-[0.14em] uppercase font-semibold font-sans",
    },
  },

  rules: [
    "Mobile: scale Display and H1 to 70%.",
    "Line length: 60–75 characters.",
    "Sentence case everywhere — never Title Case Headlines, never all-caps paragraphs.",
    "Data: Turn on tabular figures for numbers, timers, currency, and percentages.",
  ],
} as const;

export const brandGraphicLanguage = {
  logo: {
    grid: "64 × 64 units",
    ringRadius: 13,
    ringCenter: { x: 34, y: 25 },
    strokeWeight: 8.5,
    strokeCaps: "round",
    ringSweep: "Starts at the stem (angle 180°), ends at 45° (three-quarters closed)",
    pulseDot: {
      diameter: 10.8,
      radius: 5.4,
      center: { x: 31.2, y: 37.7 },
      color: "#61126E",
    },
    stem: "Vertical, from ring centre-line to 27 units below (starts at (21, 25), ends at (21, 52))",
    wordmark: {
      font: "Inter Display Bold",
      tracking: "-3%",
      case: "lowercase",
    },
    clearSpace: "Keep a clear zone equal to the height of the pulse dot × 2 on every side",
    minSize: {
      horizontal: "120 px / 30 mm wide minimum",
      symbol: "16 px / 5 mm minimum",
      stacked: "64 px / 18 mm minimum",
    },
  },

  pulseDot: {
    size: "8px",
    color: "#61126E",
    animation: "pulseGentle 1.6s ease-in-out infinite",
    rule: "A single Ember dot marks what is live or new. One per view. May gently pulse.",
  },

  dayLine: {
    height: "12px",
    borderRadius: "9999px",
    backgroundColor: "#E8D5EC",
    description: "A person's day as one rounded bar of live-state colours. Signature data visual.",
  },

  icons: {
    grid: "24px",
    stroke: "1.8px",
    capsAndJoins: "round",
    cornerRadius: "4px",
    style: "Outline only; Midnight on light, White on dark",
  },

  buttons: {
    hero: {
      height: "48px",
      borderRadius: "12px",
      padding: "px-6 py-3.5",
      rule: "Used for primary lead conversion in Hero and major call-to-action bands.",
    },
    nav: {
      height: "40px",
      borderRadius: "12px",
      padding: "px-4.5 py-2.5",
      rule: "Proportional companion for top navigation and high-density interface headers.",
    },
    sm: {
      height: "36px",
      borderRadius: "10px",
      padding: "px-3.5 py-1.5",
      rule: "Compact actions inside data tables and cards.",
    },
    rule: "Ember (#61126E) for primary actions, White/Midnight with Mist border for secondary.",
  },

  cards: {
    borderRadius: "20px",
    photoCardRadius: "24px",
    backgroundColor: "#FFFFFF",
    borderColor: "#E8D5EC",
  },
} as const;

// Hex shortcut exports for inline styles / canvas / SVG
export const TOKENS = {
  midnight: brandColors.core.midnight.hex,
  ember: brandColors.core.ember.hex,
  paper: brandColors.core.paper.hex,
  dusk: brandColors.core.dusk.hex,
  emberDeep: brandColors.core.emberDeep.hex,
  emberTint: brandColors.core.emberTint.hex,
  slate: brandColors.core.slate.hex,
  mist: brandColors.core.mist.hex,
  white: brandColors.core.white.hex,
  // Live State
  mint: brandColors.liveState.mint.hex,
  amber: brandColors.liveState.amber.hex,
  iris: brandColors.liveState.iris.hex,
  fog: brandColors.liveState.fog.hex,
  rose: brandColors.liveState.rose.hex,
} as const;

export type BrandColorKey = keyof typeof TOKENS;
export type LiveStateKey = keyof typeof brandColors.liveState;
