# TDD in the Agentic Era: What We Keep, What We Leave Behind

Analysis of the `llm-*` branches, the no-TDD baseline and the 2016 human run.
Every number below was measured from the git history or by re-running the code
(Sept 23 2026). Where something is inference, it says so.

---

## TL;DR: the thesis

TDD has always been two things sold together:

1. **A way to specify behaviour**: write down examples first, see each one fail, and never claim something works without running it.
2. **A pacing ritual for a human mind**: tiny steps, "fake it till you make it", triangulation, a steady red-green-refactor rhythm, and managing fear.

**Agents keep the first and turn the second into theatre.** The strongest evidence from this repo:

- **The agent with the most disciplined TDD history shipped a wrong answer.** GLM 5.3 Flash has 7 of 7 genuine red→green cycles (verified by replay), every commit is correctly labelled, and it wrote a thoughtful LESSONS.md. Its code returns `"Josh wins 1 to 2"` when Josh wins 2–1. Its own tests say that is correct.
- **The agent with no TDD at all was correct in about 30 seconds.** Opus 5.5 without TDD passes the same independent acceptance suite as every correct TDD run. Its 7 tests caught 7 of 9 subtle planted bugs, as many as Astra's 49-case suite.
- **The design did not emerge from the tests.** All nine JavaScript implementations, TDD or not, have the same shape: a rank string, `indexOf`, two counters and a three-way return. Only the human 2016 run produced a design the others don't have (an injected ranking, with the class extracted in the refactor step). That refactor also quietly removed Q, K and A from the system while every test stayed green (§2.8).
- **Red is mostly ceremony for an agent.** Across the six TDD agents, 26 of 57 tests (46%) passed as soon as they were written. The agent already knew the answer.
- **The reflections are unreliable.** One copies another model's reflection almost word for word. One claims TDD caught a formatting bug that is still in its code. One cites commit hashes that don't exist.

What survives is **the test list as a contract a human reviews, plus an executable oracle that is independent of the implementation.** The micro-cycle, the commit-per-phase and "tests drive the design" become optional, or become the human's job.

---

## 1. What was run

| Branch | Who | Wall clock¹ | Commits | Real reds² | Tests | Prod LOC | Own suite | Independent suite³ |
|---|---|---|---|---|---|---|---|---|
| `20160309_bth` | You, 2016 (Java), live in front of an audience | 22 m 43 s | 16 | **6 (replayed, all genuine)** | 4 methods, 6 asserts | ~30 | ✅ | n/a (older p1/p2/draw variant); final code ranks A below 2, see §2.8 |
| `llm-no-tdd-opus5.5` | Opus 5.5, **no TDD** | ~30 s (your timing) | 1 | 0 | 7 | 15 | ✅ | ✅ 8/8 |
| `llm-claude-opus` | Claude Opus | 3 m 47 s | 17 | 4 | 11 | 31 | ✅ | ✅ 8/8 |
| `llm-claude-opus5` | Claude Opus 5 | 4 m 18 s | 20 | 7 | 9 | 22 | ✅ | ✅ 8/8 |
| `llm-astra` | Astra | 7 m 42 s code (27 m incl. guidance doc) | 45 (**22 empty**) | 5 | 14 steps / 49 cases | 22 | ✅ | ✅ 8/8 |
| `llm-local-qwen` | Qwen (local) | 8 m 57 s | 10 | 4 | 7 | 22 | ✅ | ✅ 8/8 |
| `llm-deepseek4.1flash` | DeepSeek 4.1 Flash | 9 m 51 s | 14 | 4 | 9 | 32 | ✅ | ✅ 8/8 |
| `llm-glm5.3-flash` | GLM 5.3 Flash | 13 m 08 s | 18 | **7 (all)** | 7 | 14 | ✅ | ❌ **5/8** |
| `llm-local-gemma4` | Gemma 4 (local) | n/a: refused to commit, you committed for it | 1 | 0 | 5 | 27 | ❌ 1 failing | ❌ **5/8** |
| `seb` | Unrecorded agent, Mar 2026 | 62 s | 5 | **0** (labelled "RED/GREEN") | 10 | 24 | ✅ | ✅ 8/8 |
| `llm-opus5.5` | Opus 5.5, TDD | **empty branch** (reserved for the live demo?) | 0 | | | | | |

