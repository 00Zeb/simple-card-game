import static org.junit.Assert.*;

import org.junit.Test;


public class CardsGameTest {

	@Test
	public void draw() throws Exception {
		assertEquals("draw", cardGame.gameResult(hand('2'), hand('2')));
	}

	@Test
	public void faced_card() throws Exception {
		assertEquals("p1 wins 1 to 0", cardGame.gameResult(hand('J'), hand('T')));
	}

	private char[] hand(char... values) {
		return values;
	}

	@Test
	public void single_card() throws Exception {
		assertEquals("p1 wins 1 to 0", cardGame.gameResult(hand('3'), hand('2')));
		assertEquals("p2 wins 1 to 0", cardGame.gameResult(hand('2'), hand('3')));
	}

	@Test
	public void multiple_cards() throws Exception {
		assertEquals("p1 wins 2 to 0", cardGame.gameResult(hand('3','3'), hand('2','2')));
		assertEquals("p1 wins 2 to 1", cardGame.gameResult(hand('3','3','2'), hand('2','2','3')));
	}

	private CardGame cardGame = new CardGame(new char[] { '2', '3', '4', '5', '6', '7', '8', '9','T','J'});
}
