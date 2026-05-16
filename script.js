let dropDown = document.getElementById("dropdown");
let mainContainer = document.querySelector(".project-section");
let projectsSection = document.getElementById("projects-section");

let projectsData = [
  {
    projectImage: "./Assets/ping-preview.jpg",
    projectImageAlt: "Ping single column coming soon page preview",
    projectName: "Ping single column coming soon page",
    projectDescription: `This responsive "Coming Soon" landing page features a clean email subscription form with custom client-side validation. The design prioritizes accessibility and user experience by implementing real-time email verification that provides immediate visual feedback. The form prevents invalid submissions through a JavaScript validation function using regex patterns, while CSS custom properties ensure consistent theming across all elements. The layout employs a mobile-first approach with fluid typography and flexible components that adapt seamlessly from mobile to desktop views. Social media icons include interactive hover states, and all interactive elements maintain proper focus states for keyboard navigation. The project demonstrates practical handling of form validation, responsive design principles, and semantic HTML structure.`,
    projectLink: "https://madalav549.github.io/ping-single-column-coming-soon-page/"
  },
  {
    projectImage: "./Assets/Intro-component-with-sign-up-form-solution-preview.jpg" ,
    projectImageAlt: "Intro-component-with-sign-up-form-solution preview",
    projectName: "Intro component with sign up form",
    projectDescription: `This interactive sign-up form component features multi-field validation with immediate user feedback, designed to capture user data accurately before submission. The form validates four distinct input types—first name, last name, email, and password—each with specific error handling and visual cues. JavaScript dynamically toggles error states that combine CSS styling (red borders) with inline error icons and custom messages, providing clear guidance on correction. The layout uses CSS Grid for desktop views to create an effective two-column design that balances marketing content with functional form elements, while maintaining a mobile-first responsive approach. The validation logic includes both presence checking (empty fields) and basic format verification for emails, all implemented without page reloads. Interactive elements include hover effects on the submit button and proper focus states throughout, ensuring accessibility. The project demonstrates practical form handling, error state management, and clean separation of validation logic from presentation.`,
    projectLink: "https://madalav549.github.io/intro-component-with-sign-up-form/"
  },
  {
    projectImage: "./Assets/base-apparel-coming-soon-master-preview.jpg" ,
    projectImageAlt: "Project base-apparel-coming-soon-master preview",
    projectName: " Base-apparel-coming-soon",
    projectDescription: `This elegant "Coming Soon" landing page for a fashion brand features a sophisticated email validation system integrated within a visually balanced split-layout design. The interface uses CSS Grid to create a distinctive desktop composition that separates content from hero imagery while maintaining full responsiveness through mobile-first principles. The email form includes real-time validation with a polished visual feedback system: invalid submissions trigger a custom error icon, colored outline, and descriptive message without page reload. JavaScript validates email format using regex patterns, and the form maintains accessibility with proper ARIA attributes for screen readers. The design employs subtle gradients for visual depth and interactive hover states on the submit button, while strategically using multiple background patterns to enhance visual texture. Typography is carefully handled with contrasting weights and colors to create hierarchy and brand personality. The project demonstrates effective layout control, seamless validation UX, and attention to design details that elevate user experience.`,
    projectLink: "https://madalav549.github.io/base-apparel-coming-soon-master/"
  },
  {
    projectImage: "./Assets/Article-Preview-Component-desktop-design.jpg" ,
    projectImageAlt: "project Article-Preview-Component-desktop-design preview",
    projectName: "Article Preview component master",
    projectDescription: `This interactive article preview component features a dynamic share interface that toggles between two distinct visual states based on user interaction. The component uses JavaScript to seamlessly switch between a standard author profile view and an expanded share panel containing social media icons, with smooth transitions managed through CSS class toggling. The desktop layout employs absolute positioning to create a floating share tooltip with a custom CSS-drawn arrow pointer for precise visual integration. The design maintains full responsiveness, with mobile and desktop views optimized through media queries and CSS Grid for structured content arrangement. Accessibility considerations include proper button labeling and semantic HTML structure for screen readers. Interactive states are clearly indicated through color changes and visual feedback on the share button, creating an intuitive user experience. The project demonstrates practical implementation of UI state management, CSS positioning techniques, and responsive component design with attention to detail in visual polish.`,
    projectLink: "https://madalav549.github.io/Article-Preview-Component/"
  },
  {
    projectImage: "./Assets/Huddle-landing-page-preview.jpg" ,
    projectImageAlt: "Huddle landing page preview",
    projectName: "Huddle landing page",
    projectDescription: `This community-focused landing page demonstrates effective use of CSS Grid to create a visually balanced two-column layout that organizes brand imagery alongside compelling value proposition content. The design implements a mobile-first responsive approach with distinct background patterns optimized for different screen sizes, using media queries to switch between mobile and desktop imagery without content disruption. The interface features interactive elements with smooth hover transitions on both the primary call-to-action button and social media icons, providing clear visual feedback through color changes that maintain brand consistency. Typography is carefully managed with two complementary font families to establish clear hierarchy between headings and body text. The layout strategically positions social icons using absolute positioning in desktop view for precise alignment, while maintaining centered organization in mobile layouts. The project showcases practical implementation of background image handling, grid-based responsive design, and interactive styling that enhances user engagement through subtle but effective visual cues.`,
    projectLink: "https://madalav549.github.io/Huddle-landing-page/"
  },
  {
    projectImage: "./Assets/social-proof-section-desktop-preview.jpg" ,
    projectImageAlt: "Social proof section preview",
    projectName: "Social proof section",
    projectDescription: `This social proof section showcases a sophisticated layout that combines compelling statistics with authentic customer testimonials to build credibility and trust. The design implements CSS Grid to create a structured desktop view with three distinct content areas: value proposition, star ratings, and testimonial cards, all arranged to guide the user's eye naturally through the social proof elements. The star rating components use semantic HTML lists for accessibility while maintaining visual appeal through consistent icon spacing and background styling. Testimonial cards feature a clean profile section with verified buyer status indicators, using color psychology to establish trust through purple tones. The layout demonstrates advanced responsive techniques with strategic offset positioning of testimonial cards using nth-child selectors to create a visually engaging staggered effect on desktop. Background patterns are carefully managed with separate mobile and desktop images to maintain visual balance across screen sizes. The project highlights practical application of grid-based layouts, semantic HTML structure, and responsive design patterns that enhance content presentation and user trust-building.`,
    projectLink: "https://madalav549.github.io/social-proof-section/"
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