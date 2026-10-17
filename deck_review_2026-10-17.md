# Deck review, 17 Oct 2026

Five independent reviewers read the final deck (PDF and speaker notes). None of them saw our conversation. Each had your audience description word for word, and each had one lens:

1. A developer in the audience who uses coding agents daily.
2. Argument and evidence, checking numbers against `PRESENTATION.md`.
3. A TDD practitioner.
4. A talk coach.
5. Visuals and readability.

Every factual claim below was checked against the repo. Slide numbers follow the current deck order.

IDs (F1, C2, …) are there so you can refer to them in the plan, e.g. `((C2: yes))`.

## Decisions (17 Oct)

- **Done:**
  - F1: the Reflections line removed from the slides.
  - F2, F3, F4.
  - C1: the Keep column.
  - C3: the experiment table; slide 19's footer no longer names GLM.
  - C5: "example-first".
  - C6, C7.
  - T: scorecard cut.
  - I2: evidence moved after the demo.
  - I5: "Tiny steps are less meaningful for an agent".
  - I8.
  - I12: "To prevent rework".
  - Extra: Design results removed from the Definition slide.
- **Parked for later** (listed at the end of the plan): F5, F6, C4, C8, I3.
- **Ignored:** C2 (the 2016 ranking was set up for the demo only).
- **No change:** I4, I6, I7, I9, I10, I11, R1–R8.
- **I1, partly:** "Questions?" moved onto the close slide, which stays up during Q&A. No repo link or QR code.

---

## F: Wrong facts (checked; fix before presenting)

- **F1. Slide 22, Charade.** "Reflections: …one cites commit hashes that don't exist."
  - The invented hashes are in Qwen's **status log**, and Qwen wrote no reflection (`PRESENTATION.md:172`, `:326`).
  - The same error is in the EDD speaker notes and in the summary at the top of `PRESENTATION.md` (line 23).
- **F2. Slide 22, Charade (notes).** "the run without any tests has the same design."
  - The no-TDD run wrote 7 tests. It should say "without TDD".
- **F3. Slide 30, Planning.** "only [Astra's] suite pins the 'x to y' reading."
  - The no-TDD suite pins it too: `'Josh wins with the higher score first'` → `'Josh wins 2 to 1'`.
  - Astra's is the only **TDD** suite that pins it with a non-zero loser (`PRESENTATION.md:264`).
- **F4. Slide 33, Examples.** "Only the acceptance suite the agents never saw caught GLM's and Gemma's bugs."
  - Every other agent's winner-first suite catches both bugs too (`PRESENTATION.md:53`).
  - Better: "Only tests the same agent didn't write caught them."
  - The close slide's notes and the EDD notes repeat the error.
- **F5. Slide 27, Jain.** "His harness isn't TDD: human-written specs and examples, plus an independent acceptance gate."
  - The 178 acceptance tests judged all four setups, with and without the harness.
  - The harness was specs and examples to guide the agent, plus checks the agent ran itself.
  - `PRESENTATION_PLAN.md` says both: line 43 (the gate judged all runs) and line 63 (the gate is part of the harness).
  - Slide 33's "Jain's harness is the same idea, tested at scale" leans on the same mistake.
- **F6. Slide 26, Cost.** "8–13× the cost."
  - The 8× compares Opus 5 prices ($5/$25) with Opus 5.5 prices ($4/$20). Like for like it's about 6×; `PRESENTATION.md:165` already notes the price difference.
  - The 13× (probity against no TDD, both Opus 5.5) is a fair comparison.

---

## C: Where three or more reviewers raised the same point

- **C1. There is no "keep" slide** (3 reviewers).
  - The title promises "What we keep", and slide 29 only strikes things out. Juniors could hear "TDD trainer says drop it".
  - Fix: split Leave behind into two columns, Keep and Leave behind, titled "…for the agent".
  - Keep could hold:
    - agreed examples before the code;
    - refactor on green;
    - a failing test first for a bug;
    - never claim green without running the tests;
    - a check the agent didn't write.
- **C2. Your 2016 run's Aces-below-2s bug never pays off** (3 reviewers).
  - The demo plants "A beats K", and the scorecard (23) praises your 2016 injected ranking.
  - That same refactor (`d4e7fee`) made Aces lose to 2s with every test green, and the repo linked on slide 37 says so (`PRESENTATION.md` §2.8).
  - Showing it is your best defence against "trainer bashes AI", and it shows that a human's tests have blind spots too.
  - Possible scorecard line: "Only my 2016 run injected the ranking, and that refactor quietly made Aces lose to 2s."
