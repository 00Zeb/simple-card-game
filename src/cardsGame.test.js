const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('is a tie when both decks are empty', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });

  it('Steve wins the round when his card is higher', () => {
    expect(cardsGame(['5'], ['3'])).toBe('Steve wins 1 to 0');
  });

  it('Josh wins the round when his card is higher', () => {
    expect(cardsGame(['3'], ['5'])).toBe('Josh wins 1 to 0');
  });

  it('is a tie when the two cards are equal', () => {
    expect(cardsGame(['5'], ['5'])).toBe('Tie');
  });

});
