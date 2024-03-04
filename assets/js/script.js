const questionEl = document.getElementById('questionText');
const answerBtns = document.querySelectorAll('.answer');
const timerEl = document.getElementById('timer');
let highScores = JSON.parse(localStorage.getItem('highscores'));
let score;
let time;

/*
    list of question object
    question: trivia question
    answers: 4 possible answers for the question
    correct: index of correct answer in answers
*/
const questions = [
    {
        question: "What is the primary function of JavaScript?",
        answers: [
            "Manipulating HTML and CSS",
            "Managing server-side databases",
            "Calculating complex mathematical equations",
            "Handling client-side scripting"
        ],
        correct: 3
    },
    {
        question: "Which keyword defines a variable that can not be reassigned?",
        answers: [
            "var",
            "let",
            "const",
            "int"
        ],
        correct: 2
    },
    {
        question: "What does DOM stand for in JavaScript?",
        answers: [
            "Document Object Model",
            "Data Object Management",
            "Direct Object Manipulation",
            "Document Order Method"
        ],
        correct: 0
    },
    {
        question: "Which built-in method is used to print content to the console in JavaScript?",
        answers: [
            "log()",
            "display()",
            "print()",
            "console.log()"
        ],
        correct: 3
    },
    {
        question: "What method is used to concatenate two or more strings in JavaScript?",
        answers: [
            "join()",
            "merge()",
            "concat()",
            "combine()"
        ],
        correct: 2
    },
    {
        question: "Which method is used to add a new element to the end of an array in JavaScript?",
        answers: [
            "push()",
            "pop()",
            "shift()",
            "unshift()"
        ],
        correct: 0
    },
    {
        question: "What type of language is JavaScript?",
        answers: [
            "Compiled",
            "Interpreted",
            "Hybrid",
            "Machine"
        ],
        correct: 1
    },
    {
        question: "Which of the following is NOT a valid JavaScript data type?",
        answers: [
            "Object",
            "Array",
            "Tuple",
            "String"
        ],
        correct: 2
    },
    {
        question: "Which symbol is used for strict equality comparison in JavaScript?",
        answers: [
            "==",
            "===",
            "=>",
            "!="
        ],
        correct: 1
    },
    {
        question: "What is the purpose of the 'this' keyword in JavaScript?",
        answers: [
            "To refer to the current object",
            "To denote the end of a statement",
            "To declare a function",
            "To perform arithmetic operations"
        ],
        correct: 0
    }
];

// hide all but the play button
function startPrompt() {
    score = 0;
    time = 0;
    questionEl.textContent = "Start game?";
    answerBtns[0].textContent = "Play";
    answerBtns[0].addEventListener('click', startGame);

    for (let i = 1; i < answerBtns.length; i++) {
        answerBtns[i].style.display = "none";
    }
}

// remove eventListener from "play" button
// start timer
// make all answer buttons visible
function startGame(event) {
    event.target.removeEventListener('click', startGame);
    shuffleQuestions();
    startTimer();
    for (let i = 0; i < answerBtns.length; i++) {
        answerBtns[i].style.display = 'inline-block';
    }

    displayQuestion(questions[0]);
}

function displayQuestion(question) {
    const shuffledQuestion = shuffleAnswers(question);

    questionEl.textContent = question.question;

    for (let i = 0; i < shuffledQuestion.answers.length; i++) {
        answerBtns[i].textContent = shuffledQuestion.answers[i];
        if (i === shuffledQuestion.correct) {
            answerBtns[i].dataset.correct = "true"
        } else {
            answerBtns[i].dataset.correct = "false"
        }
    }
}

function shuffleAnswers(question) {
    const shuffledAnswers = question.answers.slice();
    const correctIndex = question.correct;
    for (let i = shuffledAnswers.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [shuffledAnswers[i], shuffledAnswers[j]] = [shuffledAnswers[j], shuffledAnswers[i]];
    }

    const newCorrect = shuffledAnswers.indexOf(question.answers[correctIndex]);

    const shuffled = {
        answers: shuffledAnswers,
        correct: newCorrect
    }

    return shuffled;
}

function endGame() {
    console.log("Game Over");


}

function startTimer() {
    time = 75;
    timerEl.textContent = time;
    const interval = setInterval(function () {
        time--;
        timerEl.textContent = time;

        if (time <= 0) {
            clearInterval(interval);
            time = 0;
            endGame();
        }
    }, 1000)
}

function shuffleQuestions() {
    for (let i = questions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [questions[i], questions[j]] = [questions[j], questions[i]];
    }
}

// start the game
startPrompt();