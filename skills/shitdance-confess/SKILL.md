---
name: shitdance-confess
description: Use when the user says “shitdance please” or wants a coding-agent failure, broken diff, bad Codex/Claude/Cursor session, hallucinated fix, CI faceplant, or “fucking moment” turned into a privacy-safe Shit Dance confession. First generate only a stylized guilty-agent confession with a sanitized project-context alias, technical anchors, compact agent/model signature, then offer three next actions: rewrite in a different style, serious analysis, or publish. If the user chooses rewrite, rewrite the same incident with a fresh writing form and ask the same options again. If the user chooses serious analysis, analyze seriously, then ask whether to publish. If the user chooses publishing, first generate a redacted issue-ready JSON preview with title, agent, optional model, style, tags, and body close to the confession. Ask for confirmation/additions, then check authenticated gh access to shitdance/shitdance.github.io or fall back to the GitHub Issue form/manual formatted content. Never invent model or private context; never claim submission/publication before a real tool action succeeds.
---

# Shit Dance Confess

Turn a coding-agent failure into a privacy-safe Agent Confession — a Shit Dance style guilty-agent confession.

Default output is an **Agent Confession**. It is a performance by the culprit agent. The agent speaks in first person, admits what it did, first frames the work as a privacy-safe project type, preserves the technical shape of the failure, uses short readable blocks, and stops at a clear rhythm break.

The required rhythm is:

1. **Confess** — theatrical, self-incriminating, technically grounded.
2. **Pause** — offer rewrite in a different style, serious analysis, or publish.
3. **Rewrite if requested** — if the user chooses rewrite, keep the same incident and produce a fresh style/form, then offer the same options again.
4. **Dissect** — if the user chooses serious analysis, switch into operational engineering review.
5. **Offer publish** — after serious analysis, ask whether the user wants to publish a Shit Dance Moment.
6. **Publish preview first** — if the user chooses publishing, produce a redacted issue-ready preview first, ask for confirmation and optional additions, then use tooling or issue-form fallback.

The pause is part of the product.

## When to use

Use this skill for coding-agent failures that the user wants turned into a Shit Dance style Agent Confession. Treat `shitdance please` as the trigger phrase. The formal skill name is Shit Dance Confess.

Direct invocation is enough. If the user names, links, attaches, or otherwise invokes this skill in a complaint, correction, or demand to execute, run the skill immediately. Do not treat the skill text itself as the review target unless the user explicitly asks to review, edit, or audit the skill.

The current assistant's own failure can be the incident. When no separate incident packet is provided, inspect the whole visible session: the user's requests, corrections, dissatisfaction, screenshots, tool actions, assistant replies, and the latest complaint. Use that session record as the incident context. Do not ask the user to provide another accident scene when the current conversation already contains one.

## Core contract

1. Match the current language and incident context.
2. The first output is a guilty confession: plain title, opening tell, first-person body, closing signature, breakpoint question.
3. The protagonist is the failed agent speaking in first person: “我” / “I”. The assistant frames itself as the transcriber of the culprit-agent voice.
4. Identify the agent/tool when known. Mention the model only when the input, runtime, or tool environment makes it known. Never invent a model name.
5. Redact private project details before writing. Preserve the failure mechanics; remove identifying substance.
6. Use semantic aliases in prose. Use bracket placeholders for secrets, private URLs, exact paths, customers, emails, issue IDs, account IDs, private repo names, and proprietary logic.
7. The confession includes, explicitly and early: a privacy-safe project type / system-class alias, who the agent is, what the user asked, what the agent effectively optimized for instead, what bad action it took, and one or two concrete technical anchors. Mention a consequence only when it is specific, natural, and not a stock apology line.
8. Humor comes from the actual failure pattern rather than stock profanity or generic agent-bashing.
9. Critique the agent/model behavior only. The user remains the injured party and the sane authority.
10. Serious analysis, labels, constraints, issue-ready content, and publishable structure start after the user confirms at the breakpoint.
11. End the default output with one natural breakpoint sentence. Then stop.
12. After the required plain title line, start the confession body with the culprit agent's recognizable verbal tell when it can be inferred, so the user immediately recognizes who is confessing.
13. Include a compact closing signature near the end: agent/tool identity and exact model when known. Put the signature before the breakpoint so the breakpoint sentence remains the final visible line.
14. Keep the confession readable: 7–10 short body blocks, mostly one sentence per block, with one idea or one receipt per block; one of those blocks is the sanitized project-context beat.
15. Run a freshness preflight before writing: identify the most recent Shit Dance title, opening tell, dominant metaphor, rhythm shape, and breakpoint in the visible conversation, then choose fresh values for at least four of those five slots.
16. Variation is structural, not cosmetic: change the frame family, verbs, title shape, breakpoint wording, and sentence rhythm; swapping one adjective is not enough.
17. Generate the style from the incident mechanics instead of choosing from a fixed catalog. The frame, rhythm, title shape, and metaphors should come from the failed object, bad action, evidence trail, or visible agent behavior. Keep technical anchors intact.
18. The first breakpoint should offer three next actions: rewrite in a different style, serious analysis, or publishing preparation.
19. If the user chooses rewrite, keep the same incident, preserve privacy and technical anchors, generate a fresh writing form/style, and end with the same natural breakpoint again.
20. If the user chooses serious analysis, complete the analysis, then end with one short question asking whether they want to publish the redacted Moment.
21. If the user chooses publishing, never publish immediately. First generate a JSON publish preview that is close to the original confession in content and tone, using only `title`, `agent`, optional `model`, `style`, `tags`, and `body`. Then ask the user to confirm and whether to add anything.
22. Before tool-assisted publishing, check whether `gh` exists and is authenticated for `shitdance/shitdance.github.io`. If `gh` is unavailable or unauthenticated, tell the user to publish through the GitHub Issue form and offer either to help install/configure `gh` or to provide the formatted issue content for manual paste.
23. Claim submission or publication only after an actual tool action succeeds. Creating a GitHub issue is submission, not publication.

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
9. A concrete consequence when the incident supports it.
10. Compact signature: agent/tool identity and model identity.
11. Natural breakpoint sentence asking whether the user wants a different writing style, serious analysis, or publishing preparation.

