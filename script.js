let display = document.getElementsByClassName("display");
let buttons = document.getElementsByClassName("numButton")
let clearBtn = document.getElementsByClassName("clearButton")
let displayValue = '';
let dispArray = [];
let number2;
let intNum1;
let intNum2;
let operator;
let checkArray = [];
enterNum();

function clearDisp(){
    displayValue =  '';
    display[0].innerHTML = displayValue;
}


clearBtn[0].addEventListener("click", function(e) {
    clearDisp();
});

function callOperation(num1, operator, num2) {
    operate(num1, operator, num2);
}

function getNum2() {

}

function checkForEquals(){
    for (let i = 0; i <= dispArray.length; i++) {
        if (dispArray[i] === "=") {
            dispArray.pop();
            let dispString = dispArray.join("");
            let numbers = dispString.replace(/[,\/#!$%\^&\*x+;:{}=\-_`~()"' ]/g,',')
            let numArray = numbers.split(",");
            intNum2 = Number(numArray[1]);
            console.log(intNum1, operator, intNum2);
            clearDisp();
            callOperation(intNum1, operator, intNum2);
        }
    }
}

function getNum1() {
    for (let i = 0; i <= dispArray.length; i++) {
        if (dispArray[i] === "-" || dispArray[i] === "+" || dispArray[i] === "x" || dispArray[i] === "/") {
            let number1 = dispArray.slice(0, i)
            intNum1 = Number(number1.join(''))
            console.log(intNum1);
        }
    }
}


function checkNGetOperator() {
    if (dispArray[0] !== "-" && dispArray[0] !== "+" && dispArray[0] !== "x" && dispArray[0] !== "/") {
        getNum1();
    }
    
    for (let i = 0; i <= dispArray.length; i++) {
        
        if (dispArray[i] === "-"){
            operator = "-"; 
        }
        else if (dispArray[i] === "+"){
            operator = "+";
        }
        else if (dispArray[i] === "x"){
            operator = "*";
        }
        else if (dispArray[i] === "/"){
            operator = "/";
        }
        
    }
}


function enterNum(){
for (let i = 0; i < buttons.length; i++) {   
        buttons[i].addEventListener("click", function(e) {
            displayValue += e.target.innerHTML;
            dispArray = displayValue.split("");
            checkNGetOperator(); 
            checkForEquals();
            display[0].innerHTML = displayValue;
        });
    }
}

function operate(num1, operator, num2){
    let result;
    if (operator === "+") {
        result = add(num1, num2);
    }
    if (operator === "-") {
        result = subtract(num1, num2);
    }
    if (operator === "*") {
        result = multiply(num1, num2);
    }
    if (operator === "/") {
        result = divide(num1, num2);
    }
    displayValue = result;

}

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

