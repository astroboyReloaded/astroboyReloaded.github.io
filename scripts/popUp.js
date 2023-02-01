import projects from '../db.js';

const projectData = projects.data;
const projectWindow = document.createElement('article');
projectWindow.className = 'popUp';
const project = Array.from(document.getElementsByClassName('project'));

project.forEach((p, i) => p.addEventListener('click', () => {
  document.body.appendChild(projectWindow).innerHTML = `
<main class="pWMain">
  <div class="pW-header">
    <button class="closeWindow">X</button>
    <h1 class="poppins pWTitle">${projectData[i].title}</h1>
</div>
  <ul class="tech-container">
    ${projectData[i].tech
    .map((tech) => `<li class="tech-item pWTech poppins">${tech}</li>`)
    .join('')}
  </ul>
  <img class="windowImg" src="${projectData[i].imageURL}" alt="${projectData[i].imageAlt}">
  <p class="pWDescription poppins">${projectData[i].description}</p>
  <div class="pW-btnsContainer">
    <a type="button" href="${projectData[i].liveLink}
    " target="_blank" class="pWBtn live poppins">See live</a>
    <a type="button" href="${projectData[i].sourceLink}
    " target="_blank" class="pWBtn source poppins">See source</a>
  </div>
  <nav class="prev-next-cont">
      <ul class="project-window-nav-ul">
        <li><a class="project-nav prevProj poppins">
        Previous project
        </a></li>
        <li><a class="project-nav nextProj poppins">
        Next project
        </a></li>
      </ul>
    </nav>
</main>`;
  const closePopUp = document.querySelector('.closeWindow');
  closePopUp.addEventListener('click', () => {
    document.body.removeChild(projectWindow);
  });
}));