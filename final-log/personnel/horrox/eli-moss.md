---
id: personnel-eli-moss
title: Eli Moss (proposed personnel dossier)
type: entity
status: draft
tags: [personnel, horrox, minerva, 2075, owner-review]
related: [1st-horrox-mining-ltd, minerva-mining-facility, lighttech]
---

# Eli Moss — Ledger

> **DRAFT / OWNER REVIEW.** The identity fields identified as **IMPLEMENTED / PROVISIONAL** reproduce Horrox Mining PR #11 at `41c6643b2cc45ad71e04394225dc63c27eae6108`. They are an implementation snapshot, not newly ratified universe canon. **Everything under PROPOSED is creative expansion awaiting explicit approval.** No proposed biography is captain-visible by default.

## Identity and assignment — IMPLEMENTED / PROVISIONAL

| Field | Value |
|---|---|
| Permanent `personnel_id` | `eli-moss` |
| Full / preferred name | Eli Moss / Eli (preferred form unconfirmed) |
| Callsign | Ledger (in prototype; origin and earned date UNKNOWN) |
| Role / department | Storage custodian / Storage |
| Experience category | established |
| Vessel | None |
| Radio style / software voice profile | `plain-first` / `measured` |
| Implemented characterization | careful inventory specialist; plain-first reporting |
| Implemented competencies | inventory; proposed: chain-of-custody reconciliation and container audits |
| Known relationships | No named coworker relationship established in PR #11 |
| Shift / rank / exact birth date | UNKNOWN |

**Verbatim prototype radio/dialogue sample:** “One entry at a time.”  
Source: [src/game/crew.ts — phrase bank (existing prototype line)](https://github.com/steelwater/horrox-mining/blob/41c6643b2cc45ad71e04394225dc63c27eae6108/src/game/crew.ts). This line is existing prototype content, not a guaranteed event in any save.

## Personal data — PROPOSED / OWNER REVIEW

- Birth year: **2043** (year proposed; date UNKNOWN). Age during the 2075 opening: approximately **32**, depending on birthday.
- Birthplace / homeworld: **Montréal, Canada (Earth)**.
- Languages: **French and English** (proposed proficiencies; actual native/casting accents UNKNOWN).
- Upbringing / cultural history: **Canadian; grew up in a bilingual household among booksellers and logistics workers**.
- Education and certification institutions: **UNKNOWN**; the vocational trajectory below is proposed and unverified.
- Family details, where discussed, are **proposed private biography** and not accessible in the initial in-game employee record.

## Professional pathway — PROPOSED / OWNER REVIEW

Entered supply reconciliation through terrestrial warehouse auditing and later trained on closed-loop off-world storage accounting. Eli knows that material can be physically safe yet operationally lost when its paperwork stops matching its container.

No pre-2075 employer, promotion date, degree, or credential has been verified. The named role on the opening roster is implemented in the game prototype; it does not establish an earlier placement chronology.

## Character and personal history — PROPOSED / OWNER REVIEW

Eli regards inventory as a series of promises made to people not present: the next operator, the next hauler, the person looking for a missing part during an emergency. Ledger is calm with numbers and uneasy with undocumented favors. A short-lived missing-pallet scare during training taught Eli that a clearly corrected mistake is preferable to an immaculate but false count.

Careful does not mean timid. Eli will interrupt a superior to ask which container is being moved, then apologize for the interruption after it is answered. The drawback is a habit of treating a colleague's rough estimate like a formal record when the conversation was never intended to be one.

### Private life, habits and ambitions — PROPOSED

Collects the sounds of places—doors, tool drawers, air systems—on a small personal recorder, hoping to remember an ordinary day after years of transfers. Has a sibling who runs a community library on Earth and occasionally requests obscure reading material.

### Relationships and tension

PROPOSED: Eli and Crate can disagree over whether a labeled load is ready to move; their friction should remain about traceability versus throughput, not fabricated sabotage or incompetence.

## Captain-facing initial employee profile — IMPLEMENTED FIELDS ONLY

Keeps storage counts and container histories in order; values accurate, short, plain reports.

The text above is an editorial summary of implemented fields; it is **not** an exact in-game UI screen or the captain's authorized access to proposed family, location, or history. Initial machine projection is in [roster.json](roster.json) and intentionally carries no proposed private biography.

## Confidential author notes — PROPOSED / NOT CAPTAIN VISIBLE

Rigid about records when stressed. A future arc could ask Eli to design a safe temporary workaround rather than merely decline an undocumented move.

## Chronology and controlled disclosures

- **Before 2075-09-17:** individual career path, childhood and travel/assignment dates are **UNKNOWN** in established canon; proposals above must not be treated as dated historical events.
- **2075-09-17:** [1st Horrox Mining Ltd. staffed operations begin](../../continuity/timeline.md). Eli Moss appears on the founding **game prototype roster**. That placement remains provisional until owner canon approval.
- **After opening:** actual trust, job changes, repairs, incidents, promotions and departures belong to the individual Horrox Mining save; no specific future outcome is guaranteed.
- **Callsign origin:** UNKNOWN; the game uses “Ledger”, but no earned-date story has been authorized.
- **Facility and AI nicknames:** “the Kettle” and “Fran” are later earned names; neither is assumed at opening. See [Minerva facility](../../locations/minerva-mining-facility.md) and [Facility AI](../../entities/fran.md).

## Story possibility — FUTURE / UNCONFIRMED

FUTURE / UNCONFIRMED: an inventory mismatch turns out to be a timing issue between logged and physical transfers. No safety event is automatically inserted.

**Continuity guardrails:** The character must not know the true identity or later effects of the unidentified material, the M2 catastrophe, or future temporal research in 2075. This dossier does not assign discovery credit, invent events, or alter the Viajero chronology.

## Editorial references

- [Horrox Mining PR #11](https://github.com/steelwater/horrox-mining/pull/11), source commit `41c6643b2cc45ad71e04394225dc63c27eae6108`: `src/game/content.ts`, `src/game/crew.ts`, `src/game/types.ts`, `src/game/chatter.ts`, `src/game/crossAppChatter.ts`, `docs/milestone-4.md`.
- [Crew implementation brief](https://docs.google.com/document/d/1QuizitxjoMQ8gCCZu3r-ij4-lVJP8jRGQg4BSC9DRuY/edit).
- [1st Horrox Mining Ltd.](../../entities/1st-horrox-mining-ltd.md) · [Horrox system](../../locations/horrox-system.md) · [Timeline](../../continuity/timeline.md).
