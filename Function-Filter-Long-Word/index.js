// Write a function filterLongWords that takes an array of words and a number i and returns the array of words that are longer than i characters long.
// //////////////////////////////////////////////////////////////////
filterLongWords = (arr, num) => {
  newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
console.log(filterLongWords(['hello', 'there', 'worlds'], 5));
