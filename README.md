# De Roersoppers – Payload CMS

The Roersoppers website (a rebuild of `Roersoppers2`) with [Payload CMS](https://payloadcms.com) built in.
Payload runs inside the same Next.js app: the site is at `/` and the admin panel is at `/admin`.

## Getting started

```bash
cp .env.example .env     # fill in PAYLOAD_SECRET (and APIFY_TOKEN for the Instagram feed)
npm install
npm run seed             # fills an empty database with the content of the original site
npm run dev
```

Open http://localhost:3000/admin and create the first admin user.

`npm run seed:fresh` deletes all pages, swim groups, trainings and media and seeds them again.

## What editors can manage

| In the admin                  | What it controls                                                          |
| ----------------------------- | ------------------------------------------------------------------------- |
| **Website → Homepage**        | Hero (video, text, buttons), about, groups, pool, Instagram and contact sections |
| **Website → Navigatie**       | Menu items and dropdowns                                                  |
| **Website → Site-instellingen** | Name, SEO and footer (links, contact details, social media)             |
| **Inhoud → Pagina's**         | All other pages, built from blocks (cards, callouts, tables, downloads, CTAs) |
| **Zwemmen → Zwemgroepen**     | Groups on `/zwemgroepen` (sorted by the *Volgorde* field)                 |
| **Zwemmen → Trainingen**      | The weekly schedule on `/trainingsschema`                                 |
| **Formulieren → Contactberichten** | Messages sent with the contact form on the homepage                  |

A new page only needs a URL path, such as `informatie/nieuws`. The page blocks *Zwemgroepen overzicht* and
*Trainingsschema* pull their content from the collections above, so they can be placed on any page.

Pages are generated statically. Saving anything in the admin revalidates the site, so changes show up right away.

## Deployment (Vercel)

`vercel.json` makes Vercel run `npm run ci`, which applies database migrations and then builds.

Environment variables in Vercel:

| Variable | Value |
| --- | --- |
| `DATABASE_URL` | Turso URL, `libsql://…` |
| `DATABASE_AUTH_TOKEN` | Turso token |
| `PAYLOAD_SECRET` | Long random string (`openssl rand -hex 32`) |
| `BLOB_READ_WRITE_TOKEN` | Added automatically when you create a Blob store under *Storage* |
| `APIFY_TOKEN` | For the Instagram feed |

Uploads go straight from the browser to Vercel Blob, so photos larger than Vercel's 4.5 MB request limit work.

### Changing the schema

Locally, Payload updates the SQLite schema automatically. After changing collections, globals or blocks,
create a migration and commit it; the next deploy applies it:

```bash
npm run payload migrate:create <name>
```

### Filling a new production database

Put the production values in `.env.turso.local` (gitignored), then run the seed against it:

```bash
set -a && . ./.env.turso.local && set +a && npm run seed
```

`.env.turso.local` needs `DATABASE_URL`, `DATABASE_AUTH_TOKEN` and `BLOB_READ_WRITE_TOKEN`, so the seeded
photos and video are uploaded to Vercel Blob instead of the local `./media` folder.

### Instagram

`/api/instagram-posts` fetches posts through Apify (`APIFY_TOKEN`) and caches them for a week. It only fetches
the account set under Homepage → Instagram. Logged-in editors can force a refresh with `?refresh=1`.
