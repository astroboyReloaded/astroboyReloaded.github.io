const menuBtn = document.querySelector('.menu-btn');
const menuToggle = document.getElementById('menu-toggle');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const navLink = document.querySelectorAll('.nav-link');

function toggle() {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('display');
  logo.classList.toggle('menu-logo');
};

menuBtn.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === 'Space') {
    toggle();
    menuToggle.checked = !menuToggle.checked;
  }
});

menuToggle.onclick = () => {
  toggle();
};


navLink.forEach((link, i ,list) => {
  (i === list.length - 1) && link.addEventListener('keydown', (e) => {
    if (!e.shiftKey && e.key === 'Tab') {
      toggle();
      menuToggle.checked = false
    }
  });
  link.onclick = () => {
    toggle();
    menuToggle.checked = false};
});