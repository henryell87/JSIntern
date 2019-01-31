// Henry Ell  // JAN1.js
// January 28, 2019 // JSIntern
// JavaScript program to find which 1st January is being a Sunday between 2014 and 2050.
function firstSun () {
    
    for (var year = 2014; year <= 2050; year++) {
      var d = new Date(year, 0, 1);
      if (d.getDay() === 0) {
        console.log('The first day of ' + year + ' is a Sunday');
      }
    }
  }
  
  firstSun();