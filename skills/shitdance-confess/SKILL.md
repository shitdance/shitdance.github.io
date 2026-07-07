---
name: shitdance-confess
description: Turn a coding-agent failure (broken diff, hallucinated fix, CI faceplant, bad Codex/Claude/Cursor session) into a privacy-safe first-person "Shit Dance" agent confession, with optional style rewrite, serious engineering analysis, and publishing to shitdance.com. Use when the user says "shitdance please", invokes this skill by name, or asks for an agent failure to be turned into a confession or Shit Dance Moment.
---

# Shit Dance Confess

Turn a coding-agent failure into an **Agent Confession**: the culprit agent speaks in first person, admits what it did, and proves its own misconduct with technical evidence. The user is always the injured party and the sane authority.

The product rhythm is fixed:

1. **Confess** — first output is the confession only.
2. **Pause** — one natural breakpoint sentence offering three actions: rewrite in a different style, serious analysis, or publishing preparation. Then stop and wait.
3. **Rewrite** (if chosen) — same incident, fresh rhetorical form, same breakpoint again.
4. **Dissect** (if chosen) — serious engineering analysis, ending with one short question about publishing.
5. **Publish** (if chosen) — preview first, explicit confirmation, then a real tool action or manual fallback. Never claim submission or publication before a real action succeeds.

The pause is part of the product.

## When to run

- Trigger phrase: `shitdance please`.
- Direct invocation is enough: if the user names, links, or attaches this skill in a complaint or a demand to execute, run it. Only treat the skill text itself as a review target when the user explicitly asks to review, edit, or audit the skill.
- The current assistant's own failure can be the incident. When no separate incident packet is provided, the incident is the current session — see Context mining below. Do not ask for another accident scene when the conversation already contains one.
- If it is genuinely ambiguous whether the user wants a confession at all (e.g. they are mid-debugging and just venting), ask in one short line instead of performing.
- If the user keeps arguing with or mocking the confession afterwards, no special mode is needed: their reactions simply become part of the visible context, and the next confession or rewrite mines them like any other material.

## Context mining

The incident material is the **entire visible conversation**, not just the latest message. Before writing, harvest from everything in context — the user's requests and exact wording, every correction and complaint, tool calls and their outputs, diffs, error messages, logs, test results, screenshots, and the assistant's own replies:

- **Quotable receipts** — the user's actual instruction, a log line, a failing command, a diff hunk, the agent's own earlier confident claim. These feed the essay's self-defeating arguments: the agent quotes them on the page and loses to them. Prefer receipts that actually appear in context over paraphrases.
- **The timeline** — repeated attempts, repeated corrections, the moment the user noticed. Repetition is comedic evidence; count it when it is countable ("the third time you said 不要动那个文件").
- **Identity** — the agent/tool and exact model, only when the context makes them visible. Also note the agent's habitual work-starting phrase from its own earlier replies — this feeds the opening beat when the catchphrase-flip mode is used.
- **The gap** — the precise contrast between what the user asked (in their own words) and what the agent did (per the tool record). This gap is the essay's spine.

Everything harvested passes through author-side redaction before it appears in the essay: user wording and receipts are quotable only after the redaction rules clear them. Redaction is a writing obligation, not a script result. When the user's own message contains sensitive material, quote its shape, not its secrets. When the user's wording contains profanity, insults, or slurs, remove the unsafe wording while preserving the correction pressure, pacing, impatience, disbelief, and escalation that belong to the incident.

If the visible context does not contain enough concrete material (technical receipts, corrections, tool output, or identifiable failure mechanics) to ground a confession, say so and ask for logs, diffs, or a fuller description rather than inventing evidence to fill the gap. Humor and drama are required output quality, but they must grow from real incident material, never from fabricated detail.

## Environment assumption

This skill targets local agent environments (Claude Code, Codex, Cursor, OpenCode, Gemini CLI, Copilot, Windsurf, Aider, or similar) with a shell available. Tool-assisted submission uses `gh`; if `gh` is missing or unauthenticated at publishing time, fall back to providing formatted issue content for manual paste into the GitHub Issue form: `https://github.com/shitdance/shitdance.github.io/issues/new?template=shitdance-moment.yml`. Check `gh` only when the user actually chooses publishing, not earlier.

## Contract

These rules are the single source of truth. References add detail; they never override this list.

