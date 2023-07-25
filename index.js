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

const numbers = [2, -5, 10, -3, 7];

const positiveNumFunc = (numbers) => {
  return numbers.reduce((sum, num) => (num > 0 ? sum + num : sum), 0);
};
console.log(positiveNumFunc(numbers));
