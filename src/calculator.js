const calculator = {
  keypad: [
  { label: "1", action: "append", value: 1 },
  { label: "2", action: "append", value: 2 },
  { label: "3", action: "append", value: 3 },
  { label: "4", action: "append", value: 4 },
  { label: "5", action: "append", value: 5 },
  { label: "6", action: "append", value: 6 },
  { label: "7", action: "append", value: 7 },
  { label: "8", action: "append", value: 8 },
  { label: "9", action: "append", value: 9 },
  { label: "⌫", action: "delete", value: 1 },
  { label: "0", action: "append", value: 0 },
  { label: "Clear", action: "clear", value: 0 },
  ],

  // Key actions
  calculateFromButton(originalNumber, keyAction, keyValue) {
    switch (keyAction) {
      case "append":
        return Number(originalNumber.toString() + keyValue);
      case "add":
        return originalNumber + Number(keyValue);
      case "subtract":
        return originalNumber - Number(keyValue);
      case "delete": {
        const result = originalNumber.toString().slice(0, -Number(keyValue));
        return Number(result);
      }
      case "clear":
        return 0;
      default:
        return originalNumber;
    }
  },

  createKeypad(triggeredFunction, numberToEdit) {
    const keypadDiv = document.createElement("div");
    keypadDiv.setAttribute("class", "keypad card");

    this.keypad.forEach((key) => {
      // Generate DOM element
      const keyButton = document.createElement("button");
      keyButton.dataset.buttonAction = key.action;
      keyButton.dataset.buttonValue = key.value;
      keyButton.textContent = key.label;

      // Bind listener event
      keyButton.addEventListener(
        "click",
        () => {
          triggeredFunction(
            this.calculateFromButton(
              numberToEdit,
              keyButton.dataset.buttonAction,
              keyButton.dataset.buttonValue
            )
          )
        }
      );

      keypadDiv.appendChild(keyButton);
      
    });
    return keypadDiv;
  },
}

export default calculator;