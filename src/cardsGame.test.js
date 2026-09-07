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

  it('counts every round Steve wins', () => {
    expect(cardsGame(['3', '4'], ['2', '3'])).toBe('Steve wins 2 to 0');
  });

  it('counts every round Josh wins', () => {
    expect(cardsGame(['2', '3'], ['3', '4'])).toBe('Josh wins 2 to 0');
  });

  it('ties when each player wins a round', () => {
    expect(cardsGame(['3', '2'], ['2', '3'])).toBe('Tie');
  });

  it('reports both scores when Steve wins a mixed game', () => {
    expect(cardsGame(['4', '3', '2'], ['3', '2', '3'])).toBe('Steve wins 2 to 1');
  });

  it('reports both scores when Josh wins a mixed game', () => {
    expect(cardsGame(['3', '2', '3'], ['4', '3', '2'])).toBe('Josh wins 2 to 1');
  });
});
