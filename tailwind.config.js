/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
      },
      backgroundColor:{
        'bg-color': '#1C1C1E',
        'bg-second': 'hsl(240, 2%, 20%)',
        'star': 'hsl(226, 100%, 66%)',
        'input-card':'hsl(197, 11%, 12%)',
        'input-bg': 'hsl(200, 13%, 9%)',
        'input-focus': 'hsl(226, 100%, 66%)',
        'button-blue': 'hsl(226, 100%, 36%)'

      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      textColor:{
        'star': 'hsl(226, 100%, 66%)',
        'head': 'hsl(226, 100%, 66%)',
        'input-focus': 'hsl(226, 100%, 66%)'

      },
      minWidth: {
        'onehundred': '100%',
        'ninty': '90%',
        'eighty': '80%',
        'fifty': '50%',
        'forty': '40%',
        'thirtythree': ': 33.333333%',
      },
      maxWidth: {
        'onehundred': '100%',
        'ninty': '90%',
        'sixty': '60%',
        'forty': '40%',
        'eighty': '80%',
        'fifty': '50%',
        'fortyFive': '45%',
        'thirtythree': ': 33.333333%',
      },
      height: {
        'onehundred': '100%',
        'nintyFive': '95%',
        'ninty': '90%',
        'eighty': '80%',
        'forty': '40%',
        'fifty': '50%',
        'fortyFive': '45%',
      },
      width: {
        'onehundred': '100%',
        'nintyfive': '94%',
        'nintyfour': '94%',
        'nintythree': '93%',
        'ninty': '90%',
        'eighty': '80%',
        'seventy': '70%',
        'fifty': '50%',
        'forty': '40%',
        'thirty': '30%',
      },
      top: {
        'ninty': '90%',
        'forty': '40%',
        'eighty': '80%',
        'fifty': '50%',
      },
      maxHeight: {
        'onehundred': '100%',
        'ninty': '90%',
        'sixty': '60%',
        'forty': '40%',
        'eighty': '80%',
        'fifty': '50%',
        'fortyFive': '45%',
        'thirtythree': ': 33.333333%',
      },
      minHeight: {
        'onehundred': '100%',
        'ninty': '90%',
        'sixty': '60%',
        'forty': '40%',
        'eighty': '80%',
        'fifty': '50%',
        'fortyFive': '45%',
        'thirtythree': ': 33.333333%',
      },

    },
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp'),

  ],
}
