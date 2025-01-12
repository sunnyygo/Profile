/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        primary: '#006FFF',
        second: '#FF8B66',
        third: '#F9FAFB',
        fourth: '#FFFFFF',
        fifth: '#448Ef6'
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        amerika: ['"Edu AU VIC WA NT Pre"','serif']
      },
      fontWeight: {
        ctm: '500'
      }
  },
  plugins: [],
  }
}