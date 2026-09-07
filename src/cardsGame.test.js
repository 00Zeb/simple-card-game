const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('ties when both decks are empty', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });

  it('awards Steve a point for the higher card', () => {
    expect(cardsGame(['3'], ['2'])).toBe('Steve wins 1 to 0');
  });

  it('awards Josh a point and reports his score first', () => {
    expect(cardsGame(['2'], ['3'])).toBe('Josh wins 1 to 0');
  });

  it('ties when the cards are equal', () => {
    expect(cardsGame(['3'], ['3'])).toBe('Tie');
  });
});
