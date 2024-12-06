/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let firstNum = null;
let secondNum = null;
let operator = null;
/*------------------------ Cached Element References ------------------------*/
let numbers = document.querySelectorAll(".number");
let operationButtons = document.querySelectorAll(".operator");
let addButton = document.querySelector("#add");
let subtractButton = document.querySelector("#sub");
let multiplyButton = document.querySelector("#multiply");
let divideButton = document.querySelector("#divide");
let equalsButton = document.querySelector("#equals");
let clearButton = document.querySelector("#clear");
let totalDisplay = document.querySelector(".display");
totalDisplay.innerText = 0;
/*-------------------------------- Functions --------------------------------*/
let add = () => {return firstNum + secondNum; };
let sub = () => {return firstNum - secondNum; };
let divide = () => {return firstNum / secondNum; };
let multiply = () => {return firstNum * secondNum; };
let rendercalc = () => {
    let total;
    if (operator === "add") {total = add();}
    if (operator === "sub") {total = sub();}
    if (operator === "divide") {total = divide();}
    if (operator === "multiply") {total = multiply();}
    totalDisplay.innerHTML = total;
};

let handleEqualBtnClick = () => {
  secondNum = parseInt(totalDisplay.innerText);
  rendercalc();
  firstNum = parseInt(totalDisplay.innerText)
  operator = null;
};

let handleOperatorClick = (event) => {
  if (firstNum === null) 
  {firstNum = parseInt(totalDisplay.innerText);} // parseFloat handles decimals better apparently. keeping it at parseInt to keep things simple.
  else {secondNum = parseInt(totalDisplay.innerText)}
  rendercalc();
  operator = event.target.id;
  totalDisplay.innerText = 0;
};

let clr = () => {
    totalDisplay.innerText = 0;
    firstNum = null;
    secondNum = null;
    operator = null;
};
/*----------------------------- Event Listeners -----------------------------*/
equalsButton.addEventListener("click", handleEqualBtnClick);
clearButton.addEventListener("click", clr);
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
      if (totalDisplay.innerText === "0")
        {totalDisplay.innerText = event.target.innerText;}
        else {totalDisplay.innerText += event.target.innerText;}
    });
  });
  operationButtons.forEach((operatorbutton) => {
    operatorbutton.addEventListener("click", handleOperatorClick);
  });
