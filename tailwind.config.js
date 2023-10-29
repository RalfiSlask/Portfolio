/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "secondary": "'Roboto', sans-serif",
        "fourth": "'Nunito', sans-serif",
        "third": "'Inconsolata', monospace"
      },
      colors: {
        "primary": "",
        "secondary": "",
        "lightgray": "#d1d0d0",
        "mediumGray": "#14303f"
      }
    },


  },
  plugins: [],
}