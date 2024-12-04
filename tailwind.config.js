/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}", 
  ], 
  darkMode: 'selector',
  theme: {
    extend: {
      fontFamily: {
        varuna: [
          'varuna', "sans-serif"
        ]
      },
      colors: {
        'customRed': 'rgba(185, 18, 2, 1)',
        'graphiteBlack':'rgba(26,26,28,255)',
        'ebony':'rgba(20, 20, 22, 255)',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity:0, scale: 0},
          '100%': {opacity:1, scale: 1}
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
      }
    },
  },
  plugins: [],
}

