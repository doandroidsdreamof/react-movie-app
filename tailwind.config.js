/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundColor:{
        'bg-color': '#1C1C1E',
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },

    },
  },
  plugins: [
    require('daisyui')
  ],
}
