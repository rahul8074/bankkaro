/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#0e0e0e",
        gray:"#282828",
        lightGray: "#656565",
        creamText: "#f6dcb6",
        silverText: "#b7b7b7"
      },
      backgroundColor : {
       
      },  
      fontFamily: {
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}