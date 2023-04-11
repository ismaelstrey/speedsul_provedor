/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'gameBackPlanos': "url('/img/gameBack.png')",
        'backSite': "url('/img/bg.svg')",
        'backFooter': "url('/img/backFooter.svg')",
        'backHeader': "url('/img/logoAtivo.svg')",
        'backLogo': "url('/img/logo.svg')",
      }
    },
  },
  plugins: [],
}

