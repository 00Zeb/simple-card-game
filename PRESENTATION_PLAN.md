# Presentation Plan: TDD in the Agentic Era

Written 13 Oct 2026, one week before the talk. Exact date: ________.
**Talk length: 45 minutes** (rescheduled from 30). Check whether questions are inside the 45.
Days below are counted back from the talk: **D-7 is today**.

---

## 1. Where things stand

**Done, on GitHub** (`presentation` branch, commit `fb8e905`, 25 Sep):
- `PRESENTATION.md`: the full analysis.
  - The experiment table and findings §2.1–2.9, including the probity run.
  - The keep / leave behind / moves-to-the-human tables.
  - Perspectives (§5), objections (§6), the history timeline, and the hidden acceptance suite (Appendix A).
- `VIDEO_ANALYSIS.md`: Emily Bache's response video, its comments, and how it fits the talk.

**Updated today, not committed yet:**
- `PRESENTATION.md` §7: a **45-minute run of show**. It adds an opening "the question" segment, a 5-minute **"Why TDD works for humans"** segment with its slide material, and a **12-minute live TDD demo** with demo notes. The two agents now race you during the demo.
- Timeline: Nagappan et al. 2008, Ghafari et al. 2020 and Jain 2026 added (all checked).
- This plan file.

**Only on this machine:**
- `llm-probity-opus5.5`: the probity run (setup commit `b83ded6`, then 29 agent commits).
- `llm-tdd-control-opus5.5`: the control for the probity run. Prepared, **never run**.
- `~/dev/runs/`: the probity clone, its event stream, probity's per-verdict log, and `run-agent.sh`.

**The thesis as it stands:**
> *TDD bundled a way of specifying behaviour with countermeasures for human limitations. Agents have different limitations. Keep the specification part: a reviewed test list, tests independent of the code, proof they can fail. Enforce it with cheap deterministic checks, let the agent choose its step size, and spend its speed on verifying more, not on more ceremony.*

**How the 45 minutes use that thesis:** the talk first shows *why TDD works for humans* (each benefit answers a human limitation), demonstrates it live, then asks which of those limitations an agent actually has. The keep / leave behind tables become the answer to that question.

---

## 2. New since 25 September

### Naresh Jain, "Are Harnesses Worth the Cost?" (martinfowler.com, 13 Oct 2026)

**The study:**
- **Task:** a greenfield Java backend-for-frontend with HTTP, downstream API and Kafka behaviour, from a detailed brief.
- **Models:** GPT-6 Sol (frontier) and GPT-6 Luna (cost-optimised), both at low reasoning effort.
- **Runs:** 10 per model with the harness and 10 without, in isolated containers.
- **Judging:** 178 external acceptance tests, run by an independent evaluator. A run counts only if it passes all of them.
- **The harness is not TDD.** It has guides (OpenAPI/AsyncAPI specs, request-response examples, an API-development skill) and sensors (contract checks, API tests, coverage reports) that the agent had to run itself.

**Results** (re-fetched verbatim):

| Model | Harness | Time | Cost per run | Accepted |
|---|---|---|---|---|
| GPT-6 Sol (frontier) | Yes | 19 m 53 s | ~$2.68 | 10/10 |
| GPT-6 Sol (frontier) | No | 6 m 51 s | ~$0.41 | 10/10 |
| GPT-6 Luna (cheap) | Yes | 35 m | ~$0.27 | **10/10** |
| GPT-6 Luna (cheap) | No | 15 m 56 s | ~$0.09 | **3/10** |

**Quotes, checked verbatim:**
- *"What changes with model capability is not whether independent sensors are needed, but when they run."*
- *"My original assumption was too blunt."*
- *"I find myself thinking about this dynamic in terms of executable attention."*

**How it fits the talk:**
- **Same pattern as the probity run on a frontier model:** about 7× the cost, 3× the time, no gain.
- **New nuance: the value depends on the model.** The cheap model went from 3/10 to 10/10 with the harness, and harnessed Luna still cost a third less than unharnessed Sol. Your weak models (GLM, Gemma, Qwen) fit this: they failed without guardrails. So the claim "probity isn't worth it" should become *"not for a frontier model on a task it can already do"*.
- **His harness is spec-first, not test-first:** human-written specs and examples plus an independent acceptance gate. It's your "the human owns the oracle", tested at scale.
- **His recommendation matches yours:** for frontier models, keep the independent check but run it once as a final gate. For cheaper models, run it throughout.

