const cards = {
  number: ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"],
  suite: ["Hearts", "Spades", "Clubs", "Diamonds"],
};

const symbols = {
  Hearts: "♥",
  Spades: "♠",
  Clubs: "♣",
  Diamonds: "♦",
};

const { number, suite } = cards;

function getRandomCard() {
  const numIndex = Math.floor(Math.random() * number.length);
  const suitIndex = Math.floor(Math.random() * suite.length);
  return {
    rank: number[numIndex],
    suit: suite[suitIndex],
  };
}

function renderCard() {
  const { rank, suit } = getRandomCard();
  const symbol = symbols[suit];

  // update corners
  document.querySelectorAll(".card").forEach((el) => {
    el.innerHTML = `${rank.toString()[0]}<br>${symbol}`;
  });

  // update center
  const middle = document.getElementById("middle");
  middle.innerHTML = symbol;
}

document.getElementById("create").addEventListener("click", renderCard);
