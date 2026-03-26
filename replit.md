# PropertyShield UK Ltd — Roofing Company Website

## Overview

PropertyShield UK Ltd company website at propertyshielduk.com. React/Vite frontend with Express/Node.js backend and PostgreSQL via Drizzle ORM. Deployed on Render.

## Stack

- **Frontend**: React + Vite + TypeScript + Tailwind CSS + shadcn/ui
- **Backend**: Express 5 (Node.js)
- **Database**: PostgreSQL + Drizzle ORM
- **Monorepo**: pnpm workspaces
- **Deployment**: Render (connected to GitHub repo)
- **Email**: Nodemailer with Gmail App Password

## Structure

```text
client/                     # Frontend (React + Vite)
├── index.html              # HTML shell with schema.org (RoofingContractor, FAQPage), OG tags, favicon system, SSR fallback
├── public/
│   ├── sitemap.xml         # 38+ URLs including 16 location pages + 7 blog URLs
│   ├── robots.txt          # Allows all crawlers, references sitemap
│   ├── gallery/            # Project photos
│   └── (favicons)          # 13 branded favicon assets
├── src/
│   ├── App.tsx             # SPA routing with per-page SEO (title, meta, canonical, OG)
│   ├── pages/
│   │   ├── Home.tsx        # Homepage with services grid, trust bar, testimonials, FAQ, areas
│   │   ├── Areas.tsx       # Areas hub page with links to all 16 location pages
│   │   ├── AreaDetail.tsx  # Programmatic location page component (BreadcrumbList + Service schema)
│   │   ├── ServiceDetail.tsx # Service page (BreadcrumbList + Service schema)
│   │   ├── Blog.tsx        # Blog listing page with 6 articles
│   │   ├── BlogArticle.tsx # Blog article detail page with BlogPosting JSON-LD schema
│   │   ├── Services.tsx, About.tsx, Gallery.tsx, Reviews.tsx, Contact.tsx, Terms.tsx, Privacy.tsx
│   │   └── not-found.tsx
│   ├── lib/
│   │   ├── area-seo.ts     # 16 area entries with unique local content per area
│   │   ├── service-seo.ts  # 8 service page data entries
│   │   └── queryClient.ts
│   └── components/
│       ├── layout/
│       │   ├── MainLayout.tsx, Navbar.tsx, Footer.tsx (with area/service/blog links)
│       │   └── CookieConsent.tsx
│       └── ui/             # shadcn components
server/
├── index.ts, routes.ts, email.ts, storage.ts
├── seo.ts                  # Server-side SEO injection (unique title/desc/canonical/OG per URL)
├── static.ts               # Production static serving with SEO injection
├── vite.ts                 # Dev server with SEO injection
shared/
└── schema.ts               # Drizzle schema (enquiries table)
```

## SEO Architecture

- **Server-side SEO injection**: `server/seo.ts` injects unique title, meta description, canonical, OG, and Twitter tags per URL into the HTML before serving — ensures crawlers see correct metadata without JS rendering
- **Programmatic location pages**: 16 area pages at `/areas/:slug` with unique content per area (not templated)
- **Service pages**: 8 service pages at `/services/:slug`
- **Blog section**: 6 articles at `/blog/:slug` with BlogPosting JSON-LD schema, targeting local roofing keywords
- **Schema markup**: RoofingContractor + AggregateRating + reviews + service catalog + potentialAction (index.html), BreadcrumbList + Service (per page), BlogPosting (per article)
- **Internal linking**: Homepage → area links, Footer → area/service/blog links, Areas hub → all 16 areas, each area page → 5 nearby areas, blog articles → contact CTA
- **SSR fallback**: index.html contains crawlable links to all services, 16 area pages, and all blog articles
- **Sitemap**: 38+ URLs with lastmod dates, changefreq, and priorities
- **Canonical URLs**: Server-side injection per URL, including correct canonicals for alias routes
- **Fonts**: Only DM Sans (sans) + Playfair Display (serif) — defined as CSS vars

## Key Configuration

- **Business address**: 9 Frosterley Drive, Darlington, DL1 2JA (used in all schema markup)
- **Phone**: 07753 351619 (Alfie), 07424 376189 (Jacob)
- **Email**: propertyshield128@gmail.com
- **Company No**: 15707554
- **Social**: Facebook & Instagram (currently @propertyshiield — double 'i' typo)
- **Domain**: propertyshielduk.com (hosted on Render)

## Deployment

- Push to GitHub triggers Render deploy
- GitHub push command: `TOKEN=$(echo -n "${GITHUB_TOKEN}" | tr -d '[:space:]') && git push "https://x-access-token:${TOKEN}@github.com/alfiechicoboy-crypto/propertyshield.git" master`
- Build command on Render: `npm run build`
- Start command: `npm run start`
- Environment vars on Render: DATABASE_URL, GMAIL_USER, GMAIL_APP_PASSWORD

## Development

- `npm run dev` — starts Express backend + Vite frontend
- Workflows: "Start application" runs `npm run dev`
