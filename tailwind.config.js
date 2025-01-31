/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryTitle:"#127369",
        primaryContent:"#4C5958",
        primarySubcontent:"#b5cecb",
        primaryBase:"#FBFBFB",
        primaryAccent:"#10403B",
        primaryBg:"#E8F9FF",
        primaryAccent2:"A9BFA8",
      },
    },
  },
  plugins: [],
}

