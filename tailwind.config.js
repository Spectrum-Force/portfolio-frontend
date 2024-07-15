/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
       loginBg: "url('./src/assets/images/loginBg.png')"
       
    },
    
  },
  plugins: [],
}

}