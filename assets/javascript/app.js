$(document).ready(function () {
    var correct = 0;
    console.log("Correct: " + correct);
    var incorrect = 0;
    console.log("Incorrect: " + incorrect);
    console.log("------------")


    $("#submitBTN").click(function () {
        var correctAnswer1 = document.getElementById("1a");

        if (correctAnswer1.checked === true) {
            //alert("correct");
            correct++;
            console.log("Correct: " + correct);
        } else {
            //alert("wrong")
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }


        var correctAnswer2 = document.getElementById("2c");

        if (correctAnswer2.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }

        var correctAnswer3 = document.getElementById("3d");

        if (correctAnswer3.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }

        alert("Correct: " + correct);
        alert("Incorrect: " + incorrect);
    
    });


});