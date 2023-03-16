//html element - different pages
var startingPage = document.querySelector('#starting-page');
var quizPage = document.querySelector('#quiz');
var gameOverPage = document.querySelector('#game-over');
var highScorePage = document.querySelector('#high-scores');

// html element - starting page
var startButton = document.querySelector('.start-button');

//html element - quiz page: timer-score-view high score aside thing
var timerEl = document.querySelector('.timer-counter');
var scoreEl = document.querySelector('.score-counter');
var viewHighScoreButton = document.querySelector('.view-scores');

//html element - quiz page
var questionEl = document.querySelector('.question');
var optionsDiv = document.querySelector('#options'); // for event delegation
var optionA  = document.querySelector('.option-a');
var optionB  = document.querySelector('.option-b');
var optionC  = document.querySelector('.option-c');
var optionD  = document.querySelector('.option-d');
var showResult = document.querySelector('.result');


//html element - game over page
var finalScore = document.querySelector('.final-score');
var initialsInput = document.querySelector('.input-initials');
var initialsSubmit = document.querySelector('.submit-button');

//html elements - high score page
var highScoreList = document.querySelector('.score');
var goBackButton = document.querySelector('.go-back');
var clearButton = document.querySelector('.clear');

//global variables
var timer;
var timerCount;
var numCorrect;
var chosenQuestion = '';
var answer;
var questionIndex = 0;
var initials;


// array of questions to ask
var toAsk = [
    {
        question: "What are object properties separated by?",
        options: [
            {text: "semicolon", isCorrect: false},
            {text: "spaces", isCorrect: false},
            {text: "commas", isCorrect: true},
            {text: "dashes", isCorrect: false}
        ]
    },
    {
        question: "Which array method adds items to the end of an array?",
        options: [
            {text: ".push()", isCorrect: true},
            {text: ".pop()", isCorrect: false},
            {text: ".shift()", isCorrect: false},
            {text: ".slice()", isCorrect: false}
        ]
    },
    {
        question: "What does the CSS pseudo-class :hover do?",
        options: [
            {text: "it applies styles to an element that a mouse hovers over", isCorrect: true},
            {text: "it applies styles to an element that a mouse is clicking on", isCorrect: false},
            {text: "it applies style to an element a mouse has clicked", isCorrect: false},
            {text: "it applies style to an element that has not been clicked", isCorrect: false}
        ]
    },
    {
        question: "What is the index number of the first item in an array?",
        options: [
            {text: "1", isCorrect: false},
            {text: "0", isCorrect: true},
            {text: "I", isCorrect: false},
            {text: "A", isCorrect: false}
        ]
    },
    {
        question: "Where are JavaScript files linked in the HTML file?",
        options: [
            {text: "in the <head> section after stylesheets", isCorrect: false},
            {text: "in the beginning of the <body> section before all code", isCorrect: false},
            {text: "in the <head> section before stylesheets", isCorrect: false},
            {text: "after all the HTML code in the <body> section", isCorrect: true}
        ]
    },
    {
        question: "Which of the following is NOT a primitive data type?",
        options: [
            {text: "undefined", isCorrect: false},
            {text: "object", isCorrect: true},
            {text: "number", isCorrect: false},
            {text: "booleans", isCorrect: false}
        ]
    },
    {
        question: "Which CSS display property makes an element start on a new line?",
        options: [
            {text: "display: flex", isCorrect: false},
            {text: "display: inline", isCorrect: false},
            {text: "display: block", isCorrect: true},
            {text: "display: none", isCorrect: false}
        ]
    },
    {
        question: "Which operator returns the remainder of two numbers?",
        options: [
            {text: "%", isCorrect: true},
            {text: "/", isCorrect: false},
            {text: "+", isCorrect: false},
            {text: "-", isCorrect: false}
        ]
    },
    {
        question: "which statement is TRUE?",
        options: [
            {text: "9 == \"8 + 1\"", isCorrect: false},
            {text: "\"six\" = \"six\"", isCorrect: false},
            {text: " \"16\" === 16", isCorrect: false},
            {text: "9 + 8 === 17", isCorrect: true}
        ]
    },

    {
        question: "Which logical operator signifies that a condition is true if BOTH expressions are true?",
        options: [
            {text: "!", isCorrect: false},
            {text: "||", isCorrect: false},
            {text: "===", isCorrect: false},
            {text: "&&", isCorrect: true}
        ]
    },
    {
        question: "What runs a code repeatedly until a specific condition is met?",
        options: [
            {text: "if-else loop", isCorrect: false},
            {text: "functional loop", isCorrect: false},
            {text: "for loop", isCorrect: true},
            {text: "string concatenation", isCorrect: false}
        ]
    },
    {
        question: "Which event triggers a function when an HTML element is clicked?",
        options: [
            {text: "submit", isCorrect: false},
            {text: "click", isCorrect: true},
            {text: "dblclick", isCorrect: false},
            {text: "mousedown", isCorrect: false}
        ]
    },
    {
        question: "What is another way of writing i + 1?",
        options: [
            {text: "i++", isCorrect: true},
            {text: "i--", isCorrect: false},
            {text: "i**", isCorrect: false},
            {text: "i+=", isCorrect: false}
        ]
    },
    {
        question: "Which of the following runs a code if a condition is true, but will not run the code if the condition is not true?",
        options: [
            {text: "function", isCorrect: false},
            {text: "else statement", isCorrect: false},
            {text: "for loop", isCorrect: false},
            {text: "if statement", isCorrect: true}
        ]
    },
    {
        question: "What operator is used when creating assigning values to variables?",
        options: [
            {text: ":", isCorrect: false},
            {text: "-", isCorrect: false},
            {text: "=", isCorrect: true},
            {text: "===", isCorrect: false}
        ]
    },
];

