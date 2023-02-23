const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{vue,tsx,js,ts,html}'),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E4B363',
        secondary: '#074F57',
        cordovan: '#c45663',
        dark: '#242424',
      },
    },
  },
  plugins: [],
};
