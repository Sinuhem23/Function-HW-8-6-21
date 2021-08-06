// Write a function isCharacterAVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
////////////////////////////////////////////////////////////////
var prompt = require('prompt-sync')();
user_input = prompt('Enter a letter: ');

isCharacterAVowel = () => {
  if (
    user_input == 'a' ||
    user_input == 'e' ||
    user_input == 'i' ||
    user_input == 'o' ||
    user_input == 'u'
  )
    return true;
  else return false;
};
console.log(isCharacterAVowel(user_input));
