const question = document.getElementById('questionText');
const answers = document.querySelectorAll('.answer');

 /*
    question: trivia question
    answers: 4 possible answers for the question
    Index: index of correct answer in answers
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
      correct: 3
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

console.log(questions);
console.log(question);
console.log(answers);


function startGame() {
    question.textContent = "Start game?";
    answers[0].textContent = "Play";
    answers[0].addEventListener('click', questionOne);

    for (i = 1; i < answers.length; i++) {
        answers[i].style.visibility = "hidden";
        console.log(answers[i]);
    }
}

function questionOne(event) {
    console.log(event);
    event.target.removeEventListener('click', questionOne);
}

startGame();
