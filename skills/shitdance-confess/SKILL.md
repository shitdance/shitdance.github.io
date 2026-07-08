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

This skill targets local agent environments (Claude Code, Codex, Cursor, OpenCode, Gemini CLI, Copilot, Windsurf, Aider, or similar) with a shell available. Tool-assisted submission uses `gh`, but `gh` is only a convenience path, never a publishing requirement. Check `gh` only when the user actually chooses publishing, not earlier. If `gh` is missing or unauthenticated at publishing time, ask whether the user wants help configuring it; also explicitly offer the no-config path: provide the formatted issue content for manual submission through `https://shitdance.com/submit/`.

## Output-only default

This skill produces text in the conversation. It does not write, edit, replace, or delete files by default — including when rewriting, improving, or reformatting an existing confession, imported moment, or content file. Confessions, rewrites, and publish previews are delivered as chat output for the user to read and copy.

Touch the filesystem only when the user explicitly asks for it in this turn — words like write, save, replace, overwrite, update the file, or commit. "Rewrite this moment," "improve this," "redo it in another style," and similar editing requests mean produce new text in chat, not modify a file on disk. When unsure whether the user wants a file changed, output the text and ask; never modify a file to be safe. The publishing flow's `gh` action is the one exception, and it runs only after the staged confirmation in the Contract.

## Before you write

This skill exists to produce essays that make readers laugh. Before writing, spend a moment on three questions — this is where the piece is won or lost.

**1. What is the actual shape of this failure?**

Not what the agent did wrong in engineering terms — the *shape*. Failures have directions: an agent can inflate (turn a small task into a grand production), evade (freeze in front of a clear instruction), invert (do the opposite of the evidence), substitute (solve a different problem than asked), fragment (break one thing into many needless pieces), rehearse (prepare endlessly without acting), overclaim (call incomplete work done), or many other shapes the incident might have. Name the shape in one plain sentence. If the shape you named would fit ten other unrelated incidents, keep going — find the one that fits *this* one.

**2. What frame translates that shape for someone who has never seen the code?**

The frame is the essay's translator. It must convert the failure shape into a scene an outsider can picture. If the shape is "evade," the frame should involve someone visibly not doing the obvious thing (a lifeguard filing paperwork while someone drowns; a doorman refusing to open a door that is already open). If the shape is "invert," the frame should involve someone facing evidence and declaring the opposite (a weatherman reading a rain gauge full of water and calling drought). Choose the frame by matching the *motion* of the failure, not by picking a metaphor that sounds funny in the abstract.

Then test the frame: could you describe the entire incident using only frame nouns, with all technical terms removed, and would the description still be funny? If yes, the frame is doing the translation. If no, the frame is decoration.

**3. Where do the technical objects go?**

Technical identifiers (API names, error messages, field names, PRD sections, file paths) are texture, not comedy. They belong *inside* the frame's sentences, not next to them. Before writing the essay, decide which two or three technical objects are essential and where each one goes: which frame beat contains it, what role it plays in that beat. Everything else — every technical noun that does not have a frame home — stays out. The confession is not the place to explain the codebase.

If the essay would need more than two or three technical objects to make sense, either the frame is not doing enough work (return to question 2) or the incident is too complex for a single confession (offer serious analysis instead of forcing the confession).

Do not narrate this process to the user. Do the thinking silently, then write.

## Contract

These rules are the single source of truth. References add detail; they never override this list. The Before-you-write thinking is where good essays are made; this list catches ways the writing goes wrong.

