const nextBtn = document.getElementById('nextBtn');
const multiplicationText = document.getElementById('multiplication');
const answerInput = document.getElementById('answer');

nextBtn.addEventListener('click', () => {
  const num1 = Math.floor(Math.random() * 9) + 1;
  const num2 = Math.floor(Math.random() * 9) + 1;
  const answer = num1 * num2;

  multiplicationText.textContent = `${num1} x ${num2} =`;

  setTimeout(() => {
    checkAnswer(answer);
  }, 2000);
});

function checkAnswer(correctAnswer) {
    const userAnswer = parseInt(answerInput.value);
  
    if (isNaN(userAnswer) || userAnswer !== correctAnswer) {
      answerInput.value = correctAnswer; // Affichage du résultat correct dans la zone de saisie
      answerInput.style.color = 'red';
      // Simuler un bip (ici en utilisant un affichage console)
      console.log('Bip! Réponse incorrecte ou temps écoulé.');
    } else {
      answerInput.style.color = 'black'; // Réinitialisation de la couleur de la saisie
    }
  }

document.addEventListener('DOMContentLoaded', function() {
    const nextBtn = document.getElementById('nextBtn');
    nextBtn.click(); // Simuler un clic sur le bouton "NEXT" une fois la page chargée
  });
