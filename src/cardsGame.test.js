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

  it('ranks T above 9, not by string order', () => {
    expect(cardsGame(['T'], ['9'])).toBe('Steve wins 1 to 0');
  });

  it('ranks the face cards A > K > Q', () => {
    expect(cardsGame(['A'], ['K'])).toBe('Steve wins 1 to 0');
    expect(cardsGame(['Q'], ['K'])).toBe('Josh wins 1 to 0');
  });

  it('scores every round of the README example', () => {
    expect(cardsGame(['A', '7', '8'], ['K', '5', '9'])).toBe('Steve wins 2 to 1');
  });

});
