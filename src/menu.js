import content from "./content";

const menu = {
  generateMenu() {
    const domElements = [];

    this.tools.forEach((item) => {
      const anchor = document.createElement("a");
      anchor.setAttribute("class", "card");

      const subhead = document.createElement("h2");
      subhead.textContent = item.name;
      anchor.appendChild(subhead);

      const description = document.createElement("p");
      description.textContent = item.description;
      anchor.appendChild(description);

      anchor.addEventListener("click", () => {
        content.buildPage(item.page.initialize(), item.name, true);
      });

      domElements.push(anchor);
    });
    return domElements;
  },

  tools: [
    {
      page: "plateVisualizer",
      name: "Plate Visualizer",
      description:
        "See which plates to use for the weight you're going to lift.",
    },
    {
      page: "oneRepMax",
      name: "One-Rep Max Calculator",
      description:
        "Estimate the maximum weight you can lift for a single rep. (Uses the Brzycki formula.)",
    },
    {
      page: "strengthStandards",
      name: "Strength Standards",
      description: "Compare your lifts to standards for your weight class.",
    },
  ],
};

export default menu;