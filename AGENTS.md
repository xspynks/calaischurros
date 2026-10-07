# Agent notes

## Agent skills

### Issue tracker

Issues and specs for this repo live as markdown files in `.scratch/`. See `docs/agents/issue-tracker.md`.

### Domain docs

Single-context. The glossary is `GLOSSARY.md` at the repo root, and ADRs live in `docs/adr/`. See `docs/agents/domain.md`.

## Promo experiences

The MVP spec is `.scratch/promo-experiences/spec.md`. Tickets are one file each under `.scratch/promo-experiences/issues/`, numbered in dependency order. Use the glossary's words in issues, tests, and UI copy decisions. Read the ADRs before choosing a framework, a test boundary, or a new Template.

The frontier is the lowest-numbered ticket whose blockers are still open nowhere: start at `01` while it is open. Finish a ticket through the HTTP API described in the spec before starting a ticket it blocks.
