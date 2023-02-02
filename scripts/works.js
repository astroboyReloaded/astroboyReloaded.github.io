// Render #works content

import projects from '../db.js';

const projectData = projects.data;

document.getElementById('works').innerHTML = `
<h1 class="playfair" tabindex="8" aria-label="My projects:">
  Projects
</h1>
${projectData.map((project) => `
<article class="project ${project.gridArea}" tabindex="${project.tabIndex}">
<img
  class="project-image"
  src="${project.imageURL}"
  alt="${project.imageAlt}"
/>
<div class="project-description poppins">
  <h1 class="project-title" aria-label="${project.title}.">
    ${project.title}
  </h1>
  <ul
    class="tech-container"
    aria-label="Technologies:${project.tech.map((t, i, a) => (t[i] === a.length - 1 ? t : ` ${t}`))}."
  >
    <li class="tech-item">${project.tech[0]}</li>
    <li class="tech-item">${project.tech[1]}</li>
    <li class="tech-item js">${project.tech[2]}</li>
  </ul>
  <button
    class="btnBlue seeProjBtn"
    aria-label="Press enter now to see this project."
  >
    See this project
  </button>
</div>
</article>
`).join('')}
<div class="project center deco"></div>
<div class="project left deco"></div>
<div class="project right deco"></div>`;