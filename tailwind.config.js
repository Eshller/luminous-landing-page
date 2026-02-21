/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./hooks/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2563eb",
          hover: "#1d4ed8",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#f1f5f9",
          foreground: "#0f172a",
        },
        destructive: {
          DEFAULT: "#ef4444",
          foreground: "#ffffff",
        },
        input: "#e2e8f0",
        background: {
          main: "#ffffff",
          DEFAULT: "#ffffff",
        },
        surface: {
          light: "#f8fafc",
          card: "#ffffff",
        },
        border: {
          light: "#e2e8f0",
          highlight: "#bfdbfe",
        },
        text: {
          main: "#0f172a",
          subtle: "#64748b",
          nav: "#334155",
        },
        muted: {
          DEFAULT: "#f1f5f9",
          foreground: "#64748b",
        },
        ring: "#2563eb",
        foreground: "#0f172a",
        accent: {
          DEFAULT: "#8b5cf6",
          foreground: "#ffffff",
        },
      },
      fontFamily: {
        display: ["Inter Tight", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        editorial: ["Bodoni Moda", "serif"],
        luxury: ["Playfair Display", "serif"],
      },
      maxWidth: {
        page: "1280px",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
