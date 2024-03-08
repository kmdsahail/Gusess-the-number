let input = document.getElementById("input");
let btn = document.getElementById("btn");
let wrng = document.querySelector(".wrong");
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100) + 1;

let numGuesses = 0;

btn.addEventListener("click", () => {
  guessNumbers();
});

function guessNumbers() {
  if (input.value < 1 || input.value > 100 || isNaN(input.value)) {
    wrng.innerHTML = "enter between 1 to 100";
  } else {
    numGuesses++;
    guesses.innerHTML = "No of guesses : " + numGuesses;

    if (input.value > answer) {
      wrng.innerHTML = " too high guess again";
      input.value = "";
    } else if (input.value < answer) {
      wrng.innerHTML = "too low guess again ";
      input.value = "";
    } else {
      wrng.innerHTML = " correct congratulations";
    }
  }
}
