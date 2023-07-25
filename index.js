/****
 * Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.
 */

// const reverseString = (inputString) => {
//   let reverseStr = '';
//   for (let i = inputString.length - 1; i >= 0; i--) {
//     reverseStr += inputString[i];
//   }
//   return reverseStr;
// };
// const inputString = 'Hello World';
// console.log(reverseString(inputString));

/***
 * Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.
 */

// const numbers = [2, -5, 10, -3, 7];

// const positiveNumFunc = (numbers) => {
//   return numbers.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
// };
// console.log(positiveNumFunc(numbers));

/**
 * 
Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

 */
const array = [1, 3, 6, 8, 11, 15];

const findTwoNumbersWithSum = (array, targetValue) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];

    if (sum === targetValue) {
      return [left, right];
    } else if (sum < targetValue) {
      left++;
    } else {
      right--;
    }
  }

  return null;
};

console.log(findTwoNumbersWithSum(array, 9));
