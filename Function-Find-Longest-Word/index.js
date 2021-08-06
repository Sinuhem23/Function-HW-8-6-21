// Write a function findLongestWord that takes an array of words and returns the length of the longest one.
///////////////////////////////////////////////////////////////////
var prompt = require('prompt-sync')();
var user_Array = prompt('Enter something: ');

function findLongestWord(str) {
  let words = str.split(' ');
  let maxLength = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
      console.log('Longest word is: ' + words[i] + '.');
    }
  }
  return 'The length is: ' + maxLength;
}
console.log(findLongestWord(user_Array));
