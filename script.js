operate();

function add(a, b) {
    result = Number(a) + Number(b);
    return result;
}

function subtract(a, b) {
    result = Number(a) - Number(b);
    return result;
}

function multiply(a, b) {
    result = Number(a) * Number(b);
    return result;
}

function divide(a, b) {
    result = Number(a) / Number(b);
    return result;
}

function operate(){
    let result;
    let operator = prompt("Operator: ");
    let number1 = prompt("Number 1: ");
    let number2 = prompt("Number 2: ");
    if (operator === "add") {
        result = add(number1, number2);
    }
    if (operator === "subtract") {
        result = subtract(number1, number2);
    }
    if (operator === "multiply") {
        result = multiply(number1, number2);
    }
    if (operator === "divide") {
        result = divide(number1, number2);
    }
    console.log(result);
}