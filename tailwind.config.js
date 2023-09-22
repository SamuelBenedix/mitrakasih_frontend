const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: {
          50: "#f1f5fd",
          100: "#dfe8fa",
          200: "#c6d7f7",
          300: "#9ebdf2",
          400: "#709aea",
          500: "#4f77e2",
          600: "#3a5ad6",
          700: "#3148c4",
          800: "#2e3c9f",
          900: "#2e3c8c",
          950: "#1e244d",
        },
      },
      transitionTimingFunction: {
        "out-quart": "cubic-bezier(0.25, 1, 0.5, 1)",
      },
      animation: {
        "bounce-leaf-yellow": "bounce-leaf-yellow 5s linear infinite",
        "bounce-leaf-orange": "bounce-leaf-orange 5s linear infinite",
        "bounce-leaf-blue": "bounce-leaf-blue 5s linear infinite",
        "bounce-leaf-green": "bounce-leaf-green 5s linear infinite",
        "bounce-arrow": "bounce-arrow 0.8s linear",
        "radix-slide-down":
          "radix-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "radix-slide-up": "radix-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "radix-left-border-slide-down":
          "radix-left-border-slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)",
        "radix-left-border-slide-up":
          "radix-left-border-slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)",
      },
      keyframes: {
        "bounce-leaf-yellow": {
          "0%, 100%": { transform: "translateY(0) rotate(90deg)" },
          "50%": { transform: "translateY(2rem) rotate(90deg)" },
        },
        "bounce-leaf-orange": {
          "0%, 100%": { transform: "translateY(2rem) rotate(45deg)" },
          "50%": { transform: "translateY(0) rotate(45deg)" },
        },
        "bounce-leaf-blue": {
          "0%, 100%": { transform: "translateY(0) rotate(60deg)" },
          "50%": { transform: "translateY(2rem) rotate(60deg)" },
        },
        "bounce-leaf-green": {
          "0%, 100%": { transform: "translateY(2rem) rotate(80deg)" },
          "50%": { transform: "translateY(0) rotate(80deg)" },
        },
        "bounce-arrow": {
          "0%, 50%, 100%": { transform: "translateX(0)" },
          "25%, 75%": { transform: "translateX(0.5rem)" },
        },
        "radix-slide-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "radix-slide-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "radix-left-border-slide-down": {
          from: { height: 0 },
          to: { height: "100%" },
        },
        "radix-left-border-slide-up": {
          from: { height: "100%" },
          to: { height: 0 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
