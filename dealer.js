const CardDeck = require('./carddeck');

module.exports = function (player, cardsToDraw
) {
    player.setCards(null);
    let cards = [];
    for (let i = 0; i < cardsToDraw; i++) {
        let randomPick = Math.random(100) * 100;
        cards.push(CardDeck.get(randomPick));
    }
    player.setCards(cards);
}