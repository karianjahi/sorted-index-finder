/*
In this lab we are creating a function that returns the lowest index at which a value should be inserted into an array once it has been sorted in ascending order.

User Stories:

- We create a `getIndexToIns` function that takes two arguments: an array and a number.
- We use the `sort` method to sort the array in ascending order.
- The `getIndexToIns` function returns the lowest index at which the number should be inserted by using the `findIndex` method.
- The `getIndexToIns` function always returns a number.
- The `findIndex` method is a built-in array method in JavaScript. It takes a callback function and returns the index of the first element that satisfies the condition. Both `findIndex` and `sort` are higher-order functions.

Examples:

getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because 1.5 is greater than 1 (index 0) and less than 2 (index 1).
getIndexToIns([20, 3, 5], 19) should return 2 because after sorting to [3, 5, 20], 19 is less than 20 (index 2) and greater than 5 (index 1).

*/

const getIndexToIns = (anArray, aNumber) => {
  anArray.sort((a, b) => a - b); // sort the array from smallest to largest
  const index = anArray.findIndex((num) => num >= aNumber);
  if (index == -1) return anArray.length;
  return index
};

console.log(getIndexToIns([7, 5, 4, 12, 15, 8], 10));
console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
console.log(getIndexToIns([3, 10, 5], 11));