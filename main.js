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

// loop through the array of buttons and update the display based on what is clicked

// store the current display in a variable
let currentDisplay = "";

buttonsNumbers.forEach((button) => {
  button.addEventListener("click", () => {
      display.innerHTML += button.innerHTML;
      currentDisplay += button.innerHTML;
  })
})

// store current operator in a variable
let currentOperator = "";

// store the plus operator when its pushed, clear the display and move the currentDisplay to savedNumber
let savedNumber = "";

buttonsOperators.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentOperator) {
      return;
    } else {
      currentOperator = button.innerHTML;
      display.innerHTML = "";
      console.log(currentOperator);
      savedNumber = currentDisplay;
      currentDisplay = "";
    }
  })
})

// create clear button function
buttonClear.addEventListener("click", () => {
  display.innerHTML = "";
  currentDisplay = "";
  currentOperator = "";
})

// start performing calculations
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

// create function that runs when equals is pressed
const equals = () => {
  switch (currentOperator) {
    case "+":
      console.log(savedNumber);
      console.log(currentDisplay);
      display.innerHTML = addition(savedNumber,currentDisplay);
      break;
    case "-":
      display.innerHTML = subtraction(savedNumber,currentDisplay);
      break;
    case "*":
      display.innerHTML = multiply(savedNumber,currentDisplay);
      break;
    case "/":
      display.innerHTML = divide(savedNumber,currentDisplay);
      break;
  }
}

buttonEquals.addEventListener("click", () => {
  equals();  
});


