let display = document.getElementsByClassName("display");
let buttons = document.getElementsByClassName("numButton");
let clearBtn = document.getElementsByClassName("clearButton");
let delButton = document.getElementsByClassName("delButton");
let displayValue = '';
let dispArray = [];
let number2;
let intNum1;
let intNum2;
let operator;
let checkArray = [];
let operatorExceptions = /[,\/#!$%\^&\*x+;*:{}=\-_`~()"' ]/g;
let secondOperator;

display[0].innerHTML = 0;
enterNum();


delButton[0].addEventListener("click", function(){ 
    displayValue = displayValue.slice(0, displayValue.length -1);
    display[0].innerHTML = displayValue;
});

clearBtn[0].addEventListener("click", function() {
    clearDisp();
});


function clearDisp(){
    dispArray = [];
    displayValue =  '';
    display[0].innerHTML = 0;
}


function getNum2() {

}



function printResult(operatorCount){
    dispArray.pop();
    let dispString = dispArray.join("");
    let numbers = dispString.replace(operatorExceptions,',')
    numbers = numbers.split(",");
    intNum1 = Number(numbers[0]);
    intNum2 = Number(numbers[1]);
    clearDisp();
    operate(intNum1, operator, intNum2, operatorCount);
}

// function getNum1() {
//     for (let i = 0; i <= dispArray[0]; i++) {
//         if (dispArray[i] === "-" || dispArray[i] === "+" || dispArray[i] === "x" || dispArray[i] === "/") {
//             let number1 = dispArray.slice(0, i)
//             intNum1 = Number(number1.join(''))
//         }
//     }
// }

function checkForEquals(){
    for (let i = 0; i <= dispArray.length; i++) {
        if (dispArray[i] === "=") {
            printResult();
        }
    }   
}

function checkForSecondOperator() {
    let operatorCount = 0;
    for (i = 0; i < dispArray.length; i++) {
        if (dispArray[i] === "-" || dispArray[i] === "+" || dispArray[i] === "*" || dispArray[i] === "/") { 
            operatorCount++;
        }
        if (operatorCount === 2) {
            secondOperator = dispArray[i];
            console.log(secondOperator);
            printResult(operatorCount);
        }
    }
    
}

function checkNGetOperator() {
    checkForSecondOperator();
    
    for (let i = 0; i <= dispArray.length - 1; i++) {
        
        if (dispArray[i] === "-"){
            operator = "-"; 
        }
        else if (dispArray[i] === "+"){
            operator = "+";
        }
        else if (dispArray[i] === "*"){
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
            //checkForSecondOperator();
            checkForEquals();
            
            display[0].innerHTML = displayValue;
        });
    }
}

function operate(num1, operator, num2, operatorCount){
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
    if (operatorCount === 2) {
        displayValue = result + secondOperator;
    }
    else {
        displayValue = result;   
    }
    
    
    
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