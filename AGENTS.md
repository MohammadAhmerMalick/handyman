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

## Docs

- Repo layout: `docs/structure.md`
- `src/data` and how components read it: `docs/data.md`
- Adding, removing, or editing a language: `docs/i18n.md`

## Stack

- Next.js (App Router) with TypeScript
- Shadcn UI + Tailwind CSS
- Prefer existing Shadcn components; add new ones with the Shadcn CLI when needed
- Component folders (`src/components/`): `ui/` Shadcn only; `layout/` header/footer/shell; `sections/<name>/` page blocks; `shared/` logo, container, and other reused site pieces (see `.cursor/rules/components.mdc`)
- Component exports: declare a named `const`, then `export default Name` (or `export { Name }` for named exports). Do not use `export default function` / `export function` for new site components. Leave Shadcn CLI files in `ui/` as generated. Next.js route helpers such as `generateStaticParams` stay as named functions.
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
- Favicon / touch icons: `src/app/icon.tsx` uses `generateImageMetadata` for 16, 32, 48, 192, and 512 px from `public/icon.svg`. `src/app/apple-icon.tsx` generates 120, 152, 167, and 180 px Apple touch icons. Next.js emits the link tags. `favicon.ico` is not generated in code.
- Languages: English (default, unprefixed URLs), Arabic (`/ar/...`), Urdu (`/ur/...`), Hindi (`/hi/...`), Chinese (`/zh/...`), and French (`/fr/...`) via `next-intl`. To add, remove, or edit a language, follow `docs/i18n.md`.
- Scripts: Arabic and Urdu are RTL with Noto Sans Arabic; Hindi uses Noto Sans Devanagari; Chinese uses Noto Sans SC. UI copy is in `messages/*.json`; service catalogue overlays are in `src/data/services/i18n/<locale>/`; catalogue sentence templates are in `src/data/services/copy.ts`.

## Brand colors

| Token | Hex | Use |
| --- | --- | --- |
| Accent / primary | `#ffc527` | Primary buttons; headings on dark backgrounds |
| Dark surface / heading | `#222222` | Footer and other dark sections; heading text on light backgrounds (`heading` / `primary-foreground`) |
| Body text | `#434343` | Paragraphs on light backgrounds (`foreground`) |

Hex values live in `globals.css` only. In components use theme tokens (`bg-primary`, `text-heading`, `text-foreground`, …) — never raw hexes in `className`. Prefer the shared `Heading` / `PageTitle` components for titles. Do not introduce a second palette.

### Fonts

The website uses **multiple typefaces**, not one family for everything:

- Headings: **Bricolage Grotesque** (`--font-heading` / `font-heading`)
- Body / UI: **Outfit** (`--font-sans` / `font-sans`)
- Arabic / Urdu: **Noto Sans Arabic** (`--font-arabic`; `lang="ar"` and `lang="ur"`)
- Hindi: **Noto Sans Devanagari** (`--font-devanagari`; `lang="hi"`)
- Chinese: **Noto Sans SC** (`--font-chinese`; `lang="zh"`)

## Contact

- Phone / WhatsApp: `+971 54 514 9849` (raw: `971545149849`)
- Email: `mohammadahmermalick@gmail.com`
- Address: Marina, Dubai, UAE
- Service area: UAE

### Hours

No 24h / emergency offering for now. Stick to these hours only.

- Saturday–Thursday: 8:00am–9:00pm
- Friday: 9:00am–11:00am, then 4:00pm–9:00pm

### Property maintenance

- Reliable local team
- Flexible appointments
- Residential and rental properties

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
4. Services list and service detail (`/services/[slug]`)
5. FAQs
6. Privacy Policy (dummy)
7. Terms of Use (dummy)

Do not add extra routes, dashboards, or accounts unless asked.

Nav, footer, legal, and social hrefs/icons live in `src/data/links.ts`. Pages that are not built yet stay `#`. Live routes: `/`, `/about`, `/services`, `/services/[slug]`, `/faq`, `/contact`, `/privacy`, `/terms`, plus the same paths under `/ar`, `/ur`, `/hi`, `/zh`, and `/fr`. Folder map: `docs/structure.md`.

## SEO and analytics

Social / SEO images: `src/app/opengraph-image.tsx` uses `generateImageMetadata` for 1200×630 (OG), 1200×600 (Twitter), and 1080×1080 (square) from `public/icon.svg`. Locale layout metadata sets `metadataBase` (`https://handyman.ae`), title template, description, keywords, canonical URL, Open Graph, and Twitter card. Per-page metadata comes from `src/lib/pageMetadata.ts` (linked to `pages` in `links.ts`). LocalBusiness JSON-LD is in `src/components/shared/JsonLd.tsx`.

GA4 and Meta Pixel load from `src/components/shared/Analytics.tsx` only when `NEXT_PUBLIC_GA_MEASUREMENT_ID` / `NEXT_PUBLIC_META_PIXEL_ID` are set (see `.env.example`). Locale pages emit `hreflang` alternates. Researched title/description copy is still in `TASKS.md`.

## Services

The five labels below are highlights for home/footer. The full catalogue lives in `src/data/services/` (category seed modules + `buildService`), with detail pages at `/services/[slug]`. The services list page groups entries by category. How that data reaches components: `docs/data.md`.

Highlights:

- Villa, Flat, Office & Shop Renovation
- Air Conditioning Services
- Plumbing & Carpentry
- Masonry & Painting
- Handyman & General Maintenance

Catalogue covers general handyman, plumbing, electrical, carpentry, AC, painting, masonry/tiling, flooring, doors/windows, kitchen, bathroom, walls/ceilings, waterproofing, outdoor, furniture installation, smart home, commercial, rental/move-in, cleaning support, specialist/seasonal, and UAE-focused property maintenance. Electrical, refrigerant HVAC, and major roofing/waterproofing copy notes licensing or specialist limits where required. Emergency-labelled services mean priority visits within working hours — not 24/7.

No per-service prices. Quotes only (CTA / banner / popup / form section later).

## Content rules

- About, story, trust, testimonials, Privacy, and Terms: dummy text for now (lorem ipsum is fine). Replace section by section later.
- Home banner image: `public/Banner.png`
- Photos: `https://placehold.co/600x400` until real images exist.
- Map: placeholder until a real Google Maps embed is added.
- Header CTAs (WhatsApp vs Call vs quote), social icons, and section layout: decide in **UI designing mode**; track in `TASKS.md`.

## Upcoming features (do not build yet)

- Real logo file beyond the in-app wordmark (favicon is generated from `public/icon.svg`)
- Icon library + social icons and real profile URLs
- Trade license / legal company name
- Real Privacy / Terms copy
- Real about / trust / testimonial copy and photos
- Quote CTA, banner, popup, and quote form section (WhatsApp Get Quote is enough for now)
- Contact form submission (see recommendation below)
- Per-service pricing, if ever needed
- SEO research + recommended title/description
- Analytics measurement IDs in deployment env (scripts are ready)
- Move hosting from Vercel to Contabo (Docker + database)

### Contact form recommendation (later)

Do not send email from the form now. When we wire it:

1. Keep **Call** and **WhatsApp** (`https://wa.me/971545149849`) as the main UAE conversion paths.
2. Use a Next.js server action + **Resend** (or **Web3Forms** if we want zero inbox setup). Both are easy to manage; Resend fits this stack better long term.
3. Optional later: save submissions in a spreadsheet or a tiny database so they can review leads without opening email.

Until then, the form can be UI-only (no submit backend).
