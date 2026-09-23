const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K', 'A'];

function rankOf(card) {
  return RANKS.indexOf(card);
}

function roundsWon(player, opponent) {
  return player.filter((card, round) => rankOf(card) > rankOf(opponent[round])).length;
}

function result(winner, winnerScore, loserScore) {
  return `${winner} wins ${winnerScore} to ${loserScore}`;
}

function cardsGame(steve, josh) {
  const steveScore = roundsWon(steve, josh);
  const joshScore = roundsWon(josh, steve);

  if (steveScore > joshScore) {
    return result('Steve', steveScore, joshScore);
  }

  if (joshScore > steveScore) {
    return result('Josh', joshScore, steveScore);
  }

  return 'Tie';
}

module.exports = cardsGame;
