const oneRepMax = {
  initialize() {
    return ["Hey there!"];
  },

  startWeight: 225,
  startReps: 5,

  calculateMaxReps(weight, reps) {
    const maxReps = [];
    const oneRepMax = weight * (36 / (37 - reps)); // Brzycki formula

    for (let i = 1; i <= 10; i++) {
      const estimatedWeight = Math.floor((37 - i) * (oneRepMax / 36));
      maxReps.push([estimatedWeight, i]);
    }
    return maxReps;
  },

  renderDisplay(weight, reps) {
    const maxReps = this.calculateMaxReps(weight, reps);

    // Show 1-rep max
    const maxHeading = document.createElement("h3");
    maxHeading.textContent = `${maxReps[0][1]} \u00D7 ${maxReps[0][0]}`;

    // Show lists with other rep maxes
    const maxList = document.createElement("ul");

    for (let i = 1; i < maxReps.length; i++) {
      const maxListItem = document.createElement("li");
      maxListItem.textContent = `${maxReps[i][1]} \u00D7 ${maxReps[i][0]}`;
      maxList.appendChild(maxListItem);
    }

    visualizer.appendChild(maxHeading);
    visualizer.appendChild(maxList);
  },
};

const reps = {
  currentReps: 0,
  maxReps: 10,
  minReps: 0,

  initializeReps(initialReps) {
    this.currentReps = this.getValidWeight(initialReps);
    display.renderDisplay(initialReps);
    display.renderVisualizer(initialReps);
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

export default oneRepMax;
