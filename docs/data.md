# Data

Facts, ids, hrefs, and the service catalogue live in `src/data`. Sentences that change per language live in `messages/<locale>.json`. Components import both: data for structure, `next-intl` for the words on screen.

Do not put a new business fact only in a component. Add it to `src/data` (and to `AGENTS.md` when it is a real business fact), then read it from the component.

## Two stores

| Store | Holds | Example |
| --- | --- | --- |
| `src/data` | Stable facts, ids, icons, hrefs, English catalogue seeds | Phone number, FAQ ids, service slug |
| `messages/*.json` | Translated UI copy keyed to those ids | `Faq.items.hours.question`, `Nav.about` |

A component typically maps an id list from `src/data` and calls `t(\`items.${id}.…\`)` for the text. Placeholders such as `{phone}` and `{address}` are filled from `contact` at render time.

Privacy and Terms pages read `Privacy` and `Terms` in `messages/*.json`, plus `contact` for the closing line.

## Site facts

### `contact.ts`

Single object: address, map link, email, hours, phone (`display`, `tel:` href, raw digits), WhatsApp href, service area. Top bar, navbar, footer, hero, contact details, JSON-LD, and FAQ placeholders all import `contact`. Change the number here once.

### `links.ts`

`pages` is one record per route (`home`, `about`, `services`, `faq`, `contact`, `privacy`, `terms`) with `href`, icon, and English title/description.

Derived lists:

- `navLinks` — header
- `legalLinks` — footer legal row
- `footerLinkGroups` — footer columns
- `contactLinks` — phone, WhatsApp, email, map
- `pageLinks` — used by the `@pageTitle` slot to know which paths get a title
- `socialLinks` — icon row (placeholder profile URLs)

Visible nav labels come from `messages` → `Nav.<id>`, using `link.id`. Page titles and meta descriptions come from `messages` → `Pages.<id>`, via `src/lib/pageMetadata.ts` and `PageTitle`. The English strings on `pages` are the fallback shape and the href source.

### `about.ts`

`aboutHighlightIds` plus an icon per id. `AboutHighlightsSection` renders `messages` → `About.items.<id>`.

### `faqs.ts`

`faqIds` is the full list. `homepageFaqCount` (`8`) is how many the home page shows before search. `FaqSection` renders `messages` → `Faq.items.<id>`, with hours and contact filled from `contact` and `Hours`.

### `testimonials.ts`

Each item has `id`, `name`, `avatarSrc`, and `serviceSlug`. `TestimonialsSection` loads the quote and role from `messages` → `Testimonials.items.<id>`, and the service title from the locale catalogue via `getServiceItemBySlug`.

## Service catalogue

English seeds are the source. Other locales overlay translated fields, then sentence templates turn a seed into a detail page.

```
catalog/<category>.ts     English ServiceSeed[]
        ↓
i18n/<locale>/<category>.json   overlay (title, angle, lists, …)
        ↓
copy.ts                   per-locale sentence templates
images.ts / icons.ts      photos and Lucide icons
        ↓
buildService()            ServiceDetail
        ↓
index.ts                  getServiceBySlug, getCatalogByCategory, …
        ↓
sections/services/*       cards and detail page
```

| File | Role |
| --- | --- |
| `types.ts` | `ServiceCategoryId`, `ServiceItem`, `ServiceDetail` |
| `buildService.ts` | `ServiceSeed` type, and the function that merges a seed, copy helpers, and images into `ServiceDetail` |
| `catalog/<category>.ts` | English seeds. One file per category. `createSeed` stamps the category id |
| `categories.ts` | Category id, slug, English title and description, display order |
| `i18n/<locale>/*.json` | Translated seed fields. No English folder |
| `i18n/registry.ts` | Generated imports of those JSON files. Do not edit by hand |
| `copy.ts` | `facts` and `helpers` per locale. Builds introductions, FAQs, meta title, and body paragraphs around the seed |
| `images.ts` | `/services/categories/<id>.jpg` plus hero, sidebar, and supporting image records |
| `icons.ts` | Lucide icon per category |
| `index.ts` | Loads every seed, applies the locale overlay, fills related slugs, caches the catalogue |

`index.ts` keeps English snapshots (`highlightServices`, `catalogByCategory`, `publishedServices`) and locale functions (`getHighlightServices(locale)`, `getCatalogByCategory(locale)`, `getServiceBySlug(slug, locale)`). Pass the locale when the screen shows translated service titles. The home category slider uses the English `catalogByCategory` only for grouping and counts; the titles it shows come from `messages` → `ServiceCategories`.

Highlight slugs (home and footer) are fixed in `index.ts`:

- `villa-flat-office-and-shop-renovation`
- `air-conditioning-services`
- `plumbing-and-carpentry`
- `masonry-and-painting`
- `handyman-and-general-maintenance`

`serviceHref(slug)` is `/services/${slug}`. `categoryHref(slug)` is `/services#${slug}`. `next-intl` `Link` adds the locale prefix.

## Who reads what

| UI | Data | Messages |
| --- | --- | --- |
| `TopBar`, `HeroSection`, `ContactDetails`, `JsonLd` | `contact` | surrounding labels |
| `NavMenu`, `NavigationSheet` | `navLinks`, `contact`, `pages` | `Nav` |
| `Footer` | `footerLinkGroups`, `legalLinks`, `contact`, `getHighlightServices` | `Footer`, `Hours` |
| `SocialLinks` | `socialLinks` | — |
| `PageTitle`, `pageMetadata` | `pages`, `getPageLink`, `contact` | `Pages`, `PageTitle` |
| `AboutHighlightsSection` | `aboutHighlightIds`, icons, `contact`, `pages` | `About` |
| `FaqSection` | `faqIds`, `homepageFaqCount`, `contact` | `Faq`, `Hours` |
| `TestimonialsSection` | `testimonials`, `getServiceItemBySlug` | `Testimonials` |
| `ServiceCategorySlider` | `catalogByCategory`, `categoryImageSrc` | `Categories`, `ServiceCategories` |
| `ServicesHighlights` | `getHighlightServices(locale)`, `pages` | section headings |
| `ServicesCatalog` | `getCatalogByCategory(locale)`, icons, images | `ServiceCategories` |
| `ServiceDetail` | `ServiceDetail` from `getServiceBySlug`, `contact` | `ServiceCategories` and chrome |
| `[locale]/services/[slug]/page.tsx` | `getServiceBySlug`, `publishedServices` | — (copy is already on the detail record) |
| Privacy and Terms pages | `contact` | `Privacy`, `Terms`, `Legal` |

## Add or change a service

1. Add or edit the English seed in `src/data/services/catalog/<category>.ts`. Slugs stay unique. `category` matches the file and `ServiceCategoryId`.
2. If the category is new, add it to `types.ts`, `categories.ts`, `icons.ts`, and `images.ts`, and add a photo at `public/services/categories/<id>.jpg`.
3. Register the seed array in `allSeeds` inside `index.ts`.
4. Follow `docs/i18n.md` to refresh `tmp/i18n/source`, translate overlays, and regenerate `registry.ts` when a category file was added.
5. Add `ServiceCategories.<id>` in every `messages/<locale>.json` when the category title or description is new.

Detail pages are generated from `publishedServices`. A new slug appears at `/services/<slug>` without a new route file.
