/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'mobile-pattern': "url('./src/images/suggestions/mobile/background-header.png')",
        'tablette-pattern': "url('./src/images/suggestions/tablet/background-header.png')",
        'desktop-pattern': "url('./src/images/suggestions/desktop/background-header.png')",
      },
      borderColor:{
    'border-b-2':'0px'
      },
      colors: {
        purple: '#ad1fe6',
        purpleHover: '#c75af6',
        blue: '#4661e6',
        blueHover: '#7c91f9',
        blueLight: '#62bcfa',
        orange: '#f49f85',
        red: '#d73737',
        redHover: '#e98888',
        /* Neutral */
        greyDarkest: '#373f68',
        greyDarker: '#3a4374',
        greyDarker15: 'hsl(231, 33%, 34%, 0.15)',
        greydarkerHover: '#656ea3',
        greyDark: '#647196',
        greyHover: '#cfd7ff',
        inputPlaceholder: '#8c92b3',
        grey: '#f2f4ff',
        grey75: 'hsl(231, 100%, 97%, 0.75)',
        greyLight: '#f7f8fd',
        overlay:'#00000080'
      },
    },
  },
  plugins: [],
}
