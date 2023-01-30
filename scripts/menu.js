const menuBtn = document.getElementById("menuBtn");
const menuItems = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  menuItems.classList.toggle("menu-items");
});

menuItems.style.color = "red";
