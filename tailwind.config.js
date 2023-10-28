/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "primary": "'Fira Code', monospace",
        "secondary": "'Roboto', sans-serif",
        "third": "'Cardo', serif",
        "fourth": "'Nunito', sans-serif",
      },
      colors: {
        "primary": "",
        "secondary": "",
        "greenColor": "#4F8A10",
        "mediumGray": "#14303f"
      }
    },


  },
  plugins: [],
}