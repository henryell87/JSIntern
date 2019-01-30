// Henry Ell  // tempConvert.js
// January 29, 2019 // JSIntern
//This program converts temperatures to learn from Celsius and Fahrenheit.
//Fahrenheit to Celsius : (°F − 32) ÷ 1.8 = °C 
//Celsius to Fahrenheit : (°C × 1.8) + 32 = °F
//This function convert Celsius to Fahrenheit.
function celToFha(celsius) 
{
  var celTemp = celsius;
  var celToFhar = celTemp * 9 / 5 + 32;
  var message = celTemp+'\xB0C is ' + celToFhar + ' \xB0F.';
    console.log(message);
}
//This function converts Fahrenheit to Celsius.
function fhaToCel(fahrenheit) 
{
  var fhaTemp = fahrenheit;
  var fharToCel = (fhaTemp - 32) * 5 / 9;
  var message = fhaTemp+'\xB0F is ' + fharToCel + '\xB0C.';
    console.log(message);
} 
celToFha(60);
fhaToCel(45);