**Limits the author states:**
- One greenfield service and one detailed brief, at low reasoning effort only.
- Guides and sensors were added together, so their separate effects can't be told apart.
- The cost of writing and maintaining the harness wasn't measured.

### Other checks (nothing that changes the talk)

- **Emily Bache** has been teaching "harness engineering": Samman learning hours on designing a harness, and a Patreon post. I found no dated new results.
- **Birgitta Böckeler:** no follow-up to the TDD article.
- **Probity:** no new release (still 1.10.1), but commits are still landing.

---

## 3. Decisions needed from you

1. **Slides:** should Claude draft them with your `presentation-create` skill (reveal.js, Knowit design), or will you build them yourself?
2. **Control run:** start it now? It costs about $2–3 and takes 5–10 minutes.
3. **Live demo:** is `llm-opus5.5` still the branch for the herdr demo? Which agent and model will run in each pane?
4. **Venue:** will there be reliable network for live agents? (This decides how much to lean on the fallbacks in task 5.)
5. **Questions:** are they inside the 45 minutes? If yes, use the shorter variant in §7 (live TDD cut to 9 minutes, about 6 minutes left for questions).

---

## 4. Tasks, in priority order

### Task 1: Slides (the biggest job)
- **What:** a 45-minute deck of about 35 slides, built from `PRESENTATION.md` and following the run of show (§7). It includes the new 5-minute "Why TDD works for humans" segment.
- **Done when:** every number on a slide traces back to `PRESENTATION.md` or a cited source, and the deck plus the live demo fit 45 minutes in a dry run.
- **Who:** Claude drafts (if decision 1 says so); you review and cut.

### Task 2: The "Why TDD works for humans" segment (new)
- **What:** 4–5 slides for 5:00–10:00. The material is drafted in `PRESENTATION.md` §7:
  - a table of human limitations, each matched with what TDD does about it;
  - the evidence, all checked: Nagappan et al. 2008, 40–90% fewer pre-release defects for an estimated 15–35% more time; Fucci et al. 2017; Ghafari et al. 2020;
  - the bridge to Böckeler's list of benefits;
  - the closing line: *"which of these limitations does an agent have?"*
- **Your part:** add your own experience from 12 years as a trainer. One concrete story of a team that changed after adopting TDD will carry more weight than any study.
- **Done when:** the segment ends on the question that the keep / leave behind section answers at 38:00.
- **Who:** Claude turns the material into slides; you add the stories.

### Task 3: Fold in the Jain article
- **Already done today:** a timeline row, and a mention in the run of show (30:00–33:30).
- **Still to do, in `PRESENTATION.md`:**
  - one finding: "The harness pays off for weak models, not frontier ones";
  - an objection and answer: "Isn't a harness always worth it?";
  - a row in the Perspectives table;
  - the §2.9 verdict reworded to "not for a frontier model on a task it can already do".
- **Who:** Claude.

### Task 4: Check the history timeline
- **What:** confirm or correct every pre-2015 entry still marked "from memory":
  - McCracken 1957 and NASA Project Mercury (Larman & Basili 2003);
  - Beck "rediscovering" TDD from an old book;
  - SUnit (1994), JUnit on the flight to OOPSLA (1997), *XP Explained* (1999), *TDD by Example* (2002);
  - Dan North's BDD (2006), GOOS (2009), "TDD is dead" (2014).
- **Done when:** every row is marked "✅ checked" with a source, or is removed.
- **Who:** Claude.

### Task 5: Rehearse the live parts
- **The race (10:00–35:30):** start both herdr agents just before your demo.
  - Pane A gets the README with TDD instructions, pane B the README without them.
  - They get about 25 minutes before the reveal, more than double the slowest run so far.
  - Practise glancing at the panes mid-demo without losing the thread.
- **Your live TDD (11:00–23:00, about 12 minutes):** follow the demo notes in `PRESENTATION.md` §7.
  - Plant `"Josh wins x to y"` and `"A beats K"` on the test list, and do one Obvious Implementation.
  - Plan to stop at J beats T or A beats K. Your 2016 run reached the face-card red after 14 minutes.
  - Commit or tag each milestone in rehearsal, so you can `git checkout` ahead if you run late.
- **The reveal (35:30):** practise running the hidden acceptance suite (Appendix A) on both agents' results.
- **Fallbacks:** screenshots of `llm-claude-opus5`, `llm-no-tdd-opus5.5` and `llm-probity-opus5.5`, in case the network, rate limits or timing fail.
- **Who:** you, with Claude preparing the agent prompts, the acceptance-suite command and the checkpoint tags.

