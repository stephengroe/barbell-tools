// Weight module

const weight = {
    currentWeight: 0,
    maxWeight: 1500,
    minWeight: 0,

    initializeWeight: function(initialWeight) {
        this.currentWeight = this.getValidWeight(initialWeight);
        display.renderDisplay(initialWeight);
        display.renderVisualizer(initialWeight);
    },

    updateWeight: function(buttonFunction, buttonValue) {
        let newWeight = calcFunction[buttonFunction](this.currentWeight, +buttonValue);
        newWeight = this.getValidWeight(newWeight)
        this.currentWeight = newWeight;
        display.renderDisplay(newWeight);
        display.renderVisualizer(newWeight);
    },

    getValidWeight: function(enteredWeight) {
        if (enteredWeight > this.maxWeight || enteredWeight < this.minWeight) {
            display.alertWeightError();
            return this.currentWeight;
        } else {
            this.currentWeight = enteredWeight;
            return enteredWeight;
        }
    },
}

// Key actions
const calcFunction = {
    append: function(weight, value) {
        return Number(weight.toString() + value);
    },

    add: function(weight, value) {
        return weight + value;
    },

    subtract: function(weight, value) {
        return weight - value;
    },

    delete: function(weight, value) {
        const result = weight.toString().slice(0, -value);
        return Number(result);
    },

    clear: function(_, _) {
        return 0;
    },
}

const keypad = {
    bindKeypad: function() {
        let calcButton = document.querySelectorAll("[data-button-function]");
        calcButton.forEach(item => {
            item.addEventListener("click", function(){
                weight.updateWeight(this.dataset.buttonFunction, this.dataset.buttonValue)
            })
        });
    },
}

const display = {
    unit: "lbs.",
    mode: "visualizer",

    renderDisplay: function(displayValue) {
        let weightDisplay = document.querySelector("[data-display='weight']");
        weightDisplay.textContent = displayValue.toString();
        const unit = document.createElement("span")
        unit.textContent = this.unit;
        unit.setAttribute("id", "unit");
        weightDisplay.appendChild(unit);
    },

    alertWeightError: function(){
        let weightDisplay = document.querySelector("[data-display='weight']");
        weightDisplay.classList.add("error");
        setTimeout(() => {
            weightDisplay.classList.remove("error");
        }, "150");
    },

    renderVisualizer: function(weight) {
        let visualizer = document.querySelector("[data-display='visualizer']");
        this.clearVisualizerDisplay(visualizer);
        oneRepMax.renderDisplay(weight);
    },

    clearVisualizerDisplay: function(element) {
        while (element.firstChild){
            element.removeChild(visualizer.firstChild);
        }
    },
}

const plateVisualizer = {
    increments: [45, 25, 10, 5, 2.5],
    barWeight: 45,

    renderDisplay: function(weight) {
        let platesNeeded = this.getWeightIncrements(weight);
        for (let increment of platesNeeded){
            if (increment[1] === 0) {continue;}

            // Create container
            let incrementContainer = document.createElement("div");
            let plateIconClass = "plate-" + increment[0].toString().replace(".","-");
            incrementContainer.classList.add("incrementContainer", plateIconClass);

            // Create text
            let description = incrementContainer.appendChild(document.createElement("h3"));
            description.textContent = increment[1] + " \u00D7 " + increment[0];

            // Create plates container
            let plateContainer = incrementContainer.appendChild(document.createElement("div"));
            plateContainer.classList.add("plateContainer");

            // Create each plate
            for (i=0; i<increment[1]; i++){
                plateContainer.appendChild(document.createElement("div"));
            }

            visualizer.appendChild(incrementContainer);
        }
    },

    getWeightIncrements: function(weight) {
        if (weight <= this.barWeight) return [];
        weight = (weight - this.barWeight) / 2;
        let platesNeeded = this.increments.map(increment => {
            const plates = Math.floor(weight / increment);
            weight %= increment;
            return [increment, plates];
        });

        if (weight > 0) {
            platesNeeded.push(["custom", Math.round(weight * 100) / 100]);
        }

        return platesNeeded;
    },
}

