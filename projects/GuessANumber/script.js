const hideNumber = Math.floor(Math.random() * 100) + 1;
let count = 0; // Variabile per tenere traccia del numero di tentativi

function checkGuess() {
    count++;
    const guess = Number(document.getElementById("guessInput").value);
    const result = document.getElementById("output");
    result.style.color = "white";

    if(isNaN(guess)) {
        result.textContent = "Please enter a valid number.";
    } else if (guess < 1 || guess > 100) {
        result.textContent = "Please enter a number between 1 and 100.";
    } else if (guess < hideNumber) {
        result.textContent = "Too low! Try again.";

    } else if (guess > hideNumber) {
        result.textContent = "Too high! Try again";
    } else {
        result.textContent = "Congratulations! You guessed the number!\nIf you want to play again, refresh the page.";
        attempt.textContent = "You made " + count + " attempts.";
    }
    guessInput.value = "";
}