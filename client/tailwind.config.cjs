const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.teal['500'],
        primaryMed: colors.teal['600'],
        primaryDark: colors.teal['800'],
      },
    },
  },
  plugins: [],
}
