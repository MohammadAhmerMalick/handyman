# Tasks

Tracker for UI designing mode. **Read this file first** instead of scanning the repo for what to do next. Check items off here when they ship. Do not invent business facts; see `AGENTS.md`. Deferred work lives in `.cursor/rules/upcoming.mdc`, not below.

## Now

Remaining open items are skipped for now (**8**, **11**, **12**, **13**) unless the user asks for them.

- [x] **1.** Move `Navbar` into the root layout so every page shares it
- [x] **2.** Point **Get Quote** at WhatsApp (or Call) until a quote form exists
- [x] **3.** Build the **footer**: phone, WhatsApp, email, hours, Marina, nav links
- [x] **4.** Add dummy **Privacy** and **Terms** routes
- [x] **5.** **Contact** page: details, hours, map placeholder, UI-only form
- [x] **6.** Home **services highlights** (the five trades)
- [x] **7.** **Services** list page (broad UAE catalog, no prices)
- [ ] **8.** Repeat Call / WhatsApp as a home **strip** (not a quote popup)
- [x] **9.** **About us** page with dummy copy
- [x] **10.** Home **trust / testimonials** block (dummy)
- [ ] **11.** Tidy folders: `Container` → `shared/`, drop duplicate navbar files
- [ ] **12.** Second **heading font** (name it, then wire `font-heading`) — blocked until a family is named
- [ ] **13.** Site **hours** visible in footer and Contact; do not advertise 24h (often lands with 3 and 5)
- [x] **14.** Confirm `AGENTS.md` working mode stays **UI designing** (not pre-UI)

## Already in place

Do not rebuild these unless asked.

- Home hero (Call + WhatsApp)
- Home services highlights, category slider, and dummy testimonials
- Home FAQ (preview of 8) and `/faq` (`showAll`)
- Site shell in root layout: TopBar, Navbar, Footer, scroll-to-top
- Get Quote → WhatsApp
- Pages: `/`, `/about`, `/services`, `/services/[slug]`, `/faq`, `/contact`, `/privacy`, `/terms`
- Service detail page for each catalog trade
- Brand color tokens in CSS
- `src/data/contact.ts`
- `src/data/links.ts` (nav, services, contact, legal, social)
- `src/data/services/` (typed catalogue, category seeds, detail content builder)
- Service detail pages with FAQs, related sidebar, and contact hours from `contact.ts`
- Logo wordmark
- Favicon / Apple touch / social images from `public/icon.svg` (`icon.tsx`, `apple-icon.tsx`, `opengraph-image.tsx` with multi-size `generateImageMetadata`)
- Body font: Outfit (heading family still TBD)

## Notes

- Quote popup/form, contact email sending, SEO meta, analytics, Arabic, real logo, social URLs, real map: **do not build** until asked.
- Dummy copy and `https://placehold.co/600x400` are fine where the brief allows.
- Component folders: `ui/` Shadcn only; `layout/`, `sections/<name>/`, `shared/` — see `.cursor/rules/components.mdc`.
- Task **13** is partly covered (hours already in footer and Contact); leave unchecked until explicitly closed.
