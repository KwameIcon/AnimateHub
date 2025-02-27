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
        'BebasNeue': 'Bebas Neue',
        'Roboto': 'Roboto',
        'SpaceGrotesk': 'Space Grotesk',
        'Teko': 'Teko',
        varuna: [
          'varuna', "sans-serif"
        ]
      },
      colors: {
        'customRed': 'rgba(185, 18, 2, 1)',
        'customRedDeep': 'rgba(165, 10, 0, 1)',
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
        xxxs: "320px",
        xxs: "377px",
        xs: "425px",
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
        slideFromBottom: {
          '0%': {transform: 'translateY(30px)'},
          '100%': {transform: 'translateY(0)'}
        },
        slideFromBottom1: {
          '0%': {transform: 'translateY(30px)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
        },
        slideInSlow: {
          '0%': {transform: 'translateY(-30%)', opacity: '0'},
          '100%': {transform: 'translateY(0)', opacity: '1'}
        },
        slideInLeft:{
          '0%': {transform: 'translateX(-100%)', opacity: '0'},
          '100%': {transform: 'translateX(0)', opacity: '1'}
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        swing: {
          '0%':{transform: 'translateX(0)'},
          '50%':{transform: 'translateX(20px)'},
          '100%':{transform: 'translateX(-20px)'}
        },
        swingY:{
          '0%':{transform: 'translateY(0)'},
          '50%':{transform: 'translateY(20px)'},
          '100%':{transform: 'translateY(-20px)'}
        },
        rotateX: {
          '0%': { transform: 'rotateX(45deg)', transformOrigin: 'center top' },
          '100%': { transform: 'rotateX(0deg)', transformOrigin: 'center top' },
        },
        scaleInfinite: {
          '0%': {
            transform: 'scale(0)',
            opacity: '1',
          },
          '50%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '0',
          }
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeInSlow: 'fadeInSlow 5s ease-in-out',
        fadeOut: 'fadeOut 2s ease-out 1s forwards',
        slideIn: 'slideIn 0.5s ease-in-out forwards',
        slideInSlow: 'slideInSlow 1s ease-in',
        slideFromBottom: 'slideFromBottom 1s ease-in',
        slideFromBottom1: 'slideFromBottom1 0.5s ease-in',
        slideFromBottom2: 'slideFromBottom1 0.6s ease-in',
        slideFromBottom3: 'slideFromBottom1 0.7s ease-in',
        slideFromBottom4: 'slideFromBottom1 0.8s ease-in',
        slideInLeft: 'slideInLeft 0.8s ease-in-out forwards',
        spin: 'spin 30s linear infinite',
        swing: 'swing 3s linear infinite alternate',
        swingY: 'swingY 5s linear infinite alternate',
        rotateX: 'rotateX 1s linear forwards',
        'scale-infinite': 'scaleInfinite 3s infinite',
        'scale-infinite-f': 'scaleInfinite 3s infinite 0.1s',
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

