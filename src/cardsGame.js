const RANKS = '23456789TJQKA';

function cardsGame(steveDeck, joshDeck) {
  let steve = 0;
  let josh = 0;

  for (let i = 0; i < steveDeck.length; i++) {
    const steveCard = RANKS.indexOf(steveDeck[i]);
    const joshCard = RANKS.indexOf(joshDeck[i]);

    if (steveCard > joshCard) {
      steve++;
    } else if (joshCard > steveCard) {
      josh++;
    }
  }

  if (steve > josh) {
    return `Steve wins ${steve} to ${josh}`;
  }

  if (josh > steve) {
    return `Josh wins ${josh} to ${steve}`;
  }

  return 'Tie';
}

module.exports = cardsGame;
