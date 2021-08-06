// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
//////////////////////////////////////////////////////////////
var prompt = require('prompt-sync')();
num1 = Number(prompt('Insert first number '));
num2 = Number(prompt('Insert second number '));
num3 = Number(prompt('Insert third number '));

maxOfThree = () => {
  if (num1 > num2 && num1 > num3) {
    return 'Largest number is: ' + num1;
  } else if (num2 > num1 && num2 > num3) {
    return 'Largest number is: ' + num2;
  } else return 'Largest number is: ' + num3;
};
console.log(maxOfThree(num1, num2, num3));
