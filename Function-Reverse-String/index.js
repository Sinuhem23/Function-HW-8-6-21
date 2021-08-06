// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
//////////////////////////////////////////////////////////////////
var prompt = require('prompt-sync')();
var user_String = prompt('Enter your string ');

reverseString = str => {
  var input = '';

  for (var i = str.length - 1; i >= 0; i--) {
    input += str[i];
  }
  return input.toLowerCase();
};
console.log(reverseString(user_String));