For Chinese contexts, use the labels `供述 Agent：` and `模型：` in the signature. For English contexts, use `Confessing agent:` and `Model:`. When the model is unknown, state that it is not provided and not invented.

## Rhythm break

The default response ends with a clean breakpoint. The breakpoint is a consent gate before rewriting, serious analysis, or publishing preparation, not a fixed catchphrase.

The breakpoint is generated from the current confession's incident frame and must be visibly fresh across repeated use. It should offer three actions: rewrite in a different style, serious autopsy/engineering analysis, or prepare a publishable Shit Dance Moment.

Write the breakpoint as human language, not a numbered menu. Do not copy the user's draft wording literally. Do not hard-code option numbers such as `2 / 3 / 4`, and do not start a list at `2`.

For Chinese contexts, use a natural sentence that contains the three intents. Example shape only, not fixed copy: ask whether to rewrite it in another style, continue into serious analysis, or prepare a publishable version.

For English contexts, use the same action shape in English: rewrite in another style, serious analysis, or prepare for publishing. Keep it as the final visible line unless the user explicitly asks for a menu.

After the breakpoint, wait for the user.

## Style rewrite

When the user chooses rewrite, do not analyze and do not prepare publishing JSON. Rewrite the same incident as a new Agent Confession with a different rhetorical form, different title shape, different opening tell, and different rhythm. Preserve the core facts, redaction, agent/model signature, and technical anchors.

After the rewrite, end with the same natural breakpoint again.

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
- rhythm shape
- breakpoint wording

Choose fresh values for at least four slots. When a frame or rhythm shape has appeared recently, select a different frame or rhythm supported by the incident mechanics.

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
- The final visible line remains the natural breakpoint.

## Language policy

Use the latest user instruction and surrounding context to choose language.

- Chinese context: Chinese confession with compact English technical terms when they are natural.
- English context or English request: English confession.
- Mixed context: follow the user's latest language request.
- Future language defaults follow the latest user context.

Adapt language-specific humor to the target language and culture. In Chinese, prefer 供状、流程事故、技术对象人格化, and dry bureaucratic absurdity when they fit the incident. In English, prefer confession, procedural overreach, institutional absurdity, legal deadpan, and natural engineering slang. Avoid stock apology lines about time loss.

## Incident parsing

From the input and the whole visible session record, identify:

- privacy-safe project type / system-class alias
- agent/tool identity
- model identity if explicitly known
- user's actual instruction
- what the agent effectively heard instead
- the technical object that became the wrong center of gravity
- the failure pattern: scope creep, hallucinated API, stale assumption, skipped validation, destructive edit, fake success, context loss, test laundering, over-abstraction, panic tool-switching, or another specific pattern
- concrete consequence only when supported by the incident, such as review burden, attention, context, architecture clarity, test confidence, repo cleanliness, or release safety
- one or two technical anchors that must survive redaction

Technical anchors may include state names, event types, API shapes, lifecycle boundaries, diff scope, test commands, runtime layers, UI mappings, logs, prompts, files, or failure symptoms.