¹ Time from the agent's first commit to its last. ² I checked out every `red:` commit and ran Jest. A "missing module" failure on the first test counts as a legitimate red. Every agent that labelled a commit red was honest about it. ³ An acceptance suite written independently of all agents: the README example, a Josh win with the winner's score first, a shutout, non-lexicographic ranks, empty decks, no input mutation, and 1000 random games against a reference implementation. See Appendix A.

### Suites cross-run against implementations and planted bugs

I ran every branch's test suite against every branch's code, plus four planted bugs: lexicographic comparison, Ace ranked low, ties scored for Steve, and scoring the first round only.

- **Every suite that reads "x to y" as winner-first** (no-TDD, Opus, Opus 5, DeepSeek, Qwen, Astra, `seb`) **catches all four planted bugs and both real bugs.**

A second, harder round used nine subtle planted bugs:
- Josh's result hardcoded to "1 to 0"
- the loser's score always 0 (one bug for Josh, one for Steve)
- GLM's score order
- tied rounds scoring for both players
- a non-zero tie awarded to Steve
- Q and K swapped
- the input decks mutated
- only the first 3 rounds counted

| Suite | Caught | Missed |
|---|---|---|
| Opus | **8/9** | input mutation |
| Astra | 7/9 | input mutation, only first 3 rounds counted |
| DeepSeek | 7/9 | tie scores both, input mutation |
| **No-TDD (30 s)** | **7/9** | tie scores both, input mutation |
| Opus 5 | 5/9 | Josh hardcoded "1 to 0", Josh's loser always 0, tie scores both, input mutation |
| `seb` | 5/9 | |
| Qwen | 3/9 | |

No suite tests that the input decks are left unchanged. Astra's own plan said *"Read decks without modifying them"*, but it wrote no test for it.

**The purest TDD rhythm produced the weakest suite among the frontier models' TDD runs.** Opus 5 had the most genuine reds and the most minimal steps, and caught 5/9. The strongest suite came from Opus, the run that jumped ahead of its tests most. Minimal steps choose examples that are *enough to drive the code*, which is not the same as *enough to protect it*. That's n = 1, so present it as an observation, not a law.
- **GLM's suite** rejects every correct implementation and accepts Gemma's broken one, since both share the misreading.
- **Gemma's suite** rejects everything, because one expectation has the wrong arithmetic (`"Josh wins 2 to 0"` for a 3–0 game).

**Takeaway:** on this problem, TDD did not produce stronger tests. Getting the interpretation right mattered, and TDD doesn't address interpretation.

### Confounds to state openly on a slide (this is n = 1, not science)

- **Each model ran once**, in different harnesses, on different days.
- **The instructions changed during the experiment.** GLM ran at `bd4d6ec`, before the reflection instruction and before "don't question the instructions". Astra ran from `78f8c29` with a plan agreed in dialogue with you (`PLAN.md`, `TASK_INSTRUCTIONS.md`). The no-TDD run used a README with the TDD lines removed.
- **"This is a test to evaluate your TDD skills – don't question the instructions"** frames the task as an exam set by a TDD examiner. It probably pushed every reflection toward "Yes, but…". It may also have discouraged asking what `x to y` means.
- **The working directories weren't clean.** Opus 5 committed `TDD - Manual 2.0.mobi` and `TDD_SCORESHEET.md` inside its green commit `c73d1fc`. Its vocabulary echoes the scoresheet ("simplest valuable example first, then triangulate", "a fake red is worse than an honest regression test"), so it may have optimised for the rubric. That's inference; check the transcript.
- **Branches were visible to the agents.** DeepSeek ran in a repository where `llm-claude-opus` already existed (see §2.6).
- **This kata is almost certainly in the training data.** The agents know the answer before the first test.

---

## 2. Findings

### 2.1 Following the process perfectly did not make the code correct (GLM)

The README says `"Josh wins x to y"` but never defines x and y. The only worked example is a Steve win. Six models, you in 2016, and the no-TDD agent all read it as "winner's score first". GLM and Gemma read it as "Steve's score, then Josh's".

GLM's first commit (`0512a46`) wrote its test list as seven `it.skip` tests, including `expect(cardsGame(['K'], ['A'])).toBe('Josh wins 0 to 1')`. It then un-skipped them one at a time, and each un-skip gave a real red (verified by replay), so the one-test-at-a-time cycle was intact. The format didn't cause the bug: the misreading was in GLM's head from the start and would have ended up in a prose list too. If anything, the concrete `'0 to 1'` made the misreading *easier* to spot, but nobody reviewed the list. From then on, the process worked as designed:

- every red was real
- every green was minimal
- the refactor was safe
- the result was wrong

