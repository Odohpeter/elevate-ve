# Pejul Digital Agency Website — PRD

## Original Problem Statement
Import GitHub project (https://github.com/Odohpeter/elevate-ve) and make the contact form send emails to the owner's inbox without a backend.

## Architecture

### Tech Stack
- **Frontend**: TanStack Start + TypeScript + Tailwind CSS v4 + Vite 8
- **Routing**: TanStack Router (file-based, SSR)
- **Dev environment**: Emergent (FastAPI backend for `/api/*` proxy, frontend on port 3000)
- **Production target**: Vercel (TanStack Start serverless functions handle `/api/contact`)

### Email / Contact Form
- **Dev (Emergent)**: FastAPI backend (`/app/backend/server.py`) handles `/api/contact` via Python `smtplib`
- **Production (Vercel)**: TanStack Start API route (`src/routes/api/contact.ts`) handles `/api/contact` via `nodemailer`
- **SMTP Provider**: Titan Email (`smtp.titan.email:465`)
- **From / To**: `mail@pejuldigitalagency.com`

## What's Been Implemented
- [2026-06-25] Cloned GitHub repo → imported into `/app/frontend`
- [2026-06-25] Configured Vite for Emergent environment (port 3000, allowedHosts, `/__l5e` proxy)
- [2026-06-25] Added `.yarnrc` with `--ignore-engines` (Node 20 compat)
- [2026-06-25] Created TanStack Start API route: `src/routes/api/contact.ts` (nodemailer, for Vercel)
- [2026-06-25] Created FastAPI `/api/contact` endpoint (smtplib, for Emergent dev)
- [2026-06-25] Contact form: full validation, loading state, error state, success animation
- [2026-06-25] SMTP credentials stored in both `frontend/.env` and `backend/.env`

## Pages Available
- `/` — Home (hero, stats, trusted marquee)
- `/about` — About Pejul
- `/ai-solutions` — AI services
- `/software-development` — Software dev services
- `/business-digitization` — Digitization services
- `/startup-growth` — Startup growth
- `/venture-building` — Venture building
- `/industries` — Industries served
- `/portfolio` — Work portfolio
- `/team` — Team page
- `/contact` — Contact form (working)
- `/strategy-session` — Book a session
- `/why-pejul` — Why Pejul
- `/privacy`, `/terms` — Legal pages

## Known Issues
- Logo and some images use `/__l5e/assets-v1/` Lovable CDN URLs → 404 in Emergent (proxy configured but Lovable CDN requires auth). Works on Lovable/production.

## Backlog
- P0: Fix broken `/__l5e/` image assets (logos, team photos) — replace with actual image files or public CDN URLs
- P1: Verify Vercel deployment configuration (TanStack Start + serverless functions)
- P2: Test email delivery to `mail@pejuldigitalagency.com` from production domain

## Vercel Deployment Env Variables Required
```
SMTP_HOST=smtp.titan.email
SMTP_PORT=465
SMTP_USER=mail@pejuldigitalagency.com
SMTP_PASS=<your-password>
SMTP_FROM=mail@pejuldigitalagency.com
SMTP_TO=mail@pejuldigitalagency.com
```
