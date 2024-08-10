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
      colors: {
        header: '#4e6d76',
        mainBG: '#e8e6ea',
        secondBG: '#97a0a6',
        mainTeks: '#223634',
        secondTeks: '#97a0a6',
        btnCta: '#bc9b76',
        link: '#aeb7c2',
        footer: '#6d6b60',

        // header: '#6F4F28',
        // latarBelakang: '#F5F5DC',
        // teksUtama: '#010101',
        // teksSekunder: '#4f4f4f',
        // cta: '#ffd700',
        // link: '#f5a623',
      },
    },
  },
  plugins: [],
};
