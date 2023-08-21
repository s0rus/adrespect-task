export const setupProjectsDrawer = () => {
  const expandButton = document.getElementById("expand-projects");
  const projectsContainer = document.getElementById("projects");
  const gradientOverlay = document.getElementById("gradient-overlay");

  if (expandButton && projectsContainer && gradientOverlay) {
    expandButton.addEventListener("click", () => {
      [projectsContainer, gradientOverlay, expandButton].forEach((element) => {
        element.setAttribute("data-expanded", "true");
      });
      expandButton.remove();
    });
  }
};
