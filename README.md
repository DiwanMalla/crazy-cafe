# Crazy Cafe

Daytime marketing site for **Crazy Cafe** — specialty coffee open 7am to 2pm, built with Next.js and Convex.

## Features

- Marketing pages: home, about, menu, contact
- Live menu powered by Convex
- Client-friendly menu admin at `/admin` (shared password)
- Responsive layout

## Stack

- Next.js 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- [Convex](https://convex.dev) (menu database + admin mutations)

## Getting started

```bash
npm install
```

### 1. Start Convex (terminal 1)

```bash
npx convex dev
```

This writes `NEXT_PUBLIC_CONVEX_URL` to `.env.local`.

### 2. Set the admin password (once)

```bash
npx convex env set ADMIN_PASSWORD 'your-secure-password'
```

### 3. Start the site (terminal 2)

```bash
npm run dev
```

Open:

- Site: [http://localhost:3000](http://localhost:3000)
- Menu admin: [http://localhost:3000/admin](http://localhost:3000/admin)

On first successful admin login, the starter menu is seeded automatically if the database is empty.

## Client menu editing

1. Go to `/admin`
2. Enter the shared admin password
3. Add / edit / delete categories and items
4. Changes show on `/menu` immediately

Do not put `/admin` in the public navigation — share the URL and password with the cafe owner only.

## Project structure

```
src/
  app/(site)/     # Public pages
  app/admin/      # Password-protected menu editor
  components/     # UI + admin panel
  content/        # Static site copy + fallback menu
convex/
  schema.ts       # menuCategories + menuItems
  menu.ts         # Public query + admin mutations
  seed.ts         # Starter menu seed
```

## Deploy notes

1. Create a Convex project (`npx convex login` then `npx convex dev`)
2. Set `ADMIN_PASSWORD` on the Convex deployment
3. Set `NEXT_PUBLIC_CONVEX_URL` on Vercel (or your host)
4. Deploy the Next.js app

## License

Private project — all rights reserved.
