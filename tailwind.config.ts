import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aurora: {
          50: "#e6f7ff",
          100: "#b3e5ff",
          200: "#80d4ff",
          300: "#4dc2ff",
          400: "#1ab1ff",
          500: "#00a0e6",
          600: "#0080b3",
          700: "#006080",
          800: "#00404d",
          900: "#00201a",
        },
        polar: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        night: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
      },
      fontFamily: {
        display: ["Cinzel", "serif"],
        body: ["Noto Sans SC", "sans-serif"],
      },
      animation: {
        aurora: "aurora 20s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        aurora: {
          "0%, 100%": {
            transform: "translateY(0) translateX(0) scale(1)",
            opacity: "0.5",
          },
          "33%": {
            transform: "translateY(-20px) translateX(20px) scale(1.05)",
            opacity: "0.7",
          },
          "66%": {
            transform: "translateY(-10px) translateX(-10px) scale(0.95)",
            opacity: "0.6",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
