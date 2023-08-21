const setupScrollToProjects = () => {
  const projectsButtons = document.querySelectorAll(
    "[data-scroll-to-projects]",
  );
  const projectsContainer = document.getElementById("projects");

  if (projectsButtons && projectsContainer) {
    projectsButtons.forEach((button) => {
      button.addEventListener("click", () => {
        scrollTo(projectsContainer);
      });
    });
  }
};

const setupScrollToCompany = () => {
  const companyContainer = document.getElementById("company");
  const projectsButtons = document.querySelectorAll("[data-scroll-to-company]");

  if (companyContainer && projectsButtons) {
    projectsButtons.forEach((button) => {
      button.addEventListener("click", () => {
        scrollTo(companyContainer);
      });
    });
  }
};

export const setupScrollers = () => {
  setupScrollToProjects();
  setupScrollToCompany();
};

const scrollTo = (element: HTMLElement) => {
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};
