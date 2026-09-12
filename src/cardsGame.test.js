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

  it('reports a multi-round win for Josh', () => {
    expect(cardsGame(['2', '3'], ['A', 'K'])).toBe('Josh wins 2 to 0');
  });

  it('reports a tie when the rounds are split evenly', () => {
    expect(cardsGame(['A', '2'], ['K', 'A'])).toBe('Tie');
  });

  it('handles a full 13-card deck', () => {
    const steve = '23456789TJQKA'.split('');
    const josh = '3456789TJQKA2'.split('');
    expect(cardsGame(steve, josh)).toBe('Josh wins 12 to 1');
  });
});
