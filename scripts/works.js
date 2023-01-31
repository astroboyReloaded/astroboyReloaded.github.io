// Render #works content

import projects from '../db.js';

const projectData = projects.data;

document.getElementById('works').innerHTML = `
<h1 class="playfair" tabindex="8" aria-label="My projects:">
  Projects
</h1>
${projectData.map((project) => `
<article class="project p6" tabindex="14">
<img
  class="project-image"
  src="images/projects/Project6.jpg"
  alt="Temporary project image."
/>
<div class="project-description poppins">
  <h1 class="project-title" aria-label="Project name.">
    Project name goes here
  </h1>
  <ul
    class="tech-container"
    aria-label="Technologies: HTML and CSS, Ruby on Rails, JavaScript."
  >
    <li class="tech-item">HTML/CSS</li>
    <li class="tech-item">Ruby on Rails</li>
    <li class="tech-item js">JavaScript</li>
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