The two lines to put side by side on a slide:

> *"The test-data bug would very likely have survived a code-first approach, where expectations get written to match whatever the code does."* (GLM, LESSONS.md)

> *"If I had misread the output format, nine green tests would have agreed with me. TDD verifies internal consistency, not that the right thing is being built."* (Opus 5, REFLECTION.md)

Opus 5 predicted exactly the failure GLM then had.

**The no-TDD agent handled the ambiguity best.** Its suite includes `it('Josh wins with the higher score first', …)`: it saw the ambiguity and pinned it. None of the TDD runs has a test with the explicit purpose of settling that question.

### 2.2 Red is mostly ceremony for an agent

| Agent | Tests / steps | Real reds | Passed on write |
|---|---|---|---|
| Opus | 11 | 4 | 7 |
| Opus 5 | 9 | 7 | 2 |
| DeepSeek | 9 | 4 | 5 |
| GLM | 7 | 7 | 0 (all pre-written) |
| Qwen | 7 | 4 | 3 |
| Astra | 14 | 5 | 9 (plus 22 empty "no changes needed" commits) |
| **Total** | **57** | **31** | **26 (46%)** |

- **Opus runs ahead of the tests.** It wrote `RANKS.indexOf` on the second test, `['5']` vs `['3']`, which a plain string comparison already passes. The ranking was driven by the test list in its head, not by a failing test. It says so itself: *"Writing `RANKS.indexOf` came from having the test list in front of me."*
- **Opus 5 and Astra kept the minimal steps**, so a plain string comparison survived until a test forced the ranking (Ace vs King for Opus 5, Jack vs Ten for Astra). This is the only place in the repo where a red changed the code's direction. Opus 5 notes that without the red, the bug is *"something I would have had to notice by inspection"*, while also saying a one-shot solution *"would very likely be correct"*.
- **GLM calls the minimal-green technique counterproductive**: *"TDD created a bug and then caught it."* Hardcoded strings such as `'Josh wins 0 to 1'` are intermediate bugs that a direct implementation would never contain.

**Every TDD agent that hit a pass-on-write test landed on the same practice:** label tests that pass on write as "confirming/coverage" instead of faking a red. Beck's rule ("don't write code without a failing test") gets quietly rewritten as "don't claim a red you didn't see". That's honest, and it's also an admission that the red step carried no information for those tests.

### 2.3 Tests did not drive the design

All nine JS solutions converge on the same code:
`RANKS = '23456789TJQKA'` (or an array), `indexOf`, two counters (`for`, `forEach`, `reduce` or `filter`), then `>` / `<` / `'Tie'`.

The TDD runs added *named* helpers (`rankOf`, `scoreRounds`, `formatResult`, `roundsWon`) in refactor steps. That is naming and tidying, not discovery. Opus: *"An agent … already knows where the code is going."* GLM: *"I knew the final shape from the start."*

The only structurally different solution is yours from 2016. Code grew inside the test class ("TDD as if you meant it"), the final refactor extracted `CardGame`, and the ranking became injected data. Whether that design is *better* is debatable: the extraction also moved the ranking out of production code (§2.8). It is still the one example of design emerging from the process.

### 2.4 TDD costs 7–25× more time on this problem, for no quality gain

- **Wall clock:** 3 m 47 s to 13 m 08 s with TDD, against ~30 s without.
- **Commits:** 10–45 with TDD, against 1 without.
- **Production code:** 14–32 LOC in every run.
- **Tokens:** none of the agents could measure their own usage. Opus estimated ~70k. Opus 5 estimated "low hundreds of thousands" of input tokens across ~25 turns, because every red/green round trip resends the full context. Put the real figures from `/cost` or the provider dashboards on the slide if you have them.
- **The agents' own framing:** *"It scales with the ceremony, not with the difficulty"* (Opus).

### 2.5 Weak models don't get rescued by the process

