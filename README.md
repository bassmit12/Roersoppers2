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

## Deployment

- **Database:** SQLite via `@payloadcms/db-sqlite`. Locally this is the `roersoppers.db` file. On serverless hosts
  such as Vercel, use a hosted libsql database (e.g. Turso) by setting `DATABASE_URL=libsql://…` and `DATABASE_AUTH_TOKEN`.
  For production, create migrations with `npm run payload migrate:create` and run them with `npm run payload migrate`.
- **Uploads:** stored in `./media` by default. Set `BLOB_READ_WRITE_TOKEN` to store them in Vercel Blob.
- **Instagram:** `/api/instagram-posts` fetches posts through Apify (`APIFY_TOKEN`) and caches them for a week.
  It only fetches the account set under Homepage → Instagram. Logged-in editors can force a refresh with `?refresh=1`.
