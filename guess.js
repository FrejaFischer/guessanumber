"use strict";
document.querySelector(".container").classList.add("hide");

let maxNumb = 100;
let rndNum = generateRandomNumber(maxNumb);

console.log(rndNum + "random");

function generateRandomNumber(max) {
  return Math.floor(Math.random() * max) + 1;
}

document.querySelector("button").addEventListener("click", run);
document.querySelector("button").addEventListener("key", run);

function run() {
  const inputNumb = document.getElementById("guess").value;

  console.log(inputNumb);

  if (inputNumb == rndNum) {
    document.querySelector(".result").textContent = "Korrekt! Det er det rigtige nummer!";
    bouncingBalls();
  }
  if (inputNumb > rndNum) {
    document.querySelector(".result").textContent = "Nix! Du har gættet for højt!";
  }
  if (inputNumb < rndNum) {
    document.querySelector(".result").textContent = "Nix! Du har gættet for lavt!";
  }
}

function bouncingBalls() {
  console.log("balls");
  document.querySelector(".container").classList.remove("hide");
  document.querySelector(".yay").classList.add("bouncing");
  document.querySelector(".yay").classList.add("delay");
  document.querySelector(".yay2").classList.add("bouncing");
  document.querySelector(".yay2").classList.add("delay3");
  document.querySelector(".yay3").classList.add("bouncing");
  document.querySelector(".yay3").classList.add("delay2");
  document.querySelector(".yay4").classList.add("bouncing");
}
