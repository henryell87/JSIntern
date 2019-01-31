// Henry Ell  // test100.js
// January 28, 2019 // JSIntern
//This JavaScript program checks a given integer to see if it is within 20 of 100 or 400.
function testHun(x) {
  return ((Math.abs(100 - x) <= 20) ||
	 (Math.abs(400 - x) <= 20));
}

console.log(testHun(20));
console.log(testHun(190));
console.log(testHun(90));
console.log(testHun(299));
console.log(testHun(200));
