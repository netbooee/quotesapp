# Daily Wisdom

A tiny, dependency-free static site that shows a deep, meaningful two-sentence
quote for every day. You land on today's quote, displayed on aged parchment in
a typewriter font, and a day selector along the top lets you browse quotes from
the past. Authors are referenced whenever they're known.

Quotes are drawn from historical figures, philosophers, modern thinkers, and
tech leaders (Steve Jobs, Bill Gates, Marcus Aurelius, Maya Angelou, and more).

## How the daily quote works

Each calendar date is mapped to a quote **deterministically** — the same date
always yields the same quote, for every visitor. This means:

- No backend, database, or API key is required for the daily quote.
- "Browsing the past" is consistent: yesterday's quote is always yesterday's.
- You can't browse into the future (the day selector stops at today).
- "Today" uses the **viewer's local date**, so it's correct in every timezone.

The mapping lives in `app.js` (`quoteIndexForDay`) and uses a fixed reference
date (`EPOCH`) plus a deterministic **shuffled permutation** of the `QUOTES`
array. Walking the permutation by day number means every quote appears exactly
once before any repeats — so with 372 quotes, **every day of a 365-day year is
unique**.

## Buttons

- **🎲 Random Quote** — draws a random quote from the library, independent of
  the date. Pure client-side; no network call.
- **✨ Generate with AI** — calls a Netlify serverless function that asks Claude
  to compose a fresh, original two-sentence quote. See setup below.
- **Return to Today** — snaps back to today's daily quote.

## AI-generated quotes (optional)

The AI button calls `netlify/functions/generate-quote.mjs`, which hits the
Anthropic Messages API. To enable it on your deployed site:

1. Get an API key from the [Anthropic Console](https://console.anthropic.com).
2. In Netlify: **Site configuration → Environment variables** → add
   `ANTHROPIC_API_KEY` = your key.
3. Redeploy. The button now returns a freshly generated quote.

Notes:
- The function uses the fast, low-cost `claude-haiku-4-5` model. For richer,
  more nuanced quotes, change `MODEL` in the function to `claude-opus-4-8`
  (higher per-request cost).
- If the key isn't set, the daily and random buttons still work; the AI button
  shows a friendly "unavailable" message.
- The function bundles with zero dependencies (it uses `fetch` directly), so
  there's still nothing to build.

## Project structure

| File          | Purpose                                          |
| ------------- | ------------------------------------------------ |
| `index.html`  | Markup and Google Fonts (Special Elite / Cutive Mono) |
| `styles.css`  | Parchment look, typewriter styling, day selector |
| `app.js`      | Date → quote logic and day-selector interaction  |
| `quotes.js`   | The curated quote collection                     |
| `netlify.toml`| Static-site config + security headers            |
| `icon.svg`    | Source vector for the old-typewriter app icon    |
| `apple-touch-icon*.png` | iOS Home Screen icons (Apple masks corners) |
| `icon-192/512.png`, `favicon-32.png` | Web manifest + favicon icons |
| `manifest.webmanifest` | "Add to Home Screen" / PWA metadata     |

## App icon

The Home Screen icon is an old typewriter on parchment, matching the app's
look. The vector source is `icon.svg`; the PNG sizes are generated from it
with [sharp](https://sharp.pixelplumbing.com):

```bash
node -e "/* see commit history for the generation snippet */"
```

When you "Add to Home Screen" on iOS, Safari uses `apple-touch-icon.png`
(180×180, full-bleed — iOS rounds the corners itself) and the
`apple-mobile-web-app-title` of **Daily Wisdom**.

## Running locally

It's a static site, so just open `index.html` in a browser, or serve the
folder with any static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploying to Netlify

This repo is ready to deploy as-is — there is no build step.

1. Push this branch to GitHub.
2. In Netlify, **Add new site → Import an existing project** and pick this repo.
3. Leave the build command empty and set the publish directory to `.`
   (already configured in `netlify.toml`).
4. Deploy. Netlify will serve `index.html` at the site root.

You can also drag-and-drop the folder onto the Netlify dashboard for an
instant deploy.

## Adding or editing quotes

Open `quotes.js` and add objects to the `QUOTES` array:

```js
{
  text: "First sentence. Second sentence.",
  author: "Name", // or null when unknown
}
```

Keep entries to two sentences to match the design. The more quotes you add,
the longer it takes before the daily rotation repeats.