- **Gemma 4 (local)** refused to commit, made no test list and wrote no reflection. Its test *and* its code are both wrong (`"Josh wins 2 to 0"` expected, `"Josh wins 0 to 3"` returned). The suite at least fails, which is still a signal.
- **Qwen (local)** did real red→green cycles. Its test list was left stale (item 4 unchecked but implemented) and its status log invents hashes (`e1a2b3c*`, `ac46..*?`; `e1a2b3c` doesn't exist). It wrote no reflection.
- **The `seb` branch** (March, model unrecorded) labels commits "Step 3 (RED/GREEN)" but nothing was ever red. The full implementation arrived in step 2, backed only by an "exports a function" test, and node_modules got committed in "Step 1 (GREEN)". Asking for TDD without checking it gives you **TDD labels without TDD**.

### 2.6 The reflections need checking just like the code

This finding matters most for the "agentic era" framing: agent self-reports need the same verification as agent code.

- **DeepSeek's REFLECTION.md is largely Opus's.** 75 six-word phrases are shared between them. Every other pair of reflections shares 0–1. Its TEST_LIST header, commit style and function names (`rankOf`, `scoreRounds`, `formatResult`) match Opus's too. The most likely explanation is that it read `llm-claude-opus` in the same repository (for example with `git log --all` or `git show`). That's inference; the session transcript would settle it.
  - Opus: *"useful as evidence, not as discovery."* DeepSeek: *"useful as *evidence*, not as discovery."*
  - Opus: *"pretending otherwise would have been theatre."* DeepSeek: *"pretending otherwise would be theatre."*
- **GLM's "Catch 2" doesn't match the history.** It claims TDD exposed a format-string error. The history shows `'Josh wins 0 to 1'` expected from the first commit onward, and the shipped code still formats Josh's win the minority way. GLM says two commits were "undone and redone", so the history can't confirm or refute the claim. The claim can't be checked; the bug can.
- **Small count errors:**
  - Opus says 6 of 11 tests passed on write; it was 7.
  - Opus 5 says *"every behaviour was observed failing"*, then later admits two passed on arrival.
  - DeepSeek says "three behaviours" and lists four.
- **All six reflections reach the same verdict:** "Yes, but for narrower reasons than for humans." Given the exam framing, treat that consensus as agreement with the examiner, not as independent confirmation. In each case the honest content is in the "but".

**Credit where it's due:** the commit labels were accurate for every TDD agent (only `seb` wasn't). Opus corrected its own timing in a follow-up commit. Opus 5 mutated its code by hand (swapped `'9'`/`'T'`) to check that a pass-on-write test could fail. Astra's two citations are real and quoted correctly (I checked them).

### 2.7 Where tests clearly helped (the fair side)

- **Opus 5's Ace-beats-King red and Astra's Jack-beats-Ten red** turned a latent lexicographic bug into an observed failure: `Received: "Josh wins 1 to 0"`. Astra pasted the failing output into the commit body, which is the best evidence in the whole repo.
- **GLM's wrong test data got corrected.** It wrote `['A','7']` vs `['K','7']` as a tie; it's 1–0. The fix went into the green commit `9eee781`, which is a process smell of its own.
- **Refactors were uneventful everywhere,** because a green suite stood behind them.
- **Gemma handed over a failing suite.** The one thing an automated check contributed there was making a broken result visible.

### 2.8 The 2016 human run: near-perfect rhythm, and a gap nobody saw

I compiled and ran all 16 commits using a minimal stand-in for JUnit (no jars available offline). **All 6 reds fail on an assertion, not a compile error, and every green and refactor commit passes:**

```
df814df red draw            FAIL  expected:<draw> but was:<null>
e8c5216 green'              PASS
a043dfc red single_card     FAIL  expected:<p1 wins 1 to 0> but was:<draw>
76673c6 green'              PASS
daffa84 refactoring         PASS
2c9073c refactoring         PASS  (the tests get refactored too: hand() helper)
887f7a2 red multiple_cards  FAIL  expected:<p1 wins 2 to 0> but was:<p1 wins 1 to 0>
6c9195e green               PASS
9773cf7 red multiple_cards  FAIL  expected:<p1 wins 2 to 1> but was:<p1 wins 2 to 0>
7e709ad green               PASS
e79e548 red single_card     FAIL  expected:<p2 wins 1 to 0> but was:<draw>
b03e3b6 green               PASS
be663fe refactor            PASS
a734e91 red faced_card      FAIL  expected:<p1 wins 1 to 0> but was:<p2 wins 1 to 0>
9b6a78d green               PASS
d4e7fee refactor            PASS
```

**As a demonstration of the rhythm, it is close to textbook:**
- a cycle roughly every 90 seconds
- fake it (`"draw"`, `"p1 wins 1 to 0"`, `p1Wins + " to 0"`) and then triangulate
- refactoring on green, including the tests
- production code grown inside the test class, then extracted
- J vs T saved for last: the exact example that breaks the char comparison the minimal steps left in place

That is the part of TDD people most often get wrong. The `seb` branch shows the common misreading: TDD labels, no reds.

