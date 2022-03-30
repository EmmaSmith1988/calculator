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
var buttonsNumbers = document.querySelectorAll(".buttons__number");
var buttonsOperators = document.querySelectorAll(".buttons__operator"); // Variables

var currentDisplay = "";
var currentOperator = "";
var savedNumber = ""; // Operator functions

var addition = function addition(num1, num2) {
  return parseInt(num1) + parseInt(num2);
};

var subtraction = function subtraction(num1, num2) {
  return parseInt(num1) - parseInt(num2);
};

var multiply = function multiply(num1, num2) {
  return parseInt(num1) * parseInt(num2);
};

var divide = function divide(num1, num2) {
  return parseInt(num1) / parseInt(num2);
};

var equals = function equals() {
  switch (currentOperator) {
    case "+":
      display.innerHTML = addition(savedNumber, currentDisplay).toFixed(7);
      break;

    case "-":
      display.innerHTML = subtraction(savedNumber, currentDisplay).toFixed(7);
      break;

    case "*":
      display.innerHTML = multiply(savedNumber, currentDisplay).toFixed(7);
      break;

    case "/":
      display.innerHTML = divide(savedNumber, currentDisplay).toFixed(7);
      break;
  }

  currentOperator = "";
  currentDisplay = display.innerHTML;
}; // Event listeners


buttonsNumbers.forEach(function (button) {
  button.addEventListener("click", function () {
    display.innerHTML += button.innerHTML;
    currentDisplay += button.innerHTML;
  });
});
buttonsOperators.forEach(function (button) {
  button.addEventListener("click", function () {
    if (currentOperator && savedNumber && currentDisplay) {
      equals();
      currentOperator = button.innerHTML;
      display.innerHTML = "";
      savedNumber = currentDisplay;
      currentDisplay = "";
    } else if (currentOperator) {
      currentOperator = button.innerHTML;
    } else {
      currentOperator = button.innerHTML;
      display.innerHTML = "";
      savedNumber = currentDisplay;
      currentDisplay = "";
    }
  });
});
buttonClear.addEventListener("click", function () {
  display.innerHTML = "";
  currentDisplay = "";
  currentOperator = "";
});
buttonEquals.addEventListener("click", function () {
  equals();
});