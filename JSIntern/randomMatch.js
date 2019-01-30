// Henry Ell  // randomMatch.js
// January 29, 2019 // JSIntern
function check() {
    // returns a random integer from 1 to 10
    var x = Math.floor((Math.random() * 10) + 1);
    //Sets up a variable that is the guess of the user.
    var i = document.getElementById('inputFiled').value;
    //Compares the guess of the user to the random variable to see if they match.
    if (i === x) {
      return "Good Work";
    }else {
       return "Not matched";
    }
   
}
