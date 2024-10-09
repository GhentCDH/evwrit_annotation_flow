/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontSize: {
        base: '0.875rem', // 14px
      },
      colors: {
        annotation:{
          language: '#f51720',
          typography: '#008d7c',
          orthography: '#ffbc05',
          lexis: '#8aff05',
          morpho_syntactical: '#ff7ec3',
          handshift: '#05d1ff',
          ltsa: '#6200d1',
          gtsa: '#424600',
          gts: '#613900',
          lts: '#00d1b2',}
        },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),  
    require('daisyui'),
  ]
}
