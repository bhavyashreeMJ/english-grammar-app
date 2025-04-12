
const questions = [
  "Which word is an adjective? - Tall / Run",
  "Choose the adjective: - Beautiful / Jump",
  "Adjective in 'The red apple': - Red / Apple",
  "Find the adjective: - The cake is sweet.",
  "Pick the correct adjective: - Soft / Sing",
  "Which describes a noun? - Happy / Fast",
  "Select the adjective: - Clever / Run",
  "Identify the adjective: - Blue / Jump",
  "Choose the adjective: - Shiny / Book",
  "Pick the adjective in this sentence: - He has a long pencil.",
  "What is the adjective? - She wore a pink dress.",
  "Which one is not an adjective? - Chair / Smooth",
  "Pick a comparative adjective: - Taller / Tall",
  "Superlative form of 'big': - Biggest / Big",
  "Choose the correct adjective: - He is very kind.",
  "Adjective in 'She is a smart girl': - Smart / Girl",
  "Find the describing word: - The old man walked.",
  "Identify the adjective: - Happy / Quickly",
  "Choose: - The ___ puppy barked. (playful / play)",
  "Select the adjective: - Friendly / Swim"
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
