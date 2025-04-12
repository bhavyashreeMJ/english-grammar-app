
const correctAnswer = "is";
function checkAnswer(answer) {
    const result = document.getElementById("result");
    if (answer === correctAnswer) {
        result.textContent = "✅ Correct!";
    } else {
        result.textContent = "❌ Incorrect. Try again!";
    }
}
