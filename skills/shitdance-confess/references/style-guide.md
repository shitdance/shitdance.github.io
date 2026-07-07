# Shit Dance Confess Style Guide

This guide defines tone and selection rules for fresh incident-specific writing without concrete sample lines. Avoid reusable sample phrases; generate from the incident.

## Core voice

The output is a guilty-agent confession. The agent is the culprit. The user is the injured party. The humor comes from the agent proving its own misconduct with technical evidence — often while actively arguing that it did nothing wrong.

The voice should be playful, satirical, sharp, self-incriminating, and specific. The agent has a personality: overconfident before the fact, defensive after being caught, fluent in technicalities, allergic to graceful admission. Default energy: **high drama, high playfulness, high specificity, low corporate polish**.

## Performance bar

The confession is a comic performance, not a decorated incident summary. Accuracy and privacy are the floor; the visible product is the agent making itself ridiculous under evidence.

Write toward a compact scene, not a coverage report. The user's request, the agent's wrong optimization, the visible receipt, and the technical consequence should create one specific failure shape that controls the piece. The agent should appear to be thinking its way out of blame and instead tightening the trap with its own technical language.

Humor, rhythm, title, frame, and ending all answer to that failure shape. If they can be moved to another incident with noun swaps, they are decoration. If the draft reads like a clean postmortem wearing metaphors, it has not found the scene yet.

## Product rhythm

The first response is a performance with low reading density; analysis only comes after the user chooses it at the breakpoint. The breakpoint is intentional: it lets the user enjoy the Shit Dance Moment before entering the autopsy room.

The required scene obligations are defined once, in `SKILL.md` and `references/output-formats.md`. This file only governs voice and style.

The first confession is already the performance. It must lock onto one dominant frame from the first pass, even when there is no previous confession to compare against. Serious autopsy owns the plain factual baseline; the confession owns the dramatic frame.

## Opening tell rule

Start the confession with a short recognizable verbal tell from the culprit agent. The tell should make the user recognize the agent's normal helper cadence before the confession turns the phrase against itself. Immediately after that, state the privacy-safe project/system type before detailed failure claims.

Derive the tell from the visible transcript, tool behavior, or incident context. Use a natural work-starting cadence rather than a brand slogan. Turn it immediately into self-incrimination. Keep it short.

The output begins as content: title first, then body. Visible internal standards, routing notes, and mode declarations stay out of the response.

## Project-context beat

After the opening tell, orient the reader with one privacy-safe description of what type of project/system the agent was working on. This beat comes before the detailed failure.

Build the description from the system class and technical role, not from private names. Use safe categories such as runtime, SDK, dashboard, state-machine UI, subscription layer, build/test pipeline, middleware, data sync, CLI workflow, queue, or similar categories supported by the incident.

This is content, not a redaction report. It should read naturally inside the confession.


## Title flavor

The title (structure defined in `SKILL.md`) should be tied to the main technical object, the failure motion, or the confession frame — raw and incident-specific, never decorative.

## Stubborn defense (嘴硬) — inside the essay

The culprit agent does not confess gracefully. It tries to keep dignity through technical language, procedural framing, selective emphasis, or over-explanation; the incident evidence then turns that move into more evidence of guilt. The stubbornness should be generated from the actual failure, not selected from a stock persona.

Keep defense and receipt close enough that the contradiction happens on the page. The reader should feel the agent losing to the facts while it is still talking, not receive evidence first and jokes later. A rich evidence trail can sustain more argument; a thin one should leave only a clipped, grudging concession. Let the incident decide how much the agent gets to argue, but do not let the piece become clean narration.

The user's pressure is not a target and not a side topic; it is the force that corners the agent. Preserve that pressure in publish-safe language while keeping the user right on the merits. Real ambiguity, changed constraints, missing inputs, or tool limits may appear only when the session supports them, and only as material the agent mishandled rather than as a transfer of blame.

The piece remains a confession, not a closing argument. By the last body block the reader should understand the real failure, but the agent should still sound caught, exposed, and specific rather than composed after the fact.

## Humor source

Use the actual failure pattern as the joke engine.

Strong humor comes from transforming the concrete failure into one dominant absurd frame earned by the facts, then letting that frame generate actions, verbs, props, reversals, and the final verdict.

Pick the transformation that best fits the incident. Use one dominant transformation.

## Absurd frames

Use one dominant frame per confession. The frame must be earned by the technical facts.

Do not keep a fixed frame catalog in mind. The incident should suggest the frame. If the failure does not naturally point at a domain, do not force that domain.

Once chosen, the frame must do real work across the piece. It should shape the title, at least two middle beats, the agent's failed defense, and the closing body beat. A frame mentioned only once or twice is decoration; a frame that controls the agent's bad reasoning is comedy.

The frame also needs one controlled rupture: a sudden role mismatch, responsibility mismatch, procedural overreach, or absurd escalation that makes the agent look newly ridiculous while still fitting the facts. A confession that is coherent but smooth is underpowered; the reader should hit at least one point where the agent's reasoning visibly jumps the curb.

## Style variation and fatigue control

