---
id: personnel-tess-oren
title: Tess Oren (proposed personnel dossier)
type: entity
status: draft
tags: [personnel, horrox, minerva, 2075, owner-review]
related: [1st-horrox-mining-ltd, minerva-mining-facility, lighttech]
---

# Tess Oren — Rill

> **DRAFT / OWNER REVIEW.** The identity fields identified as **IMPLEMENTED / PROVISIONAL** reproduce Horrox Mining PR #11 at `41c6643b2cc45ad71e04394225dc63c27eae6108`. They are an implementation snapshot, not newly ratified universe canon. **Everything under PROPOSED is creative expansion awaiting explicit approval.** No proposed biography is captain-visible by default.

## Identity and assignment — IMPLEMENTED / PROVISIONAL

| Field | Value |
|---|---|
| Permanent `personnel_id` | `tess-oren` |
| Full / preferred name | Tess Oren / Tess (preferred form unconfirmed) |
| Callsign | Rill (in prototype; origin and earned date UNKNOWN) |
| Role / department | Extraction survey operator / Mining |
| Experience category | newcomer |
| Vessel | Excavator Three (`excavator-03`) |
| Radio style / software voice profile | `plain-first` / `bright` |
| Implemented characterization | methodical; sequential reporting; ore-sampling specialist |
| Implemented competencies | ore sampling; proposed: sample labeling and contamination control |
| Known relationships | Sol Arden / Deepwell — trusted sampling mentor |
| Shift / rank / exact birth date | UNKNOWN |

**Verbatim prototype radio/dialogue sample:** “Sample, record, then move on. I like a sequence that tells you when you are finished.”  
Source: [src/game/chatter.ts — sampling-sequence](https://github.com/steelwater/horrox-mining/blob/41c6643b2cc45ad71e04394225dc63c27eae6108/src/game/chatter.ts). This line is existing prototype content, not a guaranteed event in any save.

## Personal data — PROPOSED / OWNER REVIEW

- Birth year: **2052** (year proposed; date UNKNOWN). Age during the 2075 opening: approximately **23**, depending on birthday.
- Birthplace / homeworld: **Wellington, New Zealand (Earth)**.
- Languages: **English; conversational Samoan learned with relatives** (proposed proficiencies; actual native/casting accents UNKNOWN).
- Upbringing / cultural history: **New Zealander of Samoan family heritage; raised between an urban household and extended family visits**.
- Education and certification institutions: **UNKNOWN**; the vocational trajectory below is proposed and unverified.
- Family details, where discussed, are **proposed private biography** and not accessible in the initial in-game employee record.

## Professional pathway — PROPOSED / OWNER REVIEW

Trained in mineral sample preparation and instrument QA. Her apprenticeship emphasized preserving chain of custody, then a remote-survey qualification made her eligible for a Minerva extraction team.

No pre-2075 employer, promotion date, degree, or credential has been verified. The named role on the opening roster is implemented in the game prototype; it does not establish an earlier placement chronology.

## Character and personal history — PROPOSED / OWNER REVIEW

Tess is new to the job, not to taking evidence seriously. In a training lab, she once saw two good-looking measurements give different results because a sample label was exchanged; in her proposed backstory nobody was injured, but the mistake changed how she thought about certainty. She records the order of operations because a result without its route is a weak result.

Rill wants to be useful before she is impressive. She admires Deepwell's ability to wait for a full cycle, while privately worrying that asking another question will confirm she does not belong in the control room. Her own strength is noticing what a patient expert has learned to overlook: an unlabeled stage, a missing time, a number without its reference.

### Private life, habits and ambitions — PROPOSED

Makes miniature topographic maps from discarded graph paper and keeps a voice message from her grandmother about making room for mistakes that can be repaired. She hopes to train future field surveyors but currently dislikes being called a future expert.

### Relationships and tension

She trusts Sol's sampling guidance, while he learns to speak his process aloud for her. The established relationship is mentorship; no romance, family link, historic accident, or rivalry is implied.

## Captain-facing initial employee profile — IMPLEMENTED FIELDS ONLY

Extraction survey operator, currently a newcomer, attached to Excavator Three. Gives plain-first reports and alternates completed-run reports with Deepwell without changing outcomes.

The text above is an editorial summary of implemented fields; it is **not** an exact in-game UI screen or the captain's authorized access to proposed family, location, or history. Initial machine projection is in [roster.json](roster.json) and intentionally carries no proposed private biography.

## Confidential author notes — PROPOSED / NOT CAPTAIN VISIBLE

Overchecks a sample when nervous. Her personal growth is to distinguish a helpful second reading from delaying a decision that is already safely supported.

## Chronology and controlled disclosures

- **Before 2075-09-17:** individual career path, childhood and travel/assignment dates are **UNKNOWN** in established canon; proposals above must not be treated as dated historical events.
- **2075-09-17:** [1st Horrox Mining Ltd. staffed operations begin](../../continuity/timeline.md). Tess Oren appears on the founding **game prototype roster**. That placement remains provisional until owner canon approval.
- **After opening:** actual trust, job changes, repairs, incidents, promotions and departures belong to the individual Horrox Mining save; no specific future outcome is guaranteed.
- **Callsign origin:** UNKNOWN; the game uses “Rill”, but no earned-date story has been authorized.
- **Facility and AI nicknames:** “the Kettle” and “Fran” are later earned names; neither is assumed at opening. See [Minerva facility](../../locations/minerva-mining-facility.md) and [Facility AI](../../entities/fran.md).

## Story possibility — FUTURE / UNCONFIRMED

FUTURE / UNCONFIRMED: Tess recommends preserving a strange sample as an unclassified anomaly. It is not canon that she discovered Chronolith or invented its future sample designation.

**Continuity guardrails:** The character must not know the true identity or later effects of the unidentified material, the M2 catastrophe, or future temporal research in 2075. This dossier does not assign discovery credit, invent events, or alter the Viajero chronology.

## Editorial references

- [Horrox Mining PR #11](https://github.com/steelwater/horrox-mining/pull/11), source commit `41c6643b2cc45ad71e04394225dc63c27eae6108`: `src/game/content.ts`, `src/game/crew.ts`, `src/game/types.ts`, `src/game/chatter.ts`, `src/game/crossAppChatter.ts`, `docs/milestone-4.md`.
- [Crew implementation brief](https://docs.google.com/document/d/1QuizitxjoMQ8gCCZu3r-ij4-lVJP8jRGQg4BSC9DRuY/edit).
- [1st Horrox Mining Ltd.](../../entities/1st-horrox-mining-ltd.md) · [Horrox system](../../locations/horrox-system.md) · [Timeline](../../continuity/timeline.md).
