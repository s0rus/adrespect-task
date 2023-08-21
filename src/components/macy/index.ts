import Macy from "macy";

new Macy({
  container: "#projects",
  columns: 3,
  waitForImages: false,
  trueOrder: false,
  margin: {
    y: 42,
    x: 43,
  },
  mobileFirst: true,
  breakAt: {
    1200: 3,
    520: 3,
    400: 2,
  },
});