- **C3. Names nobody introduced** (3 reviewers).
  - GLM on slide 19, before the experiment slide.
  - Astra on 30, Gemma on 33, Sol and Luna on 27.
  - "2016" on slide 21 reads as a count, or as today's demo.
  - Fix:
    - add a row of model names on the experiment slide (21);
    - change 19's footer to "In my experiment, one agent wrote the same misreading into its test and its code";
    - on 21, "my own TDD run of this kata, 2016".
- **C4. Slide 19, "Discipline inconsistency" under "It doesn't have"** (3 reviewers).
  - Your own data contradicts it:
    - `seb` labelled commits RED that never failed;
    - Opus wrote code before its tests;
    - probity exists because prompting didn't get adherence.
  - "Not knowing where the code is going" only holds on a kata the model already knows.
  - Possible fix: move "Discipline inconsistency" to the right column, as "Drifting from instructions", and add "(on familiar problems)" to the other item.
  - You added that line yourself, so it's your call. Of all the slides, this one is the most likely to be challenged.
- **C5. The close headline "spec-first" clashes with other slides** (3 reviewers).
  - Planning (30) calls this approach "a small step compared to spec-driven development". Examples (33) says "a spec document isn't [executable]".
  - All three suggest **"Test-first becomes example-first."** It completes the Beck → Adzic "by Example" bookend.
  - The evidence reviewer adds that no run tested this recipe as a whole, so a line like "My bet, not my measurement" would be honest.
- **C6. The double loop (32) contradicts the new close** (2 reviewers).
  - "Inner loop, red/green/refactor: the agent" clashes with the close's "Let the agent decide everything below them".
  - I created this clash with my change yesterday.
  - Possible fix: "Inner loop, its own way: the agent".
- **C7. Jain (27) against Examples (33)** (3 reviewers).
  - 27 ends "The ceremony buys nothing for a frontier model", and 33 says "Jain's harness is the same idea". Together they call your own advice ceremony.
  - Fix: use Jain's own conclusion, "Frontier model: one independent check at the end. Cheap model: checks throughout."
  - The talk coach's alternative: "What rescued the cheap model wasn't TDD: human-written examples and a check it didn't write."
- **C8. The ~86% box (30)** (4 reviewers raised it).
  - It measures how little was edited, not that planning prevented rework.
  - On a dense slide it also invites "So AI wrote your talk?".
  - The options:
    - cut it;
    - reword it: "~86% of the planned slides' text survived review unchanged";
    - keep it as a spoken aside.
  - My take: keep it, since it's honest and on topic. Reword it, and have the answer ready.

---

## T: Timing (talk coach and developer)

- Part 1 takes 19 of the 45 minutes. Part 3, the payoff, gets 6 minutes for 7 slides.
- The close ends at 44:00, so the real buffer is about 1 minute, not 3. The agenda already spends 15 seconds of it. If Q&A falls inside the 45 minutes, there is no buffer at all.
- Their suggestions:
  - confirm with the organiser whether Q&A is inside the 45 minutes;
  - a hard 9-minute demo, with checkpoint tags at 3, 6 and 9 minutes;
  - cut the Green (10) and Refactor (12) step slides, which repeat the cycle slide (8). You asked for those, so it's your call.
- The talk coach's order of slides to skip if you're running late:
  1. Vertical slicing (31)
  2. Scorecard (23)
  3. Probity (25)
  4. Tiny steps (24)
  5. What others found (20)
- Never cut Charade (22), Cost (26), Planning (30), Examples (33) or the close (35).

---

## I: Single-reviewer ideas worth considering

