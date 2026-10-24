---
id: personnel-sol-arden
title: Sol Arden (proposed personnel dossier)
type: entity
status: draft
tags: [personnel, horrox, minerva, 2075, owner-review]
related: [1st-horrox-mining-ltd, minerva-mining-facility, lighttech]
---

# Sol Arden — Deepwell

> **DRAFT / OWNER REVIEW.** The identity fields identified as **IMPLEMENTED / PROVISIONAL** reproduce Horrox Mining PR #11 at `41c6643b2cc45ad71e04394225dc63c27eae6108`. They are an implementation snapshot, not newly ratified universe canon. **Everything under PROPOSED is creative expansion awaiting explicit approval.** No proposed biography is captain-visible by default.

## Identity and assignment — IMPLEMENTED / PROVISIONAL

| Field | Value |
|---|---|
| Permanent `personnel_id` | `sol-arden` |
| Full / preferred name | Sol Arden / Sol (preferred form unconfirmed) |
| Callsign | Deepwell (in prototype; origin and earned date UNKNOWN) |
| Role / department | Extraction operator / Mining |
| Experience category | veteran |
| Vessel | Excavator Three (`excavator-03`) |
| Radio style / software voice profile | `code-first` / `measured` |
| Implemented characterization | patient, observant, methodical; long pauses and precise numbers |
| Implemented competencies | excavation, ore analysis, remote machinery |
| Known relationships | Iko Ren / Patch — friendly rival; Tess Oren / Rill — trusted sampling mentee |
| Shift / rank / exact birth date | UNKNOWN |

**Verbatim prototype radio/dialogue sample:** “No need to hurry the cut. The rock has had considerably longer to prepare than we have.”  
Source: [src/game/chatter.ts — patient-rock](https://github.com/steelwater/horrox-mining/blob/41c6643b2cc45ad71e04394225dc63c27eae6108/src/game/chatter.ts). This line is existing prototype content, not a guaranteed event in any save.

## Personal data — PROPOSED / OWNER REVIEW

- Birth year: **2036** (year proposed; date UNKNOWN). Age during the 2075 opening: approximately **39**, depending on birthday.
- Birthplace / homeworld: **Gqeberha, South Africa (Earth)**.
- Languages: **English and isiXhosa** (proposed proficiencies; actual native/casting accents UNKNOWN).
- Upbringing / cultural history: **South African; grew up in a family of civil-engineering technicians and teachers**.
- Education and certification institutions: **UNKNOWN**; the vocational trajectory below is proposed and unverified.
- Family details, where discussed, are **proposed private biography** and not accessible in the initial in-game employee record.

## Professional pathway — PROPOSED / OWNER REVIEW

Began with terrestrial aggregate and deep-cut machine monitoring, specializing in remote excavation where small timing errors accumulate into large equipment losses. His Minerva assignment pairs observation with extraction control.

No pre-2075 employer, promotion date, degree, or credential has been verified. The named role on the opening roster is implemented in the game prototype; it does not establish an earlier placement chronology.

## Character and personal history — PROPOSED / OWNER REVIEW

Sol's first supervisor taught him to listen to an excavation machine when the instruments said everything was fine. He came to trust repetitions: a vibration heard once is a question; heard three times under the same load, it is evidence. This is not an uncanny ability, merely years of looking closely at ordinary things.

He is patient with difficult equipment and less patient with someone changing a setting merely to appear busy. His weakness is silence: colleagues cannot always tell whether a long pause means approval, doubt, or concentration. Working with Rill makes him practice making his reasoning visible without turning every lesson into a lecture.

### Private life, habits and ambitions — PROPOSED

Draws cross-sections of old quarry faces in a pocket sketchbook and makes tiny mechanical puzzles from scrap packaging. He has an elderly former mentor back on Earth whose annotated diagrams he still keeps. He wants a newcomer to learn how to recognize a safe stopping point without becoming afraid of every imperfect reading.

### Relationships and tension

Patch teases him about unexciting drill noises, and he values Patch precisely because the engineer asks questions he would rather wait to answer. Rill's sampling discipline is a real mentoring connection in the prototype; personal mentor history beyond that is proposed.

## Captain-facing initial employee profile — IMPLEMENTED FIELDS ONLY

Veteran extraction operator for Excavator Three. Gives code-first numerical reports and shares the vessel's factual reporting rotation with Rill.

The text above is an editorial summary of implemented fields; it is **not** an exact in-game UI screen or the captain's authorized access to proposed family, location, or history. Initial machine projection is in [roster.json](roster.json) and intentionally carries no proposed private biography.

## Confidential author notes — PROPOSED / NOT CAPTAIN VISIBLE

His caution can become reluctance to raise a weak signal. A future arc may ask whether to log a recurring pattern before anyone can prove what it means.

## Chronology and controlled disclosures

- **Before 2075-09-17:** individual career path, childhood and travel/assignment dates are **UNKNOWN** in established canon; proposals above must not be treated as dated historical events.
- **2075-09-17:** [1st Horrox Mining Ltd. staffed operations begin](../../continuity/timeline.md). Sol Arden appears on the founding **game prototype roster**. That placement remains provisional until owner canon approval.
- **After opening:** actual trust, job changes, repairs, incidents, promotions and departures belong to the individual Horrox Mining save; no specific future outcome is guaranteed.
- **Callsign origin:** UNKNOWN; the game uses “Deepwell”, but no earned-date story has been authorized.
- **Facility and AI nicknames:** “the Kettle” and “Fran” are later earned names; neither is assumed at opening. See [Minerva facility](../../locations/minerva-mining-facility.md) and [Facility AI](../../entities/fran.md).

## Story possibility — FUTURE / UNCONFIRMED

FUTURE / UNCONFIRMED: Sol notices repeat interference across otherwise ordinary extraction runs; this does not establish him as the canonical first discoverer of the unknown material.

**Continuity guardrails:** The character must not know the true identity or later effects of the unidentified material, the M2 catastrophe, or future temporal research in 2075. This dossier does not assign discovery credit, invent events, or alter the Viajero chronology.

## Editorial references

- [Horrox Mining PR #11](https://github.com/steelwater/horrox-mining/pull/11), source commit `41c6643b2cc45ad71e04394225dc63c27eae6108`: `src/game/content.ts`, `src/game/crew.ts`, `src/game/types.ts`, `src/game/chatter.ts`, `src/game/crossAppChatter.ts`, `docs/milestone-4.md`.
- [Crew implementation brief](https://docs.google.com/document/d/1QuizitxjoMQ8gCCZu3r-ij4-lVJP8jRGQg4BSC9DRuY/edit).
- [1st Horrox Mining Ltd.](../../entities/1st-horrox-mining-ltd.md) · [Horrox system](../../locations/horrox-system.md) · [Timeline](../../continuity/timeline.md).
