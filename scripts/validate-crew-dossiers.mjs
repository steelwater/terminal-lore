import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'

const repo = resolve(import.meta.dirname, '..')
const root = join(repo, 'final-log/personnel/horrox')
const data = JSON.parse(readFileSync(join(root, 'roster.json'), 'utf8'))
const expected = [
  ['mara-vale', 'Mara Vale', 'Latch', 'Docking', 'hauler-02', 'steady'],
  ['iko-ren', 'Iko Ren', 'Patch', 'Maintenance', null, 'bright'],
  ['sol-arden', 'Sol Arden', 'Deepwell', 'Mining', 'excavator-03', 'measured'],
  ['tess-oren', 'Tess Oren', 'Rill', 'Mining', 'excavator-03', 'bright'],
  ['ada-sen', 'Ada Sen', 'Sieve', 'Refinery', null, 'measured'],
  ['noor-ven', 'Noor Ven', 'Facet', 'Grading', null, 'steady'],
  ['eli-moss', 'Eli Moss', 'Ledger', 'Storage', null, 'measured'],
  ['bea-kade', 'Bea Kade', 'Crate', 'Cargo', null, 'steady'],
  ['oren-dax', 'Oren Dax', 'Keel', 'Transport', 'hauler-02', 'measured'],
]
assert.equal(data.schema_version, 1)
assert.equal(data.operation_start, '2075-09-17')
assert.equal(data.personnel.length, expected.length)
const ids = new Set()
const counts = new Map()
const allowed = ['personnel_id', 'name', 'callsign', 'role', 'department', 'vessel_id', 'radio_style', 'voice_profile_id']
for (const [i, p] of data.personnel.entries()) {
  const [id, name, call, dept, vessel, voice] = expected[i]
  assert.deepEqual([p.personnel_id, p.name, p.callsign, p.department, p.vessel_id, p.voice_profile_id], [id, name, call, dept, vessel, voice])
  assert.match(p.personnel_id, /^[a-z]+(?:-[a-z]+)+$/)
  assert(!ids.has(id), 'duplicate personnel_id: ' + id)
  ids.add(id)
  assert.equal(p.canon_status, 'draft')
  assert.equal(p.identity_status, 'implemented-provisional')
  assert.equal(typeof p.role, 'string')
  assert(['code-first','plain-first','conversational'].includes(p.radio_style))
  assert.deepEqual(p.spoiler_visibility.captain_at_start, allowed)
  assert.equal(p.spoiler_visibility.private_biography, 'owner_review_only')
  assert.equal(p.sources.game_commit, data.game_source_sha)
  counts.set(dept, (counts.get(dept) ?? 0) + 1)
  const path = join(root, p.dossier)
  assert(existsSync(path), 'missing dossier: ' + path)
  const md = readFileSync(path, 'utf8')
  assert(md.includes('id: personnel-' + id))
  assert(md.includes('status: draft'))
  assert(md.includes('2075-09-17'))
  for (const heading of ['## Service identity', '## Personal details', '## Character and personal history', '## Service chronology']) {
    assert(md.includes(heading), 'missing '+heading+' in '+id)
  }
  const body = md.replace(/^---\n[\s\S]*?\n---\n/, '')
  assert(!/(PROPOSED|OWNER REVIEW|prototype|PR #|source commit|game save|continuity guardrails|FUTURE \/ UNCONFIRMED|Editorial references|Confidential author notes|roster\.json)/i.test(body), 'out-of-world content: '+id)
  // Only public identity fields are exported in JSON; proposed biography is never in the captain projection.
  assert(!JSON.stringify(p).includes('birthplace'))
  assert(!JSON.stringify(p).includes('Chronolith'))
  const links = [...md.matchAll(/\]\(([^)]+\.md)\)/g)].map(m => m[1])
  for (const link of links) {
    if (/^https?:\/\//.test(link)) continue
    assert(existsSync(resolve(dirname(path), link)), 'broken link in ' + id + ': ' + link)
  }
}
for (const [dept,count] of counts) assert(count <= 9, dept + ' exceeds keypad page limit')
const readme = readFileSync(join(repo, 'final-log/personnel/README.md'), 'utf8')
for (const id of ids) assert(readme.includes('horrox/' + id + '.md'), 'index missing ' + id)
assert(readme.includes('**not** a canonical game import'))
assert(readme.includes('Dialogue provenance and editorial references'))
assert(existsSync(join(repo, 'docs/horrox-crew-editorial-notes.md')))
console.log('Crew dossier registry OK: ' + ids.size + ' unique records; ' + counts.size + ' sections; no captain-facing private biography export.')
