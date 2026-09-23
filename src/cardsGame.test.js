const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('is a tie when both decks are empty', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });

  it('gives Steve the point when his card is higher', () => {
    expect(cardsGame(['3'], ['2'])).toBe('Steve wins 1 to 0');
  });

  it('gives Josh the point when his card is higher', () => {
    expect(cardsGame(['2'], ['3'])).toBe('Josh wins 1 to 0');
  });

  it('gives nobody a point when the cards are identical', () => {
    expect(cardsGame(['5'], ['5'])).toBe('Tie');
  });

  it('is a tie when both players win one round', () => {
    expect(cardsGame(['3', '2'], ['2', '3'])).toBe('Tie');
  });

  it('reports the actual scores when Steve wins both rounds', () => {
    expect(cardsGame(['3', '4'], ['2', '3'])).toBe('Steve wins 2 to 0');
  });

  it('ranks an Ace above a King', () => {
    expect(cardsGame(['A'], ['K'])).toBe('Steve wins 1 to 0');
  });
});
