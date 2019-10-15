
var questions = [
    "John Hammond, the InGen CEO of 'Jurassic Park', creates dinosaurs on this island...",
    "The opening sequence of 'Saving Private Ryan' depicts what military battle of World War II?",
    "Legendary critic and director François Truffaut appeared as a French scientist in this Spielberg film...",
    "This actor, who plays Elliott in 'E.T. The Extra-Terrestrial', auditioned for the role in an Indiana Jones costume.",
    "Which of these Spielberg movies features a slow-motion car chase?",
    "Oskar Schindler runs what kind of factory in 'Schindler's List'?",
    "What's the name of Quint's boat in 'Jaws'?",
    "What is the villain of Spielberg's first film, 'Duel'?",
    "Spielberg directed 'Raiders of the Lost Ark' based on a story by this fellow friend and filmmaker:",
    "Spielberg founded a production company in the early '80s and named it this, after his first film about a hitchhiking couple.",
];
var answer = [
    "ISLA NUBLAR",
    "NORMANDY",
    "CLOSE ENCOUNTERS OF THE THIRD KIND",
    "HENRY THOMAS",
    "THE SUGARLAND EXPRESS",
    "MUNITIONS",
    "ORCA",
    "TANKER TRUCK",
    "GEORGE LUCAS",
    "AMBLIN",
];

var wrongAnswerOne = [
    "FIJI",
    "WATERLOO",
    "A.I. ARTIFICIAL INTELLIGENCE",
    "RIVER PHOENIX",
    "ALWAYS",
    "CARS",
    "SHARK",
    "JEEP",
    "FRANCES FORD COPPOLA",
    "HITCHING POST",
];
var wrongAnswerTwo = [
    "COSTA RICA",
    "IWO JIMA",
    "EMPIRE OF THE SUN",
    "JOSEPH GORDON-LEVITT",
    "HOOK",
    "TOOLS",
    "PORPOISE",
    "CAR CARRIER",
    "HARRISON FORD",
    "BREEZIN",
];

var wrongAnswerThree = [
    "ISLA MUERTE",
    "BATTLE OF THE BULGE",
    "SCHINDLER'S LIST",
    "BRAD RENFRO",
    "CLOSE ENCOUNTERS OF THE THIRD KIND",
    "TOYS",
    "DOLPHIN",
    "TOW TRUCK",
    "MARTIN SCORSESE",
    "HITCHIN",
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