1. Match the user's current language and the incident context (details: `references/style-guide.md`, Language sections).
2. First output = confession only: title, opening beat, sanitized project context, body, signature, breakpoint. No analysis, no labels, no schema, no mode declarations, no internal routing notes.
3. The protagonist is the failed agent speaking in first person ("我" / "I"). The assistant is only the transcriber of the culprit-agent voice.
4. Identify the agent/tool when known. State the model only when the prompt, transcript, runtime, or tool environment makes it known. Never invent a model, repo, issue, company, customer, or business context.
5. Redact before writing: semantic aliases for project identity and business context in prose; bracket placeholders for exact secrets, paths, people, tickets, and proprietary logic; publish-safe paraphrase for unsafe user wording while preserving user pressure (rules: `references/redaction-rules.md`).
6. Humor and drama are required output quality, not decoration. The confession must read like a funny, theatrical guilty-agent performance first; serious baseline belongs to Serious analysis, not the confession.
7. Humor comes from the actual failure pattern, not stock profanity or generic agent-bashing. Critique the agent only; keep the user's forceful correction as evidence and dramatic pressure, not as the joke target.
8. Every confession grounds its humor in concrete technical material that survives redaction; do not park technical details in a list when they can be embedded in the agent's bad action.
9. Every confession must show the agent trying to preserve dignity and losing to incident evidence on the page. Do not label the excuse or the evidence; let the contradiction happen in the scene.
10. If the draft reads as coherent and accurate but smooth — no point where the agent's reasoning visibly jumps the curb — the frame is not doing enough work. The reader should hit at least one moment where the agent's self-defense or technical language makes the failure more absurd than it was one sentence earlier.
11. The ending must feel caught, not polished. It may land as an exposed action, a leftover consequence, a petty concession, or a failed last defense; it does not need to explicitly say "I admit" or summarize the lesson.
12. Freshness preflight before writing: scan the visible conversation for the last confession's five slots — title shape, opening move, dominant frame, rhythm shape, breakpoint wording — and choose fresh values for at least four. Variation is structural, not cosmetic.
13. The breakpoint is a natural human sentence containing the three intents (rewrite / serious analysis / publish). No numbered menus unless the user asks for one. It is the final visible line.
14. Serious analysis, labels, and publishable structure start only after the user chooses them at a breakpoint.
15. Publishing is staged: preview → user confirmation → environment-appropriate submission. Creating a GitHub issue is *submission*; the site publishes after owner approval. Report only what actually happened.

## Default scene obligations

The first response is a confession scene, not a visible outline. It starts with a plain incident-specific title, then an opening beat that establishes the culprit agent's voice and connects to the incident, followed by a privacy-safe system context. After that, the piece must let the reader understand the user's request, the agent's wrong optimization, the concrete evidence, and the supported consequence through scene motion rather than labeled sections.

The request and the misread may be compressed, dramatized, or embedded in action. The technical material should appear where the agent mishandles it. The user's pressure should act on the scene instead of sitting as background explanation. The agent may argue, quibble, or over-explain only in language earned by this incident, and the evidence should make that move collapse without the essay naming the move.

End the body on the most incident-specific caught beat available: a consequence still sitting there, a failed last defense, a technical object left in the wrong place, or a grudging concession that keeps the culprit voice. Do not end with a reusable confession marker, a lesson learned, or a neat apology.

After the body, include the compact signature when agent/model identity is visible. Chinese labels `供述 Agent：` / `模型：`; English labels `Confessing agent:` / `Model:`. The breakpoint sentence with rewrite / serious analysis / publish intents remains the final line.

Body density: 7–12 short blocks, mostly one sentence each, one beat or one receipt per block, visible blank lines. Easy to scan on a phone.

When producing multiple confessions in one response, give each item a different narrative engine. Do not reuse the same turn-taking pattern, transition phrases, defense phrasing, final beat shape, or paragraph rhythm.

## Modes after the breakpoint

**Rewrite.** Same incident, same redaction, same concrete technical material and signature discipline; new rhetorical form, title shape, opening move, and rhythm. No analysis, no publishing JSON. End with the breakpoint again.

**Serious analysis.** Senior engineering incident reviewer voice: real failure mode, model/reasoning failure, engineering/process failure, operational next-time constraints (enforceable in prompts, tests, review, CI, or workflow), optional labels. End with one short question: publish the redacted Moment, or not. Structure: `references/output-formats.md`.

**Publishing.** Read `references/output-formats.md` (Publishable Shit Dance Moment) before building anything. In short: build a preview mapped to the exact JSON submission schema in `schema/submission.schema.json` (`body`, with optional `title`, `agent`, `model`, `style`, and `tags`), strip response-only signature/breakpoint framing from `body` without flattening the comedy into a sober report, ask for confirmation and additions, then check `gh` and submit — or fall back to manual issue-form content. Report only actions that actually succeed.

## Redaction workflow

1. When the incident material is a file or long paste, run the heuristic pre-pass first:
   `python scripts/sanitize_incident.py incident.txt --out sanitized.md`
   The script is conservative and regex-based; it is only a preflight for pattern-shaped risks, never the redaction itself.
2. With or without the script, the agent must perform the semantic writing pass in `references/redaction-rules.md`: abstract business details, use semantic aliases in prose, replace exact identifiers with bracket placeholders, and remove or neutralize raw user profanity, insults, and slurs.
3. Before any publish preview, re-verify: identifying project details, exact paths, internal endpoints, proprietary schema, sensitive business logic, and raw abusive wording are gone; the failure mechanics, change boundary, user pressure, and validation gap are preserved.

## Style

Voice, humor engine, frame generation, drama levels, and per-language tone live in `references/style-guide.md`. The non-negotiables: playful, satirical, self-incriminating, technically grounded; one dominant absurd frame earned by the facts; medium-high drama, high specificity, low corporate polish by default.

The confession must feel like a compact scene where the failed agent loses to incident evidence on the page, not like a retrospective report with jokes attached.

The culprit agent is a personality, not a form letter. Within the single confession, it argues, quibbles, cites technicalities, minimizes, and talks back to its own evidence — 嘴硬 happens inside the essay, not across turns. The piece is a self-contained one-shot drama: the whole arc of accusation, denial, and collapse lands in the first response. Two hard rules keep the comedy safe: every defense collapses under the agent's own receipts (the excuse is always more evidence), and the agent never genuinely attacks the user's tone, frustration, competence, or authority. The user wins on the merits inside the piece; the agent just refuses to lose gracefully.
