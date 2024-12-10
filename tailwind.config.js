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
        'Oswald': 'Oswald',
        varuna: [
          'varuna', "sans-serif"
        ]
      },
      colors: {
        'customRed': 'rgba(185, 18, 2, 1)',
        'graphiteBlack':'rgba(26,26,28,255)',
        'ebony':'rgba(20, 20, 22, 255)',
      },
      borderWidth: {
        'thinBorder' : '1px'
      },
      height: {
        'thinHeight': '0.5px',
        'custHeight': '2px'
      },
      margin: {
        halfMargin: '0.7px',
        customMargin: '2px'
      },
      rotate: {
        'customRotate': '330deg',
      },
      strokeWidth: {
        thin: '0.5px'
      },
      maxHeight: {
        '500px': '500px',
      },
      screens: {
        laptop: '1024px',
        '1280': '1280px',
        extraExtraLarge: '2000px',
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity:0, scale: 0},
          '100%': {opacity:1, scale: 1}
        },
        fadeInSlow: {
          '0%': {opacity:'0.7', scale: 1},
          '50%': {opacity: '0.8', scale: '1.02'},
          '100%': {opacity:1, scale: 1}
        },
        fadeOut: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
        },
        slideIn: {
          '0%': {transform: 'translateY(-100%)'},
          '100%': {transform: 'translateY(0)'}
        },
        slideInSlow: {
          '0%': {transform: 'translateY(-30%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOutRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-in-out',
        fadeInSlow: 'fadeInSlow 5s ease-in-out',
        fadeOut: 'fadeOut 2s ease-out 1s forwards',
        slideIn: 'slideIn 0.5s ease-in-out',
        slideInSlow: 'slideInSlow 1s ease-in',
        spin: 'spin 30s linear infinite',
        slideInLeft: 'slideInLeft 0.3s ease-in-out forwards',
        slideOutRight: 'slideOutRight 0.3s ease-in-out forwards',
      }
    },
  },
  plugins: [
    function({addUtilities}) {
      addUtilities({
        '.scrollbar-none' : {
          'scrollbar-width': 'none',
          '-ms-overflow-style': 'none',
        },
      })
    },
  ],
}

