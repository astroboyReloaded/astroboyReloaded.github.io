// Render #works content

import projects from '../db.js';

const projectData = projects.data;

document.getElementById('works').innerHTML = `
<h1 class="playfair" tabindex="7" aria-label="My projects:">
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
    ${project.tech.map(tech => `<li class="tech-item">${tech}</li>`).join('')}
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
<div class="center deco"></div>
<div class="left deco"></div>
<div class="right deco"></div>`;