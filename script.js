const buttonContainer = document.querySelector(".button-wrapper");
const displayOutput = document.querySelector(".display");
const inputButton = document.querySelectorAll(".num-input");
const interfaceSelector = document.querySelectorAll(".interface");
const equalsButton = document.querySelector(".equals");
let userInputValue1 = "";
let userInputValue2 = "";
let inputToggle = false;
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
      if (inputToggle === false) {
        let num = e.target.id;
        userInputValue1 += num;
        displayOutput.textContent = userInputValue1;
      } else if (inputToggle === true) {
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
      inputToggle = true;
    });
  });
}
function equalsInput() {


}
userInput();
userInterfaceEvent();


