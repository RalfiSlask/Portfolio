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
        "mainBG": "#EAEDED",
        "secBG": "#8A8D91",
        "thirdBG": "#54585A",
        "Headings": "#33363A",
        "textColor": "#1C1E21",
      
        // Noir
        "noir-mainBG": "#2B2C2F",
        "noir-secBG": "#18191B",
        "noir-H": "#6D7074",
        "noir-thirdBG": "#0D0E10",
        "noir-text": "#424547",
      }
    },


  },
  plugins: [],
}