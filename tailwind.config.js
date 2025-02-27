/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 4px 12px 0px rgba(39, 35, 80, 0.1)',
      },
      colors: {
        'regal-purple': 'rgba(111, 100, 232)',
      },
    },
  },
  plugins: [],
}