const oneRepMax = {
    startWeight: 225,
    startReps: 5,

    calculateMaxReps: function(weight, reps) {
        let maxReps = [];
        let oneRepMax = weight * (36 / (37 - reps)); // Brzycki formula
        
        for (let i = 1; i <= 10; i++){
            let estimatedWeight;
            estimatedWeight = Math.floor((37 - i) * oneRepMax / 36);
            maxReps.push([estimatedWeight, i])
        }
        return maxReps;
    },

    renderDisplay: function(weight, reps) {
        let maxReps = this.calculateMaxReps(weight, reps);

        // Show 1-rep max
        let maxHeading = document.createElement("h3");
        maxHeading.textContent = maxReps[0][1] + " \u00D7 " + maxReps[0][0];

        // Show lists with other rep maxes
        let maxList = document.createElement("ul");
        
        for (let i = 1; i < maxReps.length; i++){
            let maxListItem = document.createElement("li");
            maxListItem.textContent = maxReps[i][1] + " \u00D7 " + maxReps[i][0];
            maxList.appendChild(maxListItem);
        }

        visualizer.appendChild(maxHeading)
        visualizer.appendChild(maxList);
    }
}

const reps = {
    currentReps: 0,
    maxReps: 10,
    minReps: 0,

    initializeReps: function(initialReps) {
        this.currentReps = this.getValidWeight(initialReps);
        display.renderDisplay(initialReps);
        display.renderVisualizer(initialReps);
    },

    updateWeight: function(buttonFunction, buttonValue){
        let newWeight = calcFunction[buttonFunction](this.currentWeight, +buttonValue);
        newWeight = this.getValidWeight(newWeight)
        this.currentWeight = newWeight;
        display.renderDisplay(newWeight);
        display.renderVisualizer(newWeight);
    },

    getValidWeight: function(enteredWeight){
        if (enteredWeight > this.maxWeight || enteredWeight < this.minWeight) {
            display.alertWeightError();
            return this.currentWeight;
        } else {
            this.currentWeight = enteredWeight;
            return enteredWeight;
        }
    },
}

const strengthStandards = {


}

// Initialize

weight.initializeWeight(380);
reps.initializeReps(5);
keypad.bindKeypad();




const standards = {
    men: {
        114: {
            'press': [53, 72, 90, 107, 129],
            'bench press': [84, 107, 130, 179, 222],
            'squat': [78, 144, 174, 240, 320],
            'deadlift': [97, 179, 204, 299, 387],
        },
        123: {
            'press': [57, 78, 98, 116, 141],
            'bench press': [91, 116, 142, 194, 242],
            'squat': [84, 155, 190, 259, 346],
            'deadlift': [105, 194, 222, 320, 414],
        },
        132: {
            'press': [61, 84, 105, 125, 151],
            'bench press': [98, 125, 153, 208, 260],
            'squat': [91, 168, 205, 278, 369],
            'deadlift': [113, 209, 239, 342, 438],
        },
        148: {
            'press': [69, 94, 119, 140, 169],
            'bench press': [109, 140, 172, 234, 291],
            'squat': [101, 188, 230, 313, 410],
            'deadlift': [126, 234, 269, 380, 482],
        },
        165: {
            'press': [75, 102, 129, 153, 186],
            'bench press': [119, 152, 187, 255, 319],
            'squat': [110, 204, 250, 342, 445],
            'deadlift': [137, 254, 293, 411, 518],
        },
        181: {
            'press': [81, 110, 138, 164, 218],
            'bench press': [128, 164, 201, 275, 343],
            'squat': [119, 220, 269, 367, 479],
            'deadlift': [148, 274, 315, 438, 548],
        },
        198: {
            'press': [85, 116, 146, 173, 234],
            'bench press': [135, 173, 213, 289, 362],
            'squat': [125, 232, 285, 387, 504],
            'deadlift': [156, 289, 333, 457, 567],
        },
        220: {
            'press': [89, 122, 155, 183, 255],
            'bench press': [142, 183, 225, 306, 381],
            'squat': [132, 244, 301, 409, 532],
            'deadlift': [164, 305, 351, 479, 586],
        },
        242: {
            'press': [93, 127, 159, 189, 264],
            'bench press': [149, 190, 232, 316, 395],
            'squat': [137, 255, 311, 423, 551],
            'deadlift': [172, 318, 363, 490, 596],
        },
        275: {
            'press': [96, 131, 164, 194, 272],
            'bench press': [153, 196, 239, 325, 407],
            'squat': [141, 261, 319, 435, 567],
            'deadlift': [176, 326, 373, 499, 602],
        },
        319: {
            'press': [98, 133, 167, 199, 278],
            'bench press': [156, 199, 244, 333, 416],
            'squat': [144, 267, 326, 445, 580],
            'deadlift': [180, 333, 381, 506, 608],
        },
        320: {
            'press': [100, 136, 171, 203, 284],
            'bench press': [159, 204, 248, 340, 425],
            'squat': [147, 272, 332, 454, 593],
            'deadlift': [183, 340, 388, 512, 617],
        },
    },
    women: {

    },
}