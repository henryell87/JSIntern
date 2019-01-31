// Henry Ell  // checkPosNeg.js
// January 30, 2019 // JSIntern
//This program takes from two given integers to see if one is positive and one is negative.
function posNeg(x, y)
{
    //Variable X and Y are checked to see if they are above or below 0.
  if ((x > 0 && y < 0) || x < 0 && y > 0) 
  {
    return true;
  }
  else 
  {
    return false;
  }
}
console.log(posNeg(-4, 5));
console.log(posNeg(6, -5));
console.log(posNeg(-4, -8));
console.log(posNeg(10, 10));