package cardgame;

public class CardDeck {
	public final char[] cardDeck;

	public CardDeck() {
		this.cardDeck = new char[] { '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J' };
	}

	public int valueOf(char c) {
		return new String(cardDeck).indexOf(c);
	}
}
