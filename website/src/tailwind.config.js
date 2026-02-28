module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#C09A50',
          hover: '#B08A40',
          light: '#D4B878',
        },
        cream: {
          DEFAULT: '#FBF5E9',
          dark: '#F5ECD8',
        },
      },
    },
  },
  plugins: [],
}