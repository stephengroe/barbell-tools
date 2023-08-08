// Standard divisions of plates and bar weight in pounds
let plateWeights = [45, 25, 10, 5, 2.5];
let barWeight = 45;

// Get DOM elements
let calculateButton = document.querySelector("#calculate-button");
let weightInput = document.querySelector("#weight-input");
let plateVisualizer = document.querySelector("#plate-visualizer");

// Remove bar weight and split in half
calculateButton.addEventListener('click', function (e) {
    let inputWeight = weightInput.value;
    inputWeight -= barWeight;
    inputWeight /= 2;
    plateVisualizer.textContent = calcPlates(inputWeight);
  });

// Generate array with plates necessary
function calcPlates(weight){
    let platesNeeded = [];
    let remainingWeight = weight;

    for (let activePlate of plateWeights) {
        if (remainingWeight / activePlate > 0) {
            let plateNum = Math.floor(remainingWeight / activePlate);
            platesNeeded.push(plateNum); //
            remainingWeight -= (plateNum * activePlate);
        }
        else {
            platesNeeded.push(0);
        }
    }
    return platesNeeded;
}






//   const div = document.createElement('div');

// const container = document.querySelector('#container');

// const content = document.createElement('div');
// content.classList.add('content');
// content.textContent = 'This is the glorious text-content!';

// container.appendChild(content);