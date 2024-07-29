/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/*.{html,js}', './index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily: {
        title: ['Playfair Display', 'serif'],
        subtitle: ['Montserrat', 'sans-serif'],
        text: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
