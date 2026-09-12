const cardsGame = require('./cardsGame');

describe('cardsGame', () => {
  it('reports a tie when both decks are empty', () => {
    expect(cardsGame([], [])).toBe('Tie');
  });

  it('awards the round to Steve when his card is higher', () => {
    expect(cardsGame(['A'], ['K'])).toBe('Steve wins 1 to 0');
  });

  it('awards the round to Josh when his card is higher', () => {
    expect(cardsGame(['K'], ['A'])).toBe('Josh wins 1 to 0');
  });

  it('treats equal cards as a tie', () => {
    expect(cardsGame(['A'], ['A'])).toBe('Tie');
  });

  it('ranks cards by value, not lexicographically', () => {
    expect(cardsGame(['T'], ['9'])).toBe('Steve wins 1 to 0');
  });

  it('scores every round of the README example', () => {
    expect(cardsGame(['A', '7', '8'], ['K', '5', '9'])).toBe('Steve wins 2 to 1');
  });
});
