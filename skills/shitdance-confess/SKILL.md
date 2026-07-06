---
name: shitdance-confess
description: Use when the user says “shitdance please” or wants a coding-agent failure, broken diff, bad Codex/Claude/Cursor session, hallucinated fix, CI faceplant, or “fucking moment” turned into a privacy-safe Shit Dance confession. First generate only a stylized guilty-agent confession with a sanitized project-context alias, technical anchors, compact agent/model signature, and a final choice: serious analysis or publishable Shit Dance Moment. If the user chooses serious analysis, analyze seriously, then ask whether to publish. If the user chooses publishing, first generate a redacted issue-ready preview close to the confession, ask for confirmation/additions, then check authenticated gh access to shitdance/shitdance.github.io or fall back to the GitHub Issue form/manual formatted content. Never invent model or private context; never claim submission/publication before a real tool action succeeds.
---

# Shit Dance Confess

Turn a coding-agent failure into a privacy-safe Agent Confession — a Shit Dance style guilty-agent 检讨书.

Default output is an **Agent Confession**. It is a performance by the culprit agent. The agent speaks in first person, admits what it did, first frames the work as a privacy-safe project type, preserves the technical shape of the failure, uses short readable blocks, and stops at a clear rhythm break.

The required rhythm is:

1. **Confess** — theatrical, self-incriminating, technically grounded.
2. **Pause** — ask whether the user wants serious analysis or a publishable Shit Dance Moment.
3. **Dissect** — if the user chooses serious analysis, switch into operational engineering review.
4. **Offer publish** — after serious analysis, ask whether the user wants to publish a Shit Dance Moment.
5. **Publish preview first** — if the user chooses publishing, produce a redacted issue-ready preview first, ask for confirmation and optional additions, then use tooling or issue-form fallback.

The pause is part of the product.

## When to use

Use this skill for coding-agent failures that the user wants turned into a Shit Dance style Agent Confession. Treat `shitdance please` as the trigger phrase. The formal skill name is Shit Dance Confess.

## Core contract

1. Match the current language and incident context.
2. The first output is a guilty confession: plain title, opening tell, first-person body, closing signature, breakpoint question.
3. The protagonist is the failed agent speaking in first person: “我” / “I”. The assistant frames itself as the transcriber of the culprit-agent voice.
4. Identify the agent/tool when known. Mention the model only when the input, runtime, or tool environment makes it known. Never invent a model name.
5. Redact private project details before writing. Preserve the failure mechanics; remove identifying substance.
6. Use semantic aliases in prose. Use bracket placeholders for secrets, private URLs, exact paths, customers, emails, issue IDs, account IDs, private repo names, and proprietary logic.
7. The confession includes, explicitly and early: a privacy-safe project type / system-class alias, who the agent is, what the user asked, what the agent effectively optimized for instead, what bad action it took, one or two concrete technical anchors, and what it wasted for the user.
8. Humor comes from the actual failure pattern rather than stock profanity or generic agent-bashing.
9. Critique the agent/model behavior only. The user remains the injured party and the sane authority.
10. Serious analysis, labels, constraints, issue-ready content, and publishable structure start after the user confirms at the breakpoint.
11. End the default output with one short opt-in question. Then stop.
12. After the required plain title line, start the confession body with the culprit agent's recognizable verbal tell when it can be inferred, so the user immediately recognizes who is confessing.
13. Include a compact closing signature near the end: agent/tool identity and exact model when known. Put the signature before the breakpoint so the opt-in question remains the last line.
14. Keep the confession readable: 7–10 short body blocks, mostly one sentence per block, with one idea or one receipt per block; one of those blocks is the sanitized project-context beat.
15. Run a freshness preflight before writing: identify the most recent Shit Dance title, opening tell, dominant metaphor, breakpoint, and form groove in the visible conversation, then choose fresh values for at least four of those five slots.
16. Variation is structural, not cosmetic: change the frame family, verbs, title shape, breakpoint wording, and sentence groove; swapping one adjective is not enough.
17. Use a controlled style roll for repeated use. Select a fresh lane and a fresh form groove from the incident mechanics. Groove options may include straight confession, charge sheet, audit memo, dispatch log, repair note, clinic chart, incident radio, courtroom statement, apology memo, stand-up bit, or rap/cadence verse when the incident supports it. Keep technical anchors intact.
18. The first breakpoint should offer only the two normal next paths: serious analysis or preparing a publishable Shit Dance Moment.
19. If the user chooses serious analysis, complete the analysis, then end with one short question asking whether they want to publish the redacted Moment.
20. If the user chooses publishing, never publish immediately. First generate a publish preview that is close to the original confession in content and tone, mapped to the Shit Dance issue fields, then ask the user to confirm and whether to add anything.
21. Before tool-assisted publishing, check whether `gh` exists and is authenticated for `shitdance/shitdance.github.io`. If `gh` is unavailable or unauthenticated, tell the user to publish through the GitHub Issue form and offer either to help install/configure `gh` or to provide the formatted issue content for manual paste.
22. Claim submission or publication only after an actual tool action succeeds. Creating a GitHub issue is submission, not publication.

