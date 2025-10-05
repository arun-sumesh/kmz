/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
        body: ["Roboto Condensed", "sans-serif"],
      },
      colors: {
        // Light theme
  
  bg: "#FAF9F6", 
  text: "#444444",       
  heading: "#2F3E2E",    
  paragraph: "#4B4B4B",  
  accent: "#009EEB",     


        // Dark theme
        darkbg: "#121212",
        darktext: "#ffffff",
        darkheading: "#ffffff",
        darkparagraph: "#cfd3d8",

        // Shared UI colors
        scrollbarTrack: "#e4e4e4",
        scrollbarThumb: "#2cd7b3",
        scrollbarThumbHover: "#1098ab",
      },
      keyframes: {
        "slide-gradient": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
        "gradient-slide": {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 0%" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-20px)" },
        },
        fadeSlideIn: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        rotateCircle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "slide-gradient": "slide-gradient 3s linear infinite",
        "gradient-slide": "gradient-slide 3s linear infinite",
        "slide-down": "slide-down 0.3s ease-out forwards",
        "slide-up": "slide-up 0.3s ease-in forwards",
        fadeSlideIn: "fadeSlideIn 1s ease forwards",
        float: "float 4s ease-in-out infinite",
        gradient: "gradientShift 6s ease infinite",
        rotateCircle: "rotateCircle 1.2s linear infinite",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
          xl: "4rem",
          "2xl": "5rem",
        },
      },
    },
  },
  plugins: [],
}
