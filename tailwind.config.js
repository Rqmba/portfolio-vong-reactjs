/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Verdana', 'Tiresias', 'sans-serif'], // Texte par défaut
        title: ['Lato', 'sans-serif'], // Titre par défaut
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
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",
    ],
  },
};
