// Write a function that returns the number of arguments passed to the function when called.
////////////////////////////////////////////////////////////////////
function sumAll() {
  for (let i = 0; i < arguments.length; i++) {
    return arguments.length;
  }
}
x = sumAll(1, 12, 4, 8, 3);

console.log(x);
