let randomNum = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = document.querySelector("#user_input");
const checkBtn = document.querySelector(".check");
const result = document.querySelector(".result");

function numberGuessingGame() {
    const guess = Number(input.value);

    if (attempts >= 3) {
        result.textContent = "❌ No attempts left!";
        return;
    }

    if (guess < 1 || guess > 100 || isNaN(guess)) {
        result.textContent = "⚠ Enter a number between 1 and 100";
        return;
    }

    attempts++;

    if (guess === randomNum) {
        result.textContent = "🎉 Correct! You won!";
        checkBtn.disabled = true;
    } else if (guess > randomNum) {
        result.textContent = "⬆ Too High!";
    } else {
        result.textContent = "⬇ Too Low!";
    }

    input.value = "";
}

checkBtn.addEventListener("click", numberGuessingGame);
