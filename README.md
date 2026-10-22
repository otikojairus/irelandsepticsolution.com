# Ireland Septic Solutions

Call-first pSEO site for septic services across the Republic of Ireland. Built with Next.js (App Router), modeled on [elevatorrepair.com](../elevatorrepair.com) with distinct layout and theming.

## Pages

**176** programmatic routes from `scripts/pseo-ireland-septic.xlsx` (sheet 1):

- 12 national services
- 60 city pages (5 cities × 12 services)
- 104 county pages (26 counties × 4 services)

Regenerate `lib/pages.ts` after spreadsheet updates:

```bash
python3 scripts/generate-pages.py
```

## Images

Service photos live in `public/images/` (downloaded from [Unsplash](https://unsplash.com) so they always load). Credits are in `lib/images.ts`. To refresh:

```bash
# URLs are in lib/images.ts comments; re-run curl from README or update files manually
```

## Environment

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (default `https://irelandsepticsolutions.com`) |
| `NEXT_PUBLIC_PHONE_DISPLAY` | Phone shown in UI |
| `NEXT_PUBLIC_PHONE_E164` | `tel:` link format |

## SEO QA

Automated checks (unique H1/intro, FAQ count, word counts, internal links, title/meta length):

```bash
npm run validate:seo
```

Manual: [Google Rich Results Test](https://search.google.com/test/rich-results), mobile PageSpeed on `/`, `/[slug]`, `/services`, `/locations`.

## Develop

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm start
```

Or Docker:

```bash
docker compose up --build
```
