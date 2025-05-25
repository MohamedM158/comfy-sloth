/** @type {import('tailwindcss').Config} */
/* eslint-disable */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Fira Sans', 'sans-serif'],
      },
      colors: {
        'grey-1': '#102a42',
        'grey-2': '#324d67',
        'grey-3': '#617d98',
        'grey-4': '#f1f5f8',
        'brown-1': '#795744',
        'brown-2': '#ab7a5f',
        'brown-3': '#c5a491',
        'brown-4': '#eaded7',
        'brown-5': '#453227',
        'black-1': '#222',
      },
    },
    borderColor: {
      brown: '#ab7a5f',
      'grey-4': '#f1f5f8',
    },
  },
  plugins: [],
};
