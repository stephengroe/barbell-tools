import calculator from "./calculator";
import "./strength-standards.css";

const strengthStandards = {
  currentGender: "male",
  currentWeight: 165,
  weightRange: [0, 900],
  unit: "lbs.",

  standards: {
    male: {
      114: {
        press: [53, 72, 90, 107, 129],
        bench: [84, 107, 130, 179, 222],
        squat: [78, 144, 174, 240, 320],
        deadlift: [97, 179, 204, 299, 387],
      },
      123: {
        press: [57, 78, 98, 116, 141],
        bench: [91, 116, 142, 194, 242],
        squat: [84, 155, 190, 259, 346],
        deadlift: [105, 194, 222, 320, 414],
      },
      132: {
        press: [61, 84, 105, 125, 151],
        bench: [98, 125, 153, 208, 260],
        squat: [91, 168, 205, 278, 369],
        deadlift: [113, 209, 239, 342, 438],
      },
      148: {
        press: [69, 94, 119, 140, 169],
        bench: [109, 140, 172, 234, 291],
        squat: [101, 188, 230, 313, 410],
        deadlift: [126, 234, 269, 380, 482],
      },
      165: {
        press: [75, 102, 129, 153, 186],
        bench: [119, 152, 187, 255, 319],
        squat: [110, 204, 250, 342, 445],
        deadlift: [137, 254, 293, 411, 518],
      },
      181: {
        press: [81, 110, 138, 164, 218],
        bench: [128, 164, 201, 275, 343],
        squat: [119, 220, 269, 367, 479],
        deadlift: [148, 274, 315, 438, 548],
      },
      198: {
        press: [85, 116, 146, 173, 234],
        bench: [135, 173, 213, 289, 362],
        squat: [125, 232, 285, 387, 504],
        deadlift: [156, 289, 333, 457, 567],
      },
      220: {
        press: [89, 122, 155, 183, 255],
        bench: [142, 183, 225, 306, 381],
        squat: [132, 244, 301, 409, 532],
        deadlift: [164, 305, 351, 479, 586],
      },
      242: {
        press: [93, 127, 159, 189, 264],
        bench: [149, 190, 232, 316, 395],
        squat: [137, 255, 311, 423, 551],
        deadlift: [172, 318, 363, 490, 596],
      },
      275: {
        press: [96, 131, 164, 194, 272],
        bench: [153, 196, 239, 325, 407],
        squat: [141, 261, 319, 435, 567],
        deadlift: [176, 326, 373, 499, 602],
      },
      319: {
        press: [98, 133, 167, 199, 278],
        bench: [156, 199, 244, 333, 416],
        squat: [144, 267, 326, 445, 580],
        deadlift: [180, 333, 381, 506, 608],
      },
      320: {
        press: [100, 136, 171, 203, 284],
        bench: [159, 204, 248, 340, 425],
        squat: [147, 272, 332, 454, 593],
        deadlift: [183, 340, 388, 512, 617],
      },
    },
    female: {
      97: {
        press: [31, 42, 50, 66, 85],
        bench: [49, 63, 73, 94, 116],
        squat: [46, 84, 98, 129, 163],
        deadlift: [57, 105, 122, 175, 232],
      },
      105: {
        press: [33, 46, 53, 71, 91],
        bench: [53, 68, 79, 102, 124],
        squat: [49, 91, 106, 140, 174],
        deadlift: [61, 114, 132, 189, 242],
      },
      114: {
        press: [36, 49, 58, 76, 97],
        bench: [57, 73, 85, 109, 133],
        squat: [53, 98, 114, 150, 187],
        deadlift: [66, 122, 142, 200, 253],
      },
      123: {
        press: [38, 52, 61, 81, 104],
        bench: [60, 77, 90, 116, 142],
        squat: [56, 103, 121, 160, 199],
        deadlift: [70, 129, 151, 211, 263],
      },
      132: {
        press: [40, 55, 65, 85, 110],
        bench: [64, 82, 95, 122, 150],
        squat: [59, 110, 127, 168, 211],
        deadlift: [74, 137, 159, 220, 273],
      },
      148: {
        press: [44, 60, 72, 94, 121],
        bench: [70, 90, 105, 135, 165],
        squat: [65, 121, 141, 185, 232],
        deadlift: [81, 151, 176, 241, 295],
      },
      165: {
        press: [48, 65, 77, 102, 134],
        bench: [76, 97, 113, 146, 183],
        squat: [70, 130, 151, 200, 256],
        deadlift: [88, 162, 189, 258, 319],
      },
      181: {
        press: [51, 70, 83, 110, 140],
        bench: [81, 104, 122, 158, 192],
        squat: [75, 139, 164, 215, 268],
        deadlift: [94, 174, 204, 273, 329],
      },
      198: {
        press: [55, 75, 88, 117, 151],
        bench: [88, 112, 130, 167, 205],
        squat: [81, 150, 174, 229, 288],
        deadlift: [101, 187, 217, 284, 349],
      },
      199: {
        press: [58, 79, 93, 123, 159],
        bench: [92, 118, 137, 177, 217],
        squat: [85, 158, 184, 242, 303],
        deadlift: [107, 197, 229, 297, 364],
      },
    },
  },

  generatePageElements() {
    // Generate visualizer display
    const resultDisplay = document.createElement("div");
    resultDisplay.setAttribute("class", "result-display card strength-standards");
    resultDisplay.setAttribute("data-display", "visualizer");

    // Generate weight display
    const weightDisplay = document.createElement("div");
    weightDisplay.setAttribute("class", "weight-display card");

    const weightOutput = document.createElement("output");
    weightOutput.dataset.display = "weight";

    const maleButton = document.createElement("button");
    maleButton.setAttribute("class", "accent-button");
    maleButton.dataset.buttonValue = "male";
    maleButton.textContent = "M";

    const femaleButton = document.createElement("button");
    femaleButton.setAttribute("class", "accent-button");
    femaleButton.dataset.buttonValue = "female";
    femaleButton.textContent = "F";

    weightDisplay.append(weightOutput, maleButton, femaleButton);

    
    // Bind buttons to toggle gender
    maleButton.addEventListener("click", () => {this.updateGender("male")});
    femaleButton.addEventListener("click", () => {this.updateGender("female")
    });

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
    this.updateWeight(this.currentWeight);
    this.updateGender(this.currentGender);
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

  updateWeight(newWeight) {
    console.log(newWeight);
    const validWeight = this.getValidNumber(
      newWeight,
      this.currentWeight,
      this.weightRange,
      document.querySelector("[data-display='weight']")
      );
      this.currentWeight = validWeight;
    this.renderWeightOutput(validWeight);
    this.renderVisualizer(validWeight, this.currentGender);
  },

  updateGender(newGender) {
    // Remove active class
    if (document.querySelector(".accent-button.active")) {
      document.querySelector(".accent-button.active").classList.remove("active");
    }

    // Add active class to selected gender
    const currentButton = document.querySelector(`[data-button-value='${newGender}']`);
    currentButton.classList.add("active");

    this.currentGender = newGender;
    this.renderVisualizer(this.currentWeight, newGender);
  },

  getWeightClass(weight, gender) {
    // Get weight class closest to but no lower than bodyweight
    let weightClass = Object.keys(this.standards[gender]);
    weightClass = weightClass.reduce((acc, current) => {
      if (acc >= weight) {
        return acc;
      }
      return current;
    });
    
    // Return object of standards
    return weightClass;
  },
  
  renderVisualizer(weight, gender) {
    // Clear visualizer
    const visualizer = document.querySelector("[data-display='visualizer']");
    while (visualizer.firstChild) {
      visualizer.removeChild(visualizer.firstChild);
    }
    
    // Add heading
    const weightClass = this.getWeightClass(weight, gender);
    const heading = document.createElement("h2");
    heading.textContent = `Standards for adult ${gender}`;
    const subheading = document.createElement("h3");
    subheading.textContent = `(Weight class: ${weightClass}${this.unit})`;
    visualizer.append(heading, subheading);

    // Create table
    const table = document.createElement("table");
    const standards = Object.entries(this.standards[gender][weightClass]);

    // Create header rows with levels
    const levels = ["", "I.", "II.", "III.", "IV.", "V."];
    const headerRow = document.createElement("tr");
    levels.forEach(level => {
      const levelCell = document.createElement("th");
      levelCell.textContent = level;
      headerRow.append(levelCell);
    });
    table.append(headerRow);
    
    // Create row for each exercise
    standards.forEach(exercise => {
      const [title, liftWeights] = exercise;
      const weightRow = document.createElement("tr");
      const titleCell = document.createElement("td");
      titleCell.textContent = title.charAt(0).toUpperCase() + title.slice(1);
      weightRow.append(titleCell);

      // Create cell for each weight
      liftWeights.forEach(liftWeight => {
        const weightCell = document.createElement("td");
        weightCell.textContent = liftWeight;
        weightRow.append(weightCell);
      });
      table.append(weightRow);
    });

    // Add it all together and return it
    visualizer.append(table);
  },
};

export default strengthStandards;
