import static org.junit.Assert.*;

import org.junit.Test;


public class CardsGameTest {

	@Test
	public void draw() throws Exception {
		assertEquals("draw", gameResult(hand('2'), hand('2')));
	}

	private char[] hand(char... values) {
		return values;
	}

	@Test
	public void single_card() throws Exception {
		assertEquals("p1 wins 1 to 0", gameResult(hand('3'), hand('2')));
	}

	@Test
	public void multiple_cards() throws Exception {
		assertEquals("p1 wins 2 to 0", gameResult(hand('3','3'), hand('2','2')));
	}

	private String gameResult(char[] p1Cards, char[] p2Cards) {
		int p1Wins = 0;
		for (int i = 0; i < p2Cards.length; i++) {
			if(p1Cards[i] > p2Cards[i])
				p1Wins++;
		}
		if(p1Wins > 0)
			return "p1 wins " + p1Wins + " to 0";
		return "draw";
	}
}
