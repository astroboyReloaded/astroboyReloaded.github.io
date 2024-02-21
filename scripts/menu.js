const menuBtn = document.getElementById('menu-toggle');
const btnCont = document.querySelector('.menu-btn-container');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const navLink = document.getElementsByClassName('nav-link');

const toggle = () => {
  nav.classList.toggle('display');
  logo.classList.toggle('menu-logo');
};

menuBtn.onclick = () => {
  toggle();
};
btnCont.addEventListener('keypress', () => {
  toggle()
  menuBtn.checked = !menuBtn.checked;
});

Array.from(navLink).forEach((element) => {
  element.onclick = () => {
    toggle();
    menuBtn.checked = false;
  };
});
