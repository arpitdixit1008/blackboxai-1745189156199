/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // blue
        secondary: '#F3F4F6', // light gray
        accent: '#FFFFFF' // white
      }
    },
  },
  plugins: [],
}
