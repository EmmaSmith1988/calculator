# My calculator
------------------
This is my calculator project, coded using Javascript, HTML and SCSS during week 2 of my Nology course.
------------------
## Operations

This calculator supports the following operations:
- Addition
- Subtraction
- Multiply
- Divide
- Percentage
- Change the sign from plus to minus
- Clear
- Equals
- Decimal point

## Usage instructions

To perform a basic calculation, type your first number, press and operator and then type your second number, when you press equals, the basic addition/subtraction/multiplication/division will be displayed on the screen. 
If you press a decimal point as the first character, it will automatically insert a 0 in front of it in the display. You cannot enter more than 1 decimal point.
Decimal results are capped at 2 decimal places to make sure recurring numbers are able to be displayed.
If you do a calculation that is more than 8 digits long, you will get an 'exceeded' message on the display.
You cannot enter a number larger than 8 digits, the numbers will stop being added.

## Limitations

You cannot press 0 as the first digit on the display.
If you divide by 0 the result displays as infinity.
There is no way to delete just your most recent character.
There is no BODMAS being applied in the chained calculations as the result is calculated as you go along.
The result of a chained operation is stored, but does not appear on the screen to visualise the result as you go.

## This project contains the following files

- index.html
- main.js
- README.md
- Sass folder containing scss files and partials

## It looks like this:

![calculator](https://user-images.githubusercontent.com/72084805/161582407-0cd95926-a5e3-4f1b-8845-92f23ddaa514.png)

