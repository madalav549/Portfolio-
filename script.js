let dropDown = document.getElementById("dropdown");
let mainContainer = document.querySelector(".project-section");
let projectsSection = document.getElementById("projects-section");

let projectsData = [
  {
    projectImage: "./Assets/news-homepage-preview.jpg",
    projectImageAlt: "News homepage preview",
    projectName: "News homepage",
    projectDescription: `This modern news website homepage features a sophisticated responsive layout with an engaging hero section, a dynamic "New" articles sidebar, and a numbered trending section. The design utilizes CSS Grid extensively on desktop to create an asymmetrical, newspaper-style arrangement while maintaining a clean mobile-first experience. The project includes a fully functional mobile navigation menu with open and close states managed through vanilla JavaScript. Attention to detail is evident in the careful typography hierarchy, hover interactions, responsive image swapping, and consistent color scheme. This challenge demonstrates strong skills in building content-heavy layouts, effective grid systems, and delivering a professional news-oriented user interface that works seamlessly across all screen sizes.`,
    projectLink: "https://madalav549.github.io/News-homepage/"
  },
  {
    projectImage: "./Assets/contact-form-preview.jpg",
    projectImageAlt: "Contact form preview",
    projectName: "Contact form",
    projectDescription: `This advanced contact form features comprehensive client-side validation across multiple input types including text fields, email, custom radio buttons, checkbox consent, and textarea. The JavaScript implementation is robust, with real-time validation on input/change events, clear error messaging, and dynamic border styling for immediate visual feedback. The form includes a polished success state with smooth fade-in animation, automatic form reset, and temporary success message display. Custom styling for radio buttons and checkboxes using pseudo-elements adds a modern touch. The project demonstrates strong form handling skills, excellent user experience design, accessibility considerations, and clean separation between validation logic and presentation — marking a significant advancement in vanilla JavaScript capabilities.`,
    projectLink: "https://madalav549.github.io/Contact-form/"
  },
  {
    projectImage: "./Assets/base-apparel-coming-soon-master-preview.jpg" ,
    projectImageAlt: "Project base-apparel-coming-soon-master preview",
    projectName: " Base-apparel-coming-soon",
    projectDescription: `This elegant "Coming Soon" landing page for a fashion brand features a sophisticated email validation system integrated within a visually balanced split-layout design. The interface uses CSS Grid to create a distinctive desktop composition that separates content from hero imagery while maintaining full responsiveness through mobile-first principles. The email form includes real-time validation with a polished visual feedback system: invalid submissions trigger a custom error icon, colored outline, and descriptive message without page reload. JavaScript validates email format using regex patterns, and the form maintains accessibility with proper ARIA attributes for screen readers. The design employs subtle gradients for visual depth and interactive hover states on the submit button, while strategically using multiple background patterns to enhance visual texture. Typography is carefully handled with contrasting weights and colors to create hierarchy and brand personality. The project demonstrates effective layout control, seamless validation UX, and attention to design details that elevate user experience.`,
    projectLink: "https://madalav549.github.io/base-apparel-coming-soon-master/"
  },
  {
    projectImage: "./Assets/fylo-landing-page-preview.jpg",
    projectImageAlt: "Fylo landing page with dark theme preview",
    projectName: "Fylo landing page with dark theme and features grid",
    projectDescription: `This comprehensive dark-themed landing page for Fylo showcases advanced multi-section design and strong brand consistency. The project features a modern hero section with call-to-action, a responsive four-card features grid, a productivity section with custom illustrations, customer testimonials, and a functional email signup form with client-side validation. The design employs a dark color palette with tasteful gradients and strategic use of background curves that adapt between mobile and desktop. The layout makes effective use of Flexbox and CSS Grid while maintaining excellent responsiveness. JavaScript powers real-time email validation with regex pattern matching and clear error feedback. This project demonstrates the ability to create polished, professional SaaS marketing pages with cohesive visual hierarchy, interactive elements, and strong attention to detail across both mobile and desktop experiences.`,
    projectLink: "https://madalav549.github.io/Fylo-dark-theme-landing-page/"
  },
  {
    projectImage: "./Assets/expenses-chart-component-preview.jpg",
    projectImageAlt: "Expenses chart component preview",
    projectName: "Expenses chart component",
    projectDescription: `This interactive expenses chart visualizes spending data over a 7-day period using dynamically styled bars. The project features hover interactions that display exact daily amounts, built with a JavaScript data array that drives the chart. The design maintains a clean, modern aesthetic with careful attention to typography and color contrast between current and previous periods. This component demonstrates practical skills in working with data in the frontend, DOM manipulation for interactive elements, and creating clear data visualizations that enhance user understanding.`,
    projectLink: "https://madalav549.github.io/Expenses-chart-component/"
  },
  {
    projectImage: "./Assets/sunnyside-agency-landing-page-preview.jpg" ,
    projectImageAlt: "Sunnyside agency landing page preview",
    projectName: "Sunnyside agency landing page",
    projectDescription: `This vibrant and bold landing page for Sunnyside creative agency demonstrates advanced multi-section layout skills and strong visual storytelling. The project features a complex responsive design with smooth mobile-to-desktop transitions, including a fully functional mobile navigation menu with smooth toggle animation powered by vanilla JavaScript. The layout makes excellent use of CSS Grid and Flexbox to create alternating text-image sections, a responsive testimonials carousel-style display, and a masonry-like image gallery. Two complementary font families (Barlow and Fraunces) are strategically combined to establish clear hierarchy and modern brand personality. The design pays great attention to detail with custom underlines, hover states, image swapping between mobile and desktop versions, and precise positioning of elements. This project showcases the ability to handle large-scale landing pages while maintaining consistent branding, excellent typography, and interactive elements that enhance user engagement.`,
    projectLink: "https://madalav549.github.io/Sunnyside-Agency-Landing-Page/"
  }
]

function renderProjects(){
  projectsData.forEach((project) =>{
    const projectContainer = document.createElement("article");
    projectContainer.classList.add("project-container");

    const imageContainerDiv = document.createElement("div");
    imageContainerDiv.classList.add("project-image-container");

    const projectImage = document.createElement("img");
    projectImage.src = project.projectImage;
    projectImage.alt = project.projectImageAlt;

    imageContainerDiv.appendChild(projectImage);
    projectContainer.appendChild(imageContainerDiv);

    const projectName = document.createElement("h3");
    projectName.classList.add("project-name");
    projectName.textContent = project.projectName;
    projectContainer.appendChild(projectName);

    const projectDescription = document.createElement("p");
    projectDescription.classList.add("project-description");
    projectDescription.textContent = project.projectDescription;
    projectContainer.appendChild(projectDescription);

    const strong = document.createElement("strong");
    strong.textContent = "Live site: ";
    const a = document.createElement("a");
    a.href = project.projectLink;
    a.target = "_blank";
    a.rel = "noopener noreferrer"
    a.textContent = project.projectName;
    strong.appendChild(a);
    projectContainer.appendChild(strong);

    projectsSection.appendChild(projectContainer);
  });
}

function dropDownDirection(clickedElement, container) {
  let items = Array.from(container.children);

  if (clickedElement === "oldest") {
    items.forEach(item => container.prepend(item));
  } else if (clickedElement === "newest") {
    items.forEach(item => container.prepend(item));
  }
}

document.addEventListener("DOMContentLoaded", () =>{
  renderProjects();
});

dropDown.addEventListener("change", () => {
  dropDownDirection(dropDown.value, mainContainer);
});