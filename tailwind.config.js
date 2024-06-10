/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Chocolate: ['Chocolate Classical Sans']
      },
      screens: {
        'xs': '370px',
        'sm': '640px',
        'md': '780px',
        'lg': '1024px',
      }
    },
  },
  plugins: [],
}

