import Projects from '../db.js';
import closePopupGesture from './gestures/closePopUp.js';

const projectThumbnails = document.querySelectorAll('.project');
const { data } = Projects;
const projectWindow = document.createElement('article');
projectWindow.setAttribute('tabindex', '0');
projectWindow.setAttribute('aria-label', 'Project Details');
projectWindow.setAttribute('aria-live', 'polite');
projectWindow.setAttribute('aria-atomic', true);
projectWindow.id = 'pWindow';
projectWindow.className = 'project-window';
let ProjectDataIndex;
let removePopupGesture;
function closeWindow() {
  removePopupGesture();
  document.body.removeChild(projectWindow);
  projectThumbnails[ProjectDataIndex].focus();
}

function createPopUp() {
  projectWindow.innerHTML = `
    <header class="pW-header">
      <button class="close-pW pWDynamic"  aria-label="close window.">X</button>
      <h1 class="pW-title poppins pWDynamic" aria-relevant="true"></h1>
    </header>
    <ul class="pW-tech-container tech-container pWDynamic" aria-relevant="true"></ul>
    <img class="pW-img pWDynamic" aria-relevant="true" />
    <main class="pW-description poppins pWDynamic" aria-relevant="true"></main>
    <div class="pW-btnsContainer">
      <a target="_blank" class="pW-project-link live poppins pWDynamic" aria-label="View live project" tabindex="0">
        See live
      </a>
      <a target="_blank" class="pW-project-link source poppins pWDynamic" aria-label="View source code" tabindex="0">
        See source
      </a>
    </div>
    <nav class="prev-next-cont">
      <ul class="pW-nav-ul">
        <li><a href="#" class="pW-prev-btn project-nav poppins pWDynamic" tabindex="0">
        Previous project
        </a></li>
        <li><a href="#" class="pW-next-btn project-nav poppins pWDynamic" tabindex="0">
        Next project
        </a></li>
      </ul>
    </nav>`;

  const [
    closePopup,
    projectTitle,
    techContainer,
    projectImage,
    projectDescription,
    seeLive,
    seeSource,
    prevLink,
    nextLink,
  ] = projectWindow.querySelectorAll('.pWDynamic');

  function populateProjectWindow(Data) {
    projectTitle.textContent = Data.title;
    techContainer.innerHTML = Data.tech
      .map((tech) => `<li class="pW-tech-item tech-item poppins">${tech}</li>`)
      .join('');
    projectImage.setAttribute('src', Data.imageURL);
    projectImage.setAttribute('alt', Data.imageAlt);
    projectDescription.textContent = Data.description;
    seeLive.setAttribute('href', Data.liveLink);
    seeSource.setAttribute('href', Data.sourceLink);
    if (ProjectDataIndex < 1) {
      prevLink.style.display = 'none';
    } else {
      prevLink.style.display = 'inline';
    }
    if (ProjectDataIndex >= data.length - 1) {
      nextLink.style.display = 'none';
    } else {
      nextLink.style.display = 'inline';
    }
    projectWindow.focus();
  }
  populateProjectWindow(data[ProjectDataIndex]);

  closePopup.addEventListener('click', closeWindow);

  projectWindow.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeWindow();
  });
  projectWindow.onkeydown = (e) => {
    if (
      document.activeElement === projectWindow
      && e.shiftKey
      && e.key === 'Tab'
    ) closeWindow();
  };

  prevLink.addEventListener('click', () => {
    ProjectDataIndex -= 1;
    populateProjectWindow(data[ProjectDataIndex]);
  });
  prevLink.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      ProjectDataIndex -= 1;
      populateProjectWindow(data[ProjectDataIndex]);
    }
  });

  nextLink.addEventListener('click', () => {
    ProjectDataIndex += 1;
    populateProjectWindow(data[ProjectDataIndex]);
  });
  nextLink.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      ProjectDataIndex += 1;
      populateProjectWindow(data[ProjectDataIndex]);
    }
  });
  removePopupGesture = closePopupGesture(projectWindow, closeWindow);
}

function openPopup(index) {
  document.body.appendChild(projectWindow);
  ProjectDataIndex = index;
  createPopUp();
}
projectThumbnails.forEach((p, i) => {
  p.addEventListener('click', () => openPopup(i));
  p.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      openPopup(i);
    }
  });
});
