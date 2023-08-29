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
        plateVisualizer.renderDisplay(weight);
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
// function getMaxReps(weight, reps){
//     let maxReps = [];
//     let oneRepMax = weight * (36 / (37 - reps)); // Brzycki formula
    
//     for (let i = 1; i <= 10; i++){
//         let estimatedWeight;
//         estimatedWeight = Math.floor((37 - i) * oneRepMax / 36);
//         maxReps.push([estimatedWeight, i])
//     }
//     return maxReps;
// }

// function updateRepVizualizer(maxReps) {
//     removeChildNodes(visualizer);

//     // Show 1-rep max
//     let maxHeading = document.createElement("h3");
//     maxHeading.textContent = maxReps[0][1] + " \u00D7 " + maxReps[0][0];

//     // Show lists with other rep maxes
//     let maxList = document.createElement("ul");
    
//     for (let i = 1; i < maxReps.length; i++){
//         let maxListItem = document.createElement("li");
//         maxListItem.textContent = maxReps[i][1] + " \u00D7 " + maxReps[i][0];
//         maxList.appendChild(maxListItem);
//     }

//     visualizer.appendChild(maxHeading)
//     visualizer.appendChild(maxList);
// }
}

const strengthStandards = {

}

// Initialize

weight.initializeWeight(380);
keypad.bindKeypad();