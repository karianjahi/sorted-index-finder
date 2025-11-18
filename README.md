# sorted-index-finder

A tiny JavaScript utility that returns the **lowest index at which a value should be inserted into an array once it has been sorted in ascending order**.

It uses two higher-order array methods:

- [`Array.prototype.sort`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) – to sort the array numerically.
- [`Array.prototype.findIndex`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) – to find the first position where the value should go.

---

## Table of Contents

- [User Stories](#user-stories)
- [Implementation](#implementation)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Examples](#examples)
- [How It Works](#how-it-works)
- [Notes & Limitations](#notes--limitations)
- [License](#license)

---

## User Stories

This lab implements a `getIndexToIns` function with the following requirements:

- `getIndexToIns` takes **two arguments**: an **array** and a **number**.
- It uses the **`sort`** method to sort the array in **ascending** order.
- It uses the **`findIndex`** method to return the **lowest index** where the number should be inserted.
- `getIndexToIns` **always returns a number**.
- `sort` and `findIndex` are treated as **higher-order functions** (they receive callback functions).

---

## Implementation

The main logic lives in `source.js`:

```js
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
  return index;
};

console.log(getIndexToIns([7, 5, 4, 12, 15, 8], 10));
console.log(getIndexToIns([1, 2, 3, 4], 1.5));
console.log(getIndexToIns([20, 3, 5], 19));
console.log(getIndexToIns([3, 10, 5], 11));
```

## Usage
- Run the demo script:

```bash
node source.js
```
## Example 1
```js
getIndexToIns([1, 2, 3, 4], 1.5);  // ➜ 1
```

### Explanation:
Sorted array: `[1, 2, 3, 4]`
`1.5` is greater than `1` (`index 0`) and less than `2` (`index 1`), so it belongs at `index 1`.

## Example 2
```js
getIndexToIns([20, 3, 5], 19);  // ➜ 2
```
### Explanation:
Sorted array: `[3, 5, 20]`
`19` is greater than `5` (`index 1`) and less than `20` (`index 2`), so it belongs at index `2`.

## How It Works
1. Sort the array numerically in ascending order

```js
anArray.sort((a, b) => a - b);
```
2. Find the first index where the element is greater than or equal to the target number

```js
const index = anArray.findIndex((num) => num >= aNumber);
```
3. Handle the case where the value is larger than all elements

    - If findIndex does not find a match, it returns -1.
    - In that case, the correct index is simply `anArray.length`.

## Notes & Limitations
The function sorts the input array in-place.

## License
This project is licensed under the MIT License. See the LICENSE file for details.