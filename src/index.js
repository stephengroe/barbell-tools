import "./style.css";

export function getHeader(pageName){
  const headerDiv = document.createElement("div");
  headerDiv.setAttribute('id', 'header');
  
  const home = document.createElement("a");
  home.textContent = "Home";
  headerDiv.appendChild(home);

  const title = document.createElement("h1");
  title.textContent = pageName;
  headerDiv.appendChild(title);

  const settings = document.createElement("a");
  settings.textContent = "Settings";
  headerDiv.appendChild(settings);
  
  return headerDiv;
}

export function wrapContent(contentArray) {
  const wrapper = document.createElement("div");
  wrapper.setAttribute("id", "wrapper");

  contentArray.forEach(item => {
    wrapper.appendChild(item);
  });
  return wrapper;
}

export function getFooter() {
  const paragraph = document.createElement("p");
  paragraph.setAttribute("id", "copyright");
  paragraph.textContent = `© ${new Date().getFullYear()} Stephen Roe`;
  return paragraph;
}

function generateLinks(list) {
  const domElements = [];
  
  Object.values(list).forEach(item => {
    const anchor = document.createElement("a");
    anchor.setAttribute("class", "card");
    anchor.setAttribute("href", "#");
    
    const subhead = document.createElement("h2");
    subhead.textContent = item.name;
    anchor.appendChild(subhead);
    
    const description = document.createElement("p");
    description.textContent = item.description;
    anchor.appendChild(description);
    
    domElements.push(anchor);
  });
  return domElements;
}

const tools = {
  plateVisualizer: {
    name: "Plate Visualizer",
    description: "See which plates to use for the weight you're going to lift.",
  },
  oneRepMax: {
    name: "One-Rep Max Calculator",
    description: "Estimate the maximum weight you can lift for a single rep. (Uses the Brzycki formula.)",
  },
  strengthStandards: {
    name: "Strength Standards",
    description: "Compare your lifts to standards for your weight class.",
  },
};

(() => {
  const body = document.querySelector("body");
  body.appendChild(getHeader("Barbell Tools"));
  body.appendChild(wrapContent(generateLinks(tools)));
  body.appendChild(getFooter());
})();