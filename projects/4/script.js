let random = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");

const guesses = document.querySelector("#guesses");
const remaining = document.querySelector(".remain");
const lowOrHigh = document.querySelector("#lowOrHigh");
const startOver = document.querySelector("#results");

const p = document.createElement("p");

let prevGuess = [];
let playGame = true;
let numGuess = 1;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const userInput = document.querySelector("#guess").value;
    const guess = parseInt(userInput);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter a valid number");
  } else if (guess < 1) {
    alert("Too low!");
  } else if (guess > 100) {
    alert("Too high!");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game over. The random number was ${random}.`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === random) {
    displayMessage("You guessed it right!");
    endGame();
  } else if (guess < random) {
    displayMessage("No is too low");
  } else if (guess > random) {
    displayMessage("No is too high");
  }
}

function displayGuess(guess) {
  let userInput = "";
  guesses.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  submit.setAttribute("disabled", "true");
  p.classList.add("newGame");
  p.innerHTML = `<h3 id="newGame">Start New Game</h3>`;
  startOver.append(p);
  newGame();
  playGame = false;
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.removeEventListener("click", newGame);

  newGameButton.addEventListener("click", function (e) {
    random = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guesses.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    submit.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
