/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["../**/*.{html.twig,twig}"],
  theme: {
    extend: {
      ringWidth: {
        'DEFAULT': '0px',
      },
    },
  },
  plugins: [],
};