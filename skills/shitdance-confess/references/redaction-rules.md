# Redaction Rules

## Goal

Remove project-identifying information while preserving the shape of the agent failure.

A good redaction lets readers understand the kind of system and the failure pattern without learning what the user is building. The confession should name the privacy-safe project/system type before detailed failure claims.

Prefer semantic redaction over crude placeholder redaction in user-facing prose.

## Always redact

- Secrets: API keys, tokens, cookies, private keys, session IDs, OAuth codes, passwords
- Internal domains and URLs
- Private repo names and organization names
- Customer names, user emails, phone numbers, addresses
- Employee names
- Exact database table names when they reveal product logic
- Exact API routes when they reveal product logic
- Proprietary feature names
- Local file paths containing user, company, project, or repo names
- Ticket IDs, issue URLs, Slack/Linear/Notion/GitHub private links
- Legal, finance, healthcare, identity, or compliance data

## Usually redact

- Component names that expose unreleased product concepts
- Environment names if unique
- Cloud account IDs, bucket names, queue names, cluster names
- Commit hashes when tied to private repos
- Log correlation IDs
- Exact error payloads if they include internal schema

## Preserve

- General stack category
- Failure mechanics
- Approximate file role
- Diff shape
- Test result class
- Runtime layer or lifecycle boundary when not identifying
- State names and event types when they are generic enough to preserve the technical shape

## Semantic aliases

For the generated confession, replace identifying product/project names with neutral role descriptions instead of raw placeholders whenever possible. Use that neutral role description as the early project-context beat.

Construct the alias from the system class and technical role. Choose the narrowest safe alias supported by the incident. If the category itself is sensitive or proprietary, use a broader alias.

Use bracket placeholders for exact secrets, URLs, paths, customers, people, accounts, tickets, and proprietary business logic.

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

## Internal privacy check

Before preparing a publishable issue, verify internally that identifying project details, exact paths, internal endpoints, proprietary schema, and sensitive business logic were replaced while preserving the agent failure pattern, change boundary, and validation gap.

Do not add a separate redaction-note field to the publishable Shit Dance Moment. Public submission uses the Issue template fields only, including the required `发布确认` checkbox wording.
