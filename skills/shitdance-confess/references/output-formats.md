# Output Formats

Structure only. Deliberately no sample phrasings, so the model does not mimic stale templates. The Contract and Default scene obligations in `SKILL.md` are authoritative; this file expands them.

## Default: Shit Dance confession

Use for normal `shitdance please` generation. Satisfy the Default scene obligations in `SKILL.md` without exposing them as a paragraph template.

The body must make these facts legible through scene motion: what the user needed, what the agent wrongly optimized for, which technical material exposes the gap, and what consequence or leftover mess proves the failure. Do not render these facts as a visible skeleton. Avoid repeated transition formulas, repeated "defense/evidence" labels, and reusable final-confession markers. For a batch of multiple confessions, each item needs its own narrative engine.

Constraints:

- Short body blocks, mostly one sentence each; each block carries one beat or one receipt. Simple incidents land in 7–10 blocks, complex ones may reach 12–14. Past 15 blocks the piece is probably better served by serious analysis.
- First-person agent voice ("我" / "I").
- One generated dominant frame and one rhythm shape control the flavor from the first output (see `references/style-guide.md`).
- At least one moment where the agent tries to save face and the incident evidence makes that attempt worse.
- If the draft is coherent and accurate but smooth — nothing makes the agent look newly ridiculous mid-piece — the frame is not doing enough work.
- The last body beat is caught and incident-specific; it may be a consequence, exposed action, failed last defense, or grudging concession, not a polished editorial summary.
- Repeated use runs the five-slot freshness preflight; at least four visible slots change.
- Exact model only when known from visible context.
- The final line is the breakpoint, and the breakpoint offers **three** actions: rewrite in a different style, serious analysis, or publishing preparation. Natural sentence, no numbered menu unless the user asks.

## Short confession card

Use when the user asks for a sharper or shorter version.

1. Plain title.
2. One compact first-person block containing: opening beat, privacy-safe project context, agent identity, user's request, misinterpretation, bad action, one technical anchor, and a concrete consequence when supported.
3. Compact agent/model signature.
4. The same three-action breakpoint.

## Style rewrite

Use when the user chooses rewrite at a breakpoint.

Same incident, same redaction, same concrete technical material, same signature discipline. New rhetorical form, new title shape, new opening move, and rhythm. The accessibility rule applies: the rewrite must pass the cover-the-code-spans test independently. No analysis, no publishing JSON. End with the three-action breakpoint again.

## Serious autopsy

Use after the user confirms the serious version.

1. Serious analysis title.
2. Real failure mode.
3. Model/reasoning failure.
4. Engineering/process failure.
5. Risk labels when useful — context-derived, treated as compression of the failure pattern, not the main content.
6. Next-time constraints — operational and enforceable (prompts, tests, code review, CI, rules files, workflow).
7. One final short question: prepare the redacted Moment for publishing, or stop here.

Use equivalent section names in the user's language. Generate issue submission content only after the user chooses publishing.

## Publishable Shit Dance Moment

A public Moment is a separate artifact from the default confession. Publishing is staged through preview, confirmation, and submission.

### Stage 1 — Preview

Build a publish preview from the original confession and incident facts. Before presenting the preview, run three checks:

1. **Redaction**: identifying project details, exact paths, internal endpoints, proprietary schema, sensitive business logic, and raw abusive wording are gone; failure mechanics and user pressure are preserved.
2. **Accessibility**: cover every code-formatted span with a blank and re-read the piece. If the comedy still lands through the frame metaphor, the piece travels to outside readers. If it reads as a list of opaque identifiers connected by metaphor fragments, revise: either translate the technical object's role through the frame, or cut the identifier and let the metaphor carry alone. Do not present a preview that fails this check.
3. **Schema**: map the body to the JSON submission schema below. Keep it close to the first-response confession in content, tone, comic timing, and dominant frame, but convert it into a clean public submission object. Public-safe does not mean sober, explanatory, or less funny. Map it **only** to the JSON submission schema in `schema/submission.schema.json`:

```json
{
  "body": "..."
}
```

Schema rules:

- Field names are always English. `body` is the required submission key. Optional fields are `title`, `agent`, `model`, `style`, and `tags`.
- Optional field rule: include an optional field only when the incident provides a real, specific value for it. A clean minimal preview with only `body` is valid.
- `title`: public title; value may be Chinese or English per the user's language. The importer can use the GitHub Issue title as a fallback.
- `agent`: culprit agent/tool name from visible context.
- `model`: exact model when known from visible context.
- `style`: how the body is written, not what went wrong. Generate it from the finished body when it adds useful metadata. A valid style label describes writing form and could fit a different incident written in the same form.
- `tags`: short, specific failure-pattern tags that add information beyond agent and model.
- `body`: one complete redacted confession-style body, close to the first output. Paragraph breaks encoded as `\n\n`; all public confession prose stays inside this field.
- Strip response-only framing from `body`: no compact signature, no `供述 Agent：`, no `Confessing agent:`, no `模型：`, no `Model:`, no breakpoint sentence, and no user-facing options. Put known agent/model/style/tags/title in their JSON fields instead.
- Preserve the performance inside `body`: keep the agent's self-incriminating voice, the dominant frame, the on-page loss to evidence, the user-pressure-as-action, and a punchy final body beat.
- Use only the schema fields. Submission datetime comes from the GitHub Issue `createdAt`.
- The issue template (`shitdance-moment.yml`) exposes one textarea; the parser reads this JSON object directly. This schema is pinned to the template as of 2026-07 — if a submission is rejected as unparseable, re-check the current template at the repository before retrying, and tell the user the template may have changed.

Ask the user to confirm the preview and whether to add or remove anything. Wait.

### Stage 2 — Submission

After explicit confirmation:

1. Check `command -v gh`, then `gh auth status` (or a repo read against `shitdance/shitdance.github.io`).
2. If `gh` is available and authenticated: create a GitHub issue in `shitdance/shitdance.github.io` with the single body field containing the JSON block, plus safe labels such as `moment:pending` and `source:issue` when permissions allow.
3. If `gh` is missing or unauthenticated: do not improvise another channel. Point the user to the Issue form at `https://github.com/shitdance/shitdance.github.io/issues/new?template=shitdance-moment.yml` and offer two paths: help install/configure `gh`, or provide the formatted issue content for manual paste.

### Stage 3 — Reporting

If the issue submission succeeds, report the issue URL. Creating the issue is **submission**; owner approval and the repository publish flow happen later.
