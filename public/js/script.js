// ketika tombol menu diklik
const menu = document.querySelector('#hamburgerMenu');
const navbar = document.getElementById('navbar');
const barMenu = document.querySelectorAll('.hamburger-bar');
const navLinks = document.querySelectorAll('nav a');

menu.addEventListener('click', () => {
  navbar.classList.toggle('right-0');

  barMenu.forEach((bar) => {
    bar.classList.toggle('barClose');
  });
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navbar.classList.toggle('right-0');

    barMenu.forEach((bar) => {
      bar.classList.toggle('barClose');
    });
  });
});

document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menu.contains(e.target)) {
    navbar.classList.remove('right-0');
    barMenu.forEach((bar) => {
      bar.classList.remove('barClose');
    });
  }
});
