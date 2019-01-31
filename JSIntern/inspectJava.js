// Henry Ell  // inspectJava.js
// January 30 , 2019 // JSIntern
//This program checks to see if a string starts with 'Java'.
function inspect_str(str)
{
  //Checks the string length to see if it is at least 4 characters long.
  if (str.length < 4)
  {
    return false;
  }
  //Creates a sub- string called front.
  //Checks to see if first 4 characters are JAVA.
  front = str.substring(0, 4);
  if (front == 'Java') 
  {
    return true;
  }
   else 
   {
    return false;
  }
}

console.log(inspect_str("JavaScript"));
console.log(inspect_str("Java"));
console.log(inspect_str("SuperjavaPython"));