### Task 6: Run the control, plus an optional cheap-model pair
- **Control:** Opus 5.5 with the same TDD README and settings as the probity run, minus probity. It shows how much of §2.9 is probity's effect and how much is the model's.
  ```bash
  cd ~/dev/runs
  git clone --no-local --single-branch --branch llm-tdd-control-opus5.5 ~/dev/repos/simple-card-game card-game-tdd-control
  git -C card-game-tdd-control remote remove origin
  (cd card-game-tdd-control && npm install)
  ~/dev/runs/run-agent.sh ~/dev/runs/card-game-tdd-control control
  ```
  Then evaluate it the same way as the others: replay the reds, run the acceptance suite and the 9 planted bugs, and price it. Update §1, §2.4 and §2.9.
- **Optional cheap-model pair:** a cheaper model (for example Haiku 4.5, or one of your local models) with and without probity. This tests Jain's finding on your own kata: does a harness rescue a weak model? It's cheap, and would make a strong slide in the 30:00–33:30 segment.
- **Who:** Claude runs and evaluates; you decide on the optional pair.

### Task 7: Push the probity branches (if you'll show them)
```bash
git push -u origin llm-probity-opus5.5 llm-tdd-control-opus5.5
```

---

## 5. Suggested schedule

| Day | You | Claude |
|---|---|---|
| **D-7** (today) | Read the Jain article; answer the decisions in §3 | Done today: the 45-minute run of show, the human-TDD material, the timeline |
| **D-6** | Review the updated `PRESENTATION.md`; collect your trainer stories (task 2) | Task 3 (Jain), task 4 (history), task 6 (control run and evaluation) |
| **D-5** | First rehearsal of the 12-minute live TDD, with checkpoint tags | Task 1: first slide draft, including the human segment (task 2) |
| **D-4** | Review the slides and cut; add your stories | Second slide pass; optional cheap-model pair |
| **D-3** | Timed dry run of the race: herdr agents plus your live TDD (task 5) | Fix whatever the dry run exposes |
| **D-2** | Full rehearsal of all 45 minutes | Final number check: every slide figure against its source |
| **D-1** | Freeze the slides; push branches (task 7); prepare fallback screenshots | — |

---

## 6. Risks

- **The live TDD runs long.** Twelve minutes is tight for the full kata while explaining. Mitigation: a fixed stopping point (J beats T or A beats K) and checkpoint tags you can jump to.
- **The live agents fail or run long.** Mitigation: fallback branches and screenshots. If an agent finishes wrong on stage, that strengthens the talk.
- **Questions eat into the slot.** Decide early (§3, decision 5) and rehearse the shorter variant if needed.
- **n = 1 claims get challenged.** Say it first: one run per arm, and two runs of the same model differed (8/9 vs 5/9 planted bugs caught). Then point to Böckeler's and Jain's larger studies, which show the same pattern.
- **Fresh numbers from the Jain article.** It was published today. Cite it on the slide and use only the verified figures in §2 of this plan.
- **The human-TDD evidence gets challenged by sceptics in the room.** Use the honest framing already in the material: big defect reductions in industry, a real time cost, and research that disagrees mainly because studies are set up differently.

---

## Sources

- [Naresh Jain, "Are Harnesses Worth the Cost?" (martinfowler.com, 13 Oct 2026)](https://martinfowler.com/articles/are-harnesses-worth-the-cost.html)
- [Exploring Generative AI series index (martinfowler.com)](https://martinfowler.com/articles/exploring-gen-ai.html)
- [Emily Bache, "Harness Engineering" (Patreon)](https://www.patreon.com/EmilyBache/posts/harness-153716559)
- [Probity releases (GitHub)](https://github.com/nizos/probity/releases)
- [Nagappan et al., Realizing quality improvement through test driven development (Microsoft Research PDF)](https://www.microsoft.com/en-us/research/wp-content/uploads/2009/10/Realizing-Quality-Improvement-Through-Test-Driven-Development-Results-and-Experiences-of-Four-Industrial-Teams-nagappan_tdd.pdf)
- [Ghafari, Gross, Fucci, Felderer, Why Research on Test-Driven Development is Inconclusive? (arXiv)](https://arxiv.org/abs/2007.09863)
- [Fucci et al., A Dissection of the Test-Driven Development Process (arXiv)](https://arxiv.org/abs/1611.05994)
