const rank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];

function cardsGame(steveDeck, danielDeck) {
  if (!steveDeck || !danielDeck || steveDeck.length === 0) {
    return "Tie";
  }
  let steveScore = 0;
  let joshScore = 0;
  for (let i = 0; i < steveDeck.length; i++) {
    const s = rank.indexOf(steveDeck[i]);
    const d = rank.indexOf(danielDeck[i]);
    if (s > d) steveScore++;
    else if (d > s) joshScore++;
  }
  if (steveScore === joshScore) return "Tie";
  if (steveScore > joshScore) return `Steve wins ${steveScore} to ${joshScore}`;
  return `Josh wins ${joshScore} to ${steveScore}`;
}

module.exports = cardsGame;
