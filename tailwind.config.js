/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      rubik:["Custom", "sans-sarif"],
      QuickSand:["Custom1", "sans-sarif"],
      Pacifico:["Custom2", "sans-sarif"]
    },
    extend: {},
  },
  plugins: [],
}