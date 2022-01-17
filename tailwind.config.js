const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,md,jsx,tsx,mdx}', 
    './components/**/*.{js,ts,md,jsx,tsx,mdx}'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.trueGray,
    },
    extend: {
      fontFamily: {
        sans: ['Work Sans', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
