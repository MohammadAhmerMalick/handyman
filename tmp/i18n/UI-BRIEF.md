# UI message translation brief

Project: marketing site for **Handyman** (Marina, Dubai, UAE). Website: handyman.ae.

## Task

Read `messages/en.json` and write a complete translation to `messages/<locale>.json`.

Keep **exactly the same JSON keys, nesting, and array lengths**. Translate every string value. Valid JSON, UTF-8, 2-space indent, trailing newline.

Do not edit any other file.

## Interpolation (do not break)

Keep `{name}` placeholders exactly, including: `{year}`, `{phone}`, `{email}`, `{address}`, `{serviceArea}`, `{title}`, `{count}`, `{saturdayThursday}`, `{friday}`, `{category}`.

Keep ICU plural syntax and only translate the words inside:
`{count, plural, one {…} other {…}}`
For Arabic use zero/one/two/few/many/other if natural; otherwise one/other is acceptable. Chinese can use `other` only.

Never use extra `{` or `}` except these placeholders.

## Style

- Native marketing tone, not word-for-word.
- Brand name **Handyman** stays Latin.
- Keep WhatsApp as WhatsApp (or the local conventional spelling: واتساب / واٹس ایپ / व्हाट्सएप).
- Western digits for numbers, phone, hours.
- Dummy Privacy/Terms/App promo copy: still translate fully (it is on the site).
- `LocaleSwitcher` language names stay in their own scripts (`English`, `العربية`, `اردو`, `हिन्दी`, `中文`, `Français`) — do not translate those six labels.
- `Metadata.keywords` is a comma-separated list: translate the terms, keep commas.

## Locale

Follow `tmp/i18n/BRIEF.md` locale notes for ar / ur / hi / zh / fr.
