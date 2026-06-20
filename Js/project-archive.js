import { projectsData } from "./projects-archive-data.js";

const dropDown = document.getElementById("dropdown");
const mainContainer = document.querySelector(".project-section");

function generateProjectCards(){

  projectsData.forEach((project) =>{
    const projectContainer = document.createElement("article");
    projectContainer.classList.add("project-container");
    const projectImageElement = document.createElement("img");
    projectImageElement.src = project.projectImage;
    projectImageElement.alt = `${project.projectName}.preview`;
    projectContainer.appendChild(projectImageElement);

    const projectNameElement = document.createElement("h2");
    projectNameElement.classList.add("project-name");
    projectNameElement.textContent = project.projectName;
    projectContainer.appendChild(projectNameElement);

    const liveSiteStrongElement = document.createElement("strong");
    liveSiteStrongElement.textContent = "Live site: ";
    const liveSiteLink = document.createElement("a");
    liveSiteLink.href = project.liveLink;
    liveSiteLink.target = "_blank";
    liveSiteLink.textContent = "View full site";
    liveSiteStrongElement.appendChild(liveSiteLink);
    projectContainer.appendChild(liveSiteStrongElement);

    const gitHubUrlStrongElement = document.createElement("strong");
    gitHubUrlStrongElement.textContent = "GitHub URL: ";
    const gitHubLinkElement = document.createElement("a");
    gitHubLinkElement.href = project.gitHubURL;
    gitHubLinkElement.target = "_blank";
    gitHubLinkElement.textContent = "View GitHub Repo";
    gitHubUrlStrongElement.appendChild(gitHubLinkElement);
    projectContainer.appendChild(gitHubUrlStrongElement);
    mainContainer.appendChild(projectContainer);
  })
};

function dropDownDirection(clickedElement, container) {
  let items = Array.from(container.children);

  if (clickedElement === "oldest") {
    items.forEach(item => container.prepend(item));
  } else if (clickedElement === "newest") {
    items.forEach(item => container.prepend(item));
  }
}

document.addEventListener("DOMContentLoaded", () =>{
  generateProjectCards()
})

dropDown.addEventListener("change", () => {
  dropDownDirection(dropDown.value, mainContainer);
});