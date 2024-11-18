const menuBtn = document.querySelector('.menu-btn');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const navLink = document.querySelectorAll('.nav-link');
const menuHeight = document.querySelector('#headline').offsetHeight;
nav.style.height = `${menuHeight - 18}px`;

function toggle() {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('display');
  logo.classList.toggle('menu-logo');
}

menuBtn.addEventListener('keydown', (e) => {
  const space = e.key === ' ';
  if (e.key === 'Enter' || space) {
    e.preventDefault();
    toggle();
    menuToggle.checked = !menuToggle.checked;
  }
});

menuToggle.onclick = () => {
  toggle();
};

navLink.forEach((link, i, list) => {
  if (i === list.length - 1) {
    link.addEventListener('keydown', (e) => {
      if (!e.shiftKey && e.key === 'Tab') {
        toggle();
        menuToggle.checked = false;
      }
    });
  }
  link.onclick = () => {
    toggle();
    menuToggle.checked = false;
  };
});
