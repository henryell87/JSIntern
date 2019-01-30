// Henry Ell  // rotRem.js
// January 28, 2019 // JSIntern
//This function rotates a string to the right.
function animate_string(id) 
{
    var element = document.getElementById(id);
    var str1Node = element.childNodes[0]; // assuming no other children
    var str1 = str1Node.data;

setInterval(function () 
{
 str1 = str1[str1.length - 1] + str1.substring(0, str1.length - 1);
  str1Node.data = str1;
}, 100);
}
//console.log (animate_string('javaScriptresource'));
//The string length has to be greater than one in order for this function to work.
function first_last(str1) 
  {
  if (str1.length <= 1)
  {
    return str1;
  }
  //Here the function swaps the first character in the string with the last character in the string.
  mid_char = str1.substring(1, str1.length - 1);
  return (str1.charAt(str1.length - 1)) + mid_char + str1.charAt(0);
}
console.log(first_last('a'));
console.log(first_last('ab'));
console.log(first_last('javaScriptresource'));