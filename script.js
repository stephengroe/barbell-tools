let increments = [45, 25, 10, 5, 2.5];
let barWeight = 45;
let enteredWeight = 380;
let calculateButton = document.querySelector("#calculate-button");
let calcDisplay = document.querySelector("#calc-display");
let plateVisualizer = document.querySelector("#plate-visualizer");
let calcButton = document.querySelectorAll(".keypad button");

// Set up display at start
calcDisplay.textContent = enteredWeight;
calculatePlates(enteredWeight);

// Sense button clicks
calcButton.forEach(item => {
    item.addEventListener("click", function(){
        updateWeight(this.textContent);
        updateVisualizer(enteredWeight);
    });
});

function updateWeight(input) {
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
}

function updateVisualizer(weight) {
    let platesNeeded = calculatePlates(weight);


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

// Generate array with plates necessary
function calculatePlates(weight){

    // Remove weight of bar, reduce to one side of the bar
    let remainingWeight = (weight - barWeight) / 2;

    let platesNeeded = increments.map((increment) => {
        let leftover = remainingWeight;
        remainingWeight %= increment;
        return Math.floor(leftover / increment);
    });

    // Add custom weight increments, rounding required for floating point issues
    if (remainingWeight > 0) platesNeeded.push(
        Math.round(remainingWeight * 100) / 100);

    console.log(platesNeeded);
    return platesNeeded;
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