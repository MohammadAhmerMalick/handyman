// Usage: node tmp/i18n/validate.mjs <locale> [category ...]
// Compares src/data/services/i18n/<locale>/<category>.json against tmp/i18n/source/<category>.json
import { existsSync, readdirSync, readFileSync } from 'node:fs'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '../..')
const sourceDir = path.join(root, 'tmp/i18n/source')
const [locale, ...requested] = process.argv.slice(2)

if (!locale) {
  console.error('Usage: node tmp/i18n/validate.mjs <locale> [category ...]')
  process.exit(1)
}

const categories =
  requested.length > 0
    ? requested
    : readdirSync(sourceDir).map((file) => file.replace(/\.json$/, ''))

const errors = []
const warnings = []

const checkString = (where, value, english) => {
  if (typeof value !== 'string' || value.trim() === '') {
    errors.push(`${where}: empty or not a string`)
    return
  }
  if (/[{}]/.test(value)) errors.push(`${where}: contains { or }`)
  if (value === english && english.length > 14) {
    warnings.push(`${where}: identical to English ("${english.slice(0, 50)}")`)
  }
}

for (const category of categories) {
  const sourcePath = path.join(sourceDir, `${category}.json`)
  const targetPath = path.join(
    root,
    'src/data/services/i18n',
    locale,
    `${category}.json`
  )
  if (!existsSync(sourcePath)) {
    errors.push(`${category}: unknown category`)
    continue
  }
  if (!existsSync(targetPath)) {
    errors.push(`${category}: missing ${path.relative(root, targetPath)}`)
    continue
  }

  const source = JSON.parse(readFileSync(sourcePath, 'utf8'))
  let target
  try {
    target = JSON.parse(readFileSync(targetPath, 'utf8'))
  } catch (error) {
    errors.push(`${category}: invalid JSON — ${error.message}`)
    continue
  }

  for (const slug of Object.keys(target)) {
    if (!(slug in source)) errors.push(`${category}/${slug}: unknown slug`)
  }

  for (const [slug, entry] of Object.entries(source)) {
    const translated = target[slug]
    if (!translated) {
      errors.push(`${category}/${slug}: missing`)
      continue
    }
    for (const key of Object.keys(translated)) {
      if (!(key in entry))
        errors.push(`${category}/${slug}.${key}: unknown field`)
    }
    for (const [field, english] of Object.entries(entry)) {
      const value = translated[field]
      const where = `${category}/${slug}.${field}`
      if (Array.isArray(english)) {
        if (!Array.isArray(value)) {
          errors.push(`${where}: expected an array`)
          continue
        }
        if (value.length !== english.length) {
          errors.push(
            `${where}: expected ${english.length} items, got ${value.length}`
          )
        }
        english.forEach((item, index) => {
          checkString(`${where}[${index}]`, value[index], item)
        })
      } else {
        checkString(where, value, english)
      }
    }
  }
}

for (const warning of warnings) console.warn(`WARN  ${warning}`)
for (const error of errors) console.error(`ERROR ${error}`)
console.log(
  `${locale}: ${categories.length} categories, ${errors.length} errors, ${warnings.length} warnings`
)
process.exit(errors.length > 0 ? 1 : 0)
