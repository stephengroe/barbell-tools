// Standard divisions of plates and bar weight in pounds
let increments = [45, 25, 10, 5, 2.5];
let barWeight = 45;
let enteredWeight = 315;

// Get DOM elements
let calculateButton = document.querySelector("#calculate-button");
let calcDisplay = document.querySelector("#calc-display");
let plateVisualizer = document.querySelector("#plate-visualizer");
let calcButton = document.querySelectorAll(".keypad button");

// Calculator functions
calcButton.forEach(item => {
    item.addEventListener("click", function(){
        updateCalcDisplay(this.textContent);
    });
});

function updateCalcDisplay(input) {
    console.log(input);
    switch (input){
        case "⌫":
            let numstring = enteredWeight.toString().split("");
            numstring.pop();
            enteredWeight = +numstring.join("");
            break;
        case "Clear":
            enteredWeight = 0;
            break;
        default:
            if (enteredWeight === 0) enteredWeight = input;
            else enteredWeight += input;
    }
    calcDisplay.textContent = enteredWeight;
    calculatePlates(enteredWeight);
}

// Calculate at start
calcDisplay.textContent = enteredWeight;
calculatePlates(enteredWeight);

function calculatePlates(inputWeight){
    
    if (inputWeight <= 45){
        //alert("Weight is too low!");
    }

    else if (inputWeight === 45){
        //alert("Weight is equal to the bar!");
    }

    else if (inputWeight > 1500){
        //alert("Weight is too high!");
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

function updateVisualizer(platesNeeded) {
    removeChildNodes(plateVisualizer);

    for (let key in platesNeeded){
        if (platesNeeded[key] === 0) {continue;}

        let incrementContainer = document.createElement("div");

        // Add kebab-style class for increment, otherwise "custom"
        let plateIconClass = "plate-";
        if (!increments[key]) plateIconClass += "custom";
        else plateIconClass += increments[key].toString().replace(".","-");
        incrementContainer.classList.add("incrementContainer", plateIconClass);
        plateVisualizer.appendChild(
            generatePlateIcons(increments[key], platesNeeded[key], incrementContainer));
    }
}

function generatePlateIcons(plateIncrement, numberOfPlates, incrementContainer){
    let description = incrementContainer.appendChild(document.createElement("h3"));
    let plateContainer = incrementContainer.appendChild(document.createElement("div"));
    plateContainer.classList.add("plateContainer");
    let plateIcon = document.createElement("div");
    plateIcon.classList.add("plateIcon");

    // For custom increments
    if (!plateIncrement){
        description.textContent = numberOfPlates + "lbs.";
        plateContainer.appendChild(plateIcon);
        return incrementContainer;
    }

    description.textContent = numberOfPlates + " \u00D7 " + plateIncrement;
    for (i = 1; i <= numberOfPlates; i++) {
        plateContainer.appendChild(plateIcon.cloneNode());
    }
    
    return incrementContainer;
}

function removeChildNodes(element){
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
}