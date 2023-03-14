//html elements
var startButton = document.querySelector('.start-button');
var timerEl = document.querySelector('.timer-counter');
var scoreEl = document.querySelector('.score-counter');
var questionEl = document.querySelector('.question');
var optionButton  = document.querySelector('.option');
var viewHighScore = document.querySelector('.view-scores');

//form elements
var initialsInput = document.querySelector('.input-initials');
var initialsSubmit = document.querySelector('.submit-button');

//global variables
var timer;
var timerCount;
var numCorrect = 0;
var chosenQuestion = '';
var answer;

// question object constructor
function Question(question, optionA, optionB, optionC, optionD, correctAnswer) {
    this.question = question;
    this.optionA = optionA;
    this.optionB = optionB;
    this.optionC = optionC;
    this.optionD = optionD;
    this.correctAnswer = correctAnswer
};

// array of questions to ask - pick randomly
var toAsk = [];

var quest1 = new Question(
    "What are object properties separated by?",
    "semicolon",
    "spaces",
    "commas",
    "dashes",
    "optionC"
);

var quest2 = new Question(
    "Which array method adds items to the end of an array?",
    ".push()",
    ".pop()",
    ".shift",
    ".slice()",
    "optionA"
);

var quest3 = new Question(
    "What does the CSS pseudo-class :hover do?",
    "it applies styles to an element that a mouse hovers over",
    "it applies styles to an element that a mouse is clicking on",
    "it applies style to an element a mouse has clicked",
    "it applies style to an element that has not been clicked",
    "option A"
);

var quest4 = new Question(
    "What is the index number of the first item in an array?",
    "1",
    "0",
    "I",
    "A",
    "optionB"
);

var quest5 = new Question(
    "Where are JavaScript files linked in the HTML file?",
    "in the <head> section after stylesheets",
    "in the beginning of the <body> section before all code",
    "in the <head> section before stylesheets",
    "after all the HTML code in the <body> section",
    "optionD"
);

var quest6 = new Question(
    "Which of the following is NOT a primitive data type?",
    "undefined",
    "object",
    "number",
    "booleans",
    "optionB"
);

var quest7 = new Question(
    "Which CSS display property makes an element start on a new line?",
    "display: flex",
    "display: inline",
    "display: block",
    "display: none",
    "optionC"
);

var quest8 = new Question(
    "Which operator returns the remainder of two numbers?",
    "%",
    "/",
    "+",
    "-",
    "optionA"
);

var quest9 = new Question(
    "which statement is TRUE?",
    "9 == \"8 + 1\"",
    "\"six\" = \"six\"",
    " \"16\" === 16",
    "9 + 8 === 17",
    "optionD"
);

var quest10 = new Question(
    "Which logical operator signifies that a condition is true if BOTH expressions are true?",
    "!",
    "||",
    "!!",
    "&&",
    "optionD"
);

var quest11 = new Question(
    "What runs a code repeatedly until a specific condition is met?",
    "if-else loop",
    "functional loop",
    "for loop",
    "string concatenation",
    "optionC"
);

var quest12 = new Question(
    "Which event triggers a function when an HTML element is clicked?",
    "submit",
    "click",
    "dblclick",
    "mousedown",
    "optionB"
);

var quest13 = new Question(
    "What is another way of writing i + 1",
    "i++",
    "i--",
    "i**",
    "i+=",
    "optionA"
);

var quest14 = new Question(
    "Which of the following runs a code if a condition is true?",
    "function",
    "else statement",
    "for loop",
    "if statement",
    "optionD"
);

var quest15 = new Question(
    "What operator is used when creating assigning values to variables?",
    ":",
    "-",
    "=",
    "==",
    "optionC"
);

toAsk.push(quest1, quest2, quest3, quest4, quest5, quest6, quest7, quest8, quest9, quest10, quest11, quest12, quest13, quest14, quest15);

console.log(toAsk);

//starting page goes away, quiz page is shown, timer starts


//timer starts

//questions show up on quiz page pick a question randomly

//answer is correct -- if i answered correctly then score goes up by 10pts & correct message pops up

//answer is incorrect -- if i answered incorrectly then timer goes down by 10 seconds & incorrect message pops up

//when i click on view high scores, i stop seeing quiz page, and i see list of high scores

//show score

//game over -- stop game, show game over page

//input initials & submit (event listener) --> store in local storage

//display list of high scores in order of high scores