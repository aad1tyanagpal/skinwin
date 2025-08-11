module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C09A50',
        'primary-dark': '#B08A40',
        background: '#FBFBFB',
        surface: '#FFFFFF',
        'text-primary': '#2D3748',
        'text-secondary': '#718096',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}