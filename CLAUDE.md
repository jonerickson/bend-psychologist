# Bend Psychologist Website

## Project Overview
Premium website for RiverFlow Psychology Services (bendpsychologist.com) — Dr. R. Andrew Barram, Psy.D.

## Tech Stack
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS v4
- Deployed to Vercel

## Development Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build
- `npm run lint` — Lint check
- `npx tsc --noEmit` — Typecheck

## Design System
- **Fonts**: Playfair Display (headings), Inter (body)
- **Colors**: Sage green (#5B7B6A), Charcoal (#1A1A1A), Off-white (#FAFAF7), Warm gray (#F5F3EF), Gold accent (#C4A962)
- **Style**: Premium minimalist inspired by movedacademy.com — warm, grounded, not clinical

## Ralph Loop
- PRD: `prd.json`
- Prompt: `PROMPT.md`
- Each iteration: pick first `passes: false` story, implement, build, update prd.json, commit

## File Structure
```
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    Header.tsx
    Hero.tsx
    About.tsx
    Services.tsx
    Specialties.tsx
    Testimonials.tsx
    FAQ.tsx
    Contact.tsx
    Footer.tsx
```
