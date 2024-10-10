/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      fontSize: {
        base: '0.875rem', // 14px
      }
    }  },
  plugins: [
    require("@tailwindcss/typography"),  
    require('daisyui'),
  ]
}
