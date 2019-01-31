// Henry Ell  // check3or7.js
// January 30 , 2019 // JSIntern
//This program checks to see if a positive number is divisible by three or seven.
function check3_7(x) 
{
    //Checks to see if positive number is divisible by three or seven.
  if (x % 3 == 0 || x % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

console.log(check3_7(18));
console.log(check3_7(44));
console.log(check3_7(20));
console.log(check3_7(23));