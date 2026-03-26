/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cafe: {
          brown: "#4A2C17",
          "brown-md": "#7B4A2D",
          "brown-lt": "#A0673A",
          cream: "#FDF6EC",
          "cream-md": "#F5E6CC",
          "cream-dk": "#E8D0A8",
          green: "#2D5A27",
          "green-md": "#4A8C42",
          "green-lt": "#8BC34A",
          gold: "#C9952A",
        },
      },
      fontFamily: {
        display: ["Georgia", "Cambria", "serif"],
        body: ["Palatino Linotype", "Palatino", "Georgia", "serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        hero: "url('/assets/herobg.jpeg')",
      },
    },
  },
  plugins: [],
};
