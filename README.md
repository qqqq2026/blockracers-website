# blockracers-website

Website for BlockRacers (www.blockracers.online). Static site built with Astro.
NL lives at `/`, EN at `/en/`. Status: DRAFT. Nothing goes live without Daniel's explicit go.

## Run locally

```
npm ci
npm run dev     # local preview
npm run build   # builds to dist/ and runs scripts/check-copy.mjs
```

`check-copy` fails the build on em or en dashes, external scripts or styles, Google Fonts and known trackers.

## Where things are

- `src/data/site.ts`: all page copy (NL and EN), menu, social links. Markers `[TBD Daniel]` and `[LAWYER REVIEW]` render as visible badges and must be resolved before publication.
- `src/styles/brand.css`: brand tokens from the BlockRacers brand kit. Fonts (Bungee, Chakra Petch, OFL) are self-hosted in `public/fonts/`.
- `public/img/`: real in-game screenshots and approved logos only.

## Workflow

1. Work on a branch, open a pull request to `main`.
2. The `build` workflow runs on every PR. It must pass before merge (branch protection).
3. Daniel reviews and merges. Only Daniel says go.
4. On push to `main`, the `deploy` workflow builds the site and waits at the `production` environment for approval by qqqq2026 before deploying to GitHub Pages.

GitHub Pages is not enabled yet and no custom domain is set. DNS (Cloudflare) is not configured. Both happen only after Daniel's go.

## Preview (testlink)

Test site: https://qqqq2026.github.io/blockracers-website-preview/ (noindex, robots Disallow, DRAFT banner).
The `preview` workflow publishes every push to a non-main branch there (needs secret `PREVIEW_TOKEN`).
Local build with the preview base: `PREVIEW_BASE=/blockracers-website-preview/ npm run build`.
The preview shows the last pushed branch. It is public, so the never-commit rules apply there too.

## Never commit

This repo is public. Everything in it, including history, is visible to anyone.

- Secrets: API keys, tokens, passwords, `.env` files, private keys.
- Personal data of anyone: names, emails, addresses, phone numbers, photos, unless explicitly approved for publication.
- Any data of minors or players, including logs, exports, screenshots showing real player names.
- Legal drafts: privacy statement drafts, terms, lawyer notes (keep them outside this repo).
- Unreleased info: unannounced features, dates, partners, internal plans.

If something slips in, tell Daniel right away. Removing it in a new commit is not enough; secrets must be rotated.

## Brand

Real screenshots only, no stock or AI art. No em dashes. Studio name is BlockRacers Studio.
Handles: game @BlockRacersGame, studio @BlkRacersHub (X and TikTok).
