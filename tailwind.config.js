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
        primary: colors.blue,
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
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
