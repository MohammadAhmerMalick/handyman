# File structure

Where the site lives in the repo. How `src/data` is shaped and read by components is in `docs/data.md`. How to add or edit a language is in `docs/i18n.md`.

## Root

| Path | Role |
| --- | --- |
| `AGENTS.md` | Business facts and working rules for agents |
| `TASKS.md` | Current UI queue |
| `README.md` | How to run the site, with links into these docs |
| `docs/` | Layout, data, translation, deploy (`deploy-vps.md`, `ssl-docker-nginx.md`) |
| `deploy/` | VPS scripts (`setup-ssl.sh`, certbot issue/renew) |
| `nginx/` | Container nginx config (`conf.d/`, `snippets/`) |
| `messages/` | UI strings per locale (`en`, `ar`, `ur`, `hi`, `zh`, `fr`) |
| `public/` | Static images, category photos, hero video, `icon.svg` |
| `tmp/i18n/` | Translation tooling (extract, validate, registry). Required. See `docs/i18n.md` |
| `src/` | Application code |

## `src/app`

The root layout (`src/app/layout.tsx`) only passes children through. Locale `html` / `body`, fonts, and the site shell live in `src/app/[locale]/layout.tsx`.

English URLs have no prefix (`/about`). Other locales use `/{locale}/about`. `src/proxy.ts` runs the `next-intl` middleware.

| Route file | URL |
| --- | --- |
| `[locale]/page.tsx` | `/` |
| `[locale]/about/page.tsx` | `/about` |
| `[locale]/services/page.tsx` | `/services` |
| `[locale]/services/[slug]/page.tsx` | `/services/[slug]` |
| `[locale]/faq/page.tsx` | `/faq` |
| `[locale]/contact/page.tsx` | `/contact` |
| `[locale]/privacy/page.tsx` | `/privacy` |
| `[locale]/terms/page.tsx` | `/terms` |

`[locale]/@pageTitle/` is a parallel route. It renders `PageTitle` for the current path. The service detail slot uses the service title instead of the generic page title.

Generated images sit next to the root layout, not under `[locale]`:

- `icon.tsx` — favicon sizes from `public/icon.svg`
- `apple-icon.tsx` — Apple touch sizes
- `opengraph-image.tsx` — social images
- `globals.css` — brand tokens and per-language font switches

## `src/components`

| Folder | Put here |
| --- | --- |
| `ui/` | Shadcn CLI primitives only |
| `layout/` | Top bar, navbar, footer, locale switcher, scroll-to-top |
| `layout/navbar/` | `Navbar`, `NavMenu`, `NavigationSheet` |
| `sections/` | Page blocks (`HeroSection`, `FaqSection`, `AboutHighlightsSection`, …) |
| `sections/services/` | Catalogue, category slider, highlights, detail |
| `sections/contact/` | Contact form and details |
| `shared/` | Logo, container, heading, page title, analytics, JSON-LD |

Pages compose sections. Sections read `src/data` and `messages`. They do not own business facts.

## Other `src` folders

| Path | Role |
| --- | --- |
| `src/data/` | Facts, ids, hrefs, and the service catalogue. See `docs/data.md` |
| `src/i18n/` | `routing.ts` (locale list), `locales.ts` (RTL, fonts, `hreflang`), `request.ts` (loads `messages`), `navigation.ts` (`Link`, `useRouter`) |
| `src/lib/pageMetadata.ts` | Per-page title, description, and `hreflang`, keyed by page id from `links.ts` |
| `src/hooks/` | Small client hooks (scroll state) |
| `src/proxy.ts` | `next-intl` middleware matcher |

`next.config.ts` wraps the app with the `next-intl` plugin pointed at `src/i18n/request.ts`.
