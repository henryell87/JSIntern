// Henry Ell  // ABS19.js
// January 29, 2019 // JSIntern
function absDiff(n) {
  if (n <= 19) {
    return (19 - n);
    }
  else
    {
     return (n - 19) * 3;
    }
}

console.log(absDiff(10));
console.log(absDiff(19));
console.log(absDiff(27));
