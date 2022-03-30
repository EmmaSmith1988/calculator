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
const buttonsOperators = document.querySelectorAll(".buttons__operator");

// Variables
let currentDisplay = "";
let currentOperator = "";
let savedNumber = "";

// Operator functions
const addition = (num1, num2) => {
  return parseInt(num1)+ parseInt(num2);
}
const subtraction = (num1, num2) => {
  return parseInt(num1)- parseInt(num2);
}
const multiply = (num1, num2) => {
  return parseInt(num1)*parseInt(num2);
}
const divide = (num1, num2) => {
  return parseInt(num1)/parseInt(num2);
}
const equals = () => {
  switch (currentOperator) {
    case "+":
      display.innerHTML = addition(savedNumber,currentDisplay).toFixed(7);
      break;
    case "-":
      display.innerHTML = subtraction(savedNumber,currentDisplay).toFixed(7);
      break;
    case "*":
      display.innerHTML = multiply(savedNumber,currentDisplay).toFixed(7);
      break;
    case "/":
      display.innerHTML = divide(savedNumber,currentDisplay).toFixed(7);
      break;
  }
  currentOperator = "";
  currentDisplay = display.innerHTML;
}

// Event listeners
buttonsNumbers.forEach((button) => {
  button.addEventListener("click", () => {
      display.innerHTML += button.innerHTML;
      currentDisplay += button.innerHTML;
  })
})

buttonsOperators.forEach((button) => {
  button.addEventListener("click", () => {
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
  })
})

buttonClear.addEventListener("click", () => {
  display.innerHTML = "";
  currentDisplay = "";
  currentOperator = "";
})

buttonEquals.addEventListener("click", () => {
  equals();  
});