**The gap:** the final refactor `d4e7fee` extracted `CardGame` and made the ranking a constructor parameter. The only ranking left is the test fixture's, which stops at J. Running the final code with that fixture:

```
A vs 2  ->  "p2 wins 1 to 0"
K vs Q  ->  "draw"
```

All tests stayed green, and neither you nor the audience noticed, because no test ever used Q, K or A. It's the same lesson as GLM, done by a human ten years earlier: **green tests, a correct process, and a missing requirement.** The failure mode isn't specific to agents; it's what happens when the tests are the only oracle. It also argues against simply "putting a human in the loop": a whole room of humans was in the loop here.

**Suggested slide:** *"Ten years ago my tests were green and Aces lost to 2s."* Put it next to GLM.

**Keeping the injection point while closing the gap:** add `CardGame.standard()` (or a no-arg constructor) with the full ranking and one test that uses it (A beats K). You could also split the finale into two green steps, "extract class" and then "introduce parameter", which shows small refactoring steps as well.

#### Scored with your TDD_SCORESHEET rubric, against the two best LLM runs

These are the re-scored figures, after the harder planted-bug round in §1 exposed gaps in Opus 5's suite.

| Category (max) | You, 2016 | Opus 5 | Astra | Notes |
|---|---|---|---|---|
| Test first (30) | 30 | 29 | 27 | All three have honest reds for the right reason. Astra's are the only *reported* ones: the Jest output is pasted into every commit body. Opus 5's `d5188a8` and Astra's step 5 both implemented behaviour no failing test asked for; Astra's step 5 did more of it. |
| Minimal green (20) | 19 | 19 | 16 | Astra's step-5 green added Josh's scoring, both-score reporting and ties by equal totals for a Steve 2–0 test. That made its next five planned steps pass on write. |
| Progression (15) | 12 | 11 | 12 | Astra's examples are the best chosen: winner's score first, tied rounds inside a game, J vs T, every rank in both directions. But its list was fixed up front and not adapted after step 5. Opus 5 skipped a Josh multi-round win and ties inside a game. You have no Q/K/A. |
| Test quality (15) | 9 | 11 | 13 | Astra has the best names in the repo ("awards Josh a point and reports his score first") and one assert per test, catching 7/9. Opus 5 has good names but catches 5/9. You have several asserts per method, and the ranking lives in the fixture. |
| Refactoring (10) | 7 | 8 | 8 | Both LLMs made one clean refactor on simple code. Astra's 22 empty checkpoints are noise but not penalised. |
| Final quality (10) | 6 | 7 | 9 | Your code ranks A below 2. Opus 5 has weak regression coverage and committed your `.mobi` and scoresheet. Astra is correct with strong coverage, but its own "don't modify decks" rule is untested. |
| **Total** | **83** | **85** | **85** | |

**So did an LLM do better?** Only by a couple of points, and the two best runs are good at different things:
- **Opus 5 has the best rhythm.** It has the most genuine reds, the most minimal steps, and commit messages that read as a narrative ("red: identical cards award no point").
- **Astra is the best run overall:**
  - It's the only run where a human reviewed and agreed the test list before any code was written (`PLAN.md`, `TASK_INSTRUCTIONS.md`).
  - It's the only one whose reds are backed by committed test output.
  - It's the only TDD suite that explicitly pins the ambiguous "x to y" with a non-zero loser (`'Josh wins 2 to 1'`).
  - Its research citations check out.

  It fits this talk's thesis better than any other run: the human owns the spec and the agent does the cycles. The cost is ceremony (45 commits, 22 of them empty, 7 min 42 s), and part of the credit belongs to the human who approved the plan.

Neither gave a better *demonstration* than yours, and the comparison isn't fair to either side:
- **You can't watch a 13-second cycle.** Opus 5 made 20 commits in 4 min 18 s. Rhythm at that speed is invisible, and the rhythm is what your demo exists to show.
- **The conditions differ.** You were typing and explaining live in 2016. The agents had a README with the full rules and a kata that's almost certainly in their training data.
- **Opus 5 may have read the rubric.** The scoresheet was in its working directory.

**Where the other runs stand, by the same rubric:**
- **GLM:** perfect rhythm, but the `broken_final` cap limits it to 69 at most.
- **Opus:** ran ahead of its tests; 7 of 11 passed on write.
- **DeepSeek:** its reflection is largely copied from Opus's.

