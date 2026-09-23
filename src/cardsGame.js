const cardRanks = new Map(
  ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A']
    .map((card, rank) => [card, rank])
);

module.exports = function cardsGame(stevesDeck, joshsDeck) {
  let stevesScore = 0;
  let joshsScore = 0;

  for (let round = 0; round < stevesDeck.length; round += 1) {
    const stevesCardRank = cardRanks.get(stevesDeck[round]) ?? -1;
    const joshsCardRank = cardRanks.get(joshsDeck[round]) ?? -1;

    if (stevesCardRank > joshsCardRank) {
      stevesScore += 1;
    } else if (joshsCardRank > stevesCardRank) {
      joshsScore += 1;
    }
  }

  if (stevesScore === joshsScore) {
    return 'Tie';
  }

  const winner = stevesScore > joshsScore ? 'Steve' : 'Josh';
  return `${winner} wins ${stevesScore} to ${joshsScore}`;
};
