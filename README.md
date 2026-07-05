# Jasper Jessie — Portfolio

Next.js (App Router) + Tailwind CSS. No external database — content lives in this repo as code/Markdown, which is your new "CMS."

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where everything lives (your "database")

| Content | Where to edit |
|---|---|
| Name, tagline, bio summary, email, social links | `data/site.ts` |
| Services (each a full page) | one `.mdx` file per service in `content/services/` |
| Career associations (orgs + school engagements) | `data/career.ts` + optional logo files in `public/logos/` |
| Resources (guides, handouts — not personal docs) | `data/downloads.ts` + drop files in `public/downloads/` |
| Blog posts | add a new `.mdx` file to `content/blog/` |
| Full bio page text | `app/bio/page.tsx` |

### Adding a blog post

Create `content/blog/my-post-slug.mdx`:

```mdx
---
title: "My Post Title"
date: "2026-07-05"
excerpt: "One-sentence summary shown on the blog list."
tags: ["Education", "AI"]
---

Write your post in normal Markdown here.
```

It shows up automatically at `/blog/my-post-slug` and on the `/blog` index — no rebuild step needed beyond a normal git push (Vercel rebuilds on every push).

### Editing or adding a service

Each service is its own page at `/services/<slug>`, sourced from `content/services/<slug>.mdx` — same pattern as blog posts, so it's the same GitHub web-editor workflow.

```mdx
---
title: "Curriculum Designing"
icon: "📚"
summary: "One-line teaser shown on the Services grid and homepage cards."
order: 4
---

Full write-up goes here in normal Markdown — what the service includes, who it's
for, how an engagement runs, examples if you have them.
```

`order` controls display order (lower first) — the homepage preview shows whichever 4 services have the lowest `order` values. To add a brand-new service, add a new `.mdx` file here; there's no separate list to update.

### Adding a downloadable resource

1. Put the file in `public/downloads/your-file.pdf`.
2. Add an entry to `data/downloads.ts` pointing at `/downloads/your-file.pdf`.

It shows up on `/resources`. Note: this site intentionally does not publish a resume for direct download — keep personal documents out of `data/downloads.ts`.

### Career association logos

The landing page shows two tiers of associations (defined in `data/career.ts`): organizations worked with directly, and school consulting engagements via Educational Initiatives (Ei). Each entry renders as a monogram tile until you provide a real logo:

1. Drop the image into `public/logos/` (SVG or transparent PNG works best, e.g. `public/logos/amazon.svg`).
2. Set the `logo` field on that entry in `data/career.ts`, e.g. `{ name: "Amazon", logo: "/logos/amazon.svg" }`.

### Dark mode

Handled by Tailwind's `class` strategy — toggled via the sun/moon button in the nav (`components/ThemeToggle.tsx`), persisted in `localStorage`, and respects the visitor's OS preference on first visit. No extra setup needed.

### Contact form

The current contact section is a plain `mailto:` link (zero setup, always works). If you want an actual form later, wire up [Formspree](https://formspree.io) (free tier) — it's a single `<form action="https://formspree.io/f/yourid">` with no backend code.

## Deploying

### 1. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
gh repo create jasperjessie-portfolio --public --source=. --push
```

(Or create the repo on github.com and `git remote add origin ...` + `git push`.)

### 2. Deploy on Vercel (free)

1. Go to https://vercel.com/new
2. Import the GitHub repo
3. Framework preset: Next.js (auto-detected) — no config needed
4. Deploy

You'll get a free `your-project.vercel.app` URL. Every push to `main` auto-deploys. No paid domain required.

### Updating content going forward

Any edit to `data/*.ts`, `content/blog/*.mdx`, or files in `public/` — commit and push, Vercel redeploys automatically in ~1 minute. That's the whole "database management" workflow: git is the database, Vercel is the publish button.
