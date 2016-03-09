import static org.junit.Assert.*;

import org.junit.Test;


public class CardsGameTest {

	@Test
	public void draw() throws Exception {
		assertEquals("draw", gameResult(new char[] {'2'}, new char[] {'2'}));
	}

	private Object gameResult(char[] cs, char[] cs2) {
		// TODO Auto-generated method stub
		return "draw";
	}
}
