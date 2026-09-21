<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Handyman services website

Living project brief. Update this file as facts change. Do not invent business details that are not listed here. Dummy copy and placeholder images are allowed where noted.

## Repo

- Name: `handyman`
- Visibility: public
- GitHub: https://github.com/MohammadAhmerMalick/handyman
- SSH: `git@github.com:MohammadAhmerMalick/handyman.git`
- Description: Marketing site for Handyman — renovation, AC, plumbing, and maintenance across the UAE (`handyman.ae`). Next.js + Shadcn UI.
- License: UNLICENSED (public to view; not open-source licensed)
- Author: Mohammad Ahmer Malick `<mohammadahmermalick@gmail.com>`

This repo description is for GitHub/Cursor/`package.json` only. Do not use it as the public SEO title or meta description until that research pass.

## Working mode

We are in **UI designing mode**. Build page by page / section by section. Follow `TASKS.md` for the queue (read that file first). Keep recording new business facts here. Do not invent missing details. Deferred features stay unbuilt until asked (see Upcoming).

## Stack

- Next.js (App Router) with TypeScript
- Shadcn UI + Tailwind CSS
- Prefer existing Shadcn components; add new ones with the Shadcn CLI when needed
- Component folders (`src/components/`): `ui/` Shadcn only; `layout/` header/footer/shell; `sections/<name>/` page blocks; `shared/` logo, container, and other reused site pieces (see `.cursor/rules/components.mdc`)
- Domain: `handyman.ae`
- Hosting now: Vercel
- Hosting later: Contabo with Docker and database services (upcoming; do not set up now)
- Repo: public GitHub `MohammadAhmerMalick/handyman` (`git@github.com:MohammadAhmerMalick/handyman.git`)
- Repo description: Marketing site for Handyman — renovation, AC, plumbing, and maintenance across the UAE (`handyman.ae`). Next.js + Shadcn UI.

## Site purpose

Marketing site for **Handyman** — renovation, maintenance, and trade services across the UAE. Explain the work clearly and make it easy to call, WhatsApp, or request a quote.

## Brand

- Business name: Handyman
- Logo: text wordmark **Handyman** until a PNG/SVG is supplied
- Favicon: keep the default Next.js favicon until the real logo exists
- Language shipping now: English only
- Arabic: upcoming (site should be structured so `ar` can be added later; do not build i18n yet)

## Brand colors

| Token | Hex | Use |
| --- | --- | --- |
| Accent / primary | `#ffc527` | Primary buttons; headings on dark backgrounds |
| Dark surface | `#222222` | Footer and other dark sections; heading text on light backgrounds |
| Body text | `#434343` | Paragraphs on light backgrounds |

Map these to CSS variables / Shadcn theme tokens. Do not introduce a second palette.

### Fonts

The website uses **multiple typefaces**, not one family for everything:

- Headings: a distinct heading / display font
- Body and UI: a separate body font

Specific family names are not chosen yet. Do not invent them. Geist in the starter layout is a placeholder until fonts are named in a build session.

## Contact

- Phone / WhatsApp: `+971 54 514 9849` (raw: `971545149849`)
- Email: `mohammadahmermalick@gmail.com`
- Address: Marina, Dubai, UAE
- Service area: UAE

### Hours

No 24h / emergency offering for now. Stick to these hours only.

- Saturday–Thursday: 8:00am–9:00pm
- Friday: 9:00am–11:00am, then 4:00pm–9:00pm

### Map

Contact page can use a map **placeholder** (not a real embed yet). Replace later with a Google Maps embed for Marina, Dubai.

### Legal / company

Trade license number and legal company name: unknown. Do not invent. Add when provided.

Privacy Policy and Terms of Use: include as pages with **dummy copy** for now. Replace when the legal company name / license is known.

## Social

Do not add an icon library or pick social platforms yet. That happens in dev mode. Do not invent profile URLs.

## Pages

1. Home
2. About us
3. Contact
4. Services list
5. Privacy Policy (dummy)
6. Terms of Use (dummy)

Do not add extra routes, dashboards, or accounts unless asked.

Nav, footer, legal, and social hrefs/icons live in `src/data/links.ts`. Pages that are not built yet stay `#`.

## SEO and analytics

Do **not** write a title/description yet and do **not** add meta tags in code. Later: research UAE handyman / renovation search terms and recommend a title + short description.

Analytics (upcoming, do not add now): Google Analytics and Meta Pixel.

## Services

The five labels below are highlights, not the full offering. The services page should list **as many relevant trades as is reasonable** for a UAE renovation / handyman business. Expand from this starter set; do not treat it as a closed list.

Highlights:

- Villa, Flat, Office & Shop Renovation
- Air Conditioning Services
- Plumbing & Carpentry
- Masonry & Painting
- Handyman & General Maintenance

Starter catalog to expand from (edit later): electrical, tiling, gypsum / false ceiling, waterproofing, kitchen & bathroom renovation, flooring, aluminum & glass, welding & fabrication, furniture assembly, appliance installation, CCTV & smart locks, plastering, wallpaper, outdoor / villa maintenance.

No per-service prices. Quotes only (CTA / banner / popup / form section later).

## Content rules

- About, story, trust, testimonials, Privacy, and Terms: dummy text for now (lorem ipsum is fine). Replace section by section later.
- Photos: `https://placehold.co/600x400` until real images exist.
- Map: placeholder until a real Google Maps embed is added.
- Header CTAs (WhatsApp vs Call vs quote), social icons, and section layout: decide in **UI designing mode**; track in `TASKS.md`.

## Upcoming features (do not build yet)

- Arabic language / RTL
- Real logo (PNG or SVG) and favicon
- Icon library + social icons and real profile URLs
- Trade license / legal company name
- Real Privacy / Terms copy
- Real Google Maps embed (Marina, Dubai)
- Real about / trust / testimonial copy and photos
- Quote CTA, banner, popup, and quote form section
- Contact form submission (see recommendation below)
- Per-service pages or pricing, if ever needed
- SEO research + recommended title/description (then implement meta tags)
- Google Analytics
- Meta Pixel
- Move hosting from Vercel to Contabo (Docker + database)

### Contact form recommendation (later)

Do not send email from the form now. When we wire it:

1. Keep **Call** and **WhatsApp** (`https://wa.me/971545149849`) as the main UAE conversion paths.
2. Use a Next.js server action + **Resend** (or **Web3Forms** if we want zero inbox setup). Both are easy to manage; Resend fits this stack better long term.
3. Optional later: save submissions in a spreadsheet or a tiny database so they can review leads without opening email.

Until then, the form can be UI-only (no submit backend).
