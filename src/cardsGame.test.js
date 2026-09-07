const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('is a tie when both decks are empty', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });

  it('Steve wins the round when his card is higher', () => {
    expect(cardsGame(['5'], ['3'])).toBe('Steve wins 1 to 0');
  });

});
