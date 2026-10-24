---
id: personnel-registry
title: Personnel Registry
type: continuity
status: draft
tags: [personnel, horrox, minerva, continuity]
related: [1st-horrox-mining-ltd, minerva-mining-facility]
---

# Personnel Registry

**Editorial status: DRAFT / OWNER REVIEW — not new approved canon.** This registry belongs in **The Final Log**, the index and continuity archive. An actual recovered employee diary, interview, or in-universe report would be a separate work in [The Book of Memories](../../book-of-memories/README.md), not a substitute for these reference dossiers.

The founding nine are taken **unchanged** from [Horrox Mining PR #11](https://github.com/steelwater/horrox-mining/pull/11), reviewed at commit `41c6643b2cc45ad71e04394225dc63c27eae6108` on 2026-10-24. PR #11 was open and unmerged when reviewed. Game-implemented identity fields are labeled **IMPLEMENTED / PROVISIONAL**; all new social and biographical writing is **PROPOSED / OWNER REVIEW**. Merging this dossier PR does **not** approve proposed biography.

## Founding roster and new-fact mapping

| Stable ID | Current in-game identity | Dossier | New facts requiring explicit approval |
|---|---|---|---|
| `mara-vale` | Mara Vale / Latch — Docking, Hauler Two | [`horrox/mara-vale.md`](horrox/mara-vale.md) | **PROPOSED:** Cebu City, Philippines (Earth), b. 2038, Cebuano, English; working Tagalog |
| `iko-ren` | Iko Ren / Patch — Maintenance, None | [`horrox/iko-ren.md`](horrox/iko-ren.md) | **PROPOSED:** Kobe, Japan (Earth), b. 2044, Japanese and English |
| `sol-arden` | Sol Arden / Deepwell — Mining, Excavator Three | [`horrox/sol-arden.md`](horrox/sol-arden.md) | **PROPOSED:** Gqeberha, South Africa (Earth), b. 2036, English and isiXhosa |
| `tess-oren` | Tess Oren / Rill — Mining, Excavator Three | [`horrox/tess-oren.md`](horrox/tess-oren.md) | **PROPOSED:** Wellington, New Zealand (Earth), b. 2052, English; conversational Samoan learned with relatives |
| `ada-sen` | Ada Sen / Sieve — Refinery, None | [`horrox/ada-sen.md`](horrox/ada-sen.md) | **PROPOSED:** Pune, India (Earth), b. 2041, Marathi and English |
| `noor-ven` | Noor Ven / Facet — Grading, None | [`horrox/noor-ven.md`](horrox/noor-ven.md) | **PROPOSED:** Amman, Jordan (Earth), b. 2037, Arabic and English |
| `eli-moss` | Eli Moss / Ledger — Storage, None | [`horrox/eli-moss.md`](horrox/eli-moss.md) | **PROPOSED:** Montréal, Canada (Earth), b. 2043, French and English |
| `bea-kade` | Bea Kade / Crate — Cargo, None | [`horrox/bea-kade.md`](horrox/bea-kade.md) | **PROPOSED:** Lagos, Nigeria (Earth), b. 2039, Yoruba and English |
| `oren-dax` | Oren Dax / Keel — Transport, Hauler Two | [`horrox/oren-dax.md`](horrox/oren-dax.md) | **PROPOSED:** An early Mars settlement (specific settlement UNKNOWN), b. 2035, English and Portuguese |

All nine personal birthplace/birth-year/language/cultural specifics, past employments, family background, individual habits, tensions beyond established relations, and story hooks are **invented proposals**. All exact birth dates, formal shifts, ranks, certifications, historic assignments, nickname origin dates, and personal arrival dates remain **UNKNOWN**.

## Future keypad navigation example (NOT an implemented game menu)

Crew Roster → Department / Section → Personnel → Dossier Page:

- **Docking**: key 1 → [Latch](horrox/mara-vale.md)
- **Maintenance**: key 1 → [Patch](horrox/iko-ren.md)
- **Mining**: key 1 → [Deepwell](horrox/sol-arden.md); key 2 → [Rill](horrox/tess-oren.md)
- **Refinery**: key 1 → [Sieve](horrox/ada-sen.md)
- **Grading**: key 1 → [Facet](horrox/noor-ven.md)
- **Storage**: key 1 → [Ledger](horrox/eli-moss.md)
- **Cargo**: key 1 → [Crate](horrox/bea-kade.md)
- **Transport**: key 1 → [Keel](horrox/oren-dax.md)

Digits are **transient local menu positions**, not personnel IDs. The roster may grow beyond nine people; any department with more than nine selectable entries must be paginated into subteams/pages. No more than nine appear in any one menu. Individual `personnel_id` persists through transfers and cannot be recycled.

Suggested later dossier pages: Personal Data, Qualifications, Service Record, Personal History, Relationships, Recent Events, Audio Profile. Fran audio reading must respect alarms and the crew's own privacy/permissions. **No UI change is part of this PR.**

## Source of truth and export

- Human-readable individual dossiers are the **editable editorial sources**. Their implemented snapshot and proposed material are separated in headings; approved parts may later be promoted after explicit owner decision.
- [`horrox/roster.json`](horrox/roster.json) is a **read-only, draft index of implemented prototype identities**, **not** a canonical game import. It intentionally omits all proposed upbringing, private information and future hooks. A future import requires a named, reviewed version and explicit opt-in.
- [Schema and data boundary](SCHEMA.md) explain universe identity, era-specific visibility, simulation-only histories and recovered memories.
- [Canon audit and owner review](../../docs/horrox-crew-dossier-review.md) tracks open choices and compatibility concerns.

## Continuity anchors

[1st Horrox Mining Ltd.](../entities/1st-horrox-mining-ltd.md) · [Minerva facility](../locations/minerva-mining-facility.md) · [Horrox system](../locations/horrox-system.md) · [LightTech](../factions/lighttech.md) · [Timeline](../continuity/timeline.md) · [Fran](../entities/fran.md).

**2075 safety boundary:** Nobody in the founding roster knows future catastrophe results or the later identification and consequences of the unidentified material. “Fran” and “the Kettle” are earned **later**, not opening-day names. No new Science or Medical specialist was added simply to fill a roster.

## Validation

Run `node scripts/validate-crew-dossiers.mjs` from the repository root. Validation checks unique IDs, stable roster fields, dossier path resolution, nine-or-fewer per section, permitted captain projection, exact nine-person founding roster and proposal labeling.
