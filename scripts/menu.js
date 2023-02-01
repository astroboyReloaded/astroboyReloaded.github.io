const menuBtn = document.getElementById('menu-toggle');
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

Array.from(navLink).forEach((element) => {
  element.onclick = () => {
    toggle();
    menuBtn.checked = false;
  };
});
