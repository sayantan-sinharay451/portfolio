# Portfolio

Next.js portfolio with public site routes, an admin area, and a MongoDB-backed projects API.

## Local setup

Copy the environment template and install dependencies:

```bash
cp .env.example .env.local
npm install
```

Set `MONGODB_URI` in `.env.local` only when a database is available. When it is unset, the app skips the database connection and `GET /api/projects` returns an empty page.

Start the dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

Hosting credentials and a production deploy are out of scope for this repository's local setup. Do not commit `.env.local` or any real connection string.
