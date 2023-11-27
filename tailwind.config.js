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
        },
        Background: 'rgba(30, 30, 30, 0.27)'
      },
      screens: {
        'phones': '500px',
        'tab': '600px',
        'phone': '700px',
        'mini': '800px',
        'mid': '900px',
        'mids': '1000px',
        'desktop': '1200px',
        "lg-Desktop": "1400px",
      },
    },
  },
  plugins: [],
}