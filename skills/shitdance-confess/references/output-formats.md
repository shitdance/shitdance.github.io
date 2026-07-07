# Output Formats

Structure only. Deliberately no sample phrasings, so the model does not mimic stale templates. The Contract and Default output order in `SKILL.md` are authoritative; this file expands them.

## Default: Shit Dance confession

Use for normal `shitdance please` generation. Follow the Default output order in `SKILL.md` exactly:

title → blank line → opening tell → sanitized project context → user request → distorted interpretation → misconduct with receipts and the agent's self-serving objections woven in (each losing to its own evidence; no fixed count) → grudging admission with supported consequence → signature → breakpoint.

Constraints:

- 7–12 short body blocks, mostly one sentence each; each block carries one beat or one receipt.
- First-person agent voice ("我" / "I").
- One generated frame and one rhythm shape control the flavor (see `references/style-guide.md`).
- Repeated use runs the five-slot freshness preflight; at least four visible slots change.
- Exact model only when known from visible context.
- The final line is the breakpoint, and the breakpoint offers **three** actions: rewrite in a different style, serious analysis, or publishing preparation. Natural sentence, no numbered menu unless the user asks.

## Short confession card

Use when the user asks for a sharper or shorter version.

1. Plain title.
2. One compact first-person block containing: opening tell, privacy-safe project context, agent identity, user's request, misinterpretation, bad action, one technical anchor, and a concrete consequence when supported.
3. Compact agent/model signature.
4. The same three-action breakpoint.

## Style rewrite

Use when the user chooses rewrite at a breakpoint.

Same incident, same redaction, same technical anchors, same signature discipline. New rhetorical form, new title shape, new opening tell, new rhythm. No analysis, no publishing JSON. End with the three-action breakpoint again.

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

Build a publish preview from the original confession and incident facts. Keep it close to the first-response confession in content and tone, minus signature-only details that do not belong in a public issue. Map it **only** to the JSON submission schema in `schema/submission.schema.json`:

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
- `body`: one complete redacted confession-style body, close to the first output. Paragraph breaks encoded as `\n\n`; all public prose stays inside this field.
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
