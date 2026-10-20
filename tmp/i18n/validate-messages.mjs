import { readFileSync } from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '../..')
const placeholderRe = /\{[^{}]+\}/g
const [locale] = process.argv.slice(2)
if (!locale) {
  console.error('Usage: node tmp/i18n/validate-messages.mjs <locale>')
  process.exit(1)
}

const english = JSON.parse(
  readFileSync(path.join(root, 'messages/en.json'), 'utf8')
)
const target = JSON.parse(
  readFileSync(path.join(root, `messages/${locale}.json`), 'utf8')
)
const errors = []
const warnings = []

const keysOf = (value) =>
  Array.isArray(value) ? value.map((_, i) => String(i)) : Object.keys(value)

const walk = (enNode, trNode, prefix) => {
  const enType = Array.isArray(enNode) ? 'array' : typeof enNode
  const trType = Array.isArray(trNode) ? 'array' : typeof trNode
  if (enType !== trType) {
    errors.push(`${prefix}: expected ${enType}, got ${trType}`)
    return
  }
  if (enType === 'string') {
    if (!trNode.trim()) errors.push(`${prefix}: empty`)
    const enPh = (enNode.match(placeholderRe) ?? []).sort().join(' ')
    const trPh = (trNode.match(placeholderRe) ?? []).sort().join(' ')
    if (enPh !== trPh)
      errors.push(`${prefix}: placeholders "${trPh}" !== "${enPh}"`)
    if (
      trNode === enNode &&
      enNode.length > 20 &&
      !/^(English|العربية|اردو|हिन्दी|中文|Français)$/.test(enNode)
    ) {
      warnings.push(`${prefix}: identical to English`)
    }
    return
  }
  const enKeys = keysOf(enNode)
  const trKeys = keysOf(trNode)
  if (
    enKeys.length !== trKeys.length ||
    enKeys.some((key) => !trKeys.includes(key))
  ) {
    errors.push(`${prefix}: key/length mismatch`)
  }
  for (const key of enKeys) {
    walk(enNode[key], trNode[key], prefix ? `${prefix}.${key}` : key)
  }
}

walk(english, target, '')
for (const warning of warnings) console.warn(`WARN  ${warning}`)
for (const error of errors) console.error(`ERROR ${error}`)
console.log(`${locale}: ${errors.length} errors, ${warnings.length} warnings`)
process.exit(errors.length > 0 ? 1 : 0)
