const hamburgerMenu = document.getElementById('hamburger_menu');
const bars = document.querySelectorAll('.hamburger-bar');
const navbar = document.getElementById('navbar');
const links = document.querySelectorAll('.nav-link');

hamburgerMenu.addEventListener('click', () => {
  bars.forEach((bar) => {
    bar.classList.toggle('barClose');
  });
  navbar.classList.toggle('scale-y-0');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    bars.forEach((bar) => {
      bar.classList.toggle('barClose');
    });
    navbar.classList.toggle('scale-y-0');
  });
});

// Modal Box
const btnOpen = document.querySelectorAll('.btn__explain');

btnOpen.forEach((btn) => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-content');
    const modal = document.getElementById(id);
    modal.style.display = 'flex';
  });
});

const modalBeans = document.querySelectorAll('.modal__beans');
function closeModal() {
  modalBeans.forEach((modal) => {
    modal.style.display = 'none';
  });
}

modalBeans.forEach((modal) => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
});

const cardRecept = document.querySelectorAll('.card__recept');

cardRecept.forEach((card) => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-recept');
    const modal = document.getElementById(id);
    modal.classList.add('left-0');
    modal.classList.remove('-left-full');
  });
});

const contentRecept = document.querySelectorAll('.content__recept');
function closeBoxRecept() {
  contentRecept.forEach((content) => {
    content.classList.add('-left-full');
    content.classList.remove('left-0');
  });
}

contentRecept.forEach((content) => {
  content.addEventListener('click', (e) => {
    if (!e.target.matches('.content__recept *')) {
      content.classList.add('-left-full');
    }
  });
});

window.addEventListener('click', (event) => {
  if (!navbar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    bars.forEach((bar) => {
      bar.classList.remove('barClose');
    });
    navbar.classList.add('scale-y-0');
  }
});
