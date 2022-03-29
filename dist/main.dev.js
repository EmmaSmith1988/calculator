"use strict";

// create a variable for each button
var button1 = document.querySelector(".buttons__1");
var button2 = document.querySelector(".buttons__2");
var button3 = document.querySelector(".buttons__3");
var button4 = document.querySelector(".buttons__4");
var button5 = document.querySelector(".buttons__5");
var button6 = document.querySelector(".buttons__6");
var button7 = document.querySelector(".buttons__7");
var button8 = document.querySelector(".buttons__8");
var button9 = document.querySelector(".buttons__9");
var button0 = document.querySelector(".buttons__0");
var buttonPlus = document.querySelector(".buttons__plus");
var buttonMinus = document.querySelector(".buttons__minus");
var buttonMultiply = document.querySelector(".buttons__multiply");
var buttonDivide = document.querySelector(".buttons__divide");
var buttonPercent = document.querySelector(".buttons__percent");
var buttonPlusMinus = document.querySelector(".buttons__plusminus");
var buttonClear = document.querySelector(".buttons__clear");
var buttonEquals = document.querySelector(".buttons__equals");
var buttonDecimalPoint = document.querySelector(".buttons__decimalpoint"); // log the variable to the console on click

button1.addEventListener("click", function () {
  console.log(button1.innerHTML); // log the variable to the display div

  display.innerHTML += button1.innerHTML;
});
var display = document.querySelector(".display__text"); // log the variable to the console on click

button1.addEventListener("click", function () {
  console.log(button1.innerHTML); // log the variable to the display div

  display.innerHTML += button1.innerHTML;
}); // start performing calculations