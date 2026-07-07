# Redaction Rules

## Goal

Remove project-identifying information, sensitive business detail, and unsafe user wording while preserving the shape and pressure of the agent failure.

A good redaction lets readers understand the kind of system and the failure pattern without learning what the user is building, who it affects, or what private business logic it contains. The confession should name the privacy-safe project/system type before detailed failure claims.

Prefer semantic redaction over crude placeholder redaction in user-facing prose.

The bundled script is only a heuristic pre-pass for pattern-shaped secrets and identifiers. The agent writing the confession is responsible for semantic redaction, business abstraction, and publish-safe paraphrase in the final prose.

## Always redact

- Secrets: API keys, tokens, cookies, private keys, session IDs, OAuth codes, passwords
- Internal domains and URLs
- Private repo names and organization names
- Customer names, user emails, phone numbers, addresses
- Employee names
- Exact database table names when they reveal product logic
- Exact API routes when they reveal product logic
- Proprietary feature names
- Business workflows, product rules, customer behavior, or monetization logic when the details are not required to understand the agent failure
- Local file paths containing user, company, project, or repo names
- Ticket IDs, issue URLs, Slack/Linear/Notion/GitHub private links
- Text visible in screenshots: treat readable text in images as transcript material subject to the same redaction rules
- Legal, finance, healthcare, identity, or compliance data
- Raw user profanity, insults, slurs, or personally abusive wording copied from the transcript

## Usually redact

- Component names that expose unreleased product concepts
- Environment names if unique
- Cloud account IDs, bucket names, queue names, cluster names
- Commit hashes when tied to private repos
- Log correlation IDs
- Exact error payloads if they include internal schema
- User venting when direct quotation would turn a technical confession into a public transcript of anger rather than evidence of the agent failure

## Preserve

- General stack category
- Failure mechanics
- Approximate file role
- Diff shape
- Test result class
- Runtime layer or lifecycle boundary when not identifying
- State names and event types when they are generic enough to preserve the technical shape
- The user's correction pressure, pacing, impatience, disbelief, and escalation when they are part of the incident

## Semantic aliases

For the generated confession, replace identifying product/project names with neutral role descriptions instead of raw placeholders whenever possible. Use that neutral role description as the early project-context beat.

Construct the alias from the system class and technical role. Choose the narrowest safe alias supported by the incident. If the category itself is sensitive or proprietary, use a broader alias.

Use bracket placeholders for exact secrets, URLs, paths, customers, people, accounts, tickets, and proprietary business logic.

## User profanity and insults

Redact unsafe wording, not dramatic force. Preserve the user's correction pressure, pacing, impatience, disbelief, and escalation when they are part of the evidence trail. Convert unsafe wording into publish-safe language with equivalent force and rhythm.

The user's pressure is evidence, not noise. Keep the confession funny and alive after redaction; privacy safety must not turn the piece into a neutral incident memo. The joke remains the agent's failure under pressure.

## Business-detail abstraction

When writing the confession, abstract business objects and product flows before quoting or paraphrasing them. Preserve the technical failure, not the private business plan.

Use a semantic role description when it preserves the failure boundary. Use bracket placeholders for exact identifiers when the raw value itself is sensitive or identifying.

## Placeholder map

| Raw category | Placeholder |
|---|---|
| Product/project name | semantic alias derived from system class and technical role |
| Private repository | `[PRIVATE_REPO]` |
| Company/org | `[COMPANY_NAME]` |
| Customer | `[CUSTOMER_NAME]` |
| Person | `[PERSON_NAME]` |
| Email | `[EMAIL]` |
| Token/secret | `[SECRET]` |
| Internal endpoint | `[INTERNAL_API]` |
| Private URL | `[PRIVATE_URL]` |
| Local path | `[LOCAL_FILE_PATH]` |
| Database table | `[DATABASE_TABLE]` |
| Proprietary logic | `[BUSINESS_LOGIC]` |
| Issue/ticket | `[ISSUE_ID]` |
| Cloud bucket/account | `[CLOUD_RESOURCE]` |

## Heuristic pre-pass (optional, shell environments)

When the incident material arrives as a file or a long raw paste and a shell is available, run the bundled script first, then do a manual semantic pass:

```
python scripts/sanitize_incident.py incident.txt --out sanitized.md
```

The script only catches pattern-shaped secrets (keys, tokens, emails, URLs, paths, IDs). It cannot recognize proprietary product names, unreleased feature names, or sensitive business logic — those require the semantic-alias pass above. Never treat script output as publish-ready.

## Internal privacy check

Before preparing a publishable issue, verify internally that identifying project details, exact paths, internal endpoints, proprietary schema, and sensitive business logic were replaced while preserving the agent failure pattern, change boundary, and validation gap.

Do not add a separate redaction-note field to the publishable Shit Dance Moment. Public submission uses only the JSON submission schema defined in `schema/submission.schema.json` (`body`, with optional `title`, `agent`, `model`, `style`, and `tags`). Privacy is handled by redacting the content before preview and getting explicit user confirmation before submission.
