package cardgame;

public enum CardDeck {
	INSTANCE;

	private final char[] deck;

	private CardDeck() {
		this.deck = new char[] { '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J' };
	}

	public static char get(int number) {
		return INSTANCE.deck[number % INSTANCE.deck.length];
	}

	public static int valueOf(char c) {
		return new String(INSTANCE.deck).indexOf(c);
	}
}
