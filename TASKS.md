# Tasks

Tracker for UI designing mode. **Read this file first** instead of scanning the repo for what to do next. Check items off here when they ship. Do not invent business facts; see `AGENTS.md`. Deferred work lives in `.cursor/rules/upcoming.mdc`, not below.

## Now

Next up is **1**. Work in this order unless the user picks a different item.

- [ ] **1.** Move `Navbar` into the root layout so every page shares it
- [ ] **2.** Point **Get Quote** at WhatsApp (or Call) until a quote form exists
- [ ] **3.** Build the **footer**: phone, WhatsApp, email, hours, Marina, nav links
- [ ] **4.** Add dummy **Privacy** and **Terms** routes
- [ ] **5.** **Contact** page: details, hours, map placeholder, UI-only form
- [ ] **6.** Home **services highlights** (the five trades)
- [ ] **7.** **Services** list page (broad UAE catalog, no prices)
- [ ] **8.** Repeat Call / WhatsApp as a home **strip** (not a quote popup)
- [ ] **9.** **About us** page with dummy copy
- [ ] **10.** Home **trust / testimonials** block (dummy)
- [ ] **11.** Tidy folders: `Container` → `shared/`, drop duplicate navbar files
- [ ] **12.** Second **heading font** (name it, then wire `font-heading`) — blocked until a family is named
- [ ] **13.** Site **hours** visible in footer and Contact; do not advertise 24h (often lands with 3 and 5)
- [ ] **14.** Confirm `AGENTS.md` working mode stays **UI designing** (not pre-UI)

## Already in place

Do not rebuild these unless asked.

- Home hero (Call + WhatsApp)
- Navbar on the home page only
- Brand color tokens in CSS
- `src/data/contact.ts`
- Logo wordmark
- Body font: Outfit (heading family still TBD)

## Notes

- Quote popup/form, contact email sending, SEO meta, analytics, Arabic, real logo, social URLs, real map: **do not build** until asked.
- Dummy copy and `https://placehold.co/600x400` are fine where the brief allows.
- Component folders: `ui/` Shadcn only; `layout/`, `sections/<name>/`, `shared/` — see `.cursor/rules/components.mdc`.
