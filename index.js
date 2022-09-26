"use strict";

const cards = document.querySelectorAll(".card");
const slideButtons = document.querySelectorAll(".btn__slide");
let currCard = 2;

[...slideButtons].forEach((btn) => {
  btn.addEventListener("click", function () {
    btn.dataset.slide === "right" ? currCard++ : currCard--;
    displayCards();
  });
});

const displayCards = function () {
  if (currCard > cards.length - 1) currCard = 0;
  if (currCard < 0) currCard = cards.length - 1;
  cards.forEach((card, i) => {
    card.style.translate = `${-100 * (currCard - i)}%`;
  });
};

displayCards();
