// Henry Ell  // frntBack.js
// January 30, 2019 // JSIntern
//JavaScript program to create a new string from a given string 
//with the first character of the given string added at the front and back.
function backFrnt(str)
//Identifies the first character in the string.
{
  first = str.substring(0,1);
  //Returns the first character of the given string added at the front and back.
  return first + str + first;
}
console.log(backFrnt('k'));
console.log(backFrnt('lo'));
console.log(backFrnt('klope'));