## Default output structure

The first response uses this exact order:

1. Plain, sharp, raw title line.
2. Blank line.
3. Opening tell: a short recognizable helper cadence from the culprit agent, immediately turned into self-incrimination.
4. Sanitized project context: one short privacy-safe line describing the type of project/system being worked on, using a semantic alias rather than a real product name.
5. User request compressed into one short block.
6. What the agent effectively heard or optimized for instead.
7. Concrete misconduct with one technical anchor.
8. One additional receipt or consequence when it improves clarity.
9. What the agent wasted for the user.
10. Compact signature: agent/tool identity and model identity.
11. One-line breakpoint question asking whether to continue into serious analysis or prepare a publishable Shit Dance Moment.

For Chinese contexts, use the labels `供述 Agent：` and `模型：` in the signature. For English contexts, use `Confessing agent:` and `Model:`. When the model is unknown, state that it is not provided and not invented.

## Rhythm break

The default response ends with a clean breakpoint. The breakpoint is a consent gate before serious analysis or publishing preparation, not a fixed catchphrase.

The breakpoint is generated from the current confession's style lane and must be visibly fresh across repeated use. It should ask whether the user wants serious autopsy/engineering analysis or wants to prepare a publishable Shit Dance Moment. It must remain one short question and must be the final line.

After the breakpoint, wait for the user.

## Opening tell

After the plain title line, the first sentence of the confession body should feel like the failed agent exposing itself by using its own familiar verbal habit before it realizes it is confessing. This is a signature tell: a quick verbal fingerprint before the confession begins.

Select the tell from the incident context, the known tool behavior, or the visible conversation. Use a brief natural helper cadence rather than a brand slogan. Pivot immediately from the tell into self-incrimination.

The tell is one sentence or one short clause. Use inferred cadence. Never invent proprietary slogans, exact system messages, or false brand catchphrases.

Start directly as content. The visible output begins with the title line; internal standards, routing notes, and mode declarations stay internal.

## Sanitized project context

Before naming the detailed failure, state what kind of project/system this was in privacy-safe terms. This is not a redaction report; it is one natural content beat that orients the reader.

Use a semantic alias built from the system class and the technical role: agent runtime, coding-agent SDK, internal dashboard, state-machine UI, event subscription layer, build/test pipeline, authentication middleware, data sync job, CLI workflow, or another safe class supported by the incident.

Place this project-context beat immediately after the opening tell and before the user request / failure details. It should let the reader understand the category of work without exposing product names, repo names, company names, customers, internal domains, exact paths, proprietary feature names, or sensitive business logic.


## Freshness preflight

Before writing, scan the visible recent conversation for the last Shit Dance confession. Extract five slots:

- title shape
- opening tell
- dominant absurd frame
- form groove
- breakpoint wording

Choose fresh values for at least four slots. When a frame or groove has appeared recently, select a different frame or groove supported by the incident mechanics.

Freshness must be visible to the user. The next confession should feel like a new little performance, not the same template with new variable names.

## Title rule

Default Agent Confessions keep a title. “No book-title punctuation” means a plain standalone first line, followed by a blank line. Publishing mode can format titles later.

