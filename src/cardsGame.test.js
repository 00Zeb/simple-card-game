const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('ties when both decks are empty', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });

  it('awards Steve a point for the higher card', () => {
    expect(cardsGame(['3'], ['2'])).toBe('Steve wins 1 to 0');
  });
});
