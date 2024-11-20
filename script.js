// Quiz questions and answers
const questions = [
    {
        number: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
          "Hyper Text Preprocessor",
          "Hyper Text Markup Language",
          "Hyper Text Multiple Language",
          "Hyper Tool Multi Language",
        ],
      },
      {
        number: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
          "Common Style Sheet",
          "Colorful Style Sheet",
          "Computer Style Sheet",
          "Cascading Style Sheet",
        ],
      },
      {
        number: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
          "Hypertext Preprocessor",
          "Hypertext Programming",
          "Hypertext Preprogramming",
          "Hometext Preprocessor",
        ],
      },
      {
        number: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
          "Stylish Question Language",
          "Stylesheet Query Language",
          "Statement Question Language",
          "Structured Query Language",
        ],
      },
      {
        number: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
          "eXtensible Markup Language",
          "eXecutable Multiple Language",
          "eXTra Multi-Program Language",
          "eXamine Multiple Language",
        ],
      },
    ];

let currentQuestion = 0;
let score = 0;
let playerName = "";

const startForm = document.getElementById("start-form");
const startButton = document.getElementById("start-button");
const quizContainer = document.querySelector(".quiz-container");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question");
const optionsList = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const endPage = document.querySelector(".end-page");
const playerNameElement = document.getElementById("player-name");
const playerScoreElement = document.getElementById("player-score");

startButton.addEventListener("click", () => {
    playerName = document.getElementById("name").value;
    startForm.style.display = "none";
    quizContainer.style.display = "block";
    displayQuestion();
});

nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector("input[type='radio']:checked");

    if (!selectedOption) {
        alert("Please select an option.");
        return;
    }

    if (selectedOption.value === questions[currentQuestion].answer) {
        score++;
    }

    selectedOption.checked = false;
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
});

function displayQuestion() {
    const currentQ = questions[currentQuestion];
    questionText.textContent = currentQ.question;
    optionsList.innerHTML = "";

    for (const option of currentQ.options) {
        const listItem = document.createElement("li");
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "option";
        radioInput.value = option;
        listItem.appendChild(radioInput);
        listItem.appendChild(document.createTextNode(option));
        optionsList.appendChild(listItem);
    }
}

function endGame() {
    quizContainer.style.display = "none";
    endPage.style.display = "block";
    playerNameElement.textContent = "Name: " + playerName;
    playerScoreElement.textContent = "Score: " + score;
}
