package cardgame;

public class CardGame {

	public String gameResult(char[] p1Cards, char[] p2Cards) {
		int p1Wins = 0;
		int p2Wins = 0;
		for (int i = 0; i < p2Cards.length; i++) {
			int p1Value = CardDeck.valueOf(p1Cards[i]);
			int p2Value = CardDeck.valueOf(p2Cards[i]);
			if (p1Value > p2Value)
				p1Wins++;
			if (p1Value < p2Value)
				p2Wins++;
		}
		return determineWinner(p1Wins, p2Wins);
	}

	private String determineWinner(int p1Wins, int p2Wins) {
		if (p1Wins > p2Wins)
			return "p1 wins " + p1Wins + " to " + p2Wins;
		if (p1Wins < p2Wins)
			return "p2 wins " + p2Wins + " to " + p1Wins;
		return "draw";
	}
}
