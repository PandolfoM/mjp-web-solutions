# MJP Web Solutions

The marketing site for MJP Web Solutions: a single-page app built with [Vite](https://vite.dev/), React and [React Router](https://reactrouter.com/), styled with Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a `.env` with the Cloudflare Turnstile site key for the contact form:

```bash
VITE_TURNSTILE_SITE_KEY=...
```

## Scripts

- `npm run dev`: dev server on port 3000
- `npm run build`: typecheck, then build into `dist/`
- `npm run preview`: serve the `dist/` build locally
- `npm run typecheck` / `npm run lint`

## Layout

- `index.html`: the page `<head>` (title, description, share tags, icons)
- `app/main.tsx`: entry point
- `app/router.tsx`: every route; the folders under `app/` mirror the URLs
- `components/`, `lib/`: shared UI and helpers
- `public/`: static files served as-is

## Deploying

MJP Hub builds the site and serves `dist/` from S3 + CloudFront, sending every page path to `index.html`. The contact form sends through MJP Hub's `/api/emails/send`, which checks the Turnstile token.
