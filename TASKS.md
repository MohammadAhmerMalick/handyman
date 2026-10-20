# Tasks

Tracker for UI designing mode. **Read this file first** instead of scanning the repo for what to do next. Check items off here when they ship. Do not invent business facts; see `AGENTS.md`. Deferred work lives in `.cursor/rules/upcoming.mdc`, not below.

## Now

- [ ] **18.** Analytics: drop real `NEXT_PUBLIC_GA_MEASUREMENT_ID` and `NEXT_PUBLIC_META_PIXEL_ID` into Vercel env (scripts already env-gated)
- [ ] **19.** SEO: researched title/description pass (replace dummy page descriptions when ready)

## Done this round

- [x] **8.** Quote CTA stays WhatsApp only (no home Call/WhatsApp strip)
- [x] **11.** Folder tidy: `Container` → `shared/`, navbar pieces → `layout/navbar/`
- [x] **12.** Heading font: **Bricolage Grotesque** (`font-heading`); body **Outfit**
- [x] **13.** Hours/contact facts pull from `src/data/contact.ts` (FAQs, footer, hero, links, service meta)
- [x] Arabic foundation: `next-intl`, `[locale]` routes, RTL + Noto Sans Arabic, locale switcher
- [x] SEO/analytics foundation: page metadata helper, LocalBusiness JSON-LD, GA4 + Meta Pixel via env
- [x] Locales: English, Arabic, Urdu, Hindi, Mandarin, French (routing, RTL, fonts, locale switcher)
- [x] **15.** UI copy in `messages/` for Arabic, Urdu, Hindi, Mandarin, and French
- [x] **16.** Service catalogue overlays in `src/data/services/i18n/<locale>/` (all 110 category files + `registry.ts`)
- [x] **17.** `hreflang` / locale alternates on pages and service details

## Already in place

Do not rebuild these unless asked.

- Home hero (Call + WhatsApp)
- Home services highlights, category slider, and dummy testimonials
- Home FAQ (preview of 8) and `/faq` (`showAll`)
- Site shell in root layout: TopBar, Navbar, Footer, scroll-to-top
- Get Quote → WhatsApp
- Pages: `/`, `/about`, `/services`, `/services/[slug]`, `/faq`, `/contact`, `/privacy`, `/terms` (+ `/ar`, `/ur`, `/hi`, `/zh`, `/fr`)
- Service detail page for each catalog trade
- Brand color tokens in CSS
- `src/data/contact.ts`
- `src/data/links.ts` (nav, services, contact, legal, social)
- `src/data/services/` (typed catalogue, category seeds, detail content builder)
- Service detail pages with FAQs, related sidebar, and contact hours from `contact.ts`
- Logo wordmark
- Favicon / Apple touch / social images from `public/icon.svg`
- Body font: Outfit · Heading font: Bricolage Grotesque

## Notes

- Quote popup/form, contact email sending, real logo, social URLs, Contabo/Docker: **do not build** until asked.
- Dummy copy and `https://placehold.co/600x400` are fine where the brief allows.
- Component folders: `ui/` Shadcn only; `layout/`, `sections/<name>/`, `shared/` — see `.cursor/rules/components.mdc`.
- Analytics stay off until env IDs are set (see `.env.example`).
