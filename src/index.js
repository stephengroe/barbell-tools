import "./style.css";
import plateVisualizer from "./plate-visualizer";
import oneRepMax from "./one-rep-max";
import strengthStandards from "./strength-standards";

const tools = {
  plateVisualizer: {
      page: plateVisualizer,
      name: "Plate Visualizer",
      description:
        "See which plates to use for the weight you're going to lift.",
    },
  oneRepMax: {
    page: oneRepMax,
    name: "One-Rep Max Calculator",
    description:
      "Estimate the maximum weight you can lift for a single rep. (Uses the Brzycki formula.)",
  },
  strengthStandards: {
    page: strengthStandards,
    name: "Strength Standards",
    description: "Compare your lifts to standards for your weight class.",
  },
}

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

  generateMenu() {
    const domElements = [];
    const toolList = Object.values(tools);

    toolList.forEach((tool) => {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "card");

      const subhead = document.createElement("h2");
      subhead.textContent = tool.name;
      anchor.appendChild(subhead);

      const description = document.createElement("p");
      description.textContent = tool.description;
      anchor.appendChild(description);

      anchor.addEventListener("click", () => {
        content.buildPage(tool.page.generatePageElements(), tool.name, true);
        tool.page.initialize();
      });

      domElements.push(anchor);
    });
    return domElements;
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
        this.buildPage(this.generateMenu(), "Barbell Tools", false);
      });
      headerDiv.prepend(home);

      const placeholder = document.createElement("div");
      placeholder.setAttribute("class", "placeholder");
      headerDiv.append(placeholder);
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

content.buildPage(content.generateMenu(), "Barbell Tools", false);