- **I1. Close and Q&A (35–37).** Keep the close slide up during Q&A, with "Slides, runs and references: github.com/00Zeb/simple-card-game" and a QR code. Right now "Questions?" replaces your takeaway, and nobody sees References after it.
- **I2. Evidence (16).** Move it after the demo (15 → 17 → 16 → 18). Its question, "Which of them does an agent actually have?", then leads straight into part 2.
- **I3. Beck's "Augmented Coding: Beyond the Vibes" (June 2025)** is missing from What others found (20). It's probably the first question you'd get. I should check the source before adding it.
- **I4. Charade title (22).** "Charade" implies pretending, but every TDD agent's commit labels were honest and GLM's reds were real. Your source word is "ceremony".
- **I5. Tiny steps (24).** The title is absolute, but it rests on 8/9 against 5/9 for the same model, which your notes call noise. Possible title: "Tiny steps buy an agent little".
- **I6. What others found (20).** "So I tested both" → "…and one TDD-enforcing harness".
- **I7. Probity (25).** "The same result as no TDD" → "The same correct code as no TDD", since the next line says it caught fewer bugs.
- **I8. ATDD/BDD (32).** "Isn't this just ATDD/BDD again? Yes, and that's the point." may deflate the room. The practitioner suggests: "Yes. What changed: the agreed examples are the one thing you can't hand to the agent."
- **I9. Mutation testing (21).** Hand-planted bugs aren't mutation testing as tools like PIT or Stryker do it. Alternative: "9 hand-planted bugs". That wording is yours.
- **I10. Experiment (21).** "1 told not to" reads as "no tests", but that run wrote 7. On the cost slide (26), say the model difference out loud: Opus 5.5 for no TDD, Opus 5 for TDD by prompt.
- **I11. Step definitions.** The practitioner would put the step-definitions point (whoever writes them decides what gets checked) on a slide, not only in the close's notes.
- **I12. Planning (30).** "To not have to redo" reads awkwardly. The visual reviewer suggests "So nobody redoes work, and the agent reads the spec the way we meant it."

---

## R: Readability (visual reviewer)

- **R1. Red (9).** The code is 24px, and only the front rows can read it. Drop the `simpleAddition` block, put the red pills in a column on the right, and set the Mineplacer block to 32px.
- **R2. Struck-through text (6, 29).** Grey, light weight, with a red line through the middle of the letters, so the back row loses those words. Use white at weight 400 with a 3px strike, or drop the strike and put a red ✗ in front.
- **R3. Myths (6).** The LinkedIn screenshots render at about 10px, which is fine as texture; online, fade them out before the cards build in. "short-lived" breaks at the hyphen: use a non-breaking hyphen.
- **R4. Wrapped → bullets** start under the arrow (12, 22, 25). Fix with a hanging indent. Orphaned words:
  - "have?" (16)
  - "client" (8)
  - "function." (23)
  - "singleton" (11)
- **R5. PDF titles.** The gradient titles (1, 5, 18, 28, 36) show a thin box outline in the PDF, and the last word fades. If the PDF is your backup, use solid titles.
- **R6. Consistency.**
  - Attributions use three formats ("BÖCKELER · AUG 2026", "NARESH JAIN, OCT 2026", "MATHEWS & NAGAPPAN 2024"). Pick "Name · Mon YYYY".
  - Quote boxes come in two styles: grey cards on 6, blue boxes on 2, 31, 32 and 35.
  - Caveats come in three styles: dashed box (26, 34), italic (31), plain grey line (30).
  - Wording drifts between the cycle slide and the step slides ("Each step…" / "Every step…").
  - The Part 3 subtitle "For the coming year" doesn't match the agenda's "What to leave behind, and what to do instead".
- **R7. Density.** Probity (25) shows eleven numbers and buries the punchline (13×, fewer bugs caught). Charade (22) is four two-line bullets under a big number.
- **R8. Cost (26).** "22× the time" could be horizontal bars (29 s against 10 min 48 s) instead of a table column.

---

## Q: Likely Q&A

- **Q1.** "n = 1, the no-TDD run wrote tests too, and it ran on a newer model. Isn't this test-first against test-after?"
- **Q2.** "Jain's harness is your recommendation, and it bought the frontier model nothing. Isn't spec-first ceremony too?"
- **Q3.** "What about bug fixes in legacy code?" The deck doesn't cover it. `PRESENTATION.md:404`: scope the claim to greenfield feature work; reproducing a bug with a failing test first is where red carries information (`:344`).
- **Q4.** "My agent skips test runs and forgets things after compaction. Why does slide 19 say otherwise?"
- **Q5.** "Should juniors still learn TDD your way?" Only the notes on 29 cover it.
- **Q6.** "The no-TDD agent settled 'x to y' on its own. Why do we need human examples?"
- **Q7.** "What about Kent Beck's Augmented Coding?" (see I3)

---

## Not reopened (you've already decided)

- The "modular and extensible" row on the scorecard: you dropped it.
- The whoami, kept as is.
- The herdr race. One reviewer would show "the no-TDD agent finished in 29 s while I typed" instead.
- "BDD-style" on the close. The practitioner prefers "Agree the examples with the team before any code", because BDD is about the conversation more than Gherkin.

---

## Suggested order

1. **F1–F6.** Clear mistakes; I can fix them right away.
2. **C1, C2, C4, C5, C6, C7.** Independent readers stumbled in the same place.
3. **T.** Decide on Q&A inside or outside the 45 minutes, and on the step slides.
4. Everything else as you like.
