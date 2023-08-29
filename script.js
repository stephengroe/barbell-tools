// Weight module

const weight = {
    initialWeight: 380,
    currentWeight: 0,
    maxWeight: 1500,
    minWeight: 0,

    initializeWeight: function() {
        currentWeight = this.getValidWeight(initialWeight);
        // display.renderDisplay(initialWeight);
        // display.renderVisualizer(initialWeight);
    },

    updateWeight: function(buttonFunction, buttonValue){
        let newWeight = calcFunction[buttonFunction](currentWeight, +buttonValue);
        newWeight = this.getValidWeight(newWeight)
        // display.renderDisplay(newWeight);
        // display.renderVisualizer(newWeight);
    },

    getValidWeight: function(enteredWeight){
        if (enteredWeight > this.maxWeight || enteredWeight < this.minWeight) {
            display.alertWeightError();
            return this.currentWeight;
        } else {
            currentWeight = enteredWeight;
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

/*
const keypad = {
- initializeKeypad()
    - Bind keys to event listeners
    - Trigger updateWeight(keyAction, keyValue)
}

const display = {
- unit:
- renderWeightDisplay(weight)
    - Convert to string
    - Add unit signifier at the end
    - Push to DOM
- renderVisualizerDisplay(DOM elements)
    - clearChildElements(parent)
- clearChildNodes(parent)
    - Delete nodes
}

const visualizer = {

}

const plateVisualizer = {
- activeIncrements:
- calculatePlates(weight)
    - Calculate which increments to use
    - Return nested array with plates and amounts
- 



Visualizer
- Find out which plates to use
- Determine if custom plates needed
- Generate DOM container
- Generate DOM plates
- renderVisualizer();

}




const oneRepMax = {
- formula:

}

const strengthStandards = {
- standards:

}



initializeKeypad();
initializeWeight();



*/







// Display module

const display = {
    _output: 0,

    initDisplay: function(_initValue) {
        this._output = _initValue;
        _renderDisplay(_initValue);
        _bindKeypad();
    },

    _renderDisplay: function(_displayValue) {
        let _calcDisplay = document.querySelector("#calc-display");
        _calcDisplay.textContent = _displayValue;
        const _unit = document.createElement("span");
        _unit.setAttribute("id", "unit");
        _unit.textContent = "lbs.";
        _calcDisplay.appendChild(_unit);
    },

    setDisplay: function(output){
        _output = output;
        this._renderDisplay(_output);
    },

    alertWeightError: function(){
        calcDisplay.classList.add("error");
        setTimeout(() => {
            calcDisplay.classList.remove("error");
        }, "150");

    },
}

// Calculator module
const calculator = {

    _bindKeypad: function() {
        let _calcButton = document.querySelectorAll(".keypad button, .display button");
        _calcButton.forEach(item => {
            item.addEventListener("click", function(){
                updateOutput(this.dataset.buttonFunction, this.dataset.buttonNumber)
            })
        });
    },

    updateOutput: function(_function, _number) {
        console.log(_function, _number);
        _renderDisplay(_validateOutput(_output));
    },

    _validateOutput: function(_number) {
        return output;
    },
};

calculator.initDisplay(380);


// Plate visualizer module
const plateVisualizer = () => {
    let _visualizer = document.querySelector("#visualizer");
    let _increments = [45, 25, 10, 5, 2.5];
    let _barWeight = 45;
    let _maxWeight = 1500;

    calculator.initCalculator(380);

};


/******************
*
*
*
* Old code to refactor
*
*
*******************/


// // Calculator functions
// calcButton.forEach(item => {
//     item.addEventListener("click", function(){
//         const buttonFunction = this.dataset.buttonFunction;
//         const buttonNumber = this.dataset.buttonNumber;
//         let updateWeight = enteredWeight.toString();

//         switch (buttonFunction){
//             case "delete":
//                 updateWeight = updateWeight.slice(0, -1);
//                 break;
//             case "clear":
//                 updateWeight = "0";
//                 break;
//             case "bump":
//                 console.log(buttonNumber);
//                 updateWeight = +updateWeight + +buttonNumber;
//                 updateWeight = updateWeight.toString();
//                 break;
//             case "key":
//                 if (updateWeight === "0") updateWeight = buttonNumber;
//                 else updateWeight += buttonNumber;
//         }

//         updateWeight = +updateWeight;
//         if (updateWeight === "" || updateWeight <= 0) {
//             enteredWeight = 0;
//         } else if (updateWeight >= maxWeight ) {
//             calcDisplay.classList.add("error");
//             setTimeout(() => {
//                 calcDisplay.classList.remove("error");
//               }, "150");
//             return;
//         } else {
//             enteredWeight = updateWeight;
//         }

//         updateCalcDisplay(enteredWeight);
//         updateVisualizer(enteredWeight);
//     });
// });

// function removeChildNodes(element){
//     while (element.firstChild){
//         element.removeChild(element.firstChild);
//     }
// }


/* Plate visualizer functions */

// Set up display at start
// updateCalcDisplay(enteredWeight);
// updateVisualizer(enteredWeight);


// function updateVisualizer(weight) {
//     removeChildNodes(visualizer);
//     if (weight <= barWeight) return;
//     const platesNeeded = calculatePlates(weight);

//     for (let increment of platesNeeded){
//         if (increment[1] === 0) {continue;}

//         // Create container
//         let incrementContainer = document.createElement("div");
//         let plateIconClass = "plate-" + increment[0].toString().replace(".","-");
//         incrementContainer.classList.add("incrementContainer", plateIconClass);

//         // Create text
//         let description = incrementContainer.appendChild(document.createElement("h3"));
//         description.textContent = increment[1] + " \u00D7 " + increment[0];

//         // Create plates container
//         let plateContainer = incrementContainer.appendChild(document.createElement("div"));
//         plateContainer.classList.add("plateContainer");

//         // Create each plate
//         for (i=0; i<increment[1]; i++){
//             plateContainer.appendChild(document.createElement("div"));
//         }

//         visualizer.appendChild(incrementContainer);
//     }
// }

// // Generate nested array with plates necessary
// function calculatePlates(weight){
//         weight = (weight - barWeight) / 2; // Reduce to just one side of bar
//         let platesNeeded = increments.map((increment) => {
//             const plates = Math.floor(weight / increment);
//             weight %= increment;
//             return [increment, plates];
//         });
    
//         // Add custom weight increment as a decimal
//         if (weight > 0) platesNeeded.push(["custom", Math.round(weight * 100) / 100]);
//         return platesNeeded;
// }

// /* One-Rep Max Calculator */

// // Calculate max reps

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

// // Update visualizer

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