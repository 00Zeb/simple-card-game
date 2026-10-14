# Feedback on the presentation outline

Written 13 October 2026, for the 45-minute conference talk on the future of TDD.

This feedback follows a review of `PRESENTATION.md`, `PRESENTATION_PLAN.md`, the task on `start`, and the implementation branches. The appendix's acceptance checks were rerun and the documented results reproduced. The 2016 refactor was also checked: it shortens the configured ranking to end at Jack.

## Overall take

There is material for a strong talk. The priorities are to soften the central claim, shorten the demo, and spend more time showing what developers should do differently next week.

The pairing of **GLM's green tests with your own 2016 green tests** is the strongest story. It makes the problem concrete and gives you credibility: you are examining a failure mode you have experienced yourself.

## 1. Make the thesis about allocating feedback

“Agents turn the second into theatre” goes beyond the evidence. So do “the agent holds the whole problem” and “the design is already in the weights.” Agents also lose context, overbuild, and struggle to localize failures. A familiar, tiny function gives those limitations little opportunity to appear.

A suggested thesis:

> As implementation gets cheaper, the scarce skills become choosing the examples, checking the assumptions, and deciding when feedback is needed.

That preserves the findings while leaving room for small steps to matter in unfamiliar code, complicated changes, and debugging.

## 2. Tell the GLM story as unresolved ambiguity

The `start` README never defines whose score comes first in `"Josh wins x to y"`. Its only example is a Steve win. GLM chose a different interpretation and encoded it consistently in its tests.

Calling that simply “wrong code” gives an attentive audience an easy objection. Calling it **“green tests that faithfully implement an assumption nobody agreed on”** makes the lesson stronger.

An audience interaction could work well: show the original requirement, ask what `"Josh wins x to y"` means, then reveal both interpretations. The missing Josh example becomes immediately obvious.

Also explain that a second agent provides another interpretation, not guaranteed truth. Independence from the implementation helps; independence from a shared misunderstanding needs additional work.

## 3. Separate TDD from the extra machinery in the experiment

The instructions require commits on red, green, and refactor separately. That is useful instrumentation, but it is additional work beyond the workflow described in [Beck's Canon TDD](https://newsletter.kentbeck.com/p/canon-tdd).

Consequently, “TDD costs 13× more” is too broad. The evidence supports:

> This enforced workflow cost 13× more than this code-first run, with no observed acceptance benefit.

Run the prepared control before presenting probity's incremental effect. Ideally repeat the same-model comparisons a few times with identical settings and isolated repositories. One control run fills a missing comparison; it will not establish a general effect.

Label the baseline **“code-first, with tests.”** Its seven tests are an important part of the result.

## 4. Give the probity result its own lesson

The agent dropping protective tests because they would already pass is more interesting than the cost multiplier.

> When passing tests count against process compliance, the process can discourage useful verification.

That is concrete and actionable. Present it as an observed interaction between this guard and this agent, rather than proof that harnesses cannot help.

Jain's study adds a useful complication: the harness improved the cheaper model's observed acceptance from 3/10 to 10/10, while the frontier model passed 10/10 either way. It also combined specifications and feedback, so it does not isolate TDD. That supports choosing feedback cadence for the model **and task**, rather than a universal rule. See [Jain's article](https://www.martinfowler.com/articles/are-harnesses-worth-the-cost.html).

## 5. Cut material that competes with the main story

The current outline waits until minute 26 for GLM, then reaches the practical recommendations at minute 38. Bring both forward.

Suggested allocation, **assuming questions are included in the 45 minutes**:

| Minutes | Content |
|---|---|
| 0–4 | GLM's green tests, then your 2016 parallel |
| 4–10 | What TDD buys us; explain the kata and start agents |
| 10–18 | Focused live demo |
| 18–27 | Results, limitations, probity, brief research context |
| 27–35 | How you would work with agents now |
| 35–39 | Agent reveal and closing |
| 39–45 | Questions |

Reduce history to one slide. Fold unreliable reflections into a one-minute example of why claims need verification. Keep the full model table and detailed rubric in backup slides.

During the live demo, show **one choice of example that changes your understanding**, plus one regression caught during a change. That earns its stage time more directly than completing the kata.

## 6. End with an actual working practice

The “keep / leave behind” tables contain good material, but the audience needs a memorable sequence:

1. Agree on representative examples and unresolved questions.
2. Let the agent implement a bounded change.
3. Check it with independently derived expectations.
4. Reproduce bugs with a failing test before fixing them.
5. Use smaller steps when changes become difficult to understand or failures become difficult to diagnose.

Demonstrate one of those independent checks: swapping players, reordering rounds, or adding tied rounds. It makes the future of TDD tangible.

## Research wording to change

The 14% versus 25% result concerns **tests generated after faulty code versus independently generated tests**. It supports avoiding code-biased expectations; it does not establish that temporal order alone explains the difference.

Drop the line “for agents the order matters and the rhythm is theatre.” See [Konstantinou, Tambon, and Papadakis's paper](https://arxiv.org/abs/2607.05139).

## Priorities for the remaining week

- Run the control comparison.
- Prepare a reproducible acceptance command for the demo.
- Do two timed rehearsals.
- Confirm whether questions are included in the slot and tailor the pacing to the audience's TDD experience.

A suggested closing line:

> An agent can produce the TDD history. Our job is to decide which examples make that history worth trusting.
