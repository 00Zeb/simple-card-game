
module.exports = class CardDeck {

	constructor() {
		this.deck = "23456789TJQKA";
	}

	static get(number) {
        let cardDeck = new CardDeck();
        return cardDeck.deck.charAt(number % cardDeck.deck.length);
	}

	static valueOf(char) {
		return new CardDeck().deck.indexOf(char);
	}
}
