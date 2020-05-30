// Exercise 1.
// Write a javaScript program to check two numbers and return true if one of the numbers is 100 or the sum of the two numbers is 100

/*
const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqualTo100(10, 90));
*/

// Exercise 2.
// Write a JavaScript program to get the extension of a file name.

/*
const getFileExtension = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));
console.log(getFileExtension('github.io'));
*/

// Exercise 3.
//Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.


const moveCharsForward = (str) => str
  .split('')
  .map(char => String.fromCharCode(char.charCodeAt (0) + 1))
  .join('');

  console.log(moveCharsForward('a, b, c'));

  


