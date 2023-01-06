const buttonContainer = document.querySelector(".button-wrapper");
const displayOutput = document.querySelector(".display");
const inputButton = document.querySelectorAll(".num-input");
const interfaceSelector = document.querySelectorAll(".interface");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");
displayOutput.textContent = "0";
let userInputValue1 = "";
let userInputValue2 = "";
let runningTotal = 0;
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
        let num = e.target.id;
        if (userInputValue1 === "0" && num === "0") {
            userInputValue1 = "0";
          } else if (userInputValue1 === "0" && num !== "0") {
            userInputValue1 = "";
            userInputValue1 += num;
            displayOutput.textContent = userInputValue1;
          } else {
            userInputValue1 += num;
            displayOutput.textContent = userInputValue1;
          }

      }
      if (threeInputToggle === 0) {
        let num = e.target.id;
        if (userInputValue1 === "0" && num === "0") {
          userInputValue1 = "0";
        } else if (userInputValue1 === "0" && num !== "0") {
          userInputValue1 = "";
          userInputValue1 += num;
          displayOutput.textContent = userInputValue1;
        } else {
          userInputValue1 += num;
          displayOutput.textContent = userInputValue1;
        }
      } else if (threeInputToggle === 1) {
        let num = e.target.id;
        if (userInputValue2 === "0" && num === "0") {
            userInputValue2 = "0";
          } else if (userInputValue2 === "0" && num !== "0") {
            userInputValue2 = "";
            userInputValue2 += num;
            displayOutput.textContent = userInputValue2;
          } else {
            userInputValue2 += num;
            displayOutput.textContent = userInputValue2;
          }
      }
    });
  });
}
function userInterfaceEvent() {
  interfaceSelector.forEach((interface) => {
    interface.addEventListener("click", (e) => {
      if (threeInputToggle === 2) {
        operatorInput = Number(e.target.id);
      } else if (threeInputToggle !== 2) {
        operatorInput = Number(e.target.id);

        threeInputToggle = 1;
      }
    });
  });
}
function equalsInput() {
  equalsButton.addEventListener("click", () => {
    if (threeInputToggle === 2) {
      runningTotal =
        Math.round(
          operate(operatorInput, runningTotal, Number(userInputValue1)) * 1000
        ) / 1000;
      displayOutput.textContent = runningTotal.toString();
      operatorInput = 0;
      userInputValue1 = "";
    } else if (threeInputToggle === 0 || threeInputToggle === 1) {
      runningTotal =
        Math.round(
          operate(
            operatorInput,
            Number(userInputValue1),
            Number(userInputValue2)
          ) * 1000
        ) / 1000;
      displayOutput.textContent = runningTotal.toString();
      operatorInput = 0;
      userInputValue1 = "";
      userInputValue2 = "";
      threeInputToggle = 2;
    }
  });
}
function clearDisplay() {
  clearButton.addEventListener("click", () => {
    displayOutput.textContent = "0";
    runningTotal = 0;
    userInputValue1 = "";
    userInputValue2 = "";
    threeInputToggle = 0;
  });
}
userInput();
userInterfaceEvent();
equalsInput();
clearDisplay();
