/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors:{
        'bg-color': 'hsl(240, 7%, 9%)',
        'bg-second': 'hsl(225, 8%, 10%)',
        'star': 'hsl(226, 100%, 66%)',
        'input-card':'hsl(197, 11%, 12%)',
        'input-bg': 'hsl(200, 13%, 9%)',
        'input-focus': 'hsl(226, 100%, 66%)',
        'button-blue': 'hsl(226, 100%, 36%)'
      },
      
      borderColor:{
        'bg-color': 'hsl(240, 7%, 9%)',
        'bg-second': 'hsl(225, 8%, 10%)',
        'star': 'hsl(226, 100%, 66%)',
        'star-second': 'hsl(226, 100%, 56%)',
        'input-card':'hsl(197, 11%, 12%)',
        'input-bg': 'hsl(200, 13%, 9%)',
        'input-focus': 'hsl(226, 100%, 66%)',
        'button-blue': 'hsl(226, 100%, 36%)'
      },
      backgroundColor:{
        'bg-color': 'hsl(225, 8%, 10%) ',
        'bg-color-radio': '#448ef3',
        'bg-second': 'hsl(225, 8%, 10%)',
        'star': 'hsl(226, 100%, 66%)',
        'star-second': 'hsl(198, 93%, 60%)',
        'input-card':'hsl(197, 11%, 12%)',
        'input-bg': 'hsl(200, 13%, 9%)',
        'input-focus': 'hsl(226, 100%, 66%)',
        'button-blue': 'hsl(226, 100%, 36%)',
        'card-color': 'hsl(216, 8%, 13%)',
        'section-color': 'hsl(216, 8%, 13%)',
        'card-second': 'hsl(216, 8%, 13%)',
        'card-dark': 'hsl(225, 8%, 10%))',
        'nav': 'hsl(240, 7%, 9%)',
  

      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      textColor:{
        'star': 'hsl(226, 100%, 66%)',
        'head': 'hsl(226, 100%, 66%)',
        'head-second': 'hsl(226, 100%, 56%)',
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
        'seventy': '70%',
        'sixty': '60%',
        'fifty': '50%',
        'fortyFive': '45%',
        'forty': '40%',
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
