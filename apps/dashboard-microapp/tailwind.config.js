const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E4B363',
        secondary: '#074F57',
        'fern-green': '#568259',
        'dark-bg': '#242424',
        'robin-egg-blue': '#4ECDC4',
        cordovan: '#764248',
      },
    },
  },
  plugins: [],
};