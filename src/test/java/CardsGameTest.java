import static org.junit.Assert.*;

import org.junit.Test;


public class CardsGameTest {

	@Test
	public void draw() throws Exception {
		assertEquals("draw", gameResult(new char[] {'2'}, new char[] {'2'}));
	}

	@Test
	public void single_card() throws Exception {
		assertEquals("p1 wins 1 to 0", gameResult(new char[] {'3'}, new char[] {'2'}));
	}

	private String gameResult(char[] p1Cards, char[] p2Cards) {
		// TODO Auto-generated method stub
		if(p1Cards[0] > p2Cards[0])
			return "p1 wins 1 to 0";
		return "draw";
	}
}
