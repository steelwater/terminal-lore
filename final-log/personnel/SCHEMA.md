# Personnel registry — editorial and import contract (draft v1)

## Source and authority

**The Final Log** is the canonical-location *for reference records*, but these particular records have `status: draft` until owner approval. A recognized game implementation at [horrox-mining PR #11](https://github.com/steelwater/horrox-mining/pull/11) is the provenance for names and operational characterization, not proof that an invented biography is canon. The Book of Memories stores recovered in-universe artifacts separately.

The Markdown dossier is editorial source-of-truth for proposals. `horrox/roster.json` stores only the existing prototype identity fields for read-only inspection; it is deliberately conservative to avoid accidentally shipping private lore.

## Four different information layers

| Layer | Example | Storage and promotion rule |
|---|---|---|
| **A. Universe identity** | permanent `personnel_id`, existing callsign, role | Stable across connected games **after explicit canon approval**. The current manifest is provisional. |
| **B. In-universe 2075 discoverability** | captain may read callsign, role and assignment at opening | Export only allowlisted `captain_at_start` fields; richer biography must have an authorized unlock and approval. |
| **C. Simulation-specific history** | actual injury, friendship, promotion, repair performed, reallocation | Owned exclusively by each Horrox Mining **save**; never promoted into universe canon automatically. |
| **D. Later recovery/interpretation** | a report written after 2075 or a recovered recording | Separate Book of Memories artifact with source, date, interpretation and spoiler classification; never retroactively exposed to opening-day crew. |

The manifest fields are `schema_version` (positive integer), `editorial_status`, `game_source_sha`, `game_source_pr`, `operation_start` (ISO calendar date), and `personnel` (ordered array). Each entry has `personnel_id` (stable unique lower-case slug), `canon_status` (currently `draft`), `identity_status` (`implemented-provisional`), `name`, `callsign`, `role`, `department`, `vessel_id` (string or null), `experience`, `radio_style`, `voice_profile_id`, `dossier` (relative Markdown path), `spoiler_visibility`, and `sources`.

A dossier has repository-standard Final Log YAML frontmatter: `id`, `title`, `type`, `status`, `tags`, `related`. The body explicitly separates implemented/provisional evidence from **PROPOSED / OWNER REVIEW** writing. `UNKNOWN` is a value, not an excuse to create fabricated birth dates or unearned service medals.

## Stable IDs and game integration

- No currently visible keypad digit may be serialized as a `personnel_id`. Digit 1 can mean Latch in Docking and Rill/Deepwell in Mining depending on current page.
- A staff transfer changes current department/vessel **in the save**, never the stable ID; import tooling must preserve the save history.
- Voice `steady`, `bright`, `measured` are **software profile IDs**, not accent, identity or ethnicity. Human casting/locales remain future decisions with platform fallback.
- On a future approved import, match by `personnel_id`; do not overwrite saved reassignment, mood, relationship outcomes, service history, cooldowns, or other state. A deliberate versioned migration is required for renamed roles or biographies.
- Horrox Mining PR #11 uses save schema 5. This lore PR neither upgrades saves nor automates synchronization.

## Spoiler guardrails

The initial captain projection must not include proposed origin, family, private fears, future plot hooks, later event outcomes, M2 catastrophe facts, Chronolith identification, or later-acquired facility/AI names. Even approved future-era biographical facts may require role-based authorization. A prose **preview** of a proposed employee summary in these dossiers is editorial text, not clearance.

**No prewritten outcomes:** an imagined friendship remains a proposal; an actual trust change, accident or commendation only occurs when its save's events cause it.

## Versioning and tests

The founding list is versioned as `schema_version: 1` for the **lore index**, unrelated to game schema 5. Run `node scripts/validate-crew-dossiers.mjs` from the repo root; no install or dependency required. A future import should include a side-by-side identity-field diff against its target Horrox Mining release and require user-approved mapping before synchronization.
