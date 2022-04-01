// Button variables
const buttonPlus = document.querySelector(".buttons__plus")
const buttonMinus = document.querySelector(".buttons__minus")
const buttonMultiply = document.querySelector(".buttons__multiply")
const buttonDivide = document.querySelector(".buttons__divide")
const buttonPercent = document.querySelector(".buttons__percent")
const buttonPlusMinus = document.querySelector(".buttons__plusminus")
const buttonClear = document.querySelector(".buttons__clear")
const buttonEquals = document.querySelector(".buttons__equals")
const display = document.querySelector(".display__text");
const buttonsNumbers = document.querySelectorAll(".buttons__number");
const buttonsOperators = document.querySelectorAll(".buttons__operator");

// Starting variables
let currentDisplay = "";
let currentOperator = "";
let savedNumber = "";
let result = "";

// Operator functions
const addition = (num1, num2) => num1+ num2;
const subtraction = (num1, num2) => num1-num2;
const multiply = (num1, num2) => num1*num2;
const divide = (num1, num2) => {
  if (Number.isInteger(num1/num2)) {
    return num1/num2;
  } else {
  return ((num1)/(num2)).toFixed(2);
  }
}
const clear = () => {
  display.innerHTML = "";
  currentDisplay = "";
  currentOperator = "";
  result = "";
  savedNumber = "";
}
const changeSign = () => {
  // check if the first character on the display is currently a '-' and if not, add one
  if (currentDisplay.charAt(0) != "-") {
    display.innerHTML = `-${currentDisplay}`;
    currentDisplay = `-${currentDisplay}`;
    // if the first character is a '-', remove it to make the number positive
  } else if (currentDisplay.charAt(0) == "-") {
    display.innerHTML = currentDisplay.substring(1);
    currentDisplay = currentDisplay.substring(1);
  }
  return;
}

const percentage = () => {
  if (!savedNumber) {
    display.innerHTML = currentDisplay/100;
  }
  const number1integer = parseFloat(savedNumber);
  const number2integer = parseFloat(currentDisplay);
  switch (currentOperator) {
    case "+":
      display.innerHTML = number1integer+(number2integer/100);
      break;
    case "-":
      display.innerHTML = number1integer-(number2integer/100);
      break;
    case "x":
      display.innerHTML = number1integer*(number2integer/100);
      break;
    case "÷":
      display.innerHTML = number1integer/(number2integer/100);
      break;
  }
}

const checkLength = result => {
  if (result.toString().length < 9) {
    display.innerHTML = result;
  } else {
    display.innerHTML = "exceeded";
  }
}

const equals = () => {
  const number1integer = parseFloat(savedNumber);
  const number2integer = parseFloat(currentDisplay);
  switch (currentOperator) {
    case "+":
      result = addition(number1integer,number2integer);
      checkLength(result);
      break;
    case "-":
      result = subtraction(number1integer,number2integer);
      checkLength(result);
      break;
    case "x":
      result = multiply(number1integer,number2integer);
      checkLength(result);
      break;
    case "÷":
      result = divide(number1integer,number2integer);
      checkLength(result);
      break;
    default:
      display.innerHTML = "error";
  }
  currentOperator = "";
  currentDisplay = display.innerHTML;
}

// Event listeners
buttonsNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    // stops the user from entering 0's at the start of their number
    if (button.innerHTML == "0") {
      if (!currentDisplay) {
        return;
      }
    }
    // stops the user from entering multiple decimal points
    if (button.innerHTML == ".") {
      if (currentDisplay.includes(".")) {
        return;
    // if the user presses decimal point as the first character, add a 0 infront of it
      } else if (!currentDisplay) {
        display.innerHTML = "0";
        currentDisplay = "0";
      }
    }
    // stops the user from entering more than 8 characters
    if (currentDisplay.length > 7){
      return;
    } else {
      display.innerHTML += button.innerHTML;
      currentDisplay += button.innerHTML;
    }
  })
})

buttonsOperators.forEach((button) => {
  button.addEventListener("click", () => {
    // if the user has entered a valid calculation, display the result and clear down the variables and update the operator
    if (currentOperator && savedNumber && currentDisplay) {
      equals();
      currentOperator = button.innerHTML;
      display.innerHTML = "";
      savedNumber = currentDisplay;
      currentDisplay = "";
    // if the user presses a second operator - update the stored one with the new one
    } else if (currentOperator) {
      currentOperator = button.innerHTML;
    } else {
    // save the operator, move the currentDisplay to savedNumber and then clear the display
      currentOperator = button.innerHTML;
      display.innerHTML = "";
      savedNumber = currentDisplay;
      currentDisplay = "";
    }
  })
})

buttonPlusMinus.addEventListener("click", changeSign);
buttonPercent.addEventListener("click", percentage);
buttonEquals.addEventListener("click", equals);
buttonClear.addEventListener("click", clear);




