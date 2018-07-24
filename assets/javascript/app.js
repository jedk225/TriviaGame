$(document).ready(function () {
    var correct = 0;
    console.log("Correct: " + correct);
    var incorrect = 0;
    console.log("Incorrect: " + incorrect);
    console.log("------------")

    function submitAnswers() {
        var correctAnswer1 = document.getElementById("1a");
        if (correctAnswer1.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
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


        var correctAnswer4 = document.getElementById("4a");
        if (correctAnswer4.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }


        var correctAnswer5 = document.getElementById("5b");
        if (correctAnswer5.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }


        var correctAnswer6 = document.getElementById("6d");
        if (correctAnswer6.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }


        var correctAnswer7 = document.getElementById("7b");
        if (correctAnswer7.checked === true) {
            correct++;
            console.log("Correct: " + correct);
        } else {
            incorrect++;
            console.log("Incorrect: " + incorrect);
        }

        alert("Correct: " + correct);
        alert("Incorrect: " + incorrect);
        //window.location.href = 'results.html';
        $("#main-body").html("<h3>" + "Correct: " + correct + "</h3>" +
            "<h3>" + "Incorrect: " + incorrect + "</h3>" +
            "<h3>" + "Percentage Correct: " + Math.floor(correct/(correct+incorrect)*100) + "%" + "</h3>");
    }


    $("#submitBTN").click(function () {
        submitAnswers();
    });


});