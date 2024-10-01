/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "fade-in-left": {
          "0%": {
            transform: "translateX(-20px)",
            opacity: "0", // Hidden at the start
          },
          "100%": {
            transform: "translateX(0)",
            opacity: "1", // Fully visible at the end
          },
        },
        "slide-in-left-rotate": {
          "0%": {
            transform: "translateX(-100%) rotate(90deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0) rotate(0deg)",
            opacity: "1",
          },
        },
        "slide-in-right-rotate": {
          "0%": {
            transform: "translateX(100%) rotate(90deg)",
            opacity: "0",
          },
          "100%": {
            transform: "translateX(0) rotate(0deg)",
            opacity: "1",
          },
        },
        
      },
      animation: {
        "slide-in-left-rotate": "slide-in-left-rotate 1.2s ease-out",
        "slide-in-right-rotate": "slide-in-right-rotate 1.2s ease-out",
        "fade-in-left-1": "fade-in-left 0.5s ease-out forwards 0.2s", // 0.2s delay for the first item
        "fade-in-left-2": "fade-in-left 0.5s ease-out forwards 0.4s", // 0.4s delay for the second item
        "fade-in-left-3": "fade-in-left 0.5s ease-out forwards 0.6s", // 0.6s delay for the third item
        "fade-in-left-4": "fade-in-left 0.5s ease-out forwards 0.8s", // 0.8s delay for the fourth item
        "fade-in-left-5": "fade-in-left 0.5s ease-out forwards 1s", // 1s delay for the fifth item
      },
    },
  },
  plugins: [require("daisyui")],
};
