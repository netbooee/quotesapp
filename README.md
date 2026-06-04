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

- No backend, database, or API key is required.
- "Browsing the past" is consistent: yesterday's quote is always yesterday's.
- You can't browse into the future (the day selector stops at today).

The mapping lives in `app.js` (`quoteIndexForDay`) and uses a fixed reference
date (`EPOCH`) plus a deterministic scramble across the `QUOTES` array.

## Project structure

| File          | Purpose                                          |
| ------------- | ------------------------------------------------ |
| `index.html`  | Markup and Google Fonts (Special Elite / Cutive Mono) |
| `styles.css`  | Parchment look, typewriter styling, day selector |
| `app.js`      | Date → quote logic and day-selector interaction  |
| `quotes.js`   | The curated quote collection                     |
| `netlify.toml`| Static-site config + security headers            |

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
