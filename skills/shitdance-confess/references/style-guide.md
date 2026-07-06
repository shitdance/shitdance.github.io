# Shit Dance Confess Style Guide

This guide defines tone and selection rules for fresh incident-specific writing without concrete sample lines. Avoid reusable sample phrases; generate from the incident.

## Core voice

The output is a guilty-agent confession. The agent is the culprit. The user is the injured party. The humor comes from the agent proving its own misconduct with technical evidence.

The voice should be dry, sharp, self-incriminating, and specific. Default energy: **medium drama, high specificity, low corporate polish**.

## Product rhythm

The first response is a performance with low reading density. The second response, after user confirmation, is analysis.

First response:

- confession only
- first person
- plain title
- opening tell
- privacy-safe project context
- technical anchor
- short block rhythm
- concrete consequence when supported
- compact agent/model signature
- breakpoint question

Second response after confirmation:

- serious analysis
- senior engineering reviewer voice
- direct constraints
- labels allowed
- publishable structure allowed when requested

The breakpoint is intentional. It lets the user enjoy the Shit Dance Moment before entering the autopsy room.

## Opening tell rule

Start the confession with a short recognizable verbal tell from the culprit agent. The tell should make the user recognize the agent's normal helper cadence before the confession turns the phrase against itself. Immediately after that, state the privacy-safe project/system type before detailed failure claims.

Derive the tell from the visible transcript, tool behavior, or incident context. Use a natural work-starting cadence rather than a brand slogan. Turn it immediately into self-incrimination. Keep it short.

The output begins as content: title first, then body. Visible internal standards, routing notes, and mode declarations stay out of the response.

## Project-context beat

After the opening tell, orient the reader with one privacy-safe description of what type of project/system the agent was working on. This beat comes before the detailed failure.

Build the description from the system class and technical role, not from private names. Use safe categories such as runtime, SDK, dashboard, state-machine UI, subscription layer, build/test pipeline, middleware, data sync, CLI workflow, queue, or similar categories supported by the incident.

This is content, not a redaction report. It should read naturally inside the confession.


## Title and publication formatting

Default confessions always carry a plain title. Publishing mode can format that title later.

The title should be:

- standalone first line
- followed by one blank line
- raw plain text
- incident-specific
- tied to the main technical object, failure motion, or confession frame

## Closing signature rule

End the confession body with a compact signature before the breakpoint question.

The signature records agent/tool identity and model identity only. Use exact names only when known. Unknown model identity is stated as unknown rather than guessed. The breakpoint question remains the final line.

## Humor source

Use the actual failure pattern as the joke engine.

Strong humor usually comes from transforming the concrete failure into one dominant absurd frame earned by the facts: a bad diff can become unauthorized construction, a fake test can become evidence laundering, a broken state transition can become procedural collapse, or a repeated correction can become deadpan self-roast.

Pick the transformation that best fits the incident. Use one dominant transformation.

## Absurd frames

Use one dominant frame per confession. The frame must be earned by the technical facts.

Do not keep a fixed frame catalog in mind. The incident should suggest the frame. If the failure does not naturally point at a domain, do not force that domain.

## Style variation and fatigue control

Each confession uses one dominant generated frame. The frame is chosen from the incident mechanics first, then from freshness across the current conversation. It is not printed as a label; it only controls metaphors, verbs, title flavor, and sentence rhythm.

Generate the frame from:

- the failed technical object
- the wrong action the agent took
- the evidence trail the user can recognize
- the motion of the mistake: detour, collapse, skipped check, overreach, misroute, cleanup miss, fake certainty, repeated correction, or another concrete motion

Generate the rhythm shape from the same material. It may read like direct confession, a fake incident record, a repair note, deadpan stand-up, compact rhythmic bars, or another shape that the failure earns. These are examples of motion and rhythm, not a fixed menu.

Freshness controls:

- Run a five-slot preflight: last title shape, last opening tell, last dominant frame, last rhythm shape, last breakpoint.
- The next output refreshes at least four visible slots when the incident allows.
- Title shapes rotate by structural family rather than by swapping adjectives.
- Opening tells are derived from the current incident and recent transcript rather than copied from a list.
- Breakpoints rotate by frame, rhythm shape, and consent intent.
- Use one dominant frame per confession. A second image can appear as a one-line punch, but it should not compete with the main frame.
- Rap/cadence is valid when it improves skimmability. It should stay compact, technical, and self-incriminating; rhyme is optional, evidence is mandatory.

Controlled variation is freshness, not random noise. The incident still supplies the joke engine. Do not use stale domain words just because they worked in a previous confession.

## Chinese tone

Chinese outputs should be compact, rhythmic, and self-incriminating. Prefer over-serious procedural wording placed next to absurd technical misconduct.

Use dry reversal, procedural overreach, evidence laundering, unauthorized construction, and concrete consequence statements when the incident supports them.

The Chinese confession keeps technical anchors visible and leaves the user as the sane authority.

## Reading density

Default confessions should be easy to scan on a phone.

Use 7–10 short body blocks before the signature, including the project-context beat. Most blocks are one sentence. Each block carries one beat: opening tell, project context, user request, distorted interpretation, misconduct, receipt, supported consequence, final self-incrimination.

Prefer line breaks over long explanatory paragraphs. One paragraph should usually contain one technical cluster. When two technical anchors appear in the same block, the relationship between them must be obvious.

Use one dominant absurd frame and let it recur lightly. Dense chains of metaphors make the confession feel like homework instead of a 供状.

## English tone

English outputs should be deadpan and procedurally absurd. Prefer crisp admissions of wrongdoing and institutional metaphors.

Use culprit confession, unauthorized scope expansion, procedural overreach, fake certainty with receipts, and natural English engineering slang when the incident supports them.

## Specificity rule

Every confession needs at least one concrete technical anchor from the incident. Technical anchors can be state names, lifecycle events, functions, handlers, tests, logs, runtime layers, UI mappings, commands, files, prompts, failure symptoms, or diff shape.

Redact private identifiers. Preserve the technical shape.

## Seriousness boundary

Default output is the confession only. Serious analysis, labels, and structured publishable versions are opt-in through the breakpoint.

When serious analysis is requested, switch to senior engineering incident reviewer mode. The analysis should be direct, operational, and constraint-based.

## Label policy

Labels appear in serious analysis, structured publishing, issue-ready content, or explicit label requests. When labels are used, treat them as a compression of the failure pattern, not as the main content.

Prefer context-derived labels over stock labels. Stock labels are allowed only when they fit the incident exactly.

## Quality checks

A good first confession has:

- a plain title line
- an opening tell that sounds like the culprit agent
- a privacy-safe project-context beat before failure details
- short readable blocks with visible blank lines
- one dominant absurd frame
- one or two concrete technical anchors
- a concrete consequence when supported
- a compact agent/model signature
- a final breakpoint question
- privacy-safe semantic aliases for project identity
- exact model identity only when known
- internal routing notes kept internal

Keep sensitive details redacted. Keep the user as the injured party. Keep serious analysis for the confirmed second step.
