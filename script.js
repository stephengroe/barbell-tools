// Standard divisions of plates and bar weight in pounds
let plateWeights = [45, 25, 10, 5, 2.5];
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
    let platesNeeded = Array(plateWeights.length).fill(0);
    let remainingWeight = weight;

    for (let key in plateWeights) {
        let activePlate = plateWeights[key];
        
        if (remainingWeight / activePlate < 1) {continue;}

        platesNeeded[key] = Math.floor(remainingWeight / activePlate);
        remainingWeight %= activePlate;
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
        plateContainer.setAttribute("id", plateWeights[key]);
        plateContainer.textContent = platesNeeded[key] + " \u00D7 " + plateWeights[key];

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