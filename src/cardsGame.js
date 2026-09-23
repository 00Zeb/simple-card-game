const cardRanks = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

module.exports = function cardsGame(stevesDeck, joshsDeck) {
  let stevesScore = 0;
  let joshsScore = 0;

  for (let round = 0; round < stevesDeck.length; round += 1) {
    const stevesCardRank = cardRanks.indexOf(stevesDeck[round]);
    const joshsCardRank = cardRanks.indexOf(joshsDeck[round]);

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
