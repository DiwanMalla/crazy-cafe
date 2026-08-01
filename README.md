# Crazy Cafe

Daytime marketing site for **Crazy Cafe** — a neon-energy cafe open 7am to 2pm, built with Next.js.

Bold mornings. Loud coffee.

## Features

- Home page with full-bleed hero, vibe section, and hours/location
- About page with cafe story
- Categorized menu (coffee, bites, sweets, cold drinks)
- Contact page with mailto form, hours, and map link
- Static content modules — edit copy without touching page components
- Responsive layout with mobile nav
- Neon diner visual identity (ink / charcoal / electric lime)

## Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- `next/font` (Bebas Neue + DM Sans)

No backend or database for v1 — everything is static.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command         | Description              |
| --------------- | ------------------------ |
| `npm run dev`   | Start local dev server   |
| `npm run build` | Production build         |
| `npm run start` | Serve production build   |
| `npm run lint`  | Run ESLint               |

## Project structure

```
src/
  app/           # Routes: /, /about, /menu, /contact
  components/    # Header, footer, menu, hours, contact form
  content/       # Editable site copy, hours, and menu data
```

### Edit cafe content

| File | What it controls |
| ---- | ---------------- |
| [`src/content/site.ts`](src/content/site.ts) | Name, tagline, address, phone, about copy |
| [`src/content/hours.ts`](src/content/hours.ts) | Opening hours |
| [`src/content/menu.ts`](src/content/menu.ts) | Menu categories and items |

## Pages

| Route | Purpose |
| ----- | ------- |
| `/` | Hero, vibe, hours & location |
| `/about` | Cafe story |
| `/menu` | Full menu by category |
| `/contact` | Enquiry form + hours + map |

## Deploy

Deploy on [Vercel](https://vercel.com/new):

```bash
npx vercel
```

Or connect the [GitHub repo](https://github.com/DiwanMalla/crazy-cafe) in the Vercel dashboard for automatic previews and production deploys.

## License

Private project — all rights reserved.
