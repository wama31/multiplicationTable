const nextBtn = document.getElementById('nextBtn');
const multiplicationText = document.getElementById('multiplication');
const answerInput = document.getElementById('answer');
const progressBar = document.getElementById('progressBar');
const timeOut = 6;
const progressBarMaxValue = 100;
let interval = null;
let num1 = 0;
let num2 = 0;
let answer = num1 * num2;

progressBar.max = progressBarMaxValue;


nextBtn.addEventListener('click', () => {
  num1 = Math.floor(Math.random() * 9) + 1;
  num2 = Math.floor(Math.random() * 9) + 1;
  answer = num1 * num2;

  multiplicationText.textContent = `${num1} x ${num2} =`;
  answerInput.focus();
  answerInput.style.color = 'black'; // init fetch color
  answerInput.style.backgroundColor = 'white';
  answerInput.textContent = "";


  let currentValue = 100;
  interval = setInterval(() => {
    currentValue -= 0.05;
    progressBar.value = currentValue;
    if (currentValue <= 0) {
      clearInterval(interval);
      checkAnswer(answer);
    }
  }, timeOut);
});

answerInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    clearInterval(interval);
    checkAnswer(answer);
  }
});

function checkAnswer(correctAnswer) {
    const userAnswer = parseInt(answerInput.value);
    if (userAnswer == correctAnswer) {
      answerInput.style.backgroundColor  = 'green';
    }
    else{
      answerInput.style.backgroundColor  = 'red';
    }
  }

document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.click(); // Simuler un clic sur le bouton "NEXT" une fois la page chargée
  });
