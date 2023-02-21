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
        'fern-green': '#568259',
        'dark-bg':'#242424',
        'robin-egg-blue': '#4ECDC4',
        cordovan: '#764248',
        accent: '#764248',
        neutral: '#191D24',
        'base-100': '#2A303C',
        info: '#3ABFF8',
        success: '#36D399',
        warning: '#FBBD23',
        error: '#F87272',
        white: '#ffffff',
        black: '#000000',
      },
    },
  },
  plugins: [],
};
