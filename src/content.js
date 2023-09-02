import menu from "./menu";
import plateVisualizer from "./plate-visualizer";
import oneRepMax from "./one-rep-max";
import strengthStandards from "./strength-standards";

const content = {
  buildPage(pageContents, pageTitle, hasMenuNav) {
    const body = document.querySelector("body");

    // Clear existing content
    while (body.firstChild) {
      body.removeChild(body.firstChild);
    }

    // Add page contents
    body.append(this.createHeader(pageTitle, hasMenuNav));
    body.append(this.createWrapper(pageContents));
    body.append(this.createFooter());
  },

  createHeader(pageTitle, hasMenuNav) {
    const headerDiv = document.createElement("div");
    headerDiv.setAttribute("id", "header");

    const title = document.createElement("h1");
    title.textContent = pageTitle;
    headerDiv.append(title);

    if (hasMenuNav) {
      const home = document.createElement("a");
      home.textContent = "Home";
      home.addEventListener("click", () => {
        this.buildPage(menu.generateMenu(), "Barbell Tools", false);
      });
      headerDiv.prepend(home);

      const settings = document.createElement("a");
      settings.textContent = "Settings";
      headerDiv.append(settings);
    }

    return headerDiv;
  },

  createWrapper(pageContents) {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("id", "wrapper");

    // Append new elements
    pageContents.forEach((element) => {
      wrapper.append(element);
    });

    return wrapper;
  },

  createFooter() {
    const paragraph = document.createElement("p");
    paragraph.setAttribute("id", "copyright");
    paragraph.textContent = `© ${new Date().getFullYear()} Stephen Roe`;
    return paragraph;
  },
};

export default content;