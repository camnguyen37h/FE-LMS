import AOS from "aos";

import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({
    disable: window.innerWidth < 768,
  }); // eslint-disable-line new-cap
};
