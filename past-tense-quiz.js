
const questions = [
  "Past tense of 'go': - Went / Goes",
  "Choose: - She ___ to school. (walked / walk)",
  "Find past verb: - Jumped / Jump",
  "Select: - They ___ a movie. (watched / watch)",
  "Choose: - He ___ the bell. (rang / ring)",
  "Past of 'eat': - Ate / Eat",
  "Identify: - She sang well.",
  "Pick past tense: - Danced / Dance",
  "Choose: - I ___ the door. (closed / close)",
  "Find the correct one: - He ___ fast. (ran / run)",
  "Select past action: - Saw / See",
  "Pick: - The boy ___ happily. (played / play)",
  "Find past tense: - Drank / Drink",
  "Choose: - They ___ lunch early. (had / have)",
  "Past of 'write': - Wrote / Write",
  "Choose the past tense verb: - Thought / Think",
  "Select: - I ___ in the exam. (failed / fail)",
  "Pick the past: - Slept / Sleep",
  "Choose: - The lion ___ loudly. (roared / roar)",
  "Select past tense: - Took / Take"
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
