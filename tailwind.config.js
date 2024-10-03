/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'],
      },
      colors: {
        light1: '#DAFFFB',
        light2: '#64CCC5',
        light3: '#176B87',
        light4: '#001C30',
        dark1: '#070F2B',
        dark2: '#1B1A55',
        dark3: '#535C91',
        dark4: '#9290C3',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
