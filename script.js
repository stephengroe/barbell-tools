// Standard divisions of plates and bar weight in pounds
let increments = [45, 25, 10, 5, 2.5];
let barWeight = 45;

// Get DOM elements
let calculateButton = document.querySelector("#calculate-button");
let weightInput = document.querySelector("#weight-input");
let plateVisualizer = document.querySelector("#plate-visualizer");

// Calculate at start and in realtime
calculatePlates();
weightInput.addEventListener("input", calculatePlates);

function calculatePlates(){
    let inputWeight = Math.abs(weightInput.value);
    
    if (inputWeight < 45){
        alert("Weight is too low!");
    }

    else if (inputWeight === 45){
        alert("Weight is equal to the bar!");
    }

    else if (inputWeight > 1500){
        alert("Weight is too high!");
    }

    else {
        // Remove weight of bar, reduce to half
        inputWeight -= barWeight;
        inputWeight /= 2;

        updateVisualizer(calcPlates(inputWeight));
    }
}

// Generate array with plates necessary
function calcPlates(weight){
    let platesNeeded = Array(increments.length).fill(0);
    let remainingWeight = weight;

    for (let key in increments) {
        let activePlate = increments[key];

        if (remainingWeight / activePlate < 1) {continue;}

        platesNeeded[key] = Math.floor(remainingWeight / activePlate);
        remainingWeight %= activePlate;
    }

    // Include additional weight not included in known increments
    // Rounding required for floating point issues
    if (remainingWeight !== 0){
        remainingWeight = Math.round(remainingWeight * 100) / 100;
        platesNeeded.push(remainingWeight);
    }

    return platesNeeded;
}

// Create DOM element with divs for each plate
function updateVisualizer(platesNeeded) {

    removeChildNodes(plateVisualizer);

    for (let key in platesNeeded){
        if (platesNeeded[key] === 0) {continue;}

        let plateContainer = document.createElement("div");
        plateContainer.classList.add("plate-container");
        plateContainer.setAttribute("class", "plate-" + increments[key]);
        plateVisualizer.appendChild(
            generatePlateIcons(increments[key], platesNeeded[key], plateContainer));
    }
}

function generatePlateIcons(plateIncrement, numberOfPlates, plateContainer){

    let description = plateContainer.appendChild(document.createElement("h3"));
    let plateGroup = plateContainer.appendChild(document.createElement("div"));
    plateGroup.classList.add("plateGroup");
    let plateIcon = plateGroup.appendChild(document.createElement("div"));

    // For custom increments
    if (!plateIncrement){
        description.textContent = numberOfPlates + "lbs.";
        return plateContainer;
    }

    description.textContent = numberOfPlates + " \u00D7 " + plateIncrement;
    for (i = 1; i <= numberOfPlates; i++) {
        plateIcon.cloneNode();
    }

    return plateContainer;
}

function removeChildNodes(element){
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
}