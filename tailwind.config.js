/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Sobreescribe o añade colores personalizados.
        secondary: "#D97706",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Cambia las fuentes.
        serif: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