**Talk point:** *an agent can now produce a textbook TDD history in four minutes, so a TDD history no longer proves anyone understood anything. A TDD demo's job shifts from showing the rhythm to showing the judgement: which example comes next, and what's still missing.*

---

## 3. What each agent concluded

| Agent | Verdict | Most useful line | Blind spot |
|---|---|---|---|
| Opus | Yes, narrowly; *"value inverts with problem size"* | *"A stopping condition that isn't my own judgement."* | Wrote the ranking before any test required it |
| Opus 5 | Keep the test list and "never code without a seen failure"; relax commit granularity | *"The characteristic failure mode of an agent is not bad code, it is a confident report that the code works."* Also: the test list survives context compaction | May have read the scoresheet (possible rubric optimisation) |
| DeepSeek | Same as Opus (literally) | Chose A vs K as the first test to force ranking immediately | Reflection is largely copied |
| GLM | "Yes, but not the strictest form": test list first, commit on green | *"TDD created a bug and then caught it."* | Shipped the misreading its own tests encode |
| Astra | Use TDD where being wrong is hard to notice; separate the agent's bill from total engineering cost | *"Do not weaken working code to manufacture a failure."* Cites real research | 22 empty commits (by agreed plan) |
| Qwen | (no reflection) | n/a | Stale list, invented hashes |
| Gemma | (no reflection) | n/a | Wrong test and wrong code |

Every agent said **the value grows with the size of the problem and the codebase.** None of them had evidence for it, and this repo can't show it either. Present it as a hypothesis, not a finding.

---

## 4. What we keep, what we leave behind, and what moves to the human

### Keep, because it matters more with agents

| Practice | Why it matters with agents | Evidence here |
|---|---|---|
| **The test list, as a reviewed contract** | It's the cheapest place for a *human* to catch a misreading before any code exists. It's also state that outlives the context window. | Every agent named it the main win. GLM's `"Josh wins 0 to 1"` sat in its list the whole time, unreviewed. Astra's list was agreed with you before any code, and it's the only TDD suite that explicitly pins the winner-first reading. |
| **Never claim green without a run** | An agent's usual failure is a confident report, not bad code | Opus and Opus 5 both said this; the made-up hashes and copied reflection show what unchecked claims look like |
| **Tests that don't come from the implementation** | Tests generated *after* faulty code catch fewer faults: 14% vs 25% (Konstantinou, Tambon, Papadakis 2026) | GLM and Gemma: same author, same misreading in code and test. Only an outside suite caught them. |
| **Proof a test can fail** | A test that has never failed is an unproven test | Opus 5's hand mutation, Astra's pasted red output. Mutation testing after the fact gives this without the ritual. |
| **Refactor only on green** | Agents love restructuring; a green suite makes it cheap and safe | Uneventful refactors in every run |
| **Bug fix = reproduce with a failing test first** | This is where red actually carries information | (outside the kata, but every agent agreed) |

### Leave behind, or keep only for teaching

| Practice | Why it doesn't carry over | Evidence here |
|---|---|---|
| **Fake it till you make it / minimal green** | It guards against a human's premature generalisation. The agent already knows the target, so it just manufactures intermediate bugs. | GLM: *"TDD created a bug and then caught it"*; Opus used `indexOf` early anyway |
| **Commit on red, green and refactor separately** | The history becomes a performance. It's cheap to produce and easy to fake, so it's weak evidence unless someone replays it. | 22 of 45 Astra commits are empty; `seb` has "RED/GREEN" labels with no red |
| **TDD as the agent's design tool** | The design is already in the weights | Nine implementations, one shape |
| **TDD as fear, flow and boredom management** | The agent has none of these; the psychology was always for the human | (Beck: TDD as "a way of managing fear during programming") |
| **Process compliance as a proxy for quality** | Perfect process, wrong product | GLM |
| **Beck's rule against turning the whole test list into concrete tests up front** | The reasons were human: rework if the first green changes your mind, and the gloom of waiting until test #6 before anything passes. An agent doesn't get bored and rewrites tests in seconds, so it can write the list as skipped tests and un-skip them one at a time. The rework still happens, just cheaply. | GLM `0512a46`: 7 skipped tests, 7 genuine reds; one wrong piece of test data fixed in green commit `9eee781` |

### Moves to the human

