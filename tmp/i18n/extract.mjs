import { mkdirSync, readdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'
import { createJiti } from '../../node_modules/.pnpm/jiti@2.7.0/node_modules/jiti/lib/jiti.mjs'

const root = path.resolve(import.meta.dirname, '../..')
const jiti = createJiti(import.meta.url, {
  alias: { '@': path.join(root, 'src') },
})

const catalogDir = path.join(root, 'src/data/services/catalog')
const outDir = path.join(root, 'tmp/i18n/source')
mkdirSync(outDir, { recursive: true })

const FIELDS = [
  'title',
  'angle',
  'whenNeeded',
  'outcome',
  'complianceNote',
  'problems',
  'includes',
  'benefits',
  'tips',
]

let totalChars = 0
let totalSeeds = 0
const summary = []

for (const file of readdirSync(catalogDir).sort()) {
  if (file === 'createSeed.ts') continue
  const mod = await jiti.import(path.join(catalogDir, file))
  const seeds = Object.values(mod).find(Array.isArray)
  const category = file.replace(/\.ts$/, '')
  const out = {}
  for (const seed of seeds) {
    const entry = {}
    for (const field of FIELDS) {
      if (seed[field] !== undefined) entry[field] = seed[field]
    }
    out[seed.slug] = entry
  }
  const json = `${JSON.stringify(out, null, 2)}\n`
  writeFileSync(path.join(outDir, `${category}.json`), json)
  totalChars += json.length
  totalSeeds += seeds.length
  summary.push(`${category}\t${seeds.length}\t${json.length}`)
}

console.log(summary.join('\n'))
console.log(`total\t${totalSeeds}\t${totalChars}`)
