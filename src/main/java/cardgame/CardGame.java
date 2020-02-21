package cardgame;

public class CardGame {
	private final char[] cards;

	public CardGame() {
		this.cards = new char[] { '2', '3', '4', '5', '6', '7', '8', '9','T','J'};
	}

	public String gameResult(char[] p1Cards, char[] p2Cards) {
		int p1Wins = 0;
		int p2Wins = 0;
		for (int i = 0; i < p2Cards.length; i++) {
			int p1Value = valueOf(p1Cards[i]);
			int p2Value = valueOf(p2Cards[i]);
			if (p1Value > p2Value)
				p1Wins++;
			if (p1Value < p2Value)
				p2Wins++;
		}
		return determineWinner(p1Wins, p2Wins);
	}

	private int valueOf(char c) {
		return new String(cards).indexOf(c);
	}

	private String determineWinner(int p1Wins, int p2Wins) {
		if (p1Wins > p2Wins)
			return "p1 wins " + p1Wins + " to " + p2Wins;
		if (p1Wins < p2Wins)
			return "p2 wins " + p2Wins + " to " + p1Wins;
		return "draw";
	}
}
