import static org.junit.Assert.*;

import org.junit.Test;


public class CardsGameTest {

	@Test
	public void draw() throws Exception {
		assertEquals("draw", gameResult(hand('2'), hand('2')));
	}

	@Test
	public void faced_card() throws Exception {
		assertEquals("p1 wins 1 to 0", gameResult(hand('J'), hand('T')));
	}

	private char[] hand(char... values) {
		return values;
	}

	@Test
	public void single_card() throws Exception {
		assertEquals("p1 wins 1 to 0", gameResult(hand('3'), hand('2')));
		assertEquals("p2 wins 1 to 0", gameResult(hand('2'), hand('3')));
	}

	@Test
	public void multiple_cards() throws Exception {
		assertEquals("p1 wins 2 to 0", gameResult(hand('3','3'), hand('2','2')));
		assertEquals("p1 wins 2 to 1", gameResult(hand('3','3','2'), hand('2','2','3')));
	}

	private String gameResult(char[] p1Cards, char[] p2Cards) {
		int p1Wins = 0;
		int p2Wins = 0;
		for (int i = 0; i < p2Cards.length; i++) {
			int p1Value = valueOf(p1Cards[i]);
			int p2Value = valueOf(p2Cards[i]);
			if(p1Value > p2Value)
				p1Wins++;
			if(p1Value < p2Value)
				p2Wins++;
		}
		return determineWinner(p1Wins, p2Wins);
	}

	private int valueOf(char c) {
		return new String(new char[] {'2','3','4','5','6','7','8','9','T','J','Q','K','A'}).indexOf(c);
	}

	private String determineWinner(int p1Wins, int p2Wins) {
		if(p1Wins > p2Wins)
			return "p1 wins " + p1Wins + " to " + p2Wins;
		if(p1Wins < p2Wins)
			return "p2 wins " + p2Wins + " to " + p1Wins;
		return "draw";
	}
}
