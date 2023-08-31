const keypad = [
    {label: "1", action: "append", value: 1},
    {label: "2", action: "append", value: 2},
    {label: "3", action: "append", value: 3},
    {label: "4", action: "append", value: 4},
    {label: "5", action: "append", value: 5},
    {label: "6", action: "append", value: 6},
    {label: "7", action: "append", value: 7},
    {label: "8", action: "append", value: 8},
    {label: "9", action: "append", value: 9},
    {label: "⌫", action: "delete", value: 1},
    {label: "0", action: "append", value: 0},
    {label: "Clear", action: "clear", value: 0},
];

function bindKeypad(element, f) {
    element.addEventListener("click", f(
        this.dataset.buttonFunction,
        this.dataset.buttonValue
        )
    );
}

// Key actions
const calcFunction = {
    append(weight, value) {
      return Number(weight.toString() + value);
    },
  
    add(weight, value) {
      return weight + value;
    },
  
    subtract(weight, value) {
      return weight - value;
    },
  
    delete(weight, value) {
      const result = weight.toString().slice(0, -value);
      return Number(result);
    },
  
    clear(unused01, unused02) {
      return 0;
    },
  };

export default function createKeypad(f) {
    const keypadDiv = document.createElement("div");
    keypadDiv.setAttribute("class", "keypad card");

    keypad.forEach(key => {
        const keyButton = document.createElement("button");
        keyButton.setAttribute("data-button-action", key.action);
        keyButton.setAttribute("data-button-value", key.value);
        keyButton.textContent = key.label;
        bindKeypad(keyButton, f);

        keypadDiv.appendChild(keyButton);
    });
    return keypadDiv;
}