// Henry Ell  // areaTri.js
// January 28, 2019 // JSIntern
//This program finds the area of a triangle with the links of the three sides are 5, 6, 7.
//These variables are created to represent the sides of a triangle
var side1 = 5;
var side2 = 6;
var side3 = 7;
//The following variable s represents the perimeter.
var s = (side1+ side2+ side3)/2;
//The Math.sqrt() function is used to get the square root of a number. If the value of the number is negative, Math.sqrt() returns NaN.
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
console.log(area);