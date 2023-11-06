/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      linearGradientColors: {
        'custom-gradient': '135deg, #153677, #4e085f',
      },
    },
  },
  plugins: [],
}

