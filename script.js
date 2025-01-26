let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let currentOperation = null;

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = displayValue;
}

function clearDisplay() {
    displayValue = '0';
    firstOperand = null;
    secondOperand = null;
    currentOperation = null;
    updateDisplay();
}

function appendNumber(number) {
    if (displayValue === '0') {
        displayValue = number;
    } else {
        displayValue += number;
    }
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation !== null) {
        calculate();
    }
    firstOperand = parseFloat(displayValue);
    currentOperation = operation;
    displayValue = '0';
}

function calculate() {
    if (currentOperation === null || firstOperand === null) {
        return;
    }
    secondOperand = parseFloat(displayValue);
    switch (currentOperation) {
        case '+':
            displayValue = (firstOperand + secondOperand).toString();
            break;
        case '-':
            displayValue = (firstOperand - secondOperand).toString();
            break;
        case '*':
            displayValue = (firstOperand * secondOperand).toString();
            break;
        case '/':
            if (secondOperand === 0) {
                displayValue = 'Error';
            } else {
                displayValue = (firstOperand / secondOperand).toString();
            }
            break;
    }
    currentOperation = null;
    firstOperand = null;
    secondOperand = null;
    updateDisplay();
}