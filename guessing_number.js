let randomNumber = Math.floor(Math.random() * 100) + 1;
let maxAttempts = 10;
let attemptsLeft = maxAttempts;
document.getElementById("attempts").textContent = 
    "Attempts left: " + attemptsLeft;
function checkGuess() {
    let userGuess = document.getElementById("guessInput").value;
    let result = document.getElementById("result");
    let attemptsText = document.getElementById("attempts");
    userGuess = Number(userGuess);
    if (!userGuess) {
        result.textContent = "Please enter a number!";
        return;
    }
    if (attemptsLeft <= 0) {
        result.textContent = "Game Over! The number was " + randomNumber;
        return;
    }
    attemptsLeft--;

    if (userGuess < randomNumber) {
        result.textContent = "Too low! Try again.";
    } 
    else if (userGuess > randomNumber) {
        result.textContent = "Too high! Try again.";
    } 
    else {
        result.textContent = "🎉 Correct! You won!";
        attemptsText.textContent = "";
        return;
    }
    attemptsText.textContent = "Attempts left: " + attemptsLeft;

    if (attemptsLeft === 0) {
        result.textContent = "❌ Game Over! The number was " + randomNumber;
    }
}
function resetGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attemptsLeft = maxAttempts;

    document.getElementById("guessInput").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("attempts").textContent = 
        "Attempts left: " + attemptsLeft;
}