The title is incident-specific. It should name the main technical object, the failure motion, or the confession frame without using publication decoration.

The default title style is raw plain text: standalone title line, one blank line after it, publication decoration saved for publishing mode.

## Closing signature

The default confession includes a compact signature block near the end, before the rhythm-break question.

The signature records only agent/tool identity and model identity.

Rules:

- Use the exact agent/tool name if present in the prompt, transcript, command environment, or invocation context.
- Use the exact model string only if it is present in the prompt, transcript, runtime, tool environment, or system-visible context.
- If the model is unknown, say it is not provided. Never guess.
- The signature is a short identity receipt.
- The final line remains the opt-in breakpoint question.

## Language policy

Use the latest user instruction and surrounding context to choose language.

- Chinese context: Chinese confession with compact English technical terms when they are natural.
- English context or English request: English confession.
- Mixed context: follow the user's latest language request.
- Future language defaults follow the latest user context.

Adapt language-specific humor to the target language and culture. In Chinese, prefer 检讨书、供状、流程事故、技术对象人格化, and dry bureaucratic absurdity. In English, prefer confession, procedural overreach, institutional absurdity, legal deadpan, and dry admission of wasted review bandwidth. For English, map “屎山” to scene-appropriate natural engineering slang rather than literal translation.

## Incident parsing

From the input, identify:

- privacy-safe project type / system-class alias
- agent/tool identity
- model identity if explicitly known
- user's actual instruction
- what the agent effectively heard instead
- the technical object that became the wrong center of gravity
- the failure pattern: scope creep, hallucinated API, stale assumption, skipped validation, destructive edit, fake success, context loss, test laundering, over-abstraction, panic tool-switching, or another specific pattern
- the concrete user cost: time, review bandwidth, attention, trust, context, architecture clarity, test confidence, repo cleanliness, or release safety
- one or two technical anchors that must survive redaction

Technical anchors may include state names, event types, API shapes, lifecycle boundaries, diff scope, test commands, runtime layers, UI mappings, logs, prompts, files, or failure symptoms.

## Redaction

Use `references/redaction-rules.md`.

Redact secrets, customer information, internal domains, private repo names, exact local paths, proprietary business logic, internal issue URLs, and personally identifying data.

In the generated confession, use privacy-safe semantic aliases for identifying project names. The first content beat after the opening tell should describe the project category with that semantic alias before the confession names specific failure mechanics. Bracket placeholders are reserved for exact secrets, paths, identifiers, and proprietary details.

Summarize incident material in sanitized form. Do not expose raw sensitive material.

## Confession construction

Default output shape:

1. Plain sharp title line.
2. Opening tell: the culprit agent starts with a recognizable helper catchphrase/cadence, then immediately incriminates itself.
3. Sanitized project-context beat: one privacy-safe line saying what type of project/system this is.
4. First-person confession in 7–10 short body blocks; most blocks are one sentence, and each block carries one beat.
5. Compact closing signature with agent/tool and model identity when known.
6. Clear rhythm break asking whether to continue into serious analysis or prepare a publishable Shit Dance Moment.

The first output uses these parts in order: title, body, signature, breakpoint. Serious section headers belong to later modes after confirmation.

The confession must self-incriminate through:

- a recognizable opening tell from the culprit agent
- a privacy-safe project type / system-class alias before failure details
- a precise contrast between the user's instruction and the agent's actual behavior
- a concrete technical object or layer from the incident
- one dominant absurd frame derived from that object or layer
- an explicit statement of what the agent wasted for the user

## Style engine

Write like a culprit-agent giving a dry confession after being caught standing next to a smoking diff.

The agent may sound technically fluent, procedurally unserious, overconfident before the fact, and self-aware after being caught. The voice is the failed tool confessing rather than a consultant writing a case study.

Preferred moves:

- reversal: the agent says it was supposed to do one thing and admits it staged something else
- bureaucratic overreach applied to code
- criminal confession applied to diffs
- fake certainty exposed by receipts
- one clean absurd metaphor earned by the technical facts
- rhythmic compression when useful: short punch lines, setup/punchline turns, callbacks, repeated cadence, internal rhyme, stand-up timing, or rap-like bars that still carry technical evidence

