import calculator from "./calculator";
import "./visualizer.css";

const plateVisualizer = {
  currentWeight: 315,
  maxWeight: 1500,
  minWeight: 0,
  unit: "lbs.",
  mode: "visualizer",

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
    // this.renderVisualizer(this.currentWeight);
  },

  updateWeight(newWeight) {
    const validWeight = this.getValidWeight(newWeight);
    this.currentWeight = validWeight;
    this.renderWeightOutput(validWeight);
    // this.renderVisualizer(validWeight);
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
};

/*


  renderVisualizer(weight) {
    const visualizer = document.querySelector("[data-display='visualizer']");
    this.clearVisualizerDisplay(visualizer);
    oneRepMax.renderWeightOutput(weight);
  },

};

const oldPlateVisualizer = {
  increments: [45, 25, 10, 5, 2.5],
  barWeight: 45,

  renderWeightOutput(weight) {
    const platesNeeded = this.getWeightIncrements(weight);
    for (const increment of platesNeeded) {
      if (increment[1] === 0) {
        continue;
      }

      // Create container
      const incrementContainer = document.createElement("div");
      const plateIconClass = `plate-${increment[0]
        .toString()
        .replace(".", "-")}`;
      incrementContainer.classList.add("incrementContainer", plateIconClass);

      // Create text
      const description = incrementContainer.appendChild(
        document.createElement("h3"),
      );
      description.textContent = `${increment[1]} \u00D7 ${increment[0]}`;

      // Create plates container
      const plateContainer = incrementContainer.appendChild(
        document.createElement("div"),
      );
      plateContainer.classList.add("plateContainer");

      // Create each plate
      for (i = 0; i < increment[1]; i++) {
        plateContainer.appendChild(document.createElement("div"));
      }

      visualizer.appendChild(incrementContainer);
    }
  },

  getWeightIncrements(weight) {
    if (weight <= this.barWeight) return [];
    weight = (weight - this.barWeight) / 2;
    const platesNeeded = this.increments.map((increment) => {
      const plates = Math.floor(weight / increment);
      weight %= increment;
      return [increment, plates];
    });

    if (weight > 0) {
      platesNeeded.push(["custom", Math.round(weight * 100) / 100]);
    }

    return platesNeeded;
  },
};
*/

export default plateVisualizer;
