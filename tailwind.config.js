/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1959AC",
        secondary: "#0546D2",
        textDark: "#222222"
      },
      fontFamily: {
        heading: ["Roboto Condensed", "sans-serif"],
        subheading: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [],
};
