/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Primary: '#FBAF00',
        Dark_Grey: '#909090',
        Pigment_Green: {
          200: '#AAE4C6',
          600: '#00AF54',
        }
      }
    },
  },
  plugins: [],
}
