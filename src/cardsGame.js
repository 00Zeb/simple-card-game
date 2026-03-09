const rank = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];

function cardsGame(steveDeck, joshDeck) {
  if (!steveDeck || !joshDeck || steveDeck.length === 0) {
    return "Tie";
  }
  let steveScore = 0;
  let joshScore = 0;
  for (let i = 0; i < steveDeck.length; i++) {
    const steveRank = rank.indexOf(steveDeck[i]);
    const joshRank = rank.indexOf(joshDeck[i]);
    if (steveRank > joshRank) steveScore++;
    else if (joshRank > steveRank) joshScore++;
  }
  if (steveScore === joshScore) return "Tie";
  if (steveScore > joshScore) return `Steve wins ${steveScore} to ${joshScore}`;
  return `Josh wins ${joshScore} to ${steveScore}`;
}

module.exports = cardsGame;
