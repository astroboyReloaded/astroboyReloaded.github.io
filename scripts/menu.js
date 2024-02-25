const menuBtn = document.querySelector('.menu-btn'),
  menuToggle = document.getElementById('menu-toggle'),
  nav = document.querySelector('nav'),
  logo = document.querySelector('.logo'),
  navLink = document.querySelectorAll('.nav-link'),
  _menuHeight = document.querySelector('#headline').offsetHeight;
nav.style.height = `${_menuHeight - 18}px`;

function toggle() {
  const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', !expanded);
  nav.classList.toggle('display');
  logo.classList.toggle('menu-logo');
};

menuBtn.addEventListener('keydown', (e) => {
  const space = e.key == ' ';
  if (e.key === 'Enter' || space) {
    space && e.preventDefault();
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