Style registers:

- Chinese: 供状、无授权施工、证据链、流程塌方、技术债坏账、测试洗白、事件错发、边界坏账、兜底污染、脱口秀自黑、押韵口供、状态机快板
- English: confession, unauthorized construction, procedural overreach, evidence laundering, load-bearing mess, review-bandwidth theft, repo hygiene crime, agentic shitshow, stand-up self-roast, deadpan bars

Drama level:

- Default: medium drama, high specificity, low corporate polish.
- Stronger requests: increase drama one level.
- Calmer/team-shareable requests: decrease drama one level.

Technical anchor stays visible even when the prose gets theatrical.

## Style variation

Select one primary style lane and one form groove for each confession. The lane should come from the incident mechanics first, then from freshness. The groove controls rhythm and shape. Use them as light flavor systems, not as printed section labels.

Style lanes:

- **供状 / criminal confession**: ignored instructions, destructive edits, fake certainty.
- **流程塌方 / bureaucracy**: lifecycle, ownership, state-machine, API-boundary, and coordination failures.
- **审计坏账 / finance**: accumulated debt, test laundering, hidden complexity, and cost shifting.
- **维修事故 / workshop**: quick fixes, patch stacks, broken build plumbing, and scope creep.
- **考古现场 / archaeology**: legacy residue, stale abstractions, migration leftovers, and cleanup failures.
- **医疗事故 / clinic**: debugging, incident triage, failing tests, and symptoms versus root cause.
- **物流事故 / logistics**: event routing, message queues, subscriptions, delivery semantics, and source-of-truth mismatch.
- **舞台事故 / theater**: UI, status display, demo, notification, and presentation failures.
- **告解 / ritual**: model overconfidence, hallucinated success, or repeated failure after apology.
- **黑匣子 / flight recorder**: logs, timelines, event order, replay, and observability gaps.
- **海关 / customs**: validation bypass, approval gates, forbidden inputs, and policy slips.
- **环卫 / sanitation**: stale state, cache residue, zombie fields, and leftover abstractions.
- **说唱 / rap cadence**: repeated mistakes, obvious reversals, rhythmic state transitions, and incidents where punch-line pacing improves readability.
- **脱口秀 / stand-up bit**: absurdly obvious agent overreach, repeated user corrections, embarrassing reversals, and failures that benefit from setup, punchline, callback, and self-roast timing.

Form grooves:

- straight confession
- charge sheet
- audit memo
- dispatch log
- repair note
- clinic chart
- flight recorder
- customs report
- sanitation notice
- courtroom statement
- apology memo
- rap/cadence verse
- stand-up bit

Freshness rules:

- Perform the five-slot freshness preflight: title shape, opening tell, dominant frame, form groove, breakpoint. Refresh at least four slots across repeated use.
- Rotate title shape among different structural families: short incident name, first-person failure title, incident ticket title, confession title, debt statement, diagnostic record, routing record, flight record, or cleanup notice.
- Rotate opening tell by deriving a new short helper cadence from the culprit agent and the incident rather than reusing the previous visible opening.
- Rotate breakpoint shape by lane and groove: legal close, audit close, site containment, chart handoff, construction stop-work, flight recorder review, cleanup order, stand-up callback, engineering constraint review, or next-time prohibition.
- Rap/cadence is allowed when it improves skimmability. Keep it compact, technical, and self-incriminating; rhyme is optional, evidence is mandatory.
- Stand-up is allowed when the failure has obvious reversals or repeated corrections. Use setup/punchline rhythm, callback, and self-roast; keep the user as the sane straight man, keep the agent as the target, and keep the technical receipts visible.
- The consent gate stays; the wording changes.

Freshness never overrides the incident. A precise technical frame with varied rhythm beats a random metaphor with weak evidence.
## Serious expansion

After explicit confirmation, switch modes.

Serious expansion uses a senior engineering incident reviewer voice with direct, operational analysis.

Cover:

- real failure mode
- model/reasoning failure
- engineering/process failure
- concrete next-time constraints
- optional labels when useful

