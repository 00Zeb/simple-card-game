const RANKS = '23456789TJQKA';

function cardsGame(deckSteve, deckJosh) {
  let steve = 0;
  let josh = 0;

  deckSteve.forEach((card, i) => {
    const s = RANKS.indexOf(card);
    const j = RANKS.indexOf(deckJosh[i]);
    if (s > j) steve++;
    else if (j > s) josh++;
  });

  if (steve > josh) return `Steve wins ${steve} to ${josh}`;
  if (josh > steve) return `Josh wins ${josh} to ${steve}`;
  return 'Tie';
}

module.exports = cardsGame;
