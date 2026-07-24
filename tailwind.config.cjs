/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["'Geist Mono'", "ui-monospace", "SFMono-Regular"],
      josefin: ["Josefin Sans"],
      Montserrat: ["Montserrat"],
      Inter: ["Inter"],
    },
    extend: {
      colors: {
        // Surface layers (dark to light)
        bg:       "#09090b",
        surface:  "#111113",
        raised:   "#18181b",
        // Borders
        border:   "#27272a",
        stroke:   "#3f3f46",
        // Text
        fg:       "#ffffff",
        secondary:"#d4d4d8",
        muted:    "#a1a1aa",
        // Accent (Savics green — refined)
        accent:   "#4ade80",
        "accent-dim": "#16a34a",
        "accent-glow": "rgba(74,222,128,0.12)",
        // Legacy aliases (keep backward compat)
        intro:    "#4ade80",
        main:     "#09090b",
        compliment:"#16a34a",
        light:    "#bbf7d0",
      },
      animation: {
        "fade-up": "fadeUp 0.5s ease forwards",
        "counter": "counter 2s ease-out forwards",
        "shimmer": "shimmer 2s linear infinite",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
      8: "8px",
      10: "10px",
    },
  },
  plugins: [],
};
