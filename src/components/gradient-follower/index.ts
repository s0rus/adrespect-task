export const setupGradientFollower = () => {
  const elements = document.querySelectorAll("[data-offer-card]");

  if (elements) {
    elements.forEach((element) => {
      element.addEventListener("mousemove", (event) => {
        const rect = element.getBoundingClientRect();
        const maxX = rect.width;
        const maxY = rect.height;

        const x = (event as MouseEvent).clientX - rect.left;
        const y = (event as MouseEvent).clientY - rect.top;

        const percentX = (x / maxX) * 100;
        const percentY = (y / maxY) * 100;

        const gradient = `radial-gradient(at ${percentX}% ${percentY}%, rgba(27, 91, 49, 0.1), transparent)`;
        (element as HTMLDivElement).style.backgroundImage = gradient;
      });

      element.addEventListener("mouseleave", () => {
        (element as HTMLDivElement).style.backgroundImage = "";
      });
    });
  }
};
