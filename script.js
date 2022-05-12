/** @format */

"use strict";

// Random number
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// scores
let score = 20;
let highScore = 0;

// Message function
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Code
document.querySelector(".score").textContent = score;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  // when player enters invalid data
  if (!guess || guess > 20 || guess < 0) {
    displayMessage("🚫 Invalid Data");
    // when player wins the data
  } else if (guess === secretNumber) {
    displayMessage("Correct Answer");
    document.querySelector("body").style.backgroundColor = "#40d317";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
    // when the data is not equal to data
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost the game");
      document.querySelector(".score").textContent = 0;
    }
  }
});

// reset button
document.querySelector(".Again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".score").textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
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

// Rules

const popUp = document.querySelector(".pop-up");
const btnRules = document.querySelector(".rules");
const overlay = document.querySelector(".overlay");
const close = document.querySelector(".closer");

btnRules.addEventListener("click", function () {
  popUp.classList.remove("hidden");
  overlay.classList.remove("hidden");
});

close.addEventListener("click", function () {
  popUp.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  popUp.classList.add("hidden");
  overlay.classList.add("hidden");
});
