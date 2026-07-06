#!/usr/bin/env python3
"""Heuristic sanitizer for Shit Dance Confess incident material.

Usage:
  python scripts/sanitize_incident.py input.txt --out sanitized.md

This script is intentionally conservative. It redacts likely secrets, emails,
URLs, local paths, private repo URLs, cloud identifiers, and common internal
resource names while preserving enough technical shape for a failure autopsy.
Always manually inspect the result before publishing.
"""

from __future__ import annotations

import argparse
import pathlib
import re
from dataclasses import dataclass


@dataclass(frozen=True)
class Rule:
    name: str
    pattern: re.Pattern[str]
    replacement: str


def compile_rules() -> list[Rule]:
    flags = re.IGNORECASE | re.MULTILINE
    return [
        Rule("private_key", re.compile(r"-----BEGIN [A-Z ]*PRIVATE KEY-----[\s\S]*?-----END [A-Z ]*PRIVATE KEY-----", flags), "[SECRET_PRIVATE_KEY]"),
        Rule("bearer", re.compile(r"\bBearer\s+[A-Za-z0-9._~+/=-]{16,}", flags), "Bearer [SECRET]"),
        Rule("api_key_assignment", re.compile(r"\b(api[_-]?key|token|secret|password|passwd|pwd|client[_-]?secret)\b\s*[:=]\s*['\"]?[^'\"\s]{8,}", flags), r"\1=[SECRET]"),
        Rule("jwt", re.compile(r"\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b"), "[SECRET_JWT]"),
        Rule("aws_access_key", re.compile(r"\bAKIA[0-9A-Z]{16}\b"), "[SECRET_AWS_KEY]"),
        Rule("slack_token", re.compile(r"\bxox[baprs]-[A-Za-z0-9-]{10,}\b"), "[SECRET_SLACK_TOKEN]"),
        Rule("github_token", re.compile(r"\bgh[pousr]_[A-Za-z0-9_]{20,}\b"), "[SECRET_GITHUB_TOKEN]"),
        Rule("email", re.compile(r"\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b", flags), "[EMAIL]"),
        Rule("private_url", re.compile(r"\bhttps?://[^\s)\]>'\"]+", flags), "[PRIVATE_URL]"),
        Rule("ssh_repo", re.compile(r"\bgit@[^:\s]+:[^\s]+\.git\b", flags), "[PRIVATE_REPO]"),
        Rule("local_unix_path", re.compile(r"(?<![A-Za-z0-9_])/(Users|home|var|opt|srv|workspace|private|tmp)/[^\s:'\")\]]+"), "[LOCAL_FILE_PATH]"),
        Rule("windows_path", re.compile(r"\b[A-Z]:\\\\[^\s:'\")\]]+", flags), "[LOCAL_FILE_PATH]"),
        Rule("ip_addr", re.compile(r"\b(?:\d{1,3}\.){3}\d{1,3}\b"), "[IP_ADDRESS]"),
        Rule("uuid", re.compile(r"\b[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}\b", flags), "[ID]"),
        Rule("long_hex", re.compile(r"\b[0-9a-f]{32,}\b", flags), "[HASH_OR_ID]"),
        Rule("s3", re.compile(r"\bs3://[^\s]+", flags), "[CLOUD_RESOURCE]"),
        Rule("db_table_hint", re.compile(r"\b(from|join|update|into)\s+([a-zA-Z_][a-zA-Z0-9_]*\.)?[a-zA-Z_][a-zA-Z0-9_]{2,}\b", flags), r"\1 [DATABASE_TABLE]"),
        Rule("internal_api_path", re.compile(r"\b/(api|internal|admin|v[0-9])/[A-Za-z0-9_./{}:-]+", flags), "[INTERNAL_API]"),
        Rule("issue_ids", re.compile(r"\b([A-Z][A-Z0-9]{1,8}-\d{1,8}|#[0-9]{2,})\b"), "[ISSUE_ID]"),
    ]


def sanitize(text: str) -> tuple[str, list[str]]:
    applied: list[str] = []
    sanitized = text
    for rule in compile_rules():
        sanitized, count = rule.pattern.subn(rule.replacement, sanitized)
        if count:
            applied.append(f"{rule.name}:{count}")
    # Collapse excessive blank lines introduced by redaction.
    sanitized = re.sub(r"\n{4,}", "\n\n\n", sanitized)
    return sanitized.strip() + "\n", applied


def main() -> int:
    parser = argparse.ArgumentParser(description="Sanitize coding-agent incident material for Shit Dance Confess.")
    parser.add_argument("input", help="Input text/markdown/log file")
    parser.add_argument("--out", default="sanitized.md", help="Output file path")
    args = parser.parse_args()

    input_path = pathlib.Path(args.input)
    output_path = pathlib.Path(args.out)
    raw = input_path.read_text(encoding="utf-8", errors="replace")
    sanitized, applied = sanitize(raw)

    header = "# Sanitized Incident\n\n"
    header += "脱敏说明：本文件由启发式脚本生成，发布前仍需人工复核。\n\n"
    if applied:
        header += "Applied rules: " + ", ".join(applied) + "\n\n---\n\n"
    else:
        header += "Applied rules: none\n\n---\n\n"

    output_path.write_text(header + sanitized, encoding="utf-8")
    print(f"Wrote {output_path}")
    if applied:
        print("Applied rules:", ", ".join(applied))
    else:
        print("Applied rules: none")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
