// function countVowelsandConstan(str) {
//   const vowels = 'aeiouAEIOU';
//   let vowelCount = 0;
//   let constantCount = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       vowelCount++;
//     } else if (char.match(/[a-zA-Z]/)) {
//       constantCount++;
//     }
//   }
//   return { vowels: vowelCount, constants: constantCount };
// }
// const inputString = 'hello,Bangladesh';
// const result = countVowelsandConstan(inputString);
// console.log(result);

// function isPalindrome(str) {
//   const cleanedStr = str.toLowerCase().replace(/[^a-z]/g, '');
//   const reversedStr = cleanedStr.split('').reverse().join('');
//   return cleanedStr === reversedStr;
// }

// const inputString = 'A man, a plan, a canal, Panama';
// console.log(isPalindrome(inputString));

const higherOrderFunction = (callBackFunc) => {
  callBackFunc();
  console.log('after call function call');
};

const callBackFunc = () => {
  console.log('Hello programmers');
};
higherOrderFunction(callBackFunc);
