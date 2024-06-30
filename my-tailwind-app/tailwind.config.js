/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'lt': { 'raw': '(min-width: 763px) and (max-width: 1014px)' },
        'mb': { 'raw': '(min-width: 350px) and (max-width: 749px)' },
      }
    },
  },
  plugins: [],
}

