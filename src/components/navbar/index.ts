export const setupSearchButton = () => {
  const searchButton = document.getElementById("search-button");

  if (searchButton) {
    searchButton.addEventListener("click", () => {
      const searchElements = document.querySelectorAll("[data-search-active]");

      searchElements.forEach((element) => {
        element.setAttribute(
          "data-search-active",
          element.getAttribute("data-search-active") === "true"
            ? "false"
            : "true",
        );
      });
    });
  }
};

export const setupOfferCard = () => {
  const offerButton = document.getElementById("offer-button");

  if (offerButton) {
    const offerElements = document.querySelectorAll("[data-offer-active]");
    offerButton.addEventListener("mouseenter", () => {
      offerElements.forEach((element) => {
        element.setAttribute("data-offer-active", "true");
      });
    });

    offerButton.addEventListener("mouseleave", () => {
      offerElements.forEach((element) => {
        element.setAttribute("data-offer-active", "false");
      });
    });

    offerButton.addEventListener("touchstart", () => {
      offerElements.forEach((element) => {
        element.setAttribute("data-offer-active", "true");
      });
    });

    offerButton.addEventListener("touchend", () => {
      offerElements.forEach((element) => {
        element.setAttribute("data-offer-active", "false");
      });
    });
  }
};
