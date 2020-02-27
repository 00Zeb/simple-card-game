const CardGame = require('./cardgame');
const Dealer = require('./dealer');

test('nothing', () => {
    let dealer = new Dealer(5);
    let cardGame = new CardGame(dealer);
    let result = cardGame.gameResult();
    expect(result).toBe("draw");
});