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
        secondary2: "#1D67B4",
        priBg: "#F5E6FE",
        txtWhite: "#ffffff",
        txtDark: "#333333",
        txtDark2: "#242424",
        txtDark3: "#666666",
        grayBg: "#F8F8F8",
        darkBgSec: '#27293D',
        whiteBg: '#ffffff'
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        avenir: ["Sen", "sans-serif"],
        dmSans: ["DM Sans", "sans-serif"],
        workSans: ["Work Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        arimo: ["Arimo", "sans-serif"],
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

