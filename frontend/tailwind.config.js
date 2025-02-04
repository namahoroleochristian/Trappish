module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class', // Ensure this is defined properly (can be 'media' or 'class')
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    
  ],
  variants: {
    extend: {
      scrollbar: ['hover', 'focus']
    }
  }
}
