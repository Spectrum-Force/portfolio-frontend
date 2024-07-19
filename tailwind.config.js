/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {gridAutoRows: {
      '2fr': 'minmax(0, 2fr)',
    }},
    extend: {
      colors: {
        primary: "#337eff",
        secondary: "#F7F9F2"
      },
      backgroundImage: {

       
  
      },

       

    },

  },
  plugins: [],
}

