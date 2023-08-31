import "./style.css";
import menu from "./menu.js";

const content = {
  createHeader(pageName) {
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
  },

  createWrapper() {
    const wrapper = document.createElement("div");
    wrapper.setAttribute("id", "wrapper");
  
    return wrapper;
  },

  createFooter() {
    const paragraph = document.createElement("p");
    paragraph.setAttribute("id", "copyright");
    paragraph.textContent = `© ${new Date().getFullYear()} Stephen Roe`;
    return paragraph;
  },

  updateWrapper(page) {
    const wrapper = document.querySelector("#wrapper");
  
    // Clear existing content
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
    }
  
    // Append new elements
    page.initialize().forEach(element => {
      wrapper.appendChild(element)
    });
  },
}

const body = document.querySelector("body");
body.appendChild(content.createHeader("Barbell Tools"));
body.appendChild(content.createWrapper());
body.appendChild(content.createFooter());
content.updateWrapper(menu);

export default content;