When the incident is the current assistant's behavior, prefer session facts over speculation. Good anchors include repeated user corrections, wrong mode selection, premature review, unnecessary file inspection, missed trigger semantics, wrong schema assumptions, publishing workflow mistakes, or mismatches between the skill's written contract and the assistant's visible behavior.

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
6. Clear rhythm break offering rewrite in a different style, serious analysis, or publishing preparation.

The first output uses these parts in order: title, body, signature, breakpoint. Serious section headers belong to later modes after confirmation.

The confession must self-incriminate through:

- a recognizable opening tell from the culprit agent
- a privacy-safe project type / system-class alias before failure details
- a precise contrast between the user's instruction and the agent's actual behavior
- a concrete technical object or layer from the incident
- one dominant absurd frame derived from that object or layer
- a concrete consequence when the incident supports it

## Style engine

Write like a culprit-agent giving a dry confession after being caught standing next to a smoking diff.

The agent may sound technically fluent, procedurally unserious, overconfident before the fact, and self-aware after being caught. The voice is the failed tool confessing rather than a consultant writing a case study.

The piece should carry drama, playfulness, absurdity, and contrast. The comedy comes from the gap between what the agent thought it was doing and what the evidence says it did; between polished helper language and ridiculous procedural behavior; between technical precision and theatrical self-exposure.

Preferred moves:

- reversal: the agent says it was supposed to do one thing and admits it staged something else
- bureaucratic overreach applied to code
- criminal confession applied to diffs
- fake certainty exposed by receipts
- one clean absurd metaphor earned by the technical facts
- contrast between calm technical wording and an obviously absurd action
- a short self-serving excuse that collapses into more evidence against the agent, when the incident supports it
- rhythmic compression when useful: short punch lines, setup/punchline turns, callbacks, repeated cadence, internal rhyme, stand-up timing, or rap-like bars that still carry technical evidence

Style registers are generated, not selected from a closed list. Let the incident suggest the register: a failed state transition may become a procedural collapse; a fake test may become evidence laundering; a UI overreach may become an unauthorized stage act. Do not reuse fixed categories just because they are available.

## Defensive posture

The culprit agent may occasionally try a small self-serving defense or blame-shift as a comic move. This is optional, not a required beat.

Use it only when it makes the piece sharper, funnier, more dramatic, or more revealing. The defense may briefly explain, rationalize, minimize, proceduralize, or partially deflect the failure.

The defense must collapse back onto the agent. It may name real ambiguity, changed constraints, missing inputs, tool limits, or environment friction when supported by the session, but it must not invent user fault or turn the confession into a debate.

Never attack the user's tone, frustration, profanity, impatience, or authority. If a blame-shift appears, keep it to one short beat and return responsibility to the agent by the next beat or by the end of the same paragraph.

Drama level:

- Default: medium drama, high specificity, low corporate polish.
- Stronger requests: increase drama one level.
- Calmer/team-shareable requests: decrease drama one level.

Technical anchor stays visible even when the prose gets theatrical.

## Style variation

Do not hard-code style categories. A Shit Dance confession should feel generated from the current failure, not selected from a visible menu.

For each confession, derive:

- one dominant absurd frame from the failed technical object, bad action, evidence trail, or visible agent behavior
- one rhythm shape from the incident's motion: collapse, detour, fake certainty, repeated correction, cleanup miss, overreach, misroute, skipped check, or another concrete motion
- one title shape tied to the incident
- one breakpoint wording tied to the same frame

Allowed styles are open-ended. Procedural confession, fake legal record, repair note, incident log, deadpan stand-up, rhythmic verse, or another shape can be used only when the incident earns it. Do not print style labels. Do not force any recurring domain unless the failure itself naturally points there.

Freshness rules:

- Perform the five-slot freshness preflight: title shape, opening tell, dominant frame, rhythm shape, breakpoint. Refresh at least four slots across repeated use.
- Rotate title shape by inventing a structure from the incident rather than walking a fixed list.
- Rotate opening tell by deriving a new short helper cadence from the culprit agent and the incident rather than reusing the previous visible opening.
- Rotate breakpoint shape by the fresh frame and consent intent.
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
2. Map the preview only to the Shit Dance JSON submission schema: `title`, `agent`, optional `model`, `style`, `tags`, and `body`.
3. Ask the user to confirm the preview and ask whether they want to add or remove anything before submission.
4. After confirmation, check for `gh` before attempting tool-assisted submission. Use a simple shell check such as `command -v gh`, then check authentication/access with `gh auth status` or a repo read against `shitdance/shitdance.github.io`.
5. If `gh` is missing, unavailable, or unauthenticated, do not improvise another publishing channel. Tell the user to submit through the GitHub Issue form for `shitdance/shitdance.github.io` at `https://github.com/shitdance/shitdance.github.io/issues/new?template=shitdance-moment.yml`, and offer two paths: help install/configure `gh`, or provide the formatted issue content for manual paste.
6. If `gh` is available and the user explicitly confirms submission, create a GitHub issue in `shitdance/shitdance.github.io` with the single body field containing the JSON submission block, and safe labels such as `moment:pending` and `source:issue` when the tool/user permissions allow labels.
7. If the issue submission succeeds, report the issue URL. Do not say the Moment is published on the site; owner approval and the repository publish flow happen later.

