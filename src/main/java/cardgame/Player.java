package cardgame;

public class Player {
	private final String name;
	private char[] cards;
	
	public Player(String name) {
		this.name = name;
	}

	public char[] getCards() {
		return cards;
	}

	public void setCards(char[] cards) {
		this.cards = cards;
	}

	public String getName() {
		return name;
	}
}
