// Render #works content

import projects from '../db.js';

const projectData = projects.data;

document.getElementById('works').innerHTML = `
<h2 id="works-title" class="playfair">
  Projects:
</h2>
${projectData.map((project) => `
<button class="project ${project.gridArea}">
<img
  class="project-image"
  src="${project.imageURL}"
  alt="${project.imageAlt}"
/>
<div id="Description" class="project-description poppins">
  <h2 id="${project.title}" class="project-title">
    ${project.title}
  </h2>
  <ul
    class="tech-container"
  >
    ${project.tech.map((tech) => `<li class="tech-item">${tech}</li>`).join('')}
  </ul>
  <span
    class="btnBlue seeProjBtn"
  >
    See this project
  </span>
</div>
</button>
`).join('')}
<div class="center deco"></div>
<div class="left deco"></div>
<div class="right deco"></div>`;