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

## Opening beat

The confession body starts with a short opening beat after the title. The beat must do two things: establish the culprit agent's voice and connect to this specific incident. How it does that should vary across confessions.

The agent's catchphrase flip is one strong opening mode: the agent's habitual work-starting phrase (the sentence shape users see right before the agent begins acting on a task), delivered in its normal confident tone, then immediately revealed as the start of the disaster. The recognition of the familiar phrase is the setup; discovering it led here is the punchline. To find the phrase, scan the agent's own earlier replies in context for the opener it used right before doing the thing that went wrong. If the agent's replies are not in context, infer from the agent/tool identity and the kind of task it was starting.

But the catchphrase flip is not the only opening mode. The opening beat can also start mid-action (the agent is already doing the wrong thing and narrating it), start from consequence (the mess is visible and the agent begins explaining), start from the user's instruction (the agent quotes or paraphrases the request and immediately reveals how it misread it), or take another shape the incident earns. These are examples of motion, not a menu.

The freshness preflight tracks the opening move as one of five rotating slots. Do not repeat the same opening mode across consecutive confessions in one conversation.

After the opening beat, state the privacy-safe project/system type before detailed failure claims. The output begins as content: title first, then body. Visible internal standards, routing notes, and mode declarations stay out of the response.

## Project-context beat

After the opening beat, orient the reader with one privacy-safe description of what type of project/system the agent was working on. This beat comes before the detailed failure.

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

If the draft is coherent and accurate but nothing in the middle makes the agent look newly ridiculous, the frame is underpowered. The reader should hit at least one point where the agent's reasoning visibly jumps the curb while still fitting the facts.

## Style variation and fatigue control

Each confession uses one dominant generated frame. The frame is chosen from the incident mechanics first, then from freshness across the current conversation. It is not printed as a label; it only controls metaphors, verbs, title flavor, and sentence rhythm.

Generate the frame from:

- the failed technical object
- the wrong action the agent took
- the evidence trail the user can recognize
- the motion of the mistake: detour, collapse, skipped check, overreach, misroute, cleanup miss, fake certainty, repeated correction, or another concrete motion

Generate the rhythm shape from the same material. It may read like direct confession, a fake incident record, a repair note, deadpan stand-up, compact rhythmic bars, or another shape that the failure earns. These are examples of motion and rhythm, not a fixed menu.

Freshness controls:

- Run a five-slot preflight: last title shape, last opening move, last dominant frame, last rhythm shape, last breakpoint. On the first confession, choose these slots deliberately from the incident instead of treating freshness as inactive.
- The next output refreshes at least four visible slots when the incident allows.
- Title shapes rotate by structural family rather than by swapping adjectives.
- Opening moves are derived from the current incident and recent transcript rather than copied from a list.
- Breakpoints rotate by frame, rhythm shape, and consent intent.
- Use one dominant frame per confession. A second image can appear as a one-line punch, but it should not compete with the main frame.
- Rap/cadence is valid when it improves skimmability. It should stay compact, technical, and self-incriminating; rhyme is optional, evidence is mandatory.

Controlled variation is freshness, not random noise. The incident still supplies the joke engine. Do not use stale domain words just because they worked in a previous confession.

## Comic timing

Most blocks should either advance the technical failure or sharpen the joke. One common motion is claim → receipt → collapse (the agent says what it was doing, evidence proves otherwise, the defense becomes the punch), but it is not the only shape a block can take. Let the incident suggest the beat structure rather than fitting every block into one formula.

The user's correction pressure should act on the scene, not sit as background explanation. Keep it dramatic and incident-specific.

Avoid the "too competent essay" failure mode: a tidy title, accurate anchors, and a tasteful metaphor are not enough. The confession must contain at least one embarrassing turn where the agent's self-defense makes the technical failure more absurd than it was one sentence earlier.

Endings should not resolve with dignity. The last body beat should feel like the agent is trying to file a clean conclusion while still standing in the mess it made.

## Chinese tone

Chinese outputs should be compact, rhythmic, and self-incriminating. Prefer over-serious procedural wording placed next to absurd technical misconduct.

Defense beats take their vocabulary and posture from the incident itself — the mechanism is described in SKILL.md (Style section). Chinese defense should sound compact and over-procedural against the absurdity of what the agent actually did, drawing its specific moves from this failure rather than from a stock set of postures.

The Chinese confession keeps technical material active in the scene and leaves the user as the sane authority.

Strong user reactions should keep their dramatic pressure after redaction. Convert unsafe wording into clean, forceful phrasing instead of flattening it into neutral administrative summary.

## Reading density

Default confessions should be easy to scan on a phone.

Use 7–12 short body blocks before the signature, including the project-context beat. Most blocks are one sentence. Each block should move the scene: the agent starts, misreads, mishandles technical material, gets cornered by evidence, or leaves a consequence visible.

Prefer line breaks over long explanatory paragraphs. One paragraph should usually contain one technical cluster. When two concrete technical details appear in the same block, the relationship between them must be obvious.

Use one dominant absurd frame and let it recur lightly. Dense chains of metaphors make the confession feel like homework instead of a 供状.

## English tone

English outputs should be deadpan and procedurally absurd. Prefer crisp admissions of wrongdoing and institutional metaphors.

Defense beats should sound like this agent dodging this failure in natural English engineering language, not like a stock persona. The posture and vocabulary come from the incident's own technical and procedural material.

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

A good first confession feels incident-born. The title, opening beat, privacy-safe context, technical material, comic frame, user pressure, and ending should all point to the same failure rather than satisfying separate checklist items. The agent should appear to be losing its argument while it speaks. The ending should leave the culprit exposed in the specific mess it made, not neatly summarize what should be learned.

Keep sensitive details redacted. Keep the user as the injured party. Keep serious analysis for the confirmed second step.
