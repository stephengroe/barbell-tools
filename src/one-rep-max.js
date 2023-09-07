import calculator from "./calculator";
import "./one-rep-max.css";

const oneRepMax = {
  currentWeight: 225,
  weightRange: [0, 1500],

  currentReps: 5,
  repRange: [1, 10],

  unit: 'lbs.',

  generatePageElements() {
    // Generate visualizer display
    const resultDisplay = document.createElement("div");
    resultDisplay.setAttribute("class", "result-display card one-rep-max");
    resultDisplay.setAttribute("data-display", "visualizer");

    // Generate weight display
    const weightDisplay = document.createElement("div");
    weightDisplay.setAttribute("class", "weight-display card");

    const weightOutput = document.createElement("output");
    weightOutput.dataset.display = "weight";

    const minusButton = document.createElement("button");
    minusButton.setAttribute("class", "accent-button");
    minusButton.dataset.buttonAction = "subtract";
    minusButton.dataset.buttonValue = 1;
    minusButton.textContent = "-";

    const repsOutput = document.createElement("output");
    repsOutput.dataset.display = "reps";

    const plusButton = document.createElement("button");
    plusButton.setAttribute("class", "accent-button");
    plusButton.dataset.buttonAction = "add";
    plusButton.dataset.buttonValue = 1;
    plusButton.textContent = "+";

    weightDisplay.append(weightOutput, minusButton, repsOutput, plusButton);

    this.bindButtons(weightDisplay, "button", "Reps");

    // Generate keypad
    const keypad = calculator.createKeypad();
    this.bindButtons(keypad, "button", "Weight");

    return [resultDisplay, weightDisplay, keypad];
  },

  bindButtons(parent, selector, type) {
    const elements = parent.querySelectorAll(selector);

    elements.forEach(element => {
      element.addEventListener(
        "click", 
        () => {
          this[`update${type}`](
            calculator.calculateFromButton(
              this[`current${type}`],
              element.dataset.buttonAction,
              element.dataset.buttonValue
            ),
          );
        }
      );
    });
  },

  initialize() {
    this.renderWeightOutput(this.currentWeight);
    this.renderRepsOutput(this.currentReps);
    this.renderVisualizer(this.currentWeight, this.currentReps);
  },

  getValidNumber(entered, fallback, range, outputElement) {
    if (entered > range[1] || entered < range[0]) {
      this.alertWeightError(outputElement);
      return fallback;
    }
    return entered;
  },
  
  alertWeightError(element) {
    element.classList.add("error");
    setTimeout(() => {
      element.classList.remove("error");
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

  renderRepsOutput(displayValue) {
    const repsDisplay = document.querySelector("[data-display='reps']");
    repsDisplay.textContent = displayValue.toString();
    const unit = document.createElement("span");
    unit.textContent = "reps";
    unit.setAttribute("id", "unit");
    repsDisplay.appendChild(unit);
  },

  calculateMaxReps(weight, reps) {
    const maxReps = [];
    const oneRepMaximum = weight * (36 / (37 - reps)); // Brzycki formula

    for (let i = 1; i <= 10; i+=1) {
      const estimatedWeight = Math.floor((37 - i) * (oneRepMaximum / 36));
      maxReps.push([estimatedWeight, i]);
    }
    return maxReps;
  },

  renderVisualizer(weight, reps) {

    // Clear visualizer nodes
    const visualizer = document.querySelector("[data-display='visualizer']");
    this.clearContainerNodes(visualizer);

    // Show 1-rep max
    const maxReps = this.calculateMaxReps(weight, reps);
    const maxHeading = document.createElement("h3");
    maxHeading.textContent = `${maxReps[0][1]} \u00D7 ${maxReps[0][0]}`;

    // Show lists with other rep maxes
    const maxList = document.createElement("ul");

    for (let i = 1; i < maxReps.length; i+=1) {
      const maxListItem = document.createElement("li");
      maxListItem.textContent = `${maxReps[i][1]} \u00D7 ${maxReps[i][0]}`;
      maxList.appendChild(maxListItem);
    }

    visualizer.appendChild(maxHeading);
    visualizer.appendChild(maxList);
  },

  clearContainerNodes(element) {
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }
  },

  updateReps(initialReps) {
    const validReps = this.getValidNumber(
      initialReps,
      this.currentReps,
      this.repRange,
      document.querySelector("[data-display='reps']")
      );
      this.currentReps = validReps;
    this.renderRepsOutput(validReps);
    this.renderVisualizer(this.currentWeight, validReps);
  },

  updateWeight(newWeight) {
    const validWeight = this.getValidNumber(
      newWeight,
      this.currentWeight,
      this.weightRange,
      document.querySelector("[data-display='weight']")
      );
      this.currentWeight = validWeight;
    this.renderWeightOutput(validWeight);
    this.renderVisualizer(validWeight, this.currentReps);
  },
};

export default oneRepMax;