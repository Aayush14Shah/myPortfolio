/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes : {
        'roll':{
          '0%': {transform:' rotate(0deg);'},
          '100%': {transform:'rotate(360deg) ;'},
        },
        'blur' : {
          '0%': {transform:  "translate(0px, 0px) scale(1)"},
          '33%': {transform:  "translate(30px, -50px) scale(1.1)"},
          '66%': {transform:  "translate(-20px, 20px) scale(0.9)"},
          '100%': {transform:  "translate(0px, 0px) scale(1)"},
        },
        'navAppear' : {
          '0%' : {height : "0px"},
          '100%' : {height : "50px"},
        },
        'navContent' : {
          '0%' : {opacity : 0 },
          '100%' : {opacity : 1},
        },
      },
      animation : {
        'roll':'roll 1.5s linear infinite',
        'blur': 'blur 7s infinite',
        'navAppear': 'navAppear 0.8s ease-in-out',
        'navContent' : 'navContent 1s ',
       
      }
    },
    screens: {
      'sm': {'max':'567px'},
      'md':{'min':'568px','max':'823px'},
      'lg':{'min':'824px','max':'1079px'},
      'xl': {'min':'1080px','max':'1280px'},
    },
  },
  plugins: [],
}