var totalQuestions = toAsk.length;

//render pages
function renderStartingPage() {
    startingPage.setAttribute("style", "display: block");
    quizPage.setAttribute("style", "display: none");
    gameOverPage.setAttribute("style", "display: none");
    highScorePage.setAttribute("style", "display: none");
};

function renderQuizPage() {
    startingPage.setAttribute("style", "display: none");
    quizPage.setAttribute("style", "display: block");
    gameOverPage.setAttribute("style", "display: none");
    highScorePage.setAttribute("style", "display: none");

    numCorrect = 0;
    timerCount = 90;
    renderQuestions();
};

function renderGameOverPage() {
    startingPage.setAttribute("style", "display: none");
    quizPage.setAttribute("style", "display: none");
    gameOverPage.setAttribute("style", "display: block");
    highScorePage.setAttribute("style", "display: none");

    finalScore.textContent = numCorrect;
};

function renderHighScoresPage() {
    startingPage.setAttribute("style", "display: none");
    quizPage.setAttribute("style", "display: none");
    gameOverPage.setAttribute("style", "display: none");
    highScorePage.setAttribute("style", "display: block");

    displayHighScores();
};

//starting page goes away, quiz page is shown, timer starts
function newGame() {
    numCorrect = 0;
    timerCount = 90;
    scoreEl.textContent = numCorrect;
    timerEl.textContent = timerCount; 
    questionIndex = 0;
}

function init() {
    newGame();
}

function quizStart() {
    timerStart();
    renderQuizPage();
};

//timer starts
// timer stops when there are no more questions and if there is no time left
function timerStart() {
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        if (timerCount > 0) {
            if (totalQuestions === 0 && timerCount > 0) {
                clearInterval(timer);
                renderGameOverPage();
            }
        }
        if (timerCount <= 0) {
            clearInterval(timer);
            renderGameOverPage();
        }
    }, 1000);
};

//questions show up on quiz page pick a question randomly
function renderQuestions() {
    showResult.setAttribute("style", "visibility: hidden");

    questionEl.textContent = toAsk[questionIndex].question;
    optionA.textContent = toAsk[questionIndex].options[0].text;
    optionB.textContent = toAsk[questionIndex].options[1].text;
    optionC.textContent = toAsk[questionIndex].options[2].text;
    optionD.textContent = toAsk[questionIndex].options[3].text;
    
    optionA.value = toAsk[questionIndex].options[0].isCorrect;
    optionB.value = toAsk[questionIndex].options[1].isCorrect;
    optionC.value = toAsk[questionIndex].options[2].isCorrect;
    optionD.value = toAsk[questionIndex].options[3].isCorrect; //sets data value to isCorrect

    totalQuestions--;

};

//answer is correct -- if i answered correctly then score goes up by 10pts & correct message pops up
//answer is incorrect -- if i answered incorrectly then timer goes down by 10 seconds & incorrect message pops up 
function ifCorrect(answer) {
    console.log("This is the answer: " + answer);
    if (answer === "true") {
        numCorrect += 10;
        scoreEl.textContent = numCorrect;
        questionIndex++;
        renderQuestions();

        console.log("you are correct");
    } else {
        timerCount -=10;
        timerEl.textContent = timerCount;
        questionIndex++;
        renderQuestions();

        console.log("you are incorrect")
    };
};

//when i click on view high scores, i stop seeing quiz page, and i see list of high scores


//display list of high scores in order of high scores
function storeHighScore() {
    var playerStats = {
        initials: initialsInput.value.trim(),
        score: numCorrect
    };

    localStorage.setItem("playerStats", JSON.stringify(playerStats));
};

function displayHighScores() {
    var lastPlayerStats = JSON.parse(localStorage.getItem("playerStats"));

    console.log(lastPlayerStats);
    if (lastPlayerStats !== null) {
        var playerScore = document.createElement("li");
        playerScore.textContent = lastPlayerStats.initials + " --- " + lastPlayerStats.score;
        highScoreList.appendChild(playerScore);
    }
}

init();

startButton.addEventListener("click", quizStart);


optionsDiv.addEventListener("click", function(event) {
    var element = event.target;

    console.log(event);
    console.log(element);

    if (element.matches(".option-btn")) {
        ifCorrect(element.value);
    }
});

initialsSubmit.addEventListener('click', function(event) {
    event.preventDefault;
    storeHighScore();
    renderHighScoresPage();
});

goBackButton.addEventListener('click', function() {
    renderStartingPage();
    newGame();
});

clearButton.addEventListener('click', function(event) {
    localStorage.clear();

    storeHighScore();
    displayHighScores();
})