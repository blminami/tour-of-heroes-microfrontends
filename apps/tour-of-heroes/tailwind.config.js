const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    darkMode: 'class',
    extend: {
      colors: {
        primary: '#E4B363',
        secondary: '#074F57',
        cordovan: '#764248',
        'dark-bg': '#242424',
      },
    },
  },
  plugins: [],
};
