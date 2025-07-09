/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f7fa",
          100: "#e4e7ec",
          500: "#a259ec", // premium purple
          600: "#7c3aed",
          700: "#312e81",
          900: "#181022",
          dark: "#181022",
          darkAccent: "#23272a",
        },
        accent: {
          500: "#06b6d4", // cyan
          600: "#0ea5e9", // blue
          dark: "#23272a",
          darkAccent: "#2a133d",
        },
        neutral: {
          50: "#f8fafc",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#181022",
        },
        white: "#ffffff",
        black: "#181022",
        glass: "rgba(255,255,255,0.08)",
        // General dark backgrounds
        darkbg: {
          900: "#23272a",
          800: "#23272a",
          700: "#2c2f33",
        },
      },
      fontFamily: {
        sans: ["Figtree", "Figtree Placeholder", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      boxShadow: {
        premium: "0 4px 32px 0 rgba(49, 46, 129, 0.10)",
        glass: "0 8px 32px 0 rgba(31, 41, 55, 0.12)",
        soft: "0 2px 8px 0 rgba(49, 46, 129, 0.06)",
      },
    },
  },
  plugins: [],
};
