const cardRankings = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];

function getRank(card) {
  return cardRankings.indexOf(card);
}

function play(steveDeck, joshDeck) {
  let steveScore = 0;
  let joshScore = 0;

  for (let i = 0; i < steveDeck.length; i++) {
    const steveCard = steveDeck[i];
    const joshCard = joshDeck[i];
    const steveRank = getRank(steveCard);
    const joshRank = getRank(joshCard);

    if (steveRank > joshRank) {
      steveScore++;
    } else if (steveRank < joshRank) {
      joshScore++;
    }
  }

  if (steveScore === joshScore) {
    return "Tie";
  } else if (steveScore > joshScore) {
    return `Steve wins ${steveScore} to ${joshScore}`;
  } else {
    return `Josh wins ${steveScore} to ${joshScore}`;
  }
}

module.exports = { play };
