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

// ketika tombol lihat penjelasan diklik maka akan menampilkan box modal
const btnExplainBeans = document.querySelectorAll('.btn__explain');
const modal = document.querySelectorAll('.modal__beans');
const closeModal = document.querySelector('.fa-close');

btnExplainBeans.forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-content');
    const modalId = document.getElementById(id);
    modalId.classList.toggle('hidden');
  });
});

function closeModal() {
  modal.classList.toggle('hidden');
}
