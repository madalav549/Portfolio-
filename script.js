let dropDown = document.getElementById("dropdown");
let mainContainer = document.querySelector(".project-section");

function dropDownDirection(clickedElement, container) {
  let items = Array.from(container.children);

  if (clickedElement === "oldest") {
    items.forEach(item => container.prepend(item));
  } else if (clickedElement === "newest") {
    items.forEach(item => container.prepend(item));
  }
}

dropDown.addEventListener("change", () => {
  dropDownDirection(dropDown.value, mainContainer);
});