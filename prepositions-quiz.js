
const questions = [
  "Choose the preposition: - Under / Fast",
  "Identify the preposition: - On / Run",
  "Pick the preposition: - In / Dance",
  "Which is a preposition? - Over / Red",
  "Where is the preposition? - The cat is under the table.",
  "Select the preposition: - At / Book",
  "Which word is a preposition? - Behind / Chair",
  "Find the preposition: - The ball is behind the door.",
  "Choose: - The book is ___ the shelf. (on / book)",
  "Pick the correct one: - She lives ___ India. (in / of)",
  "Choose: - The keys are ___ the drawer. (inside / fast)",
  "Which one is a preposition of place? - Between / Smile",
  "Find the preposition: - He sat beside me.",
  "Pick the preposition of time: - Before / Happy",
  "Choose: - We arrived ___ 5 PM. (at / on)",
  "Which one shows direction? - Into / Eat",
  "Identify: - The plane flew above the clouds.",
  "Choose the correct word: - The dog ran ___ the house. (around / bark)",
  "Which is correct? - She went out of the room.",
  "Pick a preposition: - With / Quickly"
];

const quizContainer = document.getElementById('quiz-container');

questions.forEach((q, index) => {
  const qElem = document.createElement('div');
  qElem.innerHTML = `<p><strong>Q{index + 1}:</strong> {q}</p>
    <input type='text' id='answer{index}' placeholder='Your answer here'>`;
  quizContainer.appendChild(qElem);
});

function submitQuiz() {
  let correct = 0;
  questions.forEach((q, index) => {
    const userAns = document.getElementById('answer' + index).value.trim().toLowerCase();
    if (q.toLowerCase().includes(userAns) && userAns !== '') {
      correct++;
    }
  });
  document.getElementById('result').innerText = `You answered {correct} out of {questions.length} correctly!`;
}
