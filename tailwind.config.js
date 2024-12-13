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
      {
        "primary": "#4caf50", // Vert pour les accents
        "secondary": "#1e293b", // Bleu sombre
        "accent": "#3b82f6", // Bleu pour les éléments
        "neutral": "#2b2b2d", // Gris foncé
        "base-100": "#0f172a", // Fond principal
        "info": "#0ea5e9",
        "success": "#10b981",
        "warning": "#facc15",
        "error": "#ef4444",
      },
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