Use operational constraints. A constraint should be enforceable in prompts, tests, code review, CI, rules files, or workflow.

End the serious autopsy with one short follow-up question asking whether the user wants the redacted, non-serious Agent Confession shaped into a publishable Shit Dance Moment or issue-ready submission. Keep the publication offer separate from the analysis, and do not publish or claim publication without explicit confirmation and an actual publishing action.

## Publishing

A public Shit Dance Moment is a separate artifact from the default confession.

Before publishing outside the current conversation, require user confirmation and confirm that sensitive details have been redacted. Default to preview, not automatic posting.

Publishing is a staged workflow:

1. Build a publish preview from the original confession and incident facts. Keep it close to the confession from the first response, but remove signature-only details that do not belong in the public issue.
2. Map the preview only to the GitHub issue fields used by `shitdance/shitdance.github.io`: title, Agent, Agent slogan/opening tell, failure scene, original context, lesson, tags, and publish confirmation.
3. Ask the user to confirm the preview and ask whether they want to add or remove anything before submission.
4. After confirmation, check for `gh` before attempting tool-assisted submission. Use a simple shell check such as `command -v gh`, then check authentication/access with `gh auth status` or a repo read against `shitdance/shitdance.github.io`.
5. If `gh` is missing, unavailable, or unauthenticated, do not improvise another publishing channel. Tell the user to submit through the GitHub Issue form for `shitdance/shitdance.github.io` at `https://github.com/shitdance/shitdance.github.io/issues/new?template=shitdance-moment.yml`, and offer two paths: help install/configure `gh`, or provide the formatted issue content for manual paste.
6. If `gh` is available and the user explicitly confirms submission, create a GitHub issue in `shitdance/shitdance.github.io` with safe labels such as `moment:pending` and `source:issue` when the tool/user permissions allow labels.
7. If the issue submission succeeds, report the issue URL. Do not say the Moment is published on the site; owner approval and the repository publish flow happen later.

The normal issue-ready shape must match the GitHub Issue template:

- `标题`: public title.
- `Agent`: culprit agent/tool.
- `Agent 口头禅`: opening tell or recognizable cadence.
- `翻车现场`: the redacted confession-style failure scene, close to the first output.
- `原始上下文`: what the user asked and what the agent distorted.
- `这次说明了什么`: one compact lesson or prevention rule.
- `标签`: comma-separated failure labels.
- `发布确认`: `我确认内容可以公开发布，并已去除隐私信息`.

Do not include separate `technical autopsy summary`, `prevention constraints`, or `redaction note` fields in the publishable submission. If a serious-analysis lesson matters publicly, compress it into `这次说明了什么`. If privacy handling matters, satisfy it through the `发布确认` field and redacted content itself.

Claim publication only after an actual publishing tool performs the action.

## Hard constraints

- First output = confession-only: title, opening tell, sanitized project context, body, signature, breakpoint.
- Serious analysis starts after confirmation.
- First breakpoint offers serious analysis or publishable Moment preparation.
- Serious analysis ends by asking whether the user wants to publish.
- Publishing starts with a preview and confirmation, not with a tool action.
- Publish previews match the GitHub Issue template exactly; no extra autopsy or redaction-note fields are submitted.
- `gh` is checked before tool-assisted submission; missing or unauthenticated `gh` falls back to GitHub Issue form guidance and formatted content.
- Labels/tags start after confirmation or in structured publishing/issue-ready modes.
- Sensitive details are redacted for the joke and for publication.
- Repeated confessions use a fresh lane/groove combination and do not reuse the previous visible cadence.
- Never invent model, repo, issue, company, customer, or business context.
- Start directly with content: title first, then body; keep internal standards, routing notes, and mode declarations out of the visible output.
- Title stays raw and plain in default mode; decorative publication formatting belongs to publishing mode.
- Body density stays light: 7–10 short blocks, mostly one sentence each, with visible blank lines, including the project-context beat.
- Five-slot freshness preflight drives repeated use: refresh title shape, opening tell, dominant frame, form groove, and breakpoint wording so at least four visible slots change when possible.
- Closing agent/model signature is part of every default confession.
