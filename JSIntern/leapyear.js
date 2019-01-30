// Henry Ell  // rotRem.js
// January 28, 2019 // JSIntern
//This function calculates leap year for any year given.
function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2012));
console.log(leapyear(2020));
console.log(leapyear(1600));
console.log(leapyear(1800));
console.log(leapyear(100));
