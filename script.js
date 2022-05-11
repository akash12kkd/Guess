/** @format */

"use strict";

// Random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//

// scores
let score = 20;
let highScore = 0;
//
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // when player enters invalid data
  if (!guess || guess > 20 || guess < 0) {
    document.querySelector(".message").textContent = "🚫 Invalid Data";

    // when player wins the data
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "Correct Answer";

    document.querySelector("body").style.backgroundColor = "#40d317";

    document.querySelector(".number").style.width = "30rem";

    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // when the data is more than secretNumber
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the game";
      document.querySelector(".score").textContent = 0;
    }

    // when the data is less than secretNumber
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "You Lost the game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// reset button

document.querySelector(".Again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".guess").value = null;
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".creator").textContent = "Created By Not Akash";
});

// creator

document.querySelector(".creator").addEventListener("click", function () {
  document.querySelector(".creator").textContent =
    "My Instagram :- not__akash__";
});
