// Henry Ell  // chckStr.js
// January 28, 2019 // JSIntern
//JavaScript program to remove a character at the specified position 
//of a given string and return the new string.
function charcRem(str, char_pos) 
 {
    //Code breaks down string into substring and removes character 
    //at a certain position then reassembles string. 
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return (part1 + part2);
 }

console.log(charcRem("Oracle",0));
console.log(charcRem("Oracle",3));
console.log(charcRem("Oracle",5));