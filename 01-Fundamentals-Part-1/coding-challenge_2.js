// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement

GOOD LUCK */

const weightMark = 78;
const heightMark = 1.69;
const BMIMark = weightMark / heightMark ** 2; // 27.31 kg/m2

const weightJohn = 92;
const heightJohn = 1.95;
const BMIJohn = weightJohn / heightJohn ** 2; // 24.19 kg/m2

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
