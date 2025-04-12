
const questions = [
  "Choose the conjunction: - And / Run",
  "Identify the joining word: - Or / Fast",
  "Pick the correct one: - But / Eat",
  "Find the conjunction: - I like tea and coffee.",
  "Select the conjunction: - Because / Red",
  "Which is used to join two ideas? - So / Table",
  "Choose the conjunction: - Although / Apple",
  "Find it: - She was tired but happy.",
  "Which is not a conjunction? - Pencil / Yet",
  "Pick the correct one: - He will win or lose.",
  "Conjunction in 'I came because I care': - Because / Care",
  "Choose: - She studied hard, so she passed.",
  "Pick a coordinating conjunction: - And / On",
  "Identify the correlative conjunction: - Either / Or",
  "Choose a subordinating conjunction: - While / Ball",
  "Select: - Although it rained, we went out.",
  "Pick the conjunction: - Even though / Dance",
  "Choose: - I ran fast but missed the train.",
  "Select the joining word: - If / Tall",
  "Find: - He is tall and strong."
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
