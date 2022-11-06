const startButton = document.getElementById(`start-btn`);
const nextButton = document.getElementById(`next-btn`);
const questionContainerElement = document.getElementById(`question-container`);
const questionElement = document.getElementById(`question`);
const answerButtonsElement = document.getElementById(`answer-buttons`);

let shuffledQuestions, currentQuestionIndex;

infoButton.addEventListener(`click`, pressinfo);
startButton.addEventListener(`click`, startGame);
nextButton.addEventListener(`click`, () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  startButton.classList.add(`hide`);
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove(`hide`);
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement(`button`);
    button.innerText = answer.text;
    button.classList.add(`btn`);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener(`click`, selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add(`hide`);
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer() {
  const selectButton = event.target;
  const correct = selectButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  nextButton.classList.remove(`hide`);

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
  } else {
    startButton.innerText = `Restart`;
    startButton.classList.remove(`hide`);
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add(`correct`);
  } else {
    element.classList.add(`wrong`);
  }
}

function clearStatusClass(element) {
  element.classList.remove(`correct`);
  element.classList.remove(`wrong`);
}

const questions = [
  {
    question: `What is 2 + 2?`,
    answers: [
      { text: `4`, correct: true },
      { text: `5`, correct: false },
      { text: `5`, correct: false },
      { text: `5`, correct: false },
    ],
  },
  {
    question: `What is 4 + 4?`,
    answers: [
      { text: `9`, correct: false },
      { text: `8`, correct: true },
      { text: `16`, correct: false },
      { text: `6`, correct: false },
    ],
  },
  {
    question: `What is 4 * 4?`,
    answers: [
      { text: `9`, correct: false },
      { text: `8`, correct: false },
      { text: `16`, correct: true },
      { text: `6`, correct: false },
    ],
  },
  {
    question: `What is 101 + 4?`,
    answers: [
      { text: `141`, correct: false },
      { text: `104`, correct: false },
      { text: `1695`, correct: false },
      { text: `105`, correct: true },
    ],
  },
  {
    question: `What is 25 * 4?`,
    answers: [
      { text: `125`, correct: false },
      { text: `75`, correct: false },
      { text: `29`, correct: false },
      { text: `100`, correct: true },
    ],
  },
  {
    question: `What is 125 + 24?`,
    answers: [
      { text: `150`, correct: false },
      { text: `149`, correct: true },
      { text: `169`, correct: false },
      { text: `159`, correct: false },
    ],
  },
  {
    question: `What is 6 * 6?`,
    answers: [
      { text: `36`, correct: true },
      { text: `46`, correct: false },
      { text: `16`, correct: false },
      { text: `12`, correct: false },
    ],
  },
  {
    question: `What is 7 * 8?`,
    answers: [
      { text: `15`, correct: false },
      { text: `48`, correct: false },
      { text: `16`, correct: false },
      { text: `56`, correct: true },
    ],
  },
  {
    question: `What is 1567 + 433?`,
    answers: [
      { text: `1599`, correct: false },
      { text: `2000`, correct: true },
      { text: `2011`, correct: false },
      { text: `6121`, correct: false },
    ],
  },
];
