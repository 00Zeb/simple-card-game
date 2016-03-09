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

	private Object gameResult(char[] cs, char[] cs2) {
		// TODO Auto-generated method stub
		if(cs[0] > cs2[0])
			return "p1 wins 1 to 0";
		return "draw";
	}
}
