/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      content: {
        "quick-wavy-line": "url('/src/assets/landing-assets/quick-wavy-line.svg')",
      }
    },
  },
  plugins: [],
}
