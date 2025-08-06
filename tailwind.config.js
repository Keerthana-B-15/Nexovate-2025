/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A4FF40",   // neon green-ish, adjust as needed
        dark: "#08090B",      // background
        accent: "#222B3B",    // cards
        secondary: "#1F6FEB", // accent blue (optional)
      },
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
        sans: ['Inter', "sans-serif"],
      }
    },
  },
  plugins: [],
}
