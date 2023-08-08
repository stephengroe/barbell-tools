// Standard divisions of plates and bar weight in pounds
let increments = [45, 25, 10, 5, 2.5];
let barWeight = 45;

// Get DOM elements
let calculateButton = document.querySelector("#calculate-button");
let weightInput = document.querySelector("#weight-input");
let plateVisualizer = document.querySelector("#plate-visualizer");

// Remove weight of bar, reduce to half
calculateButton.addEventListener('click', function (e) {
    let inputWeight = weightInput.value;
    inputWeight -= barWeight;
    inputWeight /= 2;
    displayPlates(calcPlates(inputWeight));
  });

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
    // Round to two decimals to fix floating point issues
    if (remainingWeight !== 0){
        remainingWeight = Math.round(remainingWeight * 100) / 100;
        platesNeeded.push(remainingWeight);
    }

    return platesNeeded;
}

// Create DOM element with divs for each plate
function displayPlates(platesNeeded) {

    removeChildNodes(plateVisualizer);

    for (let key in platesNeeded){
        if (platesNeeded[key] === 0) {continue;}

        let plateContainer = document.createElement("div");
        plateContainer.classList.add("plate-container");
        plateContainer.setAttribute("id", increments[key]);

        // Include custom remainder if not known increment
        plateContainer.textContent = (increments[key])
            ? platesNeeded[key] + " \u00D7 " + increments[key]
            : platesNeeded[key] + "lbs.";

        for (i = 0; i <= platesNeeded[key]; i++) {
            plateContainer.appendChild(document.createElement("div"));
        }

        plateVisualizer.appendChild(plateContainer);
    }
}

function removeChildNodes(element){
    while (element.firstChild){
        element.removeChild(element.firstChild);
    }
}