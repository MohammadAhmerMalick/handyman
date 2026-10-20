# Service catalogue translation brief

Project: marketing site for **Handyman**, a renovation / maintenance / trades company based in Marina, Dubai, serving the UAE. Website: handyman.ae. Readers are UAE residents (homeowners, tenants, landlords, property and facilities managers, shop owners).

## Input / output

- English source: `tmp/i18n/source/<category>.json` — an object keyed by service slug.
- Write your translation to: `src/data/services/i18n/<locale>/<category>.json`
- Same slugs, same field names, same order, **same number of items in every array**. Never add or drop fields or items.
- Output must be valid JSON (UTF-8, 2-space indent, trailing newline). Write each category file with the Write tool in one go.
- Never use `{` or `}` inside strings.
- After writing each file run: `node tmp/i18n/validate.mjs <locale> <category>` and fix every ERROR. Review WARNs (a string left identical to English) — only acceptable for things like brand/product names (CCTV, Wi‑Fi).
- Do not edit any other file in the repo.

## How each field is used (translate so it fits these sentence slots)

The site builds sentences around these fields with per-language templates, so grammar shape matters:

| Field | Shape | Example English slot |
| --- | --- | --- |
| `title` | Service name (heading). Natural, concise. | "What does **{title}** include?" / page `<h1>` |
| `angle` | Lower-case **noun phrase**, no final period | "…helps owners deal with **{angle}**." / "Our team focuses on **{angle}**." / "{title} for homes across the UAE — **{angle}**." |
| `whenNeeded` | One or two **complete sentences** with final punctuation | Shown as its own sentence(s) |
| `outcome` | Lower-case **clause** (subject + verb), no final period | "…and check that **{outcome}**." / "The aim is straightforward: **{outcome}**." |
| `complianceNote` | Complete sentence(s) | Shown as its own paragraph |
| `problems`, `includes`, `benefits`, `tips` | Bullet-list items: short phrases, **no trailing period**, start each item the same way the English one does (capitalised or not, for scripts that have case) | Bullets; also joined into a sentence: "…we typically handle a, b, and c." |

## Style

- Professional, warm, plain marketing tone. Not word-for-word: make it read like it was written natively, but keep every fact and limit (licensing limits, "within working hours", "not 24/7", "no fixed prices", "where within scope").
- Keep the brand name **Handyman** in Latin letters, untranslated.
- Common UAE terms: AC / air conditioning, villa, flat/apartment, landlord, tenant, Ejari, DEWA, community/building management, snagging, chiller, etc. Use the term locals actually use in that language; keeping a well-known English loanword (e.g. "AC") is fine where natural.
- Place names: use the standard local spelling (Dubai, Sharjah, Abu Dhabi, Marina, UAE).
- Numbers stay as Western digits (0–9).

### Locale notes

- `ar` — Modern Standard Arabic, natural for Gulf readers.
- `ur` — Standard Urdu in Arabic (Nastaliq/Naskh) script; common English trade loanwords in Urdu script are fine where Pakistanis/Indians in the UAE would use them (e.g. اے سی، پلمبنگ).
- `hi` — Standard, everyday Hindi in Devanagari; avoid heavy Sanskritised words when a common Hindustani/English loanword is what people say (e.g. एसी, प्लंबिंग, टाइल).
- `zh` — Simplified Chinese (Mainland conventions), concise. Use Chinese punctuation (，。、：；) inside sentences. Because list items get joined, do not end list items with 。
- `fr` — French (France/international). Use the typographic apostrophe ’ (U+2019) instead of ' everywhere. Use « » only if quoting. Vous-form.