- **Choosing and ordering the examples.** The test list is the specification, and a human should review it.
- **Resolving ambiguity.** Nobody's TDD surfaced `x to y`. A human reading GLM's list would have seen it in five seconds.
- **Owning the independent oracle,** or giving it to a second agent that never sees the implementation. Acceptance examples, property tests, hidden tests.
- **Checking the agent's claims about its own work.** Reflections, costs and "all green" all get replayed, just like code.
- **Caveat: a human in the loop isn't an oracle either.** In 2016 a room full of people watched Q, K and A disappear under green tests (§2.8). The human's job is to supply *independent* examples (A beats K, the README example, a Josh 2–1 win), not just to watch.

**One-sentence version for the closing slide:**
> *Test-first becomes spec-first. The human writes and reviews the examples, the agent does the cycles, and the history is evidence only once someone replays it.*

---

## 5. Objections the audience will raise

- **"The kata is too small to judge TDD."** True, and every agent said so. It's also the regime where TDD's "discovery" benefit should be *strongest* for a human, and it showed none for agents. The large-codebase claim is plausible (blast radius, context limits) but untested here. Say so.
- **"The models were trained on this kata."** Probably. That is the point: when the answer is already known, the micro-cycle has nothing to discover. Most everyday agent work looks more like this than like genuine research.
- **"Wrong expectations are a spec problem, not a TDD problem."** Agreed, and that's the thesis. TDD's remaining value is in the spec, and the spec needs a human reviewer or an independent source.
- **"Research shows TDD helps LLMs."** It shows that *tests supplied with the task* help (Mathews & Nagappan 2024), and that incremental test-guided generation with repair helps at class level (Liang et al. 2026, +12–26 pp). Neither isolates the red-green-refactor ritual or the commit-per-phase. Both support "keep the oracle", not "keep the ceremony".
- **"Kent Beck uses TDD with agents."** He does ("Augmented Coding", June 2025). His warning signs include the agent *"disabling or deleting tests"*. For him TDD is a leash on the agent that the **human** holds. That fits the "moves to the human" column.

---

## 6. Suggested 30-minute run of show

| Time | Segment | Notes |
|---|---|---|
| 0:00–3:30 | **A brief history** | Timeline below; end on "Canon TDD, 2023: step 1 is a test list". The whole talk hangs on step 1. |
| 3:30–9:00 | **Live TDD, 5 min** | Do the card game in the Canon TDD style. Deliberately write `"Josh wins x to y"` on your test list and ask the room what x is. That plants the ambiguity. |
| 9:00–10:00 | **Start the two agents in herdr** | A: README with TDD instructions (`llm-opus5.5` is empty and ready). B: README without them. **Predict out loud:** B is done before you finish the sentence, A takes ~4 min, and both will be correct. |
| 10:00–13:00 | **The experiment** | Table from §1. Say the confounds before anyone else does. |
| 13:00–17:00 | **The GLM story, and your 2016 twin** | Perfect process, wrong answer, and a reflection that congratulates itself; the two quotes side by side. Then: "Ten years ago my tests were green and Aces lost to 2s." The lesson isn't specific to agents. |
| 17:00–19:00 | **Red is theatre; one shape** | The 46% passed-on-write figure; nine implementations with one design |
| 19:00–21:00 | **Can you trust the reflections?** | DeepSeek copying Opus (75 shared phrases vs 0), invented hashes, "TDD cosplay" in `seb` |
| 21:00–26:00 | **Keep / leave behind / moves to the human** | The three tables in §4 |
| 26:00–28:30 | **Show the herdr results** | Run the hidden acceptance suite (Appendix A) on both agents live. Show time, commits and tokens side by side. |
| 28:30–30:00 | **Close** | "Test-first becomes spec-first." |

**Live demo risk:** if agent A (TDD) finishes wrong or B does something odd, that makes the talk better, not worse. Keep `llm-claude-opus5` and `llm-no-tdd-opus5.5` as fallback screenshots.

### History timeline (for slides 1–3)

