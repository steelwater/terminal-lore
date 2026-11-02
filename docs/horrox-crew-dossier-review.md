# Horrox founding crew dossiers — canon audit and review checklist

**Prepared:** 2026-10-24  
**State:** DRAFT / PRODUCT OWNER REVIEW  
**Mission brief:** [Google Doc](https://docs.google.com/document/d/1QuizitxjoMQ8gCCZu3r-ij4-lVJP8jRGQg4BSC9DRuY/edit)  
**Game reference:** [steelwater/horrox-mining PR #11](https://github.com/steelwater/horrox-mining/pull/11), current reviewed head `41c6643b2cc45ad71e04394225dc63c27eae6108` (**open, unmerged** at audit).  
**Universe base:** `steelwater/terminal-lore` main `a94197b95f576cd183f762d83b51b05a2f168c9b`.

## Confirmed repository/source findings

- Terminal Lore separates [Final Log](../final-log/README.md) (continuity reference) from [Book of Memories](../book-of-memories/README.md) (recovered in-universe storytelling). Personnel dossiers sit under [Final Log / Personnel](../final-log/personnel/README.md); no Book of Memories artifact is falsely presented as genuine recovered history.
- [Timeline](../final-log/continuity/timeline.md), [company entry](../final-log/entities/1st-horrox-mining-ltd.md), and [facility entry](../final-log/locations/minerva-mining-facility.md) record staffed operations beginning **2075-09-17**. Earlier unmanned Minerva operations date to **2054-11-04**, silence in 2065, and a Viajero restart in 2073. We preserve this sequence; no files re-date it.
- The nine IDs, callsigns, departments, vessel assignments, prototype personalities, three software voice IDs and known relationships were read from PR #11's `src/game/content.ts`, `crew.ts`, `types.ts`, and `docs/milestone-4.md`.
- `src/game/chatter.ts` and `crossAppChatter.ts` provide existing sample dialogue. The selected quotes are identified as **verbatim prototype lines**, not claims that a particular save already heard them.
- Facility AI / Control is **not** a human roster member. “Fran” and facility “the Kettle” have later earned origins, exact dates **UNKNOWN**; no opening-day use is authored into the biographies.
- Existing continuity leaves the identity of the person who first notices the anomalous sample, the sample number, exact discovery chronology, and Viajero's missing interval unresolved. No dossier resolves them.

## Proposed details awaiting explicit owner decision

**All nine** proposed birth years/cities, homeworld details, languages and proficiency, cultural/community ties, families, individual technical training, career paths, private fears, hobbies, invented relationship nuances, mentor backstories and hooks must be accepted, amended or rejected **person by person**. They are not promoted merely when this PR merges.

| Person | Existing game anchors preserved | What to check most carefully |
|---|---|---|
| Latch | Mara Vale, Docking, Hauler Two, steady/code-first; Patch trusted shift partner | Cebu upbringing; protective control habits; family rescue ties |
| Patch | Iko Ren, Maintenance, bright/conversational; Latch trust, Deepwell rivalry | Kobe childhood; tool cartoons; over-investigation flaw |
| Deepwell | Sol Arden, Mining, Excavator Three, measured/code-first; Rill mentor | Gqeberha background; quiet mentorship; anomaly hook does not grant discovery |
| Rill | Tess Oren, Mining, Excavator Three, bright/plain-first; newcomer | Wellington / Samoan upbringing; age at start; sampling history |
| Sieve | Ada Sen, Refinery, measured/plain-first | Pune and process-education history; tentative dynamic with Facet |
| Facet | Noor Ven, Grading, steady/code-first | Amman background; archival habits; Text Solitaire line |
| Ledger | Eli Moss, Storage, measured/plain-first | Montréal bilingual background; recording hobby; tentative dynamic with Crate |
| Crate | Bea Kade, Cargo, steady/conversational | Lagos upbringing; Cargo Mechs remain non-sentient; stop-work ethics |
| Keel | Oren Dax, Transport, Hauler Two, measured/code-first | Mars birthplace (proposed) and family connection to Porto; no unsupported historical colony name |

## Genuine uncertainties / safe handling

1. **PR #11 is not merged.** Current roster traits are implemented *prototypes*, not officially approved biographies. If that PR changes before import, re-audit the source SHA and diff every stable ID, vessel and voice.
2. **Older source summaries describe Minerva's unmanned period.** The current Final Log explicitly adds staffed operations in 2075, so do not “fix” the older history by declaring an exclusively unmanned future.
3. **Minerva sample discovery owner and number remain unresolved.** Although Deepwell, Rill, Patch and grading staff are plausible observers, do not allocate discovery credit here.
4. **Crew callsign origins have no established dates.** The names are already in game; inventing an earned-date story must be approved separately. Do not conflate these callsigns with the *later* earned facility and AI nicknames.
5. **No reliable roster-specific pre-2075 dates.** The proposed birth years make all nine adults in 2075; the dossier chronology otherwise keeps exact career/employment dates UNKNOWN. Mars settlement existed by the time of Keel's proposed birth, but that does not confirm his birthplace.
6. **Voice profiles do not encode heritage.** Proposed language biography is editorial background, not a directive to synthesize a stereotyped voice or to override current TTS fallbacks.
7. **No supporting Medical or Science humans exist in this nine-person roster.** They are not added.
8. **Relationship changes and service records are per-save only.** Any later promotion, transfer or friendship needs save-specific storage; the proposed dossier tension is not an event.
9. **The registered voice/chatter phrases are game content under review.** A verbatim quote is an implementation sample, not an unchangeable canon utterance.

## Presentation review update — 2 November 2026

The owner reviewed all nine crew biographies and requested no changes to individual character information. Three comments on PR #10 requested that implementation labels, meta-talk and source references be moved out of the reader-facing dossiers. All nine files now read as personnel records. Quote provenance and source references live in [the registry README](../final-log/personnel/README.md); proposed future hooks and author notes live in [editorial-only notes](horrox-crew-editorial-notes.md). The frontmatter stays draft. The game was not changed.

## Owner acceptance checklist

- [ ] Confirm all nine names, callsigns, roles, and departments against accepted Horrox Mining PR #11.
- [ ] Confirm Latch / Patch / Deepwell / Rill voices, habits and existing relationships feel familiar.
- [x] Owner reviewed individual dossiers and had no character-biography corrections. Formal canon-status approval remains separate.
- [ ] Decide whether Keel should remain proposed Mars-born, and whether any birth years require adjustment.
- [ ] Approve or reject additional tentative interdepartmental tensions; do not install them as simulated friendships yet.
- [ ] Keep unresolved mineral discovery and 2075 spoiler restrictions intact.
- [ ] Explicitly designate which fields or complete dossier versions become `canon`; **merge alone is not approval**.
- [ ] Only after approval, plan a **separate** Horrox Mining import implementation and schema 5 compatibility review.

## Migration note

No game code or save is touched. The [draft machine roster](../final-log/personnel/horrox/roster.json) is a prototype identity index, not a live source or automatic sync. A future controlled importer should compare the accepted Horrox roster against stable `personnel_id` entries, preserve each save's state, and treat approved biography and unlock flags as separate versioned read-only information. If an owner-approved rename or vessel reassignment happens, introduce an explicit old→new ID mapping only if strictly needed; **never silently reassign or recycle existing IDs**.
