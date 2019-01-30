// Henry Ell  // sumTrip.js
// January 29, 2019 // JSIntern
//This JavaScript program computes the sum of two given integers. 
//If the two values are the same, then return tripled the sum.
function sumTripl (x, y) {
  if (x == y) {
    return 3 * (x + y);
    } 
   else
   {
    return (x + y);
   }
 }
console.log(sumTripl(20, 20));
console.log(sumTripl(10, 40));