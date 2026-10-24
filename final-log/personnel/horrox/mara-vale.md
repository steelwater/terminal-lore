---
id: personnel-mara-vale
title: Mara Vale (proposed personnel dossier)
type: entity
status: draft
tags: [personnel, horrox, minerva, 2075, owner-review]
related: [1st-horrox-mining-ltd, minerva-mining-facility, lighttech]
---

# Mara Vale — Latch

> **DRAFT / OWNER REVIEW.** The identity fields identified as **IMPLEMENTED / PROVISIONAL** reproduce Horrox Mining PR #11 at `41c6643b2cc45ad71e04394225dc63c27eae6108`. They are an implementation snapshot, not newly ratified universe canon. **Everything under PROPOSED is creative expansion awaiting explicit approval.** No proposed biography is captain-visible by default.

## Identity and assignment — IMPLEMENTED / PROVISIONAL

| Field | Value |
|---|---|
| Permanent `personnel_id` | `mara-vale` |
| Full / preferred name | Mara Vale / Mara (preferred form unconfirmed) |
| Callsign | Latch (in prototype; origin and earned date UNKNOWN) |
| Role / department | Docking lead / Docking |
| Experience category | veteran |
| Vessel | Hauler Two (`hauler-02`) |
| Radio style / software voice profile | `code-first` / `steady` |
| Implemented characterization | protective, calm, dry-witted; traffic-control specialist; short confirmations and understated jokes |
| Implemented competencies | docking, traffic control, external repairs |
| Known relationships | Iko Ren / Patch — trusted shift partner |
| Shift / rank / exact birth date | UNKNOWN |

**Verbatim prototype radio/dialogue sample:** “Please continue respecting the deck markings. Paint is cheaper than explaining why we ignored it.”  
Source: [src/game/chatter.ts — paint-lines](https://github.com/steelwater/horrox-mining/blob/41c6643b2cc45ad71e04394225dc63c27eae6108/src/game/chatter.ts). This line is existing prototype content, not a guaranteed event in any save.

## Personal data — PROPOSED / OWNER REVIEW

- Birth year: **2038** (year proposed; date UNKNOWN). Age during the 2075 opening: approximately **37**, depending on birthday.
- Birthplace / homeworld: **Cebu City, Philippines (Earth)**.
- Languages: **Cebuano, English; working Tagalog** (proposed proficiencies; actual native/casting accents UNKNOWN).
- Upbringing / cultural history: **Filipino; grew up in a Cebuano-speaking dockside household**.
- Education and certification institutions: **UNKNOWN**; the vocational trajectory below is proposed and unverified.
- Family details, where discussed, are **proposed private biography** and not accessible in the initial in-game employee record.

## Professional pathway — PROPOSED / OWNER REVIEW

Worked marine approach scheduling and emergency berth clearances on Earth, then qualified for off-world arrival-control operations. Her last posting placed her between a control desk and an outer docking team rather than in a cockpit.

No pre-2075 employer, promotion date, degree, or credential has been verified. The named role on the opening roster is implemented in the game prototype; it does not establish an earlier placement chronology.

## Character and personal history — PROPOSED / OWNER REVIEW

Mara learned that most near misses begin with a polite assumption: someone thinks another person has already confirmed a clearance. She chose traffic control because a properly repeated instruction could prevent an accident no one would ever hear about. Her protective streak is practical, not sentimental: she tracks the last worker off a deck before considering an arrival complete.

She takes pride in making complicated approaches sound ordinary over the radio. The drawback is that she sometimes takes responsibility for decisions her colleagues are perfectly capable of making. When a colleague suggests improvising a safer shortcut, Mara's first response is to ask for the documented route, even when the shortcut deserves a hearing.

### Private life, habits and ambitions — PROPOSED

Collects handwritten sketches of old harbor signal flags and keeps one beside her berth chart. Her younger sibling on Earth is a volunteer coastal rescue trainer; Mara checks their messages before long-duty intervals. She fears a preventable accident caused by a rushed handoff, not the complexity of machinery itself.

### Relationships and tension

Latch and Patch trust each other's judgments because neither hides an error behind a cheerful report. That trust is established; the proposed history of repairing a badly labeled approach beacon together is NOT a confirmed event. Mara initially finds Patch's spoken thought process distracting, but appreciates knowing where the engineer's mind has gone.

## Captain-facing initial employee profile — IMPLEMENTED FIELDS ONLY

Leads docking approach control, berth sequencing and clearance checks; prefers explicit acknowledgments and is associated with Hauler Two.

The text above is an editorial summary of implemented fields; it is **not** an exact in-game UI screen or the captain's authorized access to proposed family, location, or history. Initial machine projection is in [roster.json](roster.json) and intentionally carries no proposed private biography.

## Confidential author notes — PROPOSED / NOT CAPTAIN VISIBLE

Protectiveness can become micromanagement. Proposed future arc: she learns to let Patch or a junior controller own a difficult but safe decision while she supports instead of intercepting.

## Chronology and controlled disclosures

- **Before 2075-09-17:** individual career path, childhood and travel/assignment dates are **UNKNOWN** in established canon; proposals above must not be treated as dated historical events.
- **2075-09-17:** [1st Horrox Mining Ltd. staffed operations begin](../../continuity/timeline.md). Mara Vale appears on the founding **game prototype roster**. That placement remains provisional until owner canon approval.
- **After opening:** actual trust, job changes, repairs, incidents, promotions and departures belong to the individual Horrox Mining save; no specific future outcome is guaranteed.
- **Callsign origin:** UNKNOWN; the game uses “Latch”, but no earned-date story has been authorized.
- **Facility and AI nicknames:** “the Kettle” and “Fran” are later earned names; neither is assumed at opening. See [Minerva facility](../../locations/minerva-mining-facility.md) and [Facility AI](../../entities/fran.md).

## Story possibility — FUTURE / UNCONFIRMED

FUTURE / UNCONFIRMED: a harmless-looking mismatch between a berth schedule and cargo log forces Mara to choose between delaying a hauler and explaining the discrepancy to Control; no incident or outcome is pre-written.

**Continuity guardrails:** The character must not know the true identity or later effects of the unidentified material, the M2 catastrophe, or future temporal research in 2075. This dossier does not assign discovery credit, invent events, or alter the Viajero chronology.

## Editorial references

- [Horrox Mining PR #11](https://github.com/steelwater/horrox-mining/pull/11), source commit `41c6643b2cc45ad71e04394225dc63c27eae6108`: `src/game/content.ts`, `src/game/crew.ts`, `src/game/types.ts`, `src/game/chatter.ts`, `src/game/crossAppChatter.ts`, `docs/milestone-4.md`.
- [Crew implementation brief](https://docs.google.com/document/d/1QuizitxjoMQ8gCCZu3r-ij4-lVJP8jRGQg4BSC9DRuY/edit).
- [1st Horrox Mining Ltd.](../../entities/1st-horrox-mining-ltd.md) · [Horrox system](../../locations/horrox-system.md) · [Timeline](../../continuity/timeline.md).
