/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gameBackPlanos': "url('/img/gameBack.png')",
      }
    },
  },
  plugins: [],
}