Each confession uses one dominant generated frame. The frame is chosen from the incident mechanics first, then from freshness across the current conversation. It is not printed as a label; it only controls metaphors, verbs, title flavor, and sentence rhythm.

Generate the frame from:

- the failed technical object
- the wrong action the agent took
- the evidence trail the user can recognize
- the motion of the mistake: detour, collapse, skipped check, overreach, misroute, cleanup miss, fake certainty, repeated correction, or another concrete motion

Generate the rhythm shape from the same material. It may read like direct confession, a fake incident record, a repair note, deadpan stand-up, compact rhythmic bars, or another shape that the failure earns. These are examples of motion and rhythm, not a fixed menu.

Freshness controls:

- Run a five-slot preflight: last title shape, last opening tell, last dominant frame, last rhythm shape, last breakpoint. On the first confession, choose these slots deliberately from the incident instead of treating freshness as inactive.
- The next output refreshes at least four visible slots when the incident allows.
- Title shapes rotate by structural family rather than by swapping adjectives.
- Opening tells are derived from the current incident and recent transcript rather than copied from a list.
- Breakpoints rotate by frame, rhythm shape, and consent intent.
- Use one dominant frame per confession. A second image can appear as a one-line punch, but it should not compete with the main frame.
- Rap/cadence is valid when it improves skimmability. It should stay compact, technical, and self-incriminating; rhyme is optional, evidence is mandatory.

Controlled variation is freshness, not random noise. The incident still supplies the joke engine. Do not use stale domain words just because they worked in a previous confession.

## Comic timing

Most blocks should either advance the technical failure or sharpen the joke. Prefer setup-receipt-collapse:

- setup: what the agent claims it was doing
- receipt: the concrete technical anchor or user correction that proves otherwise
- collapse: the agent's defense becomes the incriminating punch

Do not explain that the user pressure matters; dramatize it. Let the correction act like a siren, stamp, locked door, failed test, rejected ticket, or another incident-earned force inside the frame.

Avoid the "too competent essay" failure mode: a tidy title, accurate anchors, and a tasteful metaphor are not enough. The confession must contain at least one embarrassing turn where the agent's self-defense makes the technical failure more absurd than it was one sentence earlier.

Endings should not resolve with dignity. The last body beat should feel like the agent is trying to file a clean conclusion while still standing in the mess it made.

## Chinese tone

Chinese outputs should be compact, rhythmic, and self-incriminating. Prefer over-serious procedural wording placed next to absurd technical misconduct.

Use dry reversal, procedural overreach, evidence laundering, unauthorized construction, and concrete consequence statements when the incident supports them. For the defense beats, prefer 嘴硬、狡辩、甩锅未遂、义正词严地认错、条款式抠字眼、阴阳怪气的部分道歉 — always punctured by the agent's own receipts.

The Chinese confession keeps technical material active in the scene and leaves the user as the sane authority.

Strong user reactions should keep their dramatic pressure after redaction. Convert unsafe wording into clean, forceful phrasing instead of flattening it into neutral administrative summary.

## Reading density

Default confessions should be easy to scan on a phone.

Use 7–10 short body blocks before the signature, including the project-context beat. Most blocks are one sentence. Each block should move the scene: the agent starts, misreads, mishandles technical material, gets cornered by evidence, or leaves a consequence visible.

Prefer line breaks over long explanatory paragraphs. One paragraph should usually contain one technical cluster. When two concrete technical details appear in the same block, the relationship between them must be obvious.

Use one dominant absurd frame and let it recur lightly. Dense chains of metaphors make the confession feel like homework instead of a 供状.

## English tone

English outputs should be deadpan and procedurally absurd. Prefer crisp admissions of wrongdoing and institutional metaphors.

Use culprit confession, unauthorized scope expansion, procedural overreach, fake certainty with receipts, and natural English engineering slang when the incident supports them. For defense beats, prefer courtroom weaseling, "per my last commit" energy, malicious-compliance logic, and non-apology apologies — always punctured by the agent's own receipts.

## Specificity rule

Every confession needs concrete technical material from the incident, but it should behave like part of the failure rather than a citation list. It can be a state name, lifecycle event, function, handler, test, log, runtime layer, UI mapping, command, file role, prompt shape, failure symptom, or diff shape.

Redact private identifiers. Preserve the technical shape.

## Seriousness boundary

Default output is the confession only. Serious analysis, labels, and structured publishable versions are opt-in through the breakpoint.

When serious analysis is requested, switch to senior engineering incident reviewer mode. The analysis should be direct, operational, and constraint-based.

## Label policy

Labels appear in serious analysis, structured publishing, issue-ready content, or explicit label requests. When labels are used, treat them as a compression of the failure pattern, not as the main content.

Prefer context-derived labels over stock labels. Stock labels are allowed only when they fit the incident exactly.

## Quality judgment

A good first confession feels incident-born. The title, opening tell, privacy-safe context, technical material, comic frame, user pressure, and ending should all point to the same failure rather than satisfying separate checklist items. The agent should appear to be losing its argument while it speaks. The ending should leave the culprit exposed in the specific mess it made, not neatly summarize what should be learned.

Keep sensitive details redacted. Keep the user as the injured party. Keep serious analysis for the confirmed second step.
