// Henry Ell  // chckStr.js
// January 30 , 2019 // JSIntern
//This JavaScript program creates a new string by adding "PY" in front of a given string. 
//If the demonstration begins with "PY" then return the original string.
function strCheck(str1) {
    //Compares the string to see if it is not or undefined.
  if (str1 === null || str1 === undefined || str1.substring(0, 2) === 'Py') 
  {
    return str1;
  }
  return "Py"+str1;
}

console.log(strCheck("Pylon"));
console.log(strCheck("lon"));
