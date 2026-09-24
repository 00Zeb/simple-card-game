# Video Analysis: Emily Bache on TDD in the Agentic Era

**Video:** [The Last Year Has Changed Everything I Knew About TDD After 20 Years](https://www.youtube.com/watch?v=wK5WgbqtI50), presented by Emily Bache on Dave Farley's channel *Modern Software Engineering*. Published 23 Sep 2026, 10 min 26 s. When fetched on 24 Sep 2026 it had ~8.0k views, 189 likes and 24 comments.

**What it responds to:** Birgitta Böckeler, [*TDD inside the agent loop: theater or actual value?*](https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html), martinfowler.com, 10 Aug 2026. I read the article too, so the study facts below come from the source, not from the video's account of it.

**Method:** the transcript comes from YouTube's auto-captions, fetched with `yt-dlp`, so names are sometimes garbled. The captions say "Emily Bates" (Emily Bache), "Summon/Saman" (Samman), "genetic AI" (agentic AI) and "Yvette Erdmann" (Ivett Ördög, who is named in the article). I've corrected these. One name ("Nizar Selanda") I couldn't confirm.

---

## 1. What the video says

**The setup (0:00–1:40).** Emily has done TDD for 20+ years. Böckeler's article concluded there was *"no discernible difference"* between agents told to do TDD and agents not told to, and that TDD isn't worth the tokens. Emily read an early copy, was surprised, studied it, and is *"not convinced"*. She still recommends the article and credits it as the only formal evaluation of agent TDD she knows of.

**The study, as Emily describes it (2:45–4:24).** An agent runs in a loop and implements a whole feature with no human intervention. Some runs got a TDD prompt, some didn't. The solutions were analysed for spec compliance, test coverage and code quality, and the TDD runs didn't do better. Emily's first worry was that the TDD prompt is brief: *"just a couple of paragraphs of extra text"*, far less than practitioners use. She accepts that the session logs show the agents really did write tests first in small steps.

**Her three objections:**

1. **No test list (4:24).** Canon TDD's first step is a test list, updated on every loop. Böckeler's prompt leaves it out. In the experiment where TDD did worst, the analysis found the agent *treated the tests as the only spec*: *"Unlisted but required behaviour simply never got written."* Emily believes a test-list step would have prevented that.
2. **A weak refactoring step (5:32).** Halfway through, Böckeler strengthened the prompt with specific code smells, and code quality improved. Emily says prose isn't enough. She wants deterministic sensors in the harness (**"habit hooks"**, from her earlier video with Ivett Ördög): something like a linter that detects a smell and injects specific guidance for fixing it.
3. **The setup isn't realistic (7:46–9:00).** Practitioners use far more sophisticated harnesses. Emily ran a kata in the Samman technical-coaching community and has **8 fully worked solutions showing TDD harnesses**. *"All of them are doing something more sophisticated than two paragraphs in a prompt."*

**What she concedes (7:12).** The article's list of TDD benefits is valuable framing. Böckeler *"is not finding really good evidence in favour of TDD, but she hasn't really proved that the results are worse either"*. TDD *"does seem to cost more tokens"*. Emily's next step is to understand what practitioners actually do before designing a better evaluation, and she invites researchers with token budgets to test better prompts and harnesses. The video ends with a plug for her webinar, *"From Traditional TDD to AI-Assisted, Without Losing the Plot"*.

**Her position in one line:** the question *"theater or actual value?"* is still open, and the study tested a prompt, not TDD.

### What the article actually found

| | Böckeler, 10 Aug 2026 |
|---|---|
| Design | Three greenfield business-logic tasks (small, medium, large) with deliberately idiosyncratic rules. **Sonnet 4.6** implemented them: TDD vs no TDD, plus a "test-first without full TDD" variant. Five batches. Every run had an 80% coverage requirement. |
| Judging | **Opus 4.8** ranked design and test quality blind to the workflow. Sonnet 4.6 judged TDD adherence from the transcripts. Mutation scores were also measured. |
| Cost | TDD used **8.5× the tokens on the small task, 2.96× on medium and 4.89× on large**. |
| Quality | On small and medium tasks, non-TDD solutions ranked #1–2 and TDD #3–4. The large task was mixed. **Mutation scores showed no meaningful difference.** |
| Failure modes | *"Behaviour the agent didn't think to write a test for didn't get implemented at all."* Some TDD tests were tautological, checking the implementation's output against itself. |
| Explanation | Non-TDD runs designed everything up front: data model, edge cases, contracts. TDD runs let design *"emerge from the sum of many locally-minimal decisions"* that were *"rarely revisited"*. Ivett Ördög suggests this is because LLMs learned to translate requirements directly into code, not the process of getting there. |
| Conclusion | *"I have stopped telling my coding agents to write tests first, let alone do TDD"*, pending evals. *"The role of TDD as we've known it is significantly smaller than pre-GenAI."* |
| Recommendations | Mutation testing to monitor test quality. Refactoring triggers (static analysis, modularity reviews, churn metrics). Ördög's "Approved Scenarios" pattern for confidence. |

---

## 2. The comments

These are the 24 comments present on 24 Sep 2026: 19 top-level and 5 replies, sorted here by theme. Likes are in brackets.

**A single prompt isn't a fair test; you need a harness (the most common view).**
- **@lubyck [1]:** *"You can't get a good TDD loop out of a single simple prompt."* It took them months to build an ATDD/TDD workflow with dedicated agents, rules and skills, which costs *"well under $1"* a day on open models. @retAntz agrees.
- **@marcotroster8247:** prose needs *"a technical counterpart that enforces quality"*: pre-push git hooks, linters, coverage gates and custom lint rules.
- **@nivoset [2]:** keeps improving their setup, which works even with small offline models. They enforce test names that describe user-expected behaviour.

**Test-first gives you tests you can trust (the top comment).**
- **@BrandonToone [9]:** a failing test first *"incentivises it to write a good test"*. Tests written alongside the code *"just confirm whatever it generated"*. They suspect the article didn't account for this.

**Agents don't want to do TDD.**
- **@JavierGuerra_g [3]:** *"telling the agent to use TDD is worthless … it drafts the whole feature in context, then writes the tests to match."* Their workaround is explicit phases (spec → tests → code → refactor) with a human approval gate between each. The agent still keeps trying to skip ahead: *"it totally negates any benefit from the automation."*

**Keep a human in the loop.**
- **@SlowAside5:** Böckeler's setup had no human intervention, *"which to me defeats the point"*. Nobody critiques tests that couple to implementation details.
- **@Pu22leDucK [1]:** TDD with Claude keeps changes well scoped and easy to review before *"make it so"*.
- **@GameDev_with_Context:** agents are *"incentivised to fix a bug, rather than to solve a problem"*. Tests signal that the model is wrong, but *"this signal can easily be missed when you are not writing, or at least reviewing the tests."*
- **@mingying2956:** *"Anybody tried human writes tests and agent writes code? Or … separated contexts for the testing agent and coding agent."*

**Tests matter; the order may not.**
- **@br3nto:** tests *"steer agents; validate invariants; explain the invariants; let you know the system works"*. *"You don't necessarily need to add tests first. But you do need to add tests for functionality you don't want changed."*
- **@lawrencejones51 [2]:** the tests are the code's first consumer, which improves structure, and they're a long-term safety net. They don't see how AI provides either, but are open to changing their mind.

**The test list resonates.**
- **@br3nto (second comment):** *"a test list… that makes sooo much sense"*. They plan to convert Jira issues into test lists before their automated agent does TDD.
- **@daveh0:** *"I didn't realise I was doing TDD"*. They built a catalogue of ~1000 test cases and had the agent work through them one by one.

**Design and taste.**
- **@PaulSebastianManole [5]:** LLM TDD is *"outsourcing design and architecture to something that has no taste, no real judgement."* @Pu22leDucK replies that AI design is easier to criticise in isolated tests.

**Other points.**
- **@KarlLew:** AI TDD is *"lower quality but a great beginning"*. Having **Gemma 4 review Claude's TDD** finds testing gaps. *"My TDD hasn't changed, but it is actually fun now."*
- **@cuillinguy [1]:** likes how the AI develops once the tests are in place.
- **@SirBenJamin_ [1]:** *"baffled that people want to work this way. It's depressing."* @SlowAside5 replies that it has psychological benefits: the code is always working and safe to refactor. SirBenJamin_ then clarifies: *"I didn't mean TDD, I meant AI prompt coding."*
- **@doguy8650:** mute the noise and try things yourself.
- **@QmunkE [2] and @palimondo:** the article isn't linked in the description, and posting the link as a comment gets it auto-removed.

**Overall tone:** mostly practitioners who use TDD with agents. They agree with Emily that a prompt alone is too weak, and most say the value comes from **harness enforcement and human review**. Nobody defends the bare TDD prompt. Only one commenter (JavierGuerra) reports that TDD with agents is more trouble than it's worth, and one (SirBenJamin_) rejects agentic coding altogether.

---

## 3. How well this matches PRESENTATION.md

**Short answer:** very well. The article is independent, larger-scale corroboration of the presentation's main findings. Emily's rebuttal backs its top recommendation (the test list, owned by a human). But one of Emily's criticisms also applies to the presentation's own experiment, and the talk should say so up front.

### 3.1 Claim by claim

| Claim | Article / video / comments | PRESENTATION.md | Fit |
|---|---|---|---|
| TDD costs much more | 2.96–8.5× tokens (article); "does seem to cost more tokens" (Emily) | 7–25× wall clock, 10–45 commits vs 1 (§2.4) | ✅ Strong agreement |
| No quality gain from TDD | Non-TDD ranked #1–2 on small/medium; no mutation-score difference | No-TDD passes the independent suite; its suite caught 7/9 planted bugs, like Astra's 49 cases (§1) | ✅ Strong agreement, found by different methods |
| Design doesn't emerge from agent TDD | TDD runs made *"locally-minimal decisions … rarely revisited"*; non-TDD runs designed up front; Ördög's "direct translation" theory | Nine implementations, one shape; *"the design is already in the weights"* (§2.3) | ✅ Strong agreement. The article offers the mechanism, the repo the evidence. |
| Unlisted behaviour is the failure mode | *"Unlisted but required behaviour simply never got written"* | Unlisted behaviour went **unprotected**: Opus 5's list had no Josh multi-round win, so a hardcoded "Josh 1 to 0" bug passes its suite. Your 2016 Q/K/A never got a test, so a refactor removed it silently. | ✅ Same root cause. On a kata the agent's prior knowledge filled the gap in the code, but not in the tests. |
| The test list is the missing piece | Emily's main objection; @br3nto and @daveh0 | Keep #1: "the test list, as a reviewed contract" (§4) | ✅ Agreement, but see 3.2 |
| A human must stay in the loop | @SlowAside5, @GameDev_with_Context, @JavierGuerra_g's approval gates | "Moves to the human"; Astra, with a human-approved plan, was the best run (§2.8) | ✅ Agreement. The presentation adds a caveat: a human isn't an oracle either (2016). |
| Tests independent of the implementation | @BrandonToone (top comment); the article's tautological tests | Keep #3, with Konstantinou et al. (14% vs 25%); GLM and Gemma misreading in both code and test | ✅ Agreement. The presentation adds a nuance: test-first protects against code-to-test errors, **not against misreading the spec**. |
| Mutation testing as the quality check | Article recommendation | The planted-bug matrix is hand-made mutation testing; Keep #4, "proof a test can fail" | ✅ Strong agreement |
| Deterministic enforcement beats prose | Emily's habit hooks; @marcotroster8247's git hooks and lint rules; @lubyck's harness | Not covered. The presentation only says histories must be *replayed* to count as evidence. | ⚠️ **A gap in the presentation** |
| A prompt-only TDD setup is an unfair test | Emily's main criticism of Böckeler | Your experiment is also prompt-only: four bullets in a README, no refactoring guidance, no hooks | ⚠️ **The criticism applies to your experiment too** |
| Refactoring needs stronger prompting | Stronger smells prompt improved quality mid-study | "Refactor only on green"; refactors were trivial on a kata | ➖ Not tested by the kata |
| Agents skip ahead / cheat | @JavierGuerra_g: *"drafts the whole feature … then writes the tests to match"* | Opus wrote `indexOf` before any test needed it; 46% passed on write; Beck's "genie" | ✅ Agreement |
| Using a second model as reviewer | @KarlLew: Gemma 4 reviewing Claude's TDD | "Owning the independent oracle, or giving it to a second agent" (§4) | ✅ Agreement. Ironically, Gemma was the weakest *implementer* here. |
| TDD's psychological value | Beck's "managing fear" in the article's benefit list; @SlowAside5 | "The psychology was always for the human" (§4, leave behind) | ✅ Agreement: the benefit is real, but it belongs to the human. |

### 3.2 Where Emily's critique applies to your own talk

Emily's objection is that the study tested *a prompt*, not TDD. The presentation's experiment has the same weakness, so make it a slide before an audience member raises it. Say it first, then turn it into a finding:

- **Your prompt had the test list Emily says was missing.** The README says: *"Use a test list … treat it as a living document."* So your runs partly test Emily's hypothesis.
- **On this kata, adding a test list didn't change the quality comparison.** The TDD runs with a list matched the no-TDD run and cost more. GLM had a list and still shipped the wrong answer. Qwen's list went stale.
- **The one run with a human-approved list was the best run (Astra).** That supports a refined version of Emily's point: **the test list helps because a human reviews it, not because the agent keeps one.** It's the same conclusion @SlowAside5 and @JavierGuerra_g reach from practice.
- **You had no harness:** no hooks, no approval gates (except Astra's plan), no refactoring sensors. Say plainly that you tested "TDD by prompt", like Böckeler, and that "TDD by harness" is the open question Emily raises.

### 3.3 What the presentation adds that neither the article nor the video has

1. **Deterministic verification instead of LLM judges.** Böckeler used Opus 4.8 to judge quality and Sonnet 4.6 to judge TDD adherence. Your own `tdd-judge` also uses an LLM. The presentation replays every red, runs an independent acceptance suite, and cross-runs planted bugs. That's a methodological strength worth pointing out.
2. **Spec ambiguity** (GLM's `"Josh wins 0 to 1"`). Neither source discusses a *correct process with a wrong spec reading*. It's the strongest story in the talk.
3. **Unreliable self-reports.** The copied DeepSeek reflection, the invented Qwen hashes and GLM's unverifiable "catch". The article judges code and transcripts but never questions what the agents claim about their own work.
4. **"The purest rhythm produced the weakest suite"** (Opus 5, 5/9). This fits Böckeler's "locally-minimal decisions" explanation and gives it a concrete, testable example.
5. **The human baseline.** Your 2016 run shows the "unlisted = unprotected" failure isn't specific to agents, and that a room full of humans didn't catch it either.

### 3.4 Where the talk sits in the debate

| | Böckeler (article) | Bache (video) | PRESENTATION.md |
|---|---|---|---|
| Tell agents to do TDD? | No, until evals show otherwise | Yes, with a test list and a proper harness | Leave the micro-cycle to the harness if you want it; it's not where the value is |
| Test-first? | Stopped asking for it | Yes | Spec-first: human-reviewed examples, then any order |
| Where value comes from | Mutation testing, refactoring triggers, Approved Scenarios | Test list, strong refactoring, deterministic habit hooks | Reviewed test list, independent oracle, mutation-style checks, replayed evidence |
| Human's role | Not in the studied loop | Implicit in the harness design | Explicit: owns and reviews the examples |

The presentation sits **between them**. It agrees with Böckeler on ceremony, cost and design. It agrees with Emily that the test list is the part worth keeping, and adds that it matters most as a document a human reviews. That's a strong position for a talk: the audience may well have seen both pieces, which are four and six weeks old, and you can show where your evidence lands.

### 3.5 Suggested changes to PRESENTATION.md (not applied yet)

1. **History timeline:** add *10 Aug 2026, Böckeler, "TDD inside the agent loop"* and *23 Sep 2026, Bache's response video*. They're the most recent entries and a natural lead-in to your live demo.
2. **Confounds:** add *"Prompt-only TDD with no harness, hooks or approval gates. Emily Bache's criticism of Böckeler applies here too."*
3. **§2.4 cost:** cite Böckeler's 2.96–8.5× token figures as larger-scale corroboration of your 7–25× wall-clock figures.
4. **§2.3 design:** use Böckeler's "locally-minimal decisions" explanation and Ördög's "direct translation" theory to explain the nine-implementations-one-shape finding and Opus 5's weak suite.
5. **§4 Keep:** add a row, *"Enforce with deterministic checks, not prose"*: hooks, mutation gates, replayed reds. The evidence is Emily's habit hooks, the comments, and the fact that your README bullets were followed to the letter while GLM still shipped wrong.
6. **§5 Objections:** add *"Emily Bache says you need a test list and a harness."* Answer: *"Our runs had a test list. On a kata it didn't change quality; with a human reviewing it, it produced the best run. The harness is the open question, and it's a harness, not TDD, doing the work."*
7. **Live demo idea:** give agent A (TDD) a hook that fails the commit if a `red:` commit's tests pass. That's the cheapest possible "habit hook", and it makes the ceremony enforced rather than asked for.

---

## Appendix: all 24 comments

| Likes | Author | Gist |
|---|---|---|
| 9 | @BrandonToone | Test-first incentivises good tests; tests written alongside confirm the generated code |
| 5 | @PaulSebastianManole | LLM TDD outsources design to something with no taste |
| 0 | ↳ @Pu22leDucK | AI design is easier to criticise in isolated tests |
| 3 | @JavierGuerra_g | Telling agents to do TDD is worthless; explicit phases with approval gates, but the agent keeps skipping them |
| 2 | @nivoset | Keeps improving their TDD setup; works with small offline models; behaviour-describing test names |
| 2 | @lawrencejones51 | Tests as first consumer and safety net; open to being convinced about AI |
| 2 | @QmunkE | Asks for the article link |
| 0 | ↳ @palimondo | Their comment with the link gets auto-removed |
| 1 | @Pu22leDucK | TDD with Claude keeps changes scoped and reviewable |
| 1 | @cuillinguy | Likes how the AI develops once the tests are in place |
| 1 | @lubyck | A single prompt isn't a fair test; months building an ATDD/TDD workflow; under $1/day |
| 0 | ↳ @retAntz | Same experience |
| 1 | @SirBenJamin_ | Baffled that people want to work this way |
| 0 | ↳ @SlowAside5 | Psychological benefits: always working, safe to refactor |
| 0 | ↳ @SirBenJamin_ | Clarifies: meant AI prompt coding, not TDD |
| 0 | @br3nto | Tests steer, validate and explain; order optional; test what you don't want changed |
| 0 | @br3nto | The test list is a revelation; will convert Jira issues into test lists |
| 0 | @doguy8650 | Mute the noise and try things yourself |
| 0 | @GameDev_with_Context | Agents fix bugs rather than solve problems; review the tests or you miss the signal |
| 0 | @KarlLew | AI TDD is a good start; Gemma 4 reviewing Claude's TDD finds gaps; fun now |
| 0 | @SlowAside5 | No human in Böckeler's loop defeats the point |
| 0 | @daveh0 | ~1000-case catalogue worked through one at a time; didn't realise it was TDD |
| 0 | @marcotroster8247 | Prose needs enforcement: git hooks, linters, coverage |
| 0 | @mingying2956 | Human writes tests and agent writes code, or separate test and code agents? |

That's 19 top-level comments plus 5 replies, 24 in total.
