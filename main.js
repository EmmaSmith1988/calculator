// create a variable for each button
const button1 = document.querySelector(".buttons__1");
const button2 = document.querySelector(".buttons__2");
const button3 = document.querySelector(".buttons__3");
const button4 = document.querySelector(".buttons__4");
const button5 = document.querySelector(".buttons__5");
const button6 = document.querySelector(".buttons__6");
const button7 = document.querySelector(".buttons__7");
const button8 = document.querySelector(".buttons__8");
const button9 = document.querySelector(".buttons__9");
const button0 = document.querySelector(".buttons__0");
const buttonPlus = document.querySelector(".buttons__plus")
const buttonMinus = document.querySelector(".buttons__minus")
const buttonMultiply = document.querySelector(".buttons__multiply")
const buttonDivide = document.querySelector(".buttons__divide")
const buttonPercent = document.querySelector(".buttons__percent")
const buttonPlusMinus = document.querySelector(".buttons__plusminus")
const buttonClear = document.querySelector(".buttons__clear")
const buttonEquals = document.querySelector(".buttons__equals")
const buttonDecimalPoint = document.querySelector(".buttons__decimalpoint")

const display = document.querySelector(".display__text");


const buttonsNumbers = document.querySelectorAll(".buttons__number");

// log the variable to the console on click
buttonsNumbers.forEach((button) => {
  button.addEventListener("click", () => {
      display.innerHTML += button.innerHTML;
  
  })
})

// create clear button function
buttonClear.addEventListener("click", () => {
  display.innerHTML = "";
})

// start performing calculations
const addition = (num1, num2) => {
  return num1+num2;
}

const num1 = buttonPlus.addEventListener("click", () => {
  const num = parseInt(display.innerHTML);
  return num;
})



// save what is in the display before + is clicked as a number
// add + to the saved number
// add what is in the display (as a number) when = is clicked

