# Handyman

Marketing site for **Handyman** — renovation, AC, plumbing, and maintenance across the UAE ([handyman.ae](https://handyman.ae)). Built with Next.js and Shadcn UI.

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). English is the default and has no URL prefix. Arabic, Urdu, Hindi, Chinese, and French are under `/ar`, `/ur`, `/hi`, `/zh`, and `/fr`.

## Stack

- Next.js (App Router) + TypeScript
- Shadcn UI + Tailwind CSS
- `next-intl` for locales
- Hosting: Vercel (Contabo + Docker later)
- Repo: [MohammadAhmerMalick/handyman](https://github.com/MohammadAhmerMalick/handyman)

Business facts and agent rules: [`AGENTS.md`](AGENTS.md). Current UI queue: [`TASKS.md`](TASKS.md).

## Structure

Routes live under `src/app/[locale]/`. The root layout only passes children through. Chrome is `src/components/layout/`, page blocks are `src/components/sections/`, and shared pieces are `src/components/shared/`. Shadcn primitives stay in `src/components/ui/`.

Full folder map: [`docs/structure.md`](docs/structure.md).

## Data

Phone, hours, nav hrefs, FAQ ids, and the service catalogue live in `src/data`. Wording that changes per language lives in `messages/<locale>.json`. Pages and sections import both.

How a catalogue seed becomes a service page: [`docs/data.md`](docs/data.md).

## Languages

UI strings: `messages/`. Catalogue overlays: `src/data/services/i18n/<locale>/`. Sentence templates: `src/data/services/copy.ts`.

To edit a translation, or to add or remove a language: [`docs/i18n.md`](docs/i18n.md).
