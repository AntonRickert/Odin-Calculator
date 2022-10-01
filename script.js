//Declaration of all important variables
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
//sets display to 0 on load
display[0].innerHTML = 0;
//calls main function
enterNum();


//Logic for the Delete Button, listens to click, then deletes last char in displayValue
delButton[0].addEventListener("click", function(){ 
    displayValue = displayValue.slice(0, displayValue.length -1);
    display[0].innerHTML = displayValue;
});

//Listens to click of clear button, then calls clear funtion
clearBtn[0].addEventListener("click", function() {
    clearDisp();
});

//Clears the diplay, thus 'resetting the claculator'
function clearDisp(){
    dispArray = [];
    displayValue =  '';
    display[0].innerHTML = 0;
}

//calculates results
function printResult(operatorCount){
    //pops last char from dispArray
    dispArray.pop();
    //converts Array to string and deletes operators from string
    let dispString = dispArray.join("");
    let numbers = dispString.replace(operatorExceptions,',')
    //makes array of numbers and declares the first and second numbers
    numbers = numbers.split(",");
    intNum1 = Number(numbers[0]);
    intNum2 = Number(numbers[1]);
    clearDisp();
    //checks for attempt of dividing by zero
    if (operator === '/' && intNum2 === 0) {
        alert("You can't divide by Zero! ;)");
    }
    //calls the operate funtion, parsing the important values to it
    else {
       operate(intNum1, operator, intNum2, operatorCount); 
    }
    
}

//checks for input of equals sign, if found, calls printresult
function checkForEquals(){
    for (let i = 0; i <= dispArray.length; i++) {
        if (dispArray[i] === "=") {
            printResult();
        }
    }   
}

//checks for second operator
function checkForSecondOperator() {
    let operatorCount = 0;
    //checks if an operator is present and if so increments operatorCount by one
    for (i = 0; i < dispArray.length; i++) {
        if (dispArray[i] === "-" || dispArray[i] === "+" || dispArray[i] === "*" || dispArray[i] === "/") { 
            operatorCount++;
        }
        //checks if two operators are present and parses the operatorCount to printResult(), thus also to operate()
        if (operatorCount === 2) {
            //stores the second operator to be printed after calculation
            secondOperator = dispArray[i];
            printResult(operatorCount);
        }
    }
}

//gets first operator to use
function checkNGetOperator() {
    //calls checkForSecondOperator to see if two operators are present
    checkForSecondOperator();
    //checks for operator and stores it in the operator variable
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

//main loop for the calculator
function enterNum(){
for (let i = 0; i < buttons.length; i++) { 
        //listens to buttons and parses pressed buton values to display variable, thus printing it on the screen
        buttons[i].addEventListener("click", function(e) {  
            displayValue += e.target.innerHTML;
            if (displayValue[0] === "-" || displayValue[0] === "+" || displayValue[0] === "*" || displayValue[0] === '/') {
                displayValue = displayValue.slice(0)
                console.log(displayValue);
            }
            dispArray = displayValue.split("");
            checkNGetOperator(); 
            checkForEquals();
            //prints displayValue on the screen
            display[0].innerHTML = displayValue;
        });
    }
}

//calculates the number with given parameters
function operate(num1, operator, num2, operatorCount){
    let result;
    //checks for operator and calculates with it
    if (operator === "+") {
        result = Number(num1) + Number(num2);
    }
    if (operator === "-") {
        result = Number(num1) - Number(num2);
    }
    if (operator === "*") {
        result = Number(num1) * Number(num2);
    }
    if (operator === "/") {
        result = Number(num1) / Number(num2);
    }
    //if second operator is present, it'll be printed after result
    if (operatorCount === 2) {
        displayValue = result + secondOperator;
    }

    //else only the result will be printed
    else {
        displayValue = result;   
    } 
}