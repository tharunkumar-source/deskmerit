/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        // PulseTrack Typography: Inter Display for headlines, Inter for UI & body, Lora Italic for human accent
        sans: ["'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
        display: ["'Inter Display'", "'Inter'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
        human: ["'Lora'", "Georgia", "serif"],
      },
      fontSize: {
        // Official PulseTrack Web & Desktop Type Scale
        'display-xl': ['88px', { lineHeight: '92px', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-h1': ['60px', { lineHeight: '64px', letterSpacing: '-0.025em', fontWeight: '700' }],
        'display-h2': ['40px', { lineHeight: '46px', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-h3': ['24px', { lineHeight: '30px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'body-l': ['20px', { lineHeight: '31px', letterSpacing: '0', fontWeight: '400' }],
        'body-base': ['16px', { lineHeight: '25px', letterSpacing: '0', fontWeight: '400' }],
        'label-caps': ['13px', { lineHeight: '16px', letterSpacing: '0.14em', fontWeight: '600' }],
      },
      colors: {
        // Core Brand Palette (Strictly from guidelines)
        midnight: {
          DEFAULT: "#0F1730",
          50: "#F2F4F8",
          100: "#E5E9F1",
          800: "#172348",
          900: "#0F1730",
        },
        ember: {
          DEFAULT: "#61126E",
          hover: "#4E0E58",
          deep: "#3D0B46",
          tint: "#F6EDF8",
          subtle: "#FAF4FB",
        },
        paper: {
          DEFAULT: "#FAF4FB",
          dark: "#F0DFEF",
          card: "#FFFFFF",
        },
        dusk: {
          DEFAULT: "#24305A",
          dark: "#1B2446",
          light: "#334173",
        },
        slate: {
          DEFAULT: "#4A5370",
          muted: "#6B7594",
          light: "#8F97B0",
        },
        mist: {
          DEFAULT: "#E8D5EC",
          dark: "#DAC3DE",
          light: "#F6EDF8",
        },
        white: "#FFFFFF",

        // Live-State Colours (Semantic only: never mere decoration)
        live: {
          mint: "#12B886",    // Tracking / Productive
          amber: "#F5A524",   // Idle / Neutral
          iris: "#5B6CFF",    // Private Time
          fog: "#9AA1B2",     // Offline
          rose: "#E5484D",    // Unproductive / Alert
        },

        // Backward compatibility mappings
        primary: {
          DEFAULT: "#61126E",
          hover: "#4E0E58",
          pressed: "#3D0B46",
          bright: "#8B1E9E",
          light: "#F6EDF8",
          disabled: "#C594CE",
        },
        secondary: {
          DEFAULT: "#0F1730",
          hover: "#24305A",
          light: "#F7F4EE",
        },
      },
      boxShadow: {
        'subtle': '0 2px 10px rgba(15, 23, 48, 0.04)',
        'card': '0 4px 20px rgba(15, 23, 48, 0.06)',
        'elevated': '0 12px 36px rgba(15, 23, 48, 0.09)',
        'glow-ember': '0 0 24px rgba(97, 18, 110, 0.25)',
      },
      borderRadius: {
        'button': '12px',
        'card': '20px',
        'image-card': '24px',
        'widget': '18px',
      },
      animation: {
        'pulse-gentle': 'pulseGentle 1.6s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.22)', opacity: '0.85' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
