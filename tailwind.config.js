/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#020066",
        secondary: "#0D99FF",
        priBg: "#F5E6FE",
        txtWhite: "#ffffff",
        txtDark: "#333333",
        darkBg: '#1E1E2E',
        darkBgSec: '#27293D'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        avenir: ["Sen", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      fontSize: {
        nl: ["56px", "64px"],
      },
      screens: {
        "2xs": "200px",
        "2md": "930px",
        "1xs": "350px",
        "1xl": "1400px",
        "3xl": "2000px",
      },
    },
  },
  plugins: [],
}

