const CardDeck = require('./carddeck');

module.exports = class Dealer {

    constructor(cardsToDraw) {
        this.cardsToDraw = cardsToDraw;
    }

    deal(player) {
        player.setCards(null);
        let cards = [];
        for (let i = 0; i < this.cardsToDraw; i++) {
            let randomPick = Math.random(100) * 100;
            cards.push(CardDeck.get(randomPick));
        }
        player.setCards(cards);
    }
}