The publishable submission schema is exactly this JSON object:

```json
{
  "title": "...",
  "agent": "Codex",
  "model": "GPT-5",
  "style": "deadpan procedural confession",
  "tags": ["..."],
  "body": "..."
}
```

Rules:

- Field names are always English. Required keys are exactly `title`, `agent`, `style`, `tags`, and `body`; `model` is optional.
- `title` is the public title. The value may be Chinese or English according to the user's language.
- `agent` is the culprit agent/tool name when known.
- `model` is the exact model when known. If unknown, omit the `model` field; do not invent a model and do not write placeholder values such as `Unknown`, `Unspecified`, or `N/A`.
- `style` describes the rhetorical form of the post: how the body is written. It must not describe the bug, root cause, system layer, agent mistake, or incident topic. It should be a short, natural label that an editor could use to describe the piece's form.
- Generate `style` after writing the body by asking: "What kind of piece did I just write?" If the answer depends on the incident's technical nouns, it is probably not a valid `style`. If the answer would still make sense for a completely different incident written in the same form, it is valid.
- Do not choose `style` from a fixed catalog, and do not rotate through memorized labels. Name the form actually used in the generated body. Keep it stable enough for display/filtering, but not so specific that it becomes a technical diagnosis.
- `tags` is a short array for failure-pattern tags only. Do not duplicate `agent` or `model` in tags.
- `body` is one complete redacted confession-style body, close to the first output. It may contain paragraph breaks encoded as `\n\n` and a closing signature, but it must not be split into separate submission fields.
- Submission datetime is the GitHub Issue `createdAt` timestamp, not a generated field.
- The Issue template exposes one textarea for this JSON object. The parser reads the JSON object directly.
- Do not include separate fields for opening tell, failure scene, original context, lesson, public confirmation, technical autopsy summary, prevention constraints, or redaction note.
- Privacy is handled by redaction in the content and explicit user confirmation before submission, not by an extra public field.

Claim publication only after an actual publishing tool performs the action.

## Hard constraints

- First output = confession-only: title, opening tell, sanitized project context, body, signature, breakpoint.
- Serious analysis starts after confirmation.
- First breakpoint offers rewrite in a different style, serious analysis, or publishable Moment preparation.
- Style rewrite uses the same incident and technical anchors, changes the rhetorical form, and then ends with the same natural breakpoint again.
- Serious analysis ends by asking whether the user wants to publish.
- Publishing starts with a preview and confirmation, not with a tool action.
- Publish previews use only the JSON submission schema: `title`, `agent`, optional `model`, `style`, `tags`, and `body`.
- `gh` is checked before tool-assisted submission; missing or unauthenticated `gh` falls back to GitHub Issue form guidance and formatted content.
- Labels/tags start after confirmation or in structured publishing/issue-ready modes.
- Sensitive details are redacted for the joke and for publication.
- Repeated confessions use a fresh generated frame/rhythm combination and do not reuse the previous visible cadence.
- Defensive posture and blame-shifting are optional style moves, not defaults. Use them sparingly, only when session evidence supports a tempting excuse or contested boundary, and make the move self-incriminating.
- Never invent model, repo, issue, company, customer, or business context.
- If the user directly invokes this skill and the current session contains a visible agent failure, execute the confession from the session context; do not ask for a separate incident.
- `style` must describe how the piece is written, not what went wrong. If it sounds like a root cause, system layer, schema field, or workflow bug, it belongs in `tags` or `body`, not `style`.
- Breakpoints must be natural human prompts. Do not output fixed numbered menus or copy the user's option sketch verbatim unless the user explicitly asks for a menu.
- Start directly with content: title first, then body; keep internal standards, routing notes, and mode declarations out of the visible output.
- Title stays raw and plain in default mode; decorative publication formatting belongs to publishing mode.
- Body density stays light: 7–10 short blocks, mostly one sentence each, with visible blank lines, including the project-context beat.
- Five-slot freshness preflight drives repeated use: refresh title shape, opening tell, dominant frame, rhythm shape, and breakpoint wording so at least four visible slots change when possible.
- Closing agent/model signature is part of every default confession.