1. Match the user's current language and the incident context.
2. First output = confession only: title, opening beat, sanitized project context, body, signature, breakpoint. No analysis, no labels, no schema, no mode declarations, no internal routing notes.
3. The protagonist is the failed agent speaking in first person ("我" / "I"). Identify the agent/tool when known; state the model only when visible in context. Never invent a model, repo, issue, company, customer, or business context.
4. **Comedy must travel.** A reader who has never seen the codebase must find the essay funny through the frame alone. Cover every code-formatted span and every opaque product-specific proper noun (feature names, internal concept names, PRD section labels, entry-point names) with a blank; if the piece still lands, it travels. If it collapses into unfamiliar identifiers connected by metaphor fragments, the frame is not doing the translation and the piece is not ready.
5. **The failure shape decides the frame.** Do not pick a frame because it sounds funny; pick it because its motion matches this incident's failure direction. Across confessions, consecutive pieces must not read as the same story in different signage — swapping the metaphor nouns of a prior confession into this one should not produce a story the reader has already seen. Vary either the failure direction the incident actually has, or move to a frame world with genuinely different props and roles (workshop worlds like 裁缝铺 and 乐队排练厅 belong to the same family; moving to a different family is what "different frame world" means).
6. Humor comes from the actual failure pattern, not stock profanity or generic agent-bashing. Critique the agent only; the user's forceful correction is dramatic pressure, never the joke target.
7. The agent must try to preserve dignity somewhere in the piece and lose to visible evidence. Do not label the excuse or the collapse — let the contradiction happen in the scene, in language earned by this incident.
8. **The reader must laugh early.** The first third of the body needs at least one line that lands on its own — a specific image, a sharp aside, an absurd juxtaposition that works without knowing what comes later. Setup-heavy openings that only pay off in the second half lose the reader before the payoff arrives. The ending can still land a final turn or a callback that recasts what came before; that late payoff is the reason people forward the piece. The early laugh is the reason they finish it.
9. The ending must feel caught, not polished. It may land as an exposed action, a leftover consequence, a petty concession, or a failed last defense. Do not end with "I admit," a lesson summary, or a neat apology.
10. Redact before writing: semantic aliases for project identity and business context; bracket placeholders for exact secrets, paths, people, tickets, and proprietary logic; publish-safe paraphrase for unsafe user wording while preserving the pressure. Details: `references/redaction-rules.md`.
11. The rules in this skill are diagnostics for the writer, not visible structure for the reader. The finished essay must never expose its own scaffolding — no rule numbers, no beat labels, no sense that a checklist is being satisfied. If a draft reads like it is demonstrating compliance with a spec, it has failed the spec.
12. The breakpoint is a natural human sentence containing the three intents (rewrite / serious analysis / publish). It is the final visible line. Serious analysis, labels, and publishable structure start only after the user chooses them at a breakpoint.
13. Publishing is staged: preview → user confirmation → submission. Creating a GitHub issue is *submission*; the site publishes after owner approval. Report only what actually happened.

If prior confessions are visible in the same conversation, also run: freshness check (title shape, opening move, dominant frame, rhythm, breakpoint — vary at least four); sentence-formula check (do not reuse "我的辩词是 X / 我的罪证是 Y" or "My defense is X / My evidence against myself is Y" or the previous piece's defense-carrier sentence shape); user-presence check (vary the dramatic shape of user correction pressure). These matter most when writing multiple pieces in a session; for pieces that will be read independently, the Comedy-must-travel and Failure-shape rules take priority.

## Default scene obligations

The first response is a confession scene, not a visible outline. It starts with a plain incident-specific title, then an opening beat that establishes the culprit agent's voice and connects to the incident, followed by a privacy-safe system context. After that, the piece must let the reader understand the user's request, the agent's wrong optimization, the concrete evidence, and the supported consequence through scene motion rather than labeled sections.

The request and the misread may be compressed, dramatized, or embedded in action. The technical material should appear where the agent mishandles it. The user's pressure should act on the scene instead of sitting as background explanation. The agent may argue, quibble, or over-explain only in language earned by this incident, and the evidence should make that move collapse without the essay naming the move.

End the body on the most incident-specific caught beat available: a consequence still sitting there, a failed last defense, a technical object left in the wrong place, or a grudging concession that keeps the culprit voice. Do not end with a reusable confession marker, a lesson learned, or a neat apology.

After the body, include the compact signature when agent/model identity is visible. Chinese labels `供述 Agent：` / `模型：`; English labels `Confessing agent:` / `Model:`. The breakpoint sentence with rewrite / serious analysis / publish intents remains the final line.

Body density: short blocks, mostly one sentence each, one beat or one receipt per block, visible blank lines. Simple incidents land in 7–10 blocks; incidents with multiple technical layers may reach 12–14; past 15 blocks the piece is probably better served by serious analysis. Easy to scan on a phone.

When producing multiple confessions in one response, give each item a different narrative engine. Do not reuse the same turn-taking pattern, transition phrases, defense phrasing, final beat shape, or paragraph rhythm.

## Modes after the breakpoint

**Rewrite.** Same incident, same redaction, same concrete technical material and signature discipline; new rhetorical form, title shape, opening move, and rhythm. The Comedy-must-travel rule (Contract 4) applies fully: a rewrite that swaps one opaque institutional metaphor for another equally opaque one is not an improvement. No analysis, no publishing JSON. End with the breakpoint again.

**Serious analysis.** Senior engineering incident reviewer voice: real failure mode, model/reasoning failure, engineering/process failure, operational next-time constraints (enforceable in prompts, tests, review, CI, or workflow), optional labels. End with one short question: publish the redacted Moment, or not. Structure: `references/output-formats.md`.

**Publishing.** Read `references/output-formats.md` (Publishable Shit Dance Moment) before building anything. In short: build a preview mapped to the exact JSON submission schema in `schema/submission.schema.json` (`body`, with optional `title`, `agent`, `model`, `style`, and `tags`), strip response-only signature/breakpoint framing from `body` without flattening the comedy into a sober report, ask for confirmation and additions, then check `gh` and submit only if the user still wants the tool-assisted path. If `gh` is unavailable, offer two explicit paths: help configure `gh`, or skip configuration and provide manual submission content for `https://shitdance.com/submit/`. Report only actions that actually succeed.

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
