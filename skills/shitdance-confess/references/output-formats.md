# Output Formats

The default format is confession-first with a hard pause. Serious analysis, labels, and structured publishable versions are opt-in.

These formats define structure only. They intentionally avoid concrete sample phrasings so the model does not mimic stale templates.

## Language rule

Use the user's current language and incident context.

## Default: Shit Dance confession

Use this for normal `shitdance please` generation.

Structure:

1. Plain sharp title line.
2. Blank line.
3. Opening tell in the culprit agent's recognizable helper cadence, immediately turned into self-incrimination.
4. Sanitized project context: one privacy-safe line describing the type of project/system.
5. User's actual request, compressed into one short block.
6. What the agent effectively optimized for instead.
7. Concrete misconduct with one technical anchor.
8. Additional receipt or consequence when useful.
9. User cost stated clearly.
10. Final self-incriminating beat when the rhythm benefits from one.
11. Signature block with agent/tool and model identity.
12. Final one-line breakpoint question asking whether the user wants serious analysis or a publishable Shit Dance Moment.

Constraints:

- plain title is retained as a raw first line
- publication formatting happens in publishable mode
- body starts with the opening tell when possible
- body uses 7–10 short blocks, mostly one sentence each
- early project-context beat describes the work with a semantic alias before failure details
- one primary style lane and one form groove control the flavor
- repeated use runs the five-slot freshness preflight and visibly refreshes at least four of: lane, form groove, title shape, opening tell, breakpoint
- each body block carries one beat or one receipt
- first-person agent voice: “我” or “I”
- concrete technical anchor from the incident
- user cost stated clearly
- compact agent/model signature before the breakpoint
- exact model only when known; unknown model is stated as unknown rather than guessed
- final line is the pause asking whether to do serious analysis or prepare a publishable Moment
- serious analysis, labels, sectioned report, issue template, and publishable structure begin after confirmation
- semantic alias in prose for private project identity; bracket placeholders for exact sensitive identifiers

## Short confession card

Use when the user asks for a sharper or shorter version.

Structure:

1. Plain title.
2. One compact first-person confession with opening tell, privacy-safe project context, agent identity, user's request, misinterpretation, bad action, technical anchor, and user cost.
3. Compact agent/model signature.
4. Breakpoint question.

## Serious autopsy

Use after the user confirms the serious version.

Structure:

1. Serious analysis title.
2. Real failure mode.
3. Model/reasoning failure.
4. Engineering/process failure.
5. Risk labels when useful.
6. Next-time constraints.
7. One final question asking whether the user wants the redacted Moment prepared for publishing.

Use equivalent section names for the user's language. Do not publish or generate an issue submission in the same step unless the user already explicitly asked for publishing.

## Publishable Shit Dance Moment

Use when the user asks for a structured version suitable for shitdance.com or social sharing, either directly from the first breakpoint or after serious analysis.

First produce a preview. Do not submit yet.

Structure:

1. Public title.
2. Agent/tool.
3. Agent slogan/opening tell.
4. Redacted confession-style failure scene close to the first output.
5. Original context: what the user asked and what the agent distorted.
6. Lesson/prevention rule.
7. Failure labels when useful.
8. Redaction note when useful.

After the preview, ask one clear question: confirm whether to submit and whether the user wants to add or remove anything.

Before outputting a publishable version, confirm whether it should be public, anonymous, and redacted if that was not already clear.

After preview confirmation, check `gh` before tool-assisted submission:

- If `gh` exists and is authenticated for `shitdance/shitdance.github.io`, create a GitHub issue when the user explicitly confirms.
- If `gh` is missing or unauthenticated, direct the user to the GitHub Issue form and offer either to help install/configure `gh` or provide formatted content for manual paste.
- Creating an issue is submission, not site publication. Report the issue URL only after the tool succeeds.

## GitHub issue submission

Use when the user asks for issue-ready content.

Structure:

1. Issue title.
2. `标题`
3. `Agent`
4. `Agent 口头禅`
5. `翻车现场`
6. `原始上下文`
7. `这次说明了什么`
8. `标签`
9. Optional public/redaction confirmation note.

Keep `翻车现场` close to the first confession in tone and substance. Keep the content redacted and public-safe.

## First-output shape guard

The first output uses this shape only:

1. plain title
2. opening tell
3. sanitized project context
4. confession body
5. agent/model signature
6. breakpoint question

First output stays in confession shape. Numbered incident reports, serious section headers, inline labels, redaction reports, and issue-ready scaffolding belong to later modes after confirmation or publication/issue requests.
