/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        apa: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#F83D8E",
        secondary: "#0F0200",
      },
    },
  },
  plugins: [],
}
