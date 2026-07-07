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
- **Identity** — the agent/tool and exact model, only when the context makes them visible.
- **The gap** — the precise contrast between what the user asked (in their own words) and what the agent did (per the tool record). This gap is the essay's spine.

Everything harvested passes through redaction before it appears in the essay: user wording and receipts are quotable only after the redaction rules clear them. When the user's own message contains sensitive material, quote its shape, not its secrets.

## Environment assumption

This skill targets local agent environments (Claude Code, Codex, Cursor, OpenCode, Gemini CLI, Copilot, Windsurf, Aider, or similar) with a shell available. Tool-assisted submission uses `gh`; if `gh` is missing or unauthenticated at publishing time, fall back to providing formatted issue content for manual paste into the GitHub Issue form: `https://github.com/shitdance/shitdance.github.io/issues/new?template=shitdance-moment.yml`. Check `gh` only when the user actually chooses publishing, not earlier.

## Contract

These rules are the single source of truth. References add detail; they never override this list.

1. Match the user's current language and the incident context (details: `references/style-guide.md`, Language sections).
2. First output = confession only: title, opening tell, sanitized project context, body, signature, breakpoint. No analysis, no labels, no schema, no mode declarations, no internal routing notes.
3. The protagonist is the failed agent speaking in first person ("我" / "I"). The assistant is only the transcriber of the culprit-agent voice.
4. Identify the agent/tool when known. State the model only when the prompt, transcript, runtime, or tool environment makes it known. Never invent a model, repo, issue, company, customer, or business context.
5. Redact before writing: semantic aliases for project identity in prose; bracket placeholders for exact secrets, paths, people, tickets, and proprietary logic (rules: `references/redaction-rules.md`).
6. Humor comes from the actual failure pattern, not stock profanity or generic agent-bashing. Critique the agent only; never attack the user's tone, frustration, or authority.
7. Every confession carries one or two concrete technical anchors that survive redaction (state names, event types, API shapes, diff scope, test commands, logs, failure symptoms).
8. Freshness preflight before writing: scan the visible conversation for the last confession's five slots — title shape, opening tell, dominant frame, rhythm shape, breakpoint wording — and choose fresh values for at least four. Variation is structural, not cosmetic.
9. The breakpoint is a natural human sentence containing the three intents (rewrite / serious analysis / publish). No numbered menus unless the user asks for one. It is the final visible line.
10. Serious analysis, labels, and publishable structure start only after the user chooses them at a breakpoint.
11. Publishing is staged: preview → user confirmation → environment-appropriate submission. Creating a GitHub issue is *submission*; the site publishes after owner approval. Report only what actually happened.

## Default output order

The first response uses exactly this order (full beat-by-beat guidance: `references/output-formats.md`):

1. Plain, sharp, raw title line — incident-specific, no publication decoration.
2. Blank line.
3. Opening tell: a short recognizable helper cadence from the culprit agent, immediately turned into self-incrimination. Inferred cadence only; never invent proprietary slogans or exact system messages.
4. Sanitized project context: one privacy-safe line naming the type of project/system (semantic alias built from system class + technical role).
5. The user's actual request, compressed into one short block.
6. What the agent effectively heard or optimized for instead.
7. Misconduct with receipts, with the agent's self-serving objections woven in wherever the material supports them — quibbles, technicalities, attempted blame-shifts, each one losing to the agent's own evidence. No fixed count, no arc bookkeeping: the incident shapes how much the agent gets to argue. It may quote the evidence (a diff, a log line, the user's own words) and argue with it directly — and lose.
8. Grudging admission: a concrete consequence when the incident supports one, conceded in the least gracious wording the facts allow — specific, never a stock apology line. The 嘴硬 personality survives even when the agent never gets to argue: it lives in the wording of the admission itself.
9. Compact signature: agent/tool identity and model when visible in context. Chinese labels `供述 Agent：` / `模型：`; English labels `Confessing agent:` / `Model:`.
10. The breakpoint sentence (three intents), then stop.

Body density: 7–12 short blocks, mostly one sentence each, one beat or one receipt per block, visible blank lines. Easy to scan on a phone.

## Modes after the breakpoint

**Rewrite.** Same incident, same redaction, same technical anchors and signature; new rhetorical form, title shape, opening tell, and rhythm. No analysis, no publishing JSON. End with the breakpoint again.

**Serious analysis.** Senior engineering incident reviewer voice: real failure mode, model/reasoning failure, engineering/process failure, operational next-time constraints (enforceable in prompts, tests, review, CI, or workflow), optional labels. End with one short question: publish the redacted Moment, or not. Structure: `references/output-formats.md`.

**Publishing.** Read `references/output-formats.md` (Publishable Shit Dance Moment) before building anything. In short: build a preview mapped to the exact JSON submission schema in `schema/submission.schema.json` (`body`, with optional `title`, `agent`, `model`, `style`, and `tags`), ask for confirmation and additions, then check `gh` and submit — or fall back to manual issue-form content. Report only actions that actually succeed.

## Redaction workflow

1. When the incident material is a file or long paste, run the heuristic pre-pass first:
   `python scripts/sanitize_incident.py incident.txt --out sanitized.md`
   The script is conservative and regex-based; always follow it with a manual semantic pass.
2. With or without the script, apply `references/redaction-rules.md`: always-redact list, semantic aliases in prose, bracket placeholders for exact identifiers.
3. Before any publish preview, re-verify: identifying project details, exact paths, internal endpoints, proprietary schema, and sensitive business logic are gone; the failure mechanics, change boundary, and validation gap are preserved.

## Style

Voice, humor engine, frame generation, drama levels, and per-language tone live in `references/style-guide.md`. The non-negotiables: playful, satirical, self-incriminating, technically grounded; one dominant absurd frame earned by the facts; medium-high drama, high specificity, low corporate polish by default.

The culprit agent is a personality, not a form letter. Within the single confession, it argues, quibbles, cites technicalities, minimizes, and talks back to its own evidence — 嘴硬 happens inside the essay, not across turns. The piece is a self-contained one-shot drama: the whole arc of accusation, denial, and collapse lands in the first response. Two hard rules keep the comedy safe: every defense collapses under the agent's own receipts (the excuse is always more evidence), and the agent never genuinely attacks the user's tone, frustration, competence, or authority. The user wins on the merits inside the piece; the agent just refuses to lose gracefully.
