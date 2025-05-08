const calculatorDisplay = document.querySelector("h1");
const inputBtns = document.querySelectorAll("button");
const clearBtn = document.getElementById("clear-btn");

let firstValue = 0;

// this function will be responsible for populating the
// number on the display
function addNumberValue(number){
  const displayValue = calculatorDisplay.textContent;
  calculatorDisplay.textContent =
   displayValue === "0" ? number : displayValue + number;
}

inputBtns.forEach((inputBtn)=> {
  if(inputBtn.classList.length === 0) {
    inputBtn.addEventListener("click", ()=> addNumberValue(inputBtn.value));
  }
});