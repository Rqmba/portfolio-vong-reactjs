/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        base: '18px', // Taille par défaut des paragraphes
        title: '32px', // Taille des titres
      },
      lineHeight: {
        normal: '1.8', // Interlignes par défaut
      },
      letterSpacing: {
        wider: '0.05em', // Espacement des lettres
      },
      colors: {
        // customGray: 'rgba(230, 230, 230, 0.9)',
      },
    },
  },
  plugins: [
    require('daisyui'), // Vous pouvez conserver DaisyUI si vous utilisez ses composants
  ],
};
