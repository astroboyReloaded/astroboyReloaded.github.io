// Render #works content

import projects from '../db.js';

const projectData = projects.data;

document.getElementById('works').innerHTML = `
<h1 class="playfair" tabindex="0">
  Projects:
</h1>
${projectData.map((project) => `
<a class="project ${project.gridArea}" tabindex="0">
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
    ${project.tech.map((tech) => `<li class="tech-item">${tech}</li>`).join('')}
  </ul>
  <span
    class="btnBlue seeProjBtn"
    aria-label="Press enter now to see this project."
  >
    See this project
  </span>
</div>
</a>
`).join('')}
<div class="center deco"></div>
<div class="left deco"></div>
<div class="right deco"></div>`;