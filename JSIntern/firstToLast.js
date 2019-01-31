// Henry Ell  // firstToLast.js
// January 30, 2019 // JSIntern
//This JavaScript program creates a new string from a given string
// changing the position of the first and last characters. 
//The string length must be greater than or equal to 1.
function fTol(str1) 
  {
      //Measures the string length to see if it is greater than 1.
  if (str1.length <= 1)
  {
    return str1;
  }
  //Replaces the first character in the string with the last. 
  //Replaces the last character in the string with the first.
  mid_char = str1.substring(1, str1.length - 1);
  return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(fTol('d'));
console.log(fTol('ag'));
console.log(fTol('asduht'));
