"use strict";

// Strict mode
// - prevents us from doing certain things
// - gives us error messages
// - introduces a short list of variable names that you cannot use, as they might be used as reserved words in the future

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive. Yay!");

// A function is simply a piece of code that we can reuse over and over again, like a variable, but for whole chunks of code.

function logger() {
  // This is called the function body.
  console.log("My name is Gerald");
}

// Using the parentheses allows us to call, run, or invoke the function
logger();

// We can both pass data into a function, and a function can return data.

// The data passed into the parentheses are called "paramaters"
// function fruitProcessor(params)

// Function basics
// What is a function?
// What is the function body (you'll also here this referred to as the "code block")?
// What is a parameter, and what is an argument?
// A parameter is the data or information that you pass into the function when you define it. While an argument is the data or information that you give to the function when you invoke it. Here is an example:
// You can also think of a parameter as the input.

// DRY - Don't Repeat Yourself (functions are perfect for this)

// Note: Number turns a string into a number
const num = Number("23");
console.log(num);

// function declaration
function calcAge1(birthYear) {
  const age = 2021 - birthYear;
  return age;
}

function calcAge1(birthYear) {
  return 2021 - birthYear;
}

const age1 = calcAge1(1969);

console.log(calcAge1(1969));
console.log(age1);

// function expression (anonymous function?)
const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calcAge2(1976);
console.log(age1, age2);

// Functions are not types. They're values.

// We can call function declarations before they're defined in the code. That is, in terms of where the call is in relation to the function on the page. That is, the call is above the function on the page. You cannot do this with a function expression. This is due to the process called "hoisting".
