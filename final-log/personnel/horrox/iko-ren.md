---
id: personnel-iko-ren
title: Iko Ren (proposed personnel dossier)
type: entity
status: draft
tags: [personnel, horrox, minerva, 2075, owner-review]
related: [1st-horrox-mining-ltd, minerva-mining-facility, lighttech]
---

# Iko Ren — Patch

> **DRAFT / OWNER REVIEW.** The identity fields identified as **IMPLEMENTED / PROVISIONAL** reproduce Horrox Mining PR #11 at `41c6643b2cc45ad71e04394225dc63c27eae6108`. They are an implementation snapshot, not newly ratified universe canon. **Everything under PROPOSED is creative expansion awaiting explicit approval.** No proposed biography is captain-visible by default.

## Identity and assignment — IMPLEMENTED / PROVISIONAL

| Field | Value |
|---|---|
| Permanent `personnel_id` | `iko-ren` |
| Full / preferred name | Iko Ren / Iko (preferred form unconfirmed) |
| Callsign | Patch (in prototype; origin and earned date UNKNOWN) |
| Role / department | Maintenance engineer / Maintenance |
| Experience category | established |
| Vessel | None |
| Radio style / software voice profile | `conversational` / `bright` |
| Implemented characterization | curious, ingenious, talkative; thinks aloud and names tools |
| Implemented competencies | sensor repair, coolant systems, fabrication |
| Known relationships | Mara Vale / Latch — trusted shift partner; Sol Arden / Deepwell — friendly rival |
| Shift / rank / exact birth date | UNKNOWN |

**Verbatim prototype radio/dialogue sample:** “I found the missing torque driver. It was in the box labeled torque drivers.”  
Source: [src/game/chatter.ts — torque-driver](https://github.com/steelwater/horrox-mining/blob/41c6643b2cc45ad71e04394225dc63c27eae6108/src/game/chatter.ts). This line is existing prototype content, not a guaranteed event in any save.

## Personal data — PROPOSED / OWNER REVIEW

- Birth year: **2044** (year proposed; date UNKNOWN). Age during the 2075 opening: approximately **31**, depending on birthday.
- Birthplace / homeworld: **Kobe, Japan (Earth)**.
- Languages: **Japanese and English** (proposed proficiencies; actual native/casting accents UNKNOWN).
- Upbringing / cultural history: **Japanese; raised among municipal repair workshops and neighborhood fabrication clubs**.
- Education and certification institutions: **UNKNOWN**; the vocational trajectory below is proposed and unverified.
- Family details, where discussed, are **proposed private biography** and not accessible in the initial in-game employee record.

## Professional pathway — PROPOSED / OWNER REVIEW

Started in facilities instrumentation and coolant-monitor calibration, moved into remote diagnostics and component fabrication, and qualified for closed-environment maintenance before assignment to Minerva.

No pre-2075 employer, promotion date, degree, or credential has been verified. The named role on the opening roster is implemented in the game prototype; it does not establish an earlier placement chronology.

## Character and personal history — PROPOSED / OWNER REVIEW

Iko began fixing the discarded machines in a neighborhood workshop because broken devices made better questions than intact ones. A repair is not complete for Patch until the cause is intelligible enough to explain to the next person. On Minerva that habit makes the engineer generous with knowledge—and occasionally exhausting on the radio.

Iko is brilliant at finding a simple physical cause behind a complicated readout but can become too attached to an elegant hypothesis. When a repair stubbornly produces an ordinary explanation, Patch has to resist making the diagnosis more interesting than the fault. Being right matters less than keeping people safe; remembering that while curious is the challenge.

### Private life, habits and ambitions — PROPOSED

Keeps a private notebook of elegantly terrible machine labels and mails simplified repair cartoons to a niece on Earth. The engineer hopes to design systems whose manuals teach maintenance rather than merely authorize it. Long pauses in a maintenance bay are uncomfortable; in a true emergency, however, Patch knows to stop talking.

### Relationships and tension

Latch provides the orderly boundary within which Patch can experiment. Deepwell provides the counterargument: observe the whole cycle before touching the sensor. Their friendly rivalry is in current code; any specific wager, contest or past repair story remains proposed.

## Captain-facing initial employee profile — IMPLEMENTED FIELDS ONLY

Experienced in sensor, coolant and fabrication work; reports in conversational, often explanatory radio messages.

The text above is an editorial summary of implemented fields; it is **not** an exact in-game UI screen or the captain's authorized access to proposed family, location, or history. Initial machine projection is in [roster.json](roster.json) and intentionally carries no proposed private biography.

## Confidential author notes — PROPOSED / NOT CAPTAIN VISIBLE

Can mistake an unanswered question for permission to investigate. Proposed character development is to know when a careful handoff is more valuable than personally solving the fault.

## Chronology and controlled disclosures

- **Before 2075-09-17:** individual career path, childhood and travel/assignment dates are **UNKNOWN** in established canon; proposals above must not be treated as dated historical events.
- **2075-09-17:** [1st Horrox Mining Ltd. staffed operations begin](../../continuity/timeline.md). Iko Ren appears on the founding **game prototype roster**. That placement remains provisional until owner canon approval.
- **After opening:** actual trust, job changes, repairs, incidents, promotions and departures belong to the individual Horrox Mining save; no specific future outcome is guaranteed.
- **Callsign origin:** UNKNOWN; the game uses “Patch”, but no earned-date story has been authorized.
- **Facility and AI nicknames:** “the Kettle” and “Fran” are later earned names; neither is assumed at opening. See [Minerva facility](../../locations/minerva-mining-facility.md) and [Facility AI](../../entities/fran.md).

## Story possibility — FUTURE / UNCONFIRMED

FUTURE / UNCONFIRMED: multiple routine sensor reports fail to match an expected calibration pattern. Do not treat this as discovery of an unknown mineral or assign Patch that discovery.

**Continuity guardrails:** The character must not know the true identity or later effects of the unidentified material, the M2 catastrophe, or future temporal research in 2075. This dossier does not assign discovery credit, invent events, or alter the Viajero chronology.

## Editorial references

- [Horrox Mining PR #11](https://github.com/steelwater/horrox-mining/pull/11), source commit `41c6643b2cc45ad71e04394225dc63c27eae6108`: `src/game/content.ts`, `src/game/crew.ts`, `src/game/types.ts`, `src/game/chatter.ts`, `src/game/crossAppChatter.ts`, `docs/milestone-4.md`.
- [Crew implementation brief](https://docs.google.com/document/d/1QuizitxjoMQ8gCCZu3r-ij4-lVJP8jRGQg4BSC9DRuY/edit).
- [1st Horrox Mining Ltd.](../../entities/1st-horrox-mining-ltd.md) · [Horrox system](../../locations/horrox-system.md) · [Timeline](../../continuity/timeline.md).
