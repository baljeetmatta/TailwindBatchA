/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    container:{
      padding:'3rem',
      center:true
    },
    extend: {
      fontFamily:{
        x:"'Poppins','sans-serif'"
      }
    },
  },
  plugins: [],
}

