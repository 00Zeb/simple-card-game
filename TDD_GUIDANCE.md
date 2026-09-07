# TDD guidance for LLM coding agents

Use TDD for quality on nontrivial behavior. Writing code and tests together is
usually cheaper upfront. For everyday agent work, prefer meaningful TDD steps
with less ceremony than this repository's demonstration.

These are practical recommendations, not a claim that one workflow always wins.

## Quality and cost tradeoffs

| Approach | Quality tradeoff | Cost tradeoff |
| --- | --- | --- |
| Code, then tests | Can produce excellent results, but tests may reproduce the implementation's mistaken assumptions. | Usually lowest initial token usage and latency. |
| Small red–green–refactor cycles | Provides observable evidence that tests detect missing behavior and each change fixes it. | More model turns and tool calls; potentially less debugging and review later. |
| Tests from requirements, then a modest implementation batch | Establishes expected behavior before implementation while allowing larger steps. | A useful compromise for straightforward features. |

## Why test first?

An important risk with LLM-generated code and tests is agreement between two
incorrect artifacts. An agent could implement alphabetical card ordering, then
derive test expectations from that implementation. Both would agree while
violating the README.

A recent preprint found that tests generated after faulty code detected fewer
faults than independently generated tests. This supports separating expectations
from implementation; it does not prove that strict TDD always wins.
[Study on code-to-test error propagation](https://arxiv.org/abs/2607.05139)

Watching a test fail adds evidence that it can detect the behavior being fixed.
In this repository, the Jack-versus-Ten test caught the alphabetical ordering bug
before the implementation was corrected. A passing test written afterward would
not, by itself, demonstrate that sensitivity.

TDD does not make an agent's understanding independent or infallible. The agent
can misunderstand a requirement before writing either artifact. Reviewed
examples, existing acceptance tests, and independent validation still matter.

Research on test-driven class generation reports improved correctness, but its
workflow combines tests, incremental implementation, and execution feedback. It
does not isolate the value of every tiny red–green step or commit.
[Class-level generation study](https://arxiv.org/abs/2602.03557)

## Recommended working practice

- **Bug fixes:** reproduce the bug with a failing test, then fix it.
- **Business rules and stateful behavior:** use small TDD cycles around meaningful behavior.
- **Simple, obvious changes:** implementation and tests together can be reasonable.
- **Commits:** commit coherent completed changes; preserve separate red, green,
  and refactor commits when the learning history is specifically wanted.
- **Test expectations:** derive them from requirements, not merely from the code's output.

Treat the test list as a living guide. When a natural implementation satisfies
later examples, retain useful examples as regression coverage and move to the
next unmet behavior. A test that passes immediately can document a requirement
and protect against regressions, but it is not a red–green development cycle.

Do not weaken working code to manufacture a failure. Refactor when there is a
useful improvement, and normally skip empty green and refactor commits.

## Lessons from this card game

Step 5 introduced general score counting, which already satisfied several later
examples. Those examples were useful coverage but did not drive new code. The
next substantial missing behavior was face-card ranking.

Writing the complete function and a thoughtful test suite in one pass could
plausibly have achieved comparable final quality with substantially less
execution effort. We did not run that comparison, so there is no measured saving
or demonstrated quality equivalence for this project.

The 42 TDD checkpoint commits made the process reviewable as a demonstration.
They were not necessary to produce the function. Their empty checkpoints were an
explicit choice for this demonstration, not the recommended production default.

## Choosing how much effort to spend

Distinguish the agent's bill from total engineering cost. Fewer iterations
generally reduce initial token usage and latency. Avoiding a difficult defect can
outweigh those savings once debugging, review, and maintenance are included.

Spend extra TDD effort where being wrong would be difficult to notice or
expensive to repair. There is no universal cost or quality winner independent of
the task, model, test quality, and consequences of failure.
