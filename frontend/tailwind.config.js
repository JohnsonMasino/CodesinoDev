/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },

      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        slideUp: "slideUp 1s ease-in forwards",
        slideIn: "slideIn 1.5s ease-in forwards",
      },

      colors: {
        'logo-blue-color': '#05016a',
        'header-text-color': '#333',
        'header-text-hover-color': '#ff6600',
        'body-deco-text-color': '#ff1e00',
        'header-bg-color': '#fff',
        'box-shadow': '#0000001a',
        'body-text-black-color': '#555',
      },

      fontFamily: {
        display: ["Anton", "sans-serif"],
        body: ["Poppins", "sans-serif"],
        curly: ["cursive"],
        handwriting: ["Satisfy", "Caveat"],
      },

      backgroundImage: {
        'custom-bg1': "url('/bg1.jpg')",
        'head': "url('/bg.jpg')",
        'custom-bg3': "url('/background.jpg')",
      }

    },
  },
  
  plugins: [],
}