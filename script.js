const buttonContainer = document.querySelector(".button-wrapper");
const displayOutput = document.querySelector(".display");
const inputButton = document.querySelectorAll(".num-input");
const interfaceSelector = document.querySelectorAll(".interface");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
displayOutput.textContent = "0";
let userInputValue1 = "";
let userInputValue2 = "";
let threeInputToggle = 0;
let operatorInput = 0;
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function operate(operator, num1, num2) {
  //0 adds, 1 subtracts, 2 multiplies, 3 divides
  if (operator === 0) {
    return add(num1, num2);
  }
  if (operator === 1) {
    return subtract(num1, num2);
  }
  if (operator === 2) {
    return multiply(num1, num2);
  }
  if (operator === 3) {
    return divide(num1, num2);
  }
}
function userInput() {
  inputButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      if (threeInputToggle === 2) {
        displayOutput.textContent = "";
        threeInputToggle = 0;
      }
      if (threeInputToggle === 0) {
        let num = e.target.id;
        userInputValue1 += num;
        displayOutput.textContent = userInputValue1;
      } else if (threeInputToggle === 1) {
        let num = e.target.id;
        userInputValue2 += num;
        displayOutput.textContent = userInputValue2;
      }
    });
  });
}
function userInterfaceEvent() {
  interfaceSelector.forEach((interface) => {
    interface.addEventListener("click", (e) => {
      operatorInput = Number(e.target.id);
      displayOutput.textContent = "";
      threeInputToggle = 1;
    });
  });
}
function equalsInput() {
  equalsButton.addEventListener("click", () => {
    displayOutput.textContent = "0";
    let evaluatedValue = operate(
      operatorInput,
      Number(userInputValue1),
      Number(userInputValue2)
    );
    displayOutput.textContent = evaluatedValue.toString();
    userInputValue1 = "";
    userInputValue2 = "";
    threeInputToggle = 2;
  });
}
function clearDisplay() {
  clearButton.addEventListener("click", () => {
    displayOutput.textContent = "0";
    userInputValue1 = "";
    userInputValue2 = "";
    threeInputToggle = 0;
  });
}
userInput();
userInterfaceEvent();
equalsInput();
clearDisplay();
