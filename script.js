let increments = [45, 25, 10, 5, 2.5];
let barWeight = 45;
let maxWeight = 1500;
let enteredWeight = 380;
let calculateButton = document.querySelector("#calculate-button");
let calcDisplay = document.querySelector("#calc-display");
let visualizer = document.querySelector("#visualizer");
let calcButton = document.querySelectorAll(".keypad button");

// Set up display at start
calcDisplay.textContent = enteredWeight;
updateVisualizer(enteredWeight);

// Calculator functions
calcButton.forEach(item => {
    item.addEventListener("click", function(){
        const input = this.textContent;
        let updateWeight = enteredWeight.toString();

        switch (input){
            case "⌫":
                updateWeight = updateWeight.slice(0, -1);
                break;
            case "Clear":
                updateWeight = "0";
                break;
            default:
                if (updateWeight === "0") updateWeight = input;
                else updateWeight += input;
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

        calcDisplay.textContent = enteredWeight;
        updateVisualizer(enteredWeight);
    });
});

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