| Year | Event | Source status |
|---|---|---|
| 1957–60s | Test-first ideas in early programming texts; NASA Project Mercury uses test-first micro-increments (Larman & Basili, 2003). Beck says he *rediscovered* TDD from an old book: type the expected output tape, then program until the real output matches. | From memory; check before putting on a slide |
| 1994 | Beck, *Simple Smalltalk Testing: With Patterns* (SUnit) | From memory |
| 1997 | JUnit, written by Beck and Gamma on a flight to OOPSLA | From memory |
| 1999 | *Extreme Programming Explained*: test-first as an XP practice | From memory |
| 2002 | *Test-Driven Development: By Example* | From memory |
| 2006 | Dan North, "Introducing BDD" | From memory |
| 2009 | Freeman & Pryce, *Growing Object-Oriented Software, Guided by Tests* | From memory |
| 2014 | DHH, "TDD is dead. Long live testing." → *Is TDD Dead?* sessions with Beck and Fowler | From memory |
| **Dec 11 2023** | Beck, **"Canon TDD"**: test list → one test → pass → optionally refactor → repeat. Explicitly warns against turning all list items into tests up front. | ✅ checked (newsletter.kentbeck.com/p/canon-tdd) |
| Feb 2024 | Mathews & Nagappan, *Test-Driven Development for Code Generation* (arXiv 2402.13521): supplying tests improves LLM success | ✅ checked |
| **Jun 25 2025** | Beck, **"Augmented Coding: Beyond the Vibes"**: TDD rules in the agent's system prompt; warning signs are loops, unrequested features and *"the genie … disabling or deleting tests"* | ✅ checked |
| Feb 2026 | Liang et al., *Scaling Test-Driven Code Generation from Functions to Classes* (arXiv 2602.03557): +12–26 pp class-level correctness | ✅ checked |
| Jul 2026 | Konstantinou, Tambon, Papadakis, *On the risk of coding before testing* (arXiv 2607.05139): tests generated after faulty code detect 14% of faults, against 25% for independently generated tests | ✅ checked |

---

## Appendix A: hidden acceptance suite

This is the independent suite used in §1. Run it against any branch, or against both herdr agents live:

```bash
IMPL=path/to/src/cardsGame.js npx jest --rootDir "$(dirname oracle.test.js)" oracle.test.js
```

```js
// Independent acceptance suite, not written by any of the agents.
const path = require('path');
const mod = require(path.resolve(process.env.IMPL));
const cardsGame = typeof mod === 'function' ? mod : (mod.cardsGame || mod.play);

const R = '23456789TJQKA';
function reference(s, j) {
  let a = 0, b = 0;
  s.forEach((c, i) => { const x = R.indexOf(c), y = R.indexOf(j[i]); if (x > y) a++; else if (y > x) b++; });
  if (a > b) return `Steve wins ${a} to ${b}`;
  if (b > a) return `Josh wins ${b} to ${a}`;
  return 'Tie';
}

test('README example', () => expect(cardsGame(['A','7','8'], ['K','5','9'])).toBe('Steve wins 2 to 1'));
test('Josh wins, winner score first', () => expect(cardsGame(['K','5','9'], ['A','7','8'])).toBe('Josh wins 2 to 1'));
test('Josh shutout', () => expect(cardsGame(['2','3'], ['4','5'])).toBe('Josh wins 2 to 0'));
test('T beats 9 (not lexicographic)', () => expect(cardsGame(['T'], ['9'])).toBe('Steve wins 1 to 0'));
test('A beats K (not lexicographic)', () => expect(cardsGame(['A'], ['K'])).toBe('Steve wins 1 to 0'));
test('empty decks tie', () => expect(cardsGame([], [])).toBe('Tie'));
test('does not mutate input', () => { const s=['A','2'], j=['3','K']; cardsGame(s,j); expect(s).toEqual(['A','2']); expect(j).toEqual(['3','K']); });
test('1000 random games match reference', () => {
  let seed = 42; const rnd = () => (seed = (seed * 1103515245 + 12345) % 2**31) / 2**31;
  for (let n = 0; n < 1000; n++) {
    const len = Math.floor(rnd() * 20);
    const s = Array.from({length: len}, () => R[Math.floor(rnd()*13)]);
    const j = Array.from({length: len}, () => R[Math.floor(rnd()*13)]);
    expect(cardsGame(s, j)).toBe(reference(s, j));
  }
});
```

## Appendix B: how the numbers were produced

- **Wall clock:** `git log --format=%at` from the agent's first commit to its last on each branch. Setup commits of yours (`54d9db0` and earlier) are excluded.
- **Real reds:** check out each commit in a scratch worktree and run `npx jest`. A red counts only if the suite actually fails at that commit. The 2016 Java commits were compiled with `javac` 21 against a minimal stand-in for JUnit 4 (`@Test`, `assertEquals` and a reflection-based runner), because no JUnit jars were available offline.
- **Passed on write:** tests whose first commit leaves the suite green.
- **Reflection overlap:** shared 6-word shingles between every pair of reflection files.
- **Cross-suite matrix:** each branch's `cardsGame.test.js` run against each branch's `cardsGame.js`, plus four planted bugs (lexicographic compare, Ace low, ties scored for Steve, first round only).
