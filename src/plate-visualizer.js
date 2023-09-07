import calculator from "./calculator";
import "./visualizer.css";

const plateVisualizer = {
  currentWeight: 315,
  maxWeight: 1500,
  minWeight: 0,
  unit: "lbs.",
  mode: "visualizer",
  increments: [45, 25, 10, 5, 2.5],
  barWeight: 45,

  generatePageElements() {
    // Generate visualizer display
    const resultDisplay = document.createElement("div");
    resultDisplay.setAttribute("class", "result-display card");
    resultDisplay.setAttribute("data-display", "visualizer");

    // Generate weight display
    const weightDisplay = document.createElement("div");
    weightDisplay.setAttribute("class", "weight-display card");

    const minusButton = document.createElement("button");
    minusButton.setAttribute("class", "accent-button");
    minusButton.dataset.buttonAction = "subtract";
    minusButton.dataset.buttonValue = 5;
    minusButton.textContent = "-5";

    const weightOutput = document.createElement("output");
    weightOutput.dataset.display = "weight";

    const plusButton = document.createElement("button");
    plusButton.setAttribute("class", "accent-button");
    plusButton.dataset.buttonAction = "add";
    plusButton.dataset.buttonValue = 5;
    plusButton.textContent = "+5";

    weightDisplay.append(minusButton, weightOutput, plusButton);

    this.bindButtons(weightDisplay, "button");

    // Generate keypad
    const keypad = calculator.createKeypad();
    this.bindButtons(keypad, "button");

    return [resultDisplay, weightDisplay, keypad];
  },

  bindButtons(parent, selector) {
    const elements = parent.querySelectorAll(selector);

    elements.forEach(element => {
      element.addEventListener(
        "click",
        () => {
          this.updateWeight(calculator.calculateFromButton(
            this.currentWeight,
            element.dataset.buttonAction,
            element.dataset.buttonValue
            )
          );
        }
      );
    });
  },

  initialize() {
    this.currentWeight = this.getValidWeight(this.currentWeight);
    this.renderWeightOutput(this.currentWeight);
    this.renderVisualizer(this.currentWeight);
  },

  updateWeight(newWeight) {
    const validWeight = this.getValidWeight(newWeight);
    this.currentWeight = validWeight;
    this.renderWeightOutput(validWeight);
    this.renderVisualizer(validWeight);
  },

  getValidWeight(enteredWeight) {
    if (enteredWeight > this.maxWeight || enteredWeight < this.minWeight) {
      this.alertWeightError();
      return this.currentWeight;
    }
    this.currentWeight = enteredWeight;
    return enteredWeight;
  },

  alertWeightError() {
    const weightDisplay = document.querySelector("[data-display='weight']");
    weightDisplay.classList.add("error");
    setTimeout(() => {
      weightDisplay.classList.remove("error");
    }, "150");
  },

  renderWeightOutput(displayValue) {
    const weightDisplay = document.querySelector("[data-display='weight']");
    weightDisplay.textContent = displayValue.toString();
    const unit = document.createElement("span");
    unit.textContent = this.unit;
    unit.setAttribute("id", "unit");
    weightDisplay.appendChild(unit);
  },

  renderVisualizer(enteredWeight) {

    // Clear visualizer nodes
    const visualizer = document.querySelector("[data-display='visualizer']");
    this.clearContainerNodes(visualizer);

    // Cycle through array of needed plates
    this.getWeightIncrements(enteredWeight).forEach(increment => {

      // Create container element with class named from increment
      const incrementContainer = document.createElement("div");
      const plateIconClass = `plate-${increment[0].toString().replace(".", "-")}`;
      incrementContainer.classList.add("incrementContainer", plateIconClass);

      // Create description text
      const description = document.createElement("h3");
      description.textContent = `${increment[1]} \u00D7 ${increment[0]}`;
      incrementContainer.appendChild(description);

      // Create plate container
      const plateContainer = document.createElement("div");
      plateContainer.classList.add("plateContainer");
      incrementContainer.appendChild(plateContainer);

      // Create each plate
      for (let i=0; i<increment[1]; i+=1) {
        plateContainer.appendChild(document.createElement("div"));
      }

      visualizer.appendChild(incrementContainer);
    }
    );
  },

  clearContainerNodes(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  },

  getWeightIncrements(enteredWeight) {
    if (enteredWeight <= this.barWeight) return [];

    // Get weight from one side of bar
    let weight = (enteredWeight - this.barWeight) / 2;

    // Create array with plates needed per increment
    let platesNeeded = this.increments.map(increment => {
      const plates = Math.floor(weight / increment);
      weight %= increment;
      return [increment, plates];
    });

    // Add custom plate to cover any remainder under 2.5 lbs.
    if (weight > 0) {
      platesNeeded.push([Math.round(weight * 100) / 100, 1]);
    }

    // Remove empty increments
    platesNeeded = platesNeeded.filter(n => n[1] !== 0);

    return platesNeeded;
  },
};

export default plateVisualizer;