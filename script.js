const startButton = document.getElementById(`start-btn`);
const nextButton = document.getElementById(`next-btn`);
const questionContainerElement = document.getElementById(`question-container`);
const questionElement = document.getElementById(`question`);
const answerButtonsElement = document.getElementById(`answer-buttons`);

let shuffledQuestions, currentQuestionIndex;

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
      { text: `6`, correct: false },
      { text: `3`, correct: false },
    ],
  },
  {
    question: `Wich one is the princess?`,
    answers: [
      { text: `Lilo`, correct: false },
      { text: `Snow White`, correct: true },
      { text: `Belle`, correct: false },
      { text: `Mulan`, correct: false },
    ],
  },
  {
    question: `How ninja turtles are?`,
    answers: [
      { text: `6`, correct: false },
      { text: `5`, correct: false },
      { text: `4`, correct: true },
      { text: `3`, correct: false },
    ],
  },
  {
    question: `Who was the best friend of Scooby-Doo?`,
    answers: [
      { text: `Velma`, correct: false },
      { text: `Daphne`, correct: false },
      { text: `Fred`, correct: false },
      { text: `Shaggy`, correct: true },
    ],
  },
  {
    question: `What was the name of the snowman from Frozen?`,
    answers: [
      { text: `Hans`, correct: false },
      { text: `Kristoff`, correct: false },
      { text: `Kai`, correct: false },
      { text: `Olaf`, correct: true },
    ],
  },
  {
    question: `What is the name of the fairy from Peter Pan?`,
    answers: [
      { text: `Vidia`, correct: false },
      { text: `Tinker Bell`, correct: true },
      { text: `Iridessa`, correct: false },
      { text: `Silvermist`, correct: false },
    ],
  },
  {
    question: `What is the name of the princess in Brave?`,
    answers: [
      { text: `Merida`, correct: true },
      { text: `Belle`, correct: false },
      { text: `Snow White`, correct: false },
      { text: `Queen Elinor`, correct: false },
    ],
  },
  {
    question: `Which princess can create and manipulate ice?`,
    answers: [
      { text: `Cinderella`, correct: false },
      { text: `Snow White`, correct: false },
      { text: `Anna`, correct: false },
      { text: `Elsa`, correct: true },
    ],
  },
  {
    question: `Which princess kissed a frog?`,
    answers: [
      { text: `Sleeping Beauty`, correct: false },
      { text: `Tiana`, correct: true },
      { text: `Moana`, correct: false },
      { text: `Ariel`, correct: false },
    ],
  },
];
