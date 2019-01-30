// Henry Ell  // deGrader.js
// January 28, 2019 // JSIntern
var grade = Math.floor(Math.random() * (100 - +0));
var testTypes = ["standard", "pop-quiz", "final", "pretest", "post-test"];
function didPass(grade, testTypes) {
    switch (testTypes) {
        case "standard":
            // execute case x code block
            if (grade >= 89 && grade <= 100) {
                return true
            }
            break;
        case "pop-quiz":
            // execute case x code block
            if (grade >= 60 && grade <= 100) {
                return true
            }
            break;
        case "final":
            // execute case x code block
            if (grade >= 90 && grade <= 100) {
                return true
            }
            break;
        case "pretest":
            // execute case x code block
            if (grade >= 50 && grade <= 100) {
                return true
            }
            break;
        case "post-test":
            // execute case x code block
            if (grade >= 75 && grade <= 100) {
                return true
            }
            break;
        default:
            return false;
    }
}

function deGrade() {
    for (i = 0; i < testTypes.length; i++) {
        var test = testTypes[i];
        var score = grade;
        if (didPass(score, test)) {
            console.log("youre an idiot")
        }
    }
}
console.log("today")
console.log(grade)