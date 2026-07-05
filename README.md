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
| Services list | `data/services.ts` |
| Client logos | `data/clients.ts` + drop image files in `public/logos/` |
| Downloads (resume, guides, etc.) | `data/downloads.ts` + drop files in `public/downloads/` |
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

### Adding a downloadable

1. Put the file in `public/downloads/your-file.pdf`.
2. Add an entry to `data/downloads.ts` pointing at `/downloads/your-file.pdf`.

Same pattern for the resume — replace `public/downloads/jasper-jessie-resume.pdf` with your real PDF (same filename, or update the path in `data/site.ts`).

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
