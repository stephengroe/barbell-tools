let enteredWeight = 380;
let calcDisplay = document.querySelector("#calc-display");
let visualizer = document.querySelector("#visualizer");
let calcButton = document.querySelectorAll(".keypad button, .display button");

// Calculator functions
calcButton.forEach(item => {
    item.addEventListener("click", function(){
        const buttonFunction = this.dataset.buttonFunction;
        const buttonNumber = this.dataset.buttonNumber;
        let updateWeight = enteredWeight.toString();

        switch (buttonFunction){
            case "delete":
                updateWeight = updateWeight.slice(0, -1);
                break;
            case "clear":
                updateWeight = "0";
                break;
            case "bump":
                console.log(buttonNumber);
                updateWeight = +updateWeight + +buttonNumber;
                updateWeight = updateWeight.toString();
                break;
            case "key":
                if (updateWeight === "0") updateWeight = buttonNumber;
                else updateWeight += buttonNumber;
        }

        updateWeight = +updateWeight;
        if (updateWeight === "" || updateWeight <= 0) {
            enteredWeight = 0;
        } else if (updateWeight >= maxWeight ) {
            calcDisplay.classList.add("error");
            setTimeout(() => {
                calcDisplay.classList.remove("error");
              }, "150");
            return;
        } else {
            enteredWeight = updateWeight;
        }

        updateCalcDisplay(enteredWeight);
        updateVisualizer(enteredWeight);
    });
});


function updateCalcDisplay(weight){
    let unitMarker = document.createElement("span");
    unitMarker.setAttribute("id", "unit");
    unitMarker.textContent = "lbs.";

    calcDisplay.textContent = weight;
    calcDisplay.appendChild(unitMarker);
}










/* Plate visualizer functions */


let increments = [45, 25, 10, 5, 2.5];
let barWeight = 45;
let maxWeight = 1500;

// Set up display at start
updateCalcDisplay(enteredWeight);
updateVisualizer(enteredWeight);


function updateVisualizer(weight) {
    removeChildNodes(visualizer);
    if (weight <= barWeight) return;
    const platesNeeded = calculatePlates(weight);

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
}

// Generate nested array with plates necessary
function calculatePlates(weight){
        weight = (weight - barWeight) / 2; // Reduce to just one side of bar
        let platesNeeded = increments.map((increment) => {
            const plates = Math.floor(weight / increment);
            weight %= increment;
            return [increment, plates];
        });
    
        // Add custom weight increment as a decimal
        if (weight > 0) platesNeeded.push(["custom", Math.round(weight * 100) / 100]);
        return platesNeeded;
}

function removeChildNodes(element){
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
}




/* One-Rep Max Calculator */

function getMaxReps(weight, reps){
    let maxReps = [];
    let oneRepMax = weight * (36 / (37 - reps)); // Brzycki formula
    
    for (let i = 1; i <= 10; i++){
        let estimatedWeight;
        estimatedWeight = Math.round((37 - i) * oneRepMax / 36 * 10) / 10;
        maxReps.push([estimatedWeight, i])
    }
    return maxReps;
}