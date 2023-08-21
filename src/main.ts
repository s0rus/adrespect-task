import { setupProjectGallery } from "./components/gallery";
import { setupGradientFollower } from "./components/gradient-follower";
import "./components/macy";
import { setupOfferCard, setupSearchButton } from "./components/navbar";
import { setupProjectsDrawer } from "./components/projects";
import { setupScrollers } from "./components/scrollers";
import { setupSlider } from "./components/slider";
import "./styles/globals.css";

window.addEventListener("DOMContentLoaded", () => {
  setupSearchButton();
  setupOfferCard();
  setupSlider();
  setupProjectsDrawer();
  setupProjectGallery();
  setupScrollers();
  setupGradientFollower();
});
