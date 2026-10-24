---
id: personnel-oren-dax
title: Oren Dax (proposed personnel dossier)
type: entity
status: draft
tags: [personnel, horrox, minerva, 2075, owner-review]
related: [1st-horrox-mining-ltd, minerva-mining-facility, lighttech]
---

# Oren Dax — Keel

> **DRAFT / OWNER REVIEW.** The identity fields identified as **IMPLEMENTED / PROVISIONAL** reproduce Horrox Mining PR #11 at `41c6643b2cc45ad71e04394225dc63c27eae6108`. They are an implementation snapshot, not newly ratified universe canon. **Everything under PROPOSED is creative expansion awaiting explicit approval.** No proposed biography is captain-visible by default.

## Identity and assignment — IMPLEMENTED / PROVISIONAL

| Field | Value |
|---|---|
| Permanent `personnel_id` | `oren-dax` |
| Full / preferred name | Oren Dax / Oren (preferred form unconfirmed) |
| Callsign | Keel (in prototype; origin and earned date UNKNOWN) |
| Role / department | Transport pilot / Transport |
| Experience category | veteran |
| Vessel | Hauler Two (`hauler-02`) |
| Radio style / software voice profile | `code-first` / `measured` |
| Implemented characterization | practical navigation specialist; code-first |
| Implemented competencies | transport navigation; proposed: approach plotting and fuel-margin reconciliation |
| Known relationships | No named coworker relationship established in PR #11 |
| Shift / rank / exact birth date | UNKNOWN |

**Verbatim prototype radio/dialogue sample:** “It says C.A.R.L. Simulator. Catacombs Adventure Rogue-Like?”  
Source: [src/game/crossAppChatter.ts — RL-02 (existing authored dialogue)](https://github.com/steelwater/horrox-mining/blob/41c6643b2cc45ad71e04394225dc63c27eae6108/src/game/crossAppChatter.ts). This line is existing prototype content, not a guaranteed event in any save.

## Personal data — PROPOSED / OWNER REVIEW

- Birth year: **2035** (year proposed; date UNKNOWN). Age during the 2075 opening: approximately **40**, depending on birthday.
- Birthplace / homeworld: **An early Mars settlement (specific settlement UNKNOWN)**.
- Languages: **English and Portuguese** (proposed proficiencies; actual native/casting accents UNKNOWN).
- Upbringing / cultural history: **Mars-born; one parent from Porto, Portugal, with family ties maintained by delayed recordings**.
- Education and certification institutions: **UNKNOWN**; the vocational trajectory below is proposed and unverified.
- Family details, where discussed, are **proposed private biography** and not accessible in the initial in-game employee record.

## Professional pathway — PROPOSED / OWNER REVIEW

Grew up around cargo-handling windows and transfer schedules on Mars, then trained in navigational margin planning and cargo transfer routes. Oren qualified to pilot Hauler Two, accepting a job where saying 'not yet' is occasionally the most useful command.

No pre-2075 employer, promotion date, degree, or credential has been verified. The named role on the opening roster is implemented in the game prototype; it does not establish an earlier placement chronology.

## Character and personal history — PROPOSED / OWNER REVIEW

For Oren, a route is never just a line on a screen. It is a chain of choices made before anyone sees the destination: reserve margins, conditions for abort, and the last safe place to turn around. Having grown up where supply windows governed ordinary family life, he wants transport to be reliable enough that people need not talk about it.

He is a practical pilot, but practicality can sound like emotional distance. Oren may calculate exactly when a colleague should expect a shipment while overlooking that the colleague first needs to hear that a delayed arrival is not their fault. He is more curious than he lets on; old software puzzles can hold his attention between duties.

### Private life, habits and ambitions — PROPOSED

Keeps paper route sketches from training flights and copies short phrases from messages his relatives recorded on Earth. He would like to visit Porto one day, although he is reluctant to make a promise about a voyage he cannot schedule.

### Relationships and tension

Latch and Keel share Hauler Two operational context without a documented personal friendship in the existing prototype. PROPOSED: Oren values Mara's formal clearance discipline but dislikes waiting for a confirmation he believes already clear. This is not an established conflict.

## Captain-facing initial employee profile — IMPLEMENTED FIELDS ONLY

Veteran transport pilot of Hauler Two; precise, code-first reports on navigation and approach readiness.

The text above is an editorial summary of implemented fields; it is **not** an exact in-game UI screen or the captain's authorized access to proposed family, location, or history. Initial machine projection is in [roster.json](roster.json) and intentionally carries no proposed private biography.

## Confidential author notes — PROPOSED / NOT CAPTAIN VISIBLE

Tends to offer solutions before acknowledging feelings. A future arc may force him to explain a delay to people rather than merely report revised arrival parameters.

## Chronology and controlled disclosures

- **Before 2075-09-17:** individual career path, childhood and travel/assignment dates are **UNKNOWN** in established canon; proposals above must not be treated as dated historical events.
- **2075-09-17:** [1st Horrox Mining Ltd. staffed operations begin](../../continuity/timeline.md). Oren Dax appears on the founding **game prototype roster**. That placement remains provisional until owner canon approval.
- **After opening:** actual trust, job changes, repairs, incidents, promotions and departures belong to the individual Horrox Mining save; no specific future outcome is guaranteed.
- **Callsign origin:** UNKNOWN; the game uses “Keel”, but no earned-date story has been authorized.
- **Facility and AI nicknames:** “the Kettle” and “Fran” are later earned names; neither is assumed at opening. See [Minerva facility](../../locations/minerva-mining-facility.md) and [Facility AI](../../entities/fran.md).

## Story possibility — FUTURE / UNCONFIRMED

FUTURE / UNCONFIRMED: a route alteration strains supply commitments but stays inside established safety limits. No new ship or unlogged disaster is introduced.

**Continuity guardrails:** The character must not know the true identity or later effects of the unidentified material, the M2 catastrophe, or future temporal research in 2075. This dossier does not assign discovery credit, invent events, or alter the Viajero chronology.

## Editorial references

- [Horrox Mining PR #11](https://github.com/steelwater/horrox-mining/pull/11), source commit `41c6643b2cc45ad71e04394225dc63c27eae6108`: `src/game/content.ts`, `src/game/crew.ts`, `src/game/types.ts`, `src/game/chatter.ts`, `src/game/crossAppChatter.ts`, `docs/milestone-4.md`.
- [Crew implementation brief](https://docs.google.com/document/d/1QuizitxjoMQ8gCCZu3r-ij4-lVJP8jRGQg4BSC9DRuY/edit).
- [1st Horrox Mining Ltd.](../../entities/1st-horrox-mining-ltd.md) · [Horrox system](../../locations/horrox-system.md) · [Timeline](../../continuity/timeline.md).
