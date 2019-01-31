// Henry Ell  // frontBack3.js
// January 30, 2019 // JSIntern
//This program creates a new string from a given string 
//taking the last three characters and adding them at both the front and back.
// The string must be 3 or more in length.
function frntBack3(str) {
    //Checks to see if the string length is at least 3 characters long.
    if (str.length >= 3) {
        str_len = 3;
        //Creates a substring of three characters from back of string.
        back = str.substring(str.length - 3);
        //Returns sub string to front and back of original string.
        return back + str + back;
    }
    else
        return false;
}
console.log(frntBack3("dab"));
console.log(frntBack3("ab"));
console.log(frntBack3("dirtydog"));