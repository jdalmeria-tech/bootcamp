const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0;
let awaitingNextValue = false;
let operatorValue = "";

// this function will be responsible for populating the
// number on the display
function addNumberValue(number){

  if (awaitingNextValue) {
    calculatorDisplay.textContent = number;
    awaitingNextValue = false;
  } else {
    const displayValue = calculatorDisplay.textContent;
    calculatorDisplay.textContent =
      displayValue === "0" ? number : displayValue + number;
  }
}

const calculate = {
  "/" : (firstNum, secondNum) => firstNum / secondNum,
  "*" : (firstNum, secondNum) => firstNum * secondNum,
  "+" : (firstNum, secondNum) => firstNum + secondNum,
  "-" : (firstNum, secondNum) => firstNum - secondNum,
  "=" : (firstNum, secondNum) => secondNum,
};

function useOperator(operator) {
  const currentValue = Number(calculatorDisplay.textContent);

  if (operatorValue && awaitingNextValue) {
    operatorValue = operator;
    return;
  }

  if (!firstValue) {
    firstValue = currentValue;
  } else {
    const calculation = calculate[operatorValue](firstValue, currentValue);
    calculatorDisplay.textContent = calculation;
  }

  awaitingNextValue = true;
  operatorValue = operator;
}

inputBtns.forEach((inputBtn)=> {
  if(inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", ()=> addNumberValue(inputBtn.value));
  } else if (inputBtn.classList.contains("operator")) {
    inputBtn.addEventListener("click", ()=> useOperator(inputBtn.value))
  }
});