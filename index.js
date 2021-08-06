// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them.
//////////////////////////////////////////////////////////////
var prompt = require('prompt-sync')();
num1 = Number(prompt('Insert first number '));
num2 = Number(prompt('Insert second number '));
// Arrow Function
maxOfTwoNumbers = () => {
  if (num1 > num2) {
    return 'Largest number is: ' + num1;
  } else return 'Largest number is: ' + num2;
};
console.log(maxOfTwoNumbers(num1, num2));
