let currentImageIndex: number | null = null;
const projectsContainer = document.getElementById("projects");
const projects =
  projectsContainer?.querySelectorAll<HTMLImageElement>(".project");
const modal = document.getElementById("modal");
const modalImage = document.getElementById(
  "modal-image",
) as HTMLImageElement | null;

const handleModalImageChange = (direction: "next" | "previous") => {
  if (projects && modalImage && currentImageIndex !== null) {
    if (direction === "next") {
      currentImageIndex =
        currentImageIndex === projects.length - 1 ? 0 : currentImageIndex + 1;
    } else {
      currentImageIndex =
        currentImageIndex === 0 ? projects.length - 1 : currentImageIndex - 1;
    }

    modalImage.src = projects[currentImageIndex].src;
  }
};

const handleModalClose = () => {
  if (modal) {
    modal.setAttribute("data-modal-active", "false");
    document.body.setAttribute("data-modal-active", "false");
  }
};

export const setupProjectGallery = () => {
  const closeModalButton = document.getElementById("modal-close");
  const modalNextButton = document.getElementById("modal-next");
  const modalPreviousButton = document.getElementById("modal-previous");
  const modalBackdrop = document.getElementById("modal-backdrop");

  if (modalNextButton) {
    modalNextButton.addEventListener("click", () => {
      handleModalImageChange("next");
    });
  }

  if (modalPreviousButton) {
    modalPreviousButton.addEventListener("click", () => {
      handleModalImageChange("previous");
    });
  }

  if (closeModalButton) {
    closeModalButton.addEventListener("click", () => {
      handleModalClose();
    });
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", () => {
      handleModalClose();
    });
  }

  if (projectsContainer && modal && modalImage && projects) {
    projects.forEach((project, index) => {
      project.addEventListener("click", () => {
        modal.setAttribute("data-modal-active", "true");
        document.body.setAttribute("data-modal-active", "true");
        currentImageIndex = index;
        modalImage.src = project.src;
      });
    });
  }
};
