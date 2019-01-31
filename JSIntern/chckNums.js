// Henry Ell  // chckNums.js
// January 29, 2019 // JSIntern
//This is a JavaScript program to check to given numbers and 
//return true if one of the numbers is 50 or if their sum is 50.
function checkNum(x, y) 
{
  return ((x == 50 || y == 50) || (x + y == 50));
}
console.log(checkNum(50, 50))
console.log(checkNum(20, 50))
console.log(checkNum(20, 20))
console.log(checkNum(20, 30))
