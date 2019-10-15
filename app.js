
var questions = [
    "December 11th, 1964, one of the greatest soul singers of all time was shot and killed under mysterious circumstances. Who was he?",
    "Which of these bands who is one of many that got their start at popular punk venue 'CBGB'?",
    "Who is known for biting the head off a bat on stage?",
    "What was the original band name for Blondie",
    "Who was the club owner of punk venue CBGB?",
    "Who was the founder of The Velvet Underground",
    "Which band sang the lyrics 'We are the champions, my friends/ And we'll keep on fighting till the end'",
    "Which Led Zeppelin memeber is the oldest?",

];
var answer = [
    "Sam Cooke",
    "Talking Heads",
    "Ozzy Ozbourne",
    "Angel and The Snake",
    "Hilly Crystal",
    "Lou Reed",
    "Queen",
    "Jimmy Page",

];




var intervalId;
var time = 25;
var i = -1;
var correct = 0;
var incorrect = 0;

$(document).ready(function () {
    //========================================================================================================================================================================
    $("#questionJumbotron").hide();
    $("#answerJumbotron").hide();
    $("#resultsJumbotron").hide();
    //========================================================================================================================================================================

    // Starts game - hides start button and calls nextQuestion
    $("#startbutton").on("click", function () {
        $("#startbutton").hide();
        nextQuestion();
    })

    // // Displays next question
    function nextQuestion() {
        clearInterval(intervalId);
        i++;
        $("#answerJumbotron").hide();
        $("#questionJumbotron").show();
        if (i < questions.length) {
            clearInterval(intervalId);
            resetQuestionTimer();
            questionTimer();
            $("#question").html(questions[i]);
            $("#answerOne").html(answer[i]);
            $("#answerTwo").html(wrongAnswerOne[i]);
            $("#answerThree").html(wrongAnswerTwo[i]);
            $("#answerFour").html(wrongAnswerThree[i]);
        } else {
            gameStartOver();
        }

    } // Closes nextQuestion

    $("#answerOne").on("click", function () {
        right();
    })
    $("#answerTwo").on("click", function () {
        wrong();
    })
    $("#answerThree").on("click", function () {
        wrong();
    })
    $("#answerFour").on("click", function () {
        wrong();
    })


    // Function created to reduce var time by 1. Holds conditional for question to be counted wrong if time runs out.
    function decrement() {
        time--;
        $("#questiontimer").html(time);
        if (time < 0) {
            wrong();
        }
    } // Closes function decrement

    function questionTimer() {
        intervalId = setInterval(decrement, 1000);
    }

    // Display on screen when answer is wrong **************************************************************
    function wrong() {
        incorrect++;
        clearInterval(intervalId);
        $("#questionJumbotron").hide();
        $("#answerJumbotron").show();
        $("#rightanswer").hide();
        $("#wronganswer").show();
        $("#wronganswer").html("INCORRECT!");
        $("#theAnswer").html("The Correct Answer Is " + answer[i]);
        setTimeout(nextQuestion, 1000 * 5);
    } // closes function wrong

    // Display on screen when answer is correct **************************************************************
    function right() {
        correct++;
        clearInterval(intervalId);
        $("#questionJumbotron").hide();
        $("#answerJumbotron").show();
        $("#wronganswer").hide();
        $("#rightanswer").show();
        $("#rightanswer").html("Correct!");
        $("#theAnswer").html(answer[i]);
        setTimeout(nextQuestion, 1000 * 5);
    } // closes function right

    // Resets var time
    function resetQuestionTimer() {
        time = 25;
    }

}) //closes $(document).ready(function()


function gameStartOver() {
    $("#questionJumbotron").hide();
    $("#answerJumbotron").hide();
    $("#resultsJumbotron").show();
    $("#resultsCorrect").html("Correct: " + correct);
    $("#resultsIncorrect").html("Incorrect: " + incorrect);
    setTimeout(gameReset, 1000 * 5);
} //Closes gameStartOver

// Resets Game
function gameReset() {
    $("#resultsJumbotron").hide();
    $("#startbutton").show();
    i = -1;
    time = 25;
    correct = 0;
    incorrect = 0;
}











