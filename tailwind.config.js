/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height: {
        '50%' : '50%',
        '120' : '200%',
        'House': '80%',
      },

      width: {
        '70%' : '70%',
        '20%' : '20%',
        'House': '80%',
      },

      fontSize: {
        '22rem' : '4rem',
      },

      lineHeight: {
        '22rem' : '4.5rem'
      }

    },
  },
  plugins: [],
}