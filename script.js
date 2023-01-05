function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
} 
function multiply(num1, num2) {
    return (num1 * num2);
}
function divide(num1, num2) {
    return (num1 / num2);
}
function operate(operator, num1, num2) {    //0 adds, 1 subtracts, 2 multiplies, 3 divides
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