const quotes = [
  "On a completely different note... can I have another piece of cake?",
  "Step 2: World Domination",
  "It is foolish to run the risk of going mad for vanity's sake",
  "Everything is improvised",
  "and a smile",
  "de juger, c'est facile, surtout quand on n'y a pas goûté",
  "Just be a rock",
  "And everyone is alive, somewhere in time",
  "The only roads are cul-de-sacs",
];

let selectedQuote = "";

function changeQuote() {
  let proposedQuote = "";
  do {
    // Because random.choice() is for suckers.
    proposedQuote = quotes[Math.floor(Math.random() * quotes.length)];
  } while (selectedQuote == proposedQuote);
  selectedQuote = proposedQuote;

  document.getElementById("quote-subtitle").innerText = `"${selectedQuote}"`;
}

document.addEventListener("DOMContentLoaded", () => {
  changeQuote();
  document
    .getElementById("quote-subtitle")
    .addEventListener("click", changeQuote);
});
