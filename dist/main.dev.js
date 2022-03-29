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
var buttonDecimalPoint = document.querySelector(".buttons__decimalpoint");
var display = document.querySelector(".display__text");
var buttonsNumbers = document.querySelectorAll(".buttons__number"); // loop through the array of buttons and update the display based on what is clicked

buttonsNumbers.forEach(function (button) {
  button.addEventListener("click", function () {
    display.innerHTML += button.innerHTML;
  });
}); // create clear button function

buttonClear.addEventListener("click", function () {
  display.innerHTML = "";
}); // start performing calculations
// const addition = (num1, num2) => {
//   return num1+num2;
// }
// const num1 = buttonPlus.addEventListener("click", () => {
//   const num = parseInt(display.innerHTML);
//   return num;
// })
// save what is in the display before + is clicked as a number
// add + to the saved number
// add what is in the display (as a number) when = is clicked

buttonEquals.addEventListener("click", function () {
  var resultString = display.innerHTML.split(/(?=[+-/*])|(?<=[+-/*])/g);
  var firstNumber = parseInt(resultString[0]);
  var symbol = resultString[1];
  var secondNumber = parseInt(resultString[2]);

  if (symbol == "+") {
    display.innerHTML = firstNumber + secondNumber;
  } else if (symbol == "-") {
    display.innerHTML = firstNumber - secondNumber;
  } else if (symbol == "*") {
    display.innerHTML = firstNumber * secondNumber;
  } else if (symbol == "/") {
    display.innerHTML = firstNumber / secondNumber;
  }
}); // take the first element in the array and convert it to a number
// take the third element in the array and convert it to a number