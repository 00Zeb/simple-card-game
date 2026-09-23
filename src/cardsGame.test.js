const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('is a tie when both decks are empty', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });

  it('gives Steve the point when his card is higher', () => {
    expect(cardsGame(['3'], ['2'])).toBe('Steve wins 1 to 0');
  });
});
