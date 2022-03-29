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


// log the variable to the console on click
button1.addEventListener("click", () => {
  console.log(button1.innerHTML);
  // log the variable to the display div
  display.innerHTML += button1.innerHTML;
})

const display = document.querySelector(".display__text");

// log the variable to the console on click
button1.addEventListener("click", () => {
  console.log(button1.innerHTML);
  // log the variable to the display div
  display.innerHTML += button1.innerHTML;
})




// start performing calculations