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
// const array = [1, 3, 6, 8, 11, 15];

// const findTwoNumbersWithSum = (array, targetValue) => {
//   let left = 0;
//   let right = array.length - 1;

//   while (left < right) {
//     const sum = array[left] + array[right];

//     if (sum === targetValue) {
//       return [left, right];
//     } else if (sum < targetValue) {
//       left++;
//     } else {
//       right--;
//     }
//   }

//   return null;
// };

// console.log(findTwoNumbersWithSum(array, 12));

/**
 * Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
 */

// const calculator = (num1, operator, num2) => {
//   switch (operator) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num2 * num2;
//     case '/':
//       return num1 / num2;
//     default:
//       'please input correct value and operator';
//   }
// };
// const result = calculator(5, '+', 10);
// console.log(result);

/**
 * Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
 */
// const generateRandomPassword = () => {
//   const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
//   const numbers = '0123456789';
//   const specialCharacters = '!@#$%^&*()_-+=<>?/[]{}|';
//   const allCharacters =
//     uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
//   let password = '';
//   for (let i = 0; i < allCharacters.length; i++) {
//     const randomIndex = Math.floor(Math.random() * allCharacters.length);
//     password += allCharacters[randomIndex];
//   }
//   return password;
// };
// const result = generateRandomPassword();
// console.log(result);

/**
 * Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
 */

const romanToInteger = (romanNumber) => {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let preValue = 0;
  for (let i = romanNumber.length - 1; i >= 0; i--) {
    const currentValue = romanNumbers[romanNumber[i]];

    if (currentValue < preValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    preValue = currentValue;
  }
  return result;
};
const result = romanToInteger('XXI');
console.log(result);
