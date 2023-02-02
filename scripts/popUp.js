import projects from '../db.js';

const projectData = projects.data;
const projectWindow = document.createElement('article');
projectWindow.className = 'popUp';
const project = Array.from(document.getElementsByClassName('project'));

function createProjectWindow(data) {
  return `
  <main class="pWMain">
    <div class="pW-header">
      <button id="closeW" class="closeWindow" tabindex="28">X</button>
      <h1 class="poppins pWTitle">${data.title}</h1>
    </div>
    <ul class="tech-container">
      ${data.tech
    .map((tech) => `<li class="tech-item pWTech poppins">${tech}</li>`)
    .join('')}
    </ul>
    <img class="windowImg" src="${data.imageURL}" alt="${data.imageAlt}">
    <p class="pWDescription poppins">${data.description}</p>
    <div class="pW-btnsContainer">
      <a type="button" href="${data.liveLink} tabindex="29"
      " target="_blank" class="pWBtn live poppins">See live</a>
      <a type="button" href="${data.sourceLink} tabindex="3"
      " target="_blank" class="pWBtn source poppins">See source</a>
    </div>
    <nav class="prev-next-cont">
      <ul class="project-window-nav-ul">
        <li><a id="prev" class="project-nav prevProj poppins" tabindex="30">
        Previous project
        </a></li>
        <li><a id="next" class="project-nav nextProj poppins" tabindex="31">
        Next project
        </a></li>
      </ul>
    </nav>
  </main>`;
}
function popUp(data, index) {
  document.body.appendChild(projectWindow).innerHTML = createProjectWindow(data[index]);
  const closePopUp = document.querySelector('.closeWindow');
  closePopUp.addEventListener('click', () => {
    document.body.removeChild(projectWindow);
  });

  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  if (index < 1) {
    prev.style.display = 'none';
  }
  prev.addEventListener('click', () => {
    popUp(projectData, index - 1);
  });

  if (index > projectData.length - 2) {
    next.style.display = 'none';
  }
  next.addEventListener('click', () => {
    popUp(projectData, index + 1);
  });
}
project.forEach((p, i) => p.addEventListener('click', () => {
  popUp(projectData, i);
}));