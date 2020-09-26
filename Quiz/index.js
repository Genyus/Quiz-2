const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerHTML = question.question;
  question.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    (startButton.innerText = "Start Over"),
      startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// the questions below with answers
const questions = [
  {
    question:
      "Which rap duo joined forces to release the album Watch The Throne in 2011?",
    answer: [
      {
        text: "Drake & Future",
        correct: false,
      },
      {
        text: "Meek Mill & Rick Ross",
        correct: false,
      },
      {
        text: "Lil Wayne & Drake",
        correct: false,
      },
      {
        text: "Jay-Z & Kanye West",
        correct: true,
      },
    ],
  },

  {
    question:
      "Migos are made up of rappers Quavo, Offset and Takeoff, but which is married to Cardi B?",
    answer: [
      {
        text: "Quavo",
        correct: false,
      },
      {
        text: "Offset",
        correct: true,
      },
      {
        text: "Takeoff",
        correct: false,
      },
    ],
  },

  {
    question:
      "What was the name of the record label Diddy began back in 1993 which helped launch the career of The Notorious B.I.G?",
    answer: [
      {
        text: "Def Jam Recordings",
        correct: false,
      },
      {
        text: "Bad Boy Records",
        correct: true,
      },
      {
        text: "Death Row Records",
        correct: false,
      },
      {
        text: "OVO Records",
        correct: false,
      },
    ],
  },

  {
    question:
      "Kanye West famously interrupted the acceptance speech of which singer at the 2009 MTV Video Music Awards?",
    answer: [
      {
        text: "Taylor SWift",
        correct: true,
      },
      {
        text: "Katy Pery",
        correct: false,
      },
      {
        text: "Lady Gaga",
        correct: false,
      },
      {
        text: "Shakira",
        correct: false,
      },
    ],
  },

  {
    question:
      "Kanye West famously interrupted the acceptance speech of which singer at the 2009 MTV Video Music Awards?",
    answer: [
      {
        text: "Taylor SWift",
        correct: true,
      },
      {
        text: "Katy Pery",
        correct: false,
      },
      {
        text: "Lady Gaga",
        correct: false,
      },
      {
        text: "Shakira",
        correct: false,
      },
    ],
  },
  {
    question: "Where did Stormzy work before becoming a famous musician?",
    answer: [
      {
        text: "Gym",
        correct: false,
      },
      {
        text: "Recod Shop",
        correct: false,
      },
      {
        text: "Oil Refinery",
        correct: true,
      },
      {
        text: "Tesco",
        correct: false,
      },
    ],
  },

  {
    question: "Where did Stormzy work before becoming a famous musician?",
    answer: [
      {
        text: "Gym",
        correct: false,
      },
      {
        text: "Recod Shop",
        correct: false,
      },
      {
        text: "Oil Refinery",
        correct: true,
      },
      {
        text: "Tesco",
        correct: false,
      },
    ],
  },

];
