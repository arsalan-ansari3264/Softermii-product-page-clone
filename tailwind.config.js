/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        primary: ["Open Sans", "sans-serif"],
      },

      boxShadow: {
        "3xl": "0 3px 10px 2px rgba(255, 114, 0, .3)",
        white: "0 0 4px 0 #ededed inset",
        "4xl": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(228.45deg, #fffaf7 58.39%, #ed934a 215.19%)",
        "contactGradient":
          "linear-gradient(77.18deg, #f3913b 18.53%, #f56627 81.47%)",
      },
      colors: {
        primary: "#ff7200", // Primary color
        secondary: "#22222a", // Secondary color
        textPrimary: "#f9fafb", // Primary text color
        textSecondary: "#22222a", // Secondary text color
        icon: "#ffead9", //icon color
        faqBackground: "#f6f7f9",
      },
      borderRadius: {
        "faqBorderRadius-lg": "0 32px",
      },
    },
  },
  plugins: [],
};
