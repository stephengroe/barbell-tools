import createKeypad from "./calculator";

const plateVisualizer = {
  initialize() {
    const div = document.createElement("div");
    div.textContent = "Visualizer!";
    div.setAttribute("class", "card");
    return [div];
  },
};

// Weight module

const weight = {
  currentWeight: 0,
  maxWeight: 1500,
  minWeight: 0,

  initializeWeight(initialWeight) {
    this.currentWeight = this.getValidWeight(initialWeight);
    display.renderDisplay(initialWeight);
    display.renderVisualizer(initialWeight);
  },

  updateWeight(buttonFunction, buttonValue) {
    let newWeight = calcFunction[buttonFunction](
      this.currentWeight,
      +buttonValue,
    );
    newWeight = this.getValidWeight(newWeight);
    this.currentWeight = newWeight;
    display.renderDisplay(newWeight);
    display.renderVisualizer(newWeight);
  },

  getValidWeight(enteredWeight) {
    if (enteredWeight > this.maxWeight || enteredWeight < this.minWeight) {
      display.alertWeightError();
      return this.currentWeight;
    }
    this.currentWeight = enteredWeight;
    return enteredWeight;
  },
};

const display = {
  unit: "lbs.",
  mode: "visualizer",

  renderDisplay(displayValue) {
    const weightDisplay = document.querySelector("[data-display='weight']");
    weightDisplay.textContent = displayValue.toString();
    const unit = document.createElement("span");
    unit.textContent = this.unit;
    unit.setAttribute("id", "unit");
    weightDisplay.appendChild(unit);
  },

  alertWeightError() {
    const weightDisplay = document.querySelector("[data-display='weight']");
    weightDisplay.classList.add("error");
    setTimeout(() => {
      weightDisplay.classList.remove("error");
    }, "150");
  },

  renderVisualizer(weight) {
    const visualizer = document.querySelector("[data-display='visualizer']");
    this.clearVisualizerDisplay(visualizer);
    oneRepMax.renderDisplay(weight);
  },
};

const oldPlateVisualizer = {
  increments: [45, 25, 10, 5, 2.5],
  barWeight: 45,

  renderDisplay(weight) {
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

export default plateVisualizer;
