// Henry Ell  // tempConvert.js
// January 29, 2019 // JSIntern
//This JavaScript program gets the difference between 
//a given number and 13 if the number is greater than 
//13 it returns double the absolute difference.
function dubDiff(n)
 {
    if (n <= 13)
        return 13 - n;
    else
        return (n - 13) * 2;
 }
console.log(dubDiff(28))
console.log(dubDiff(9))