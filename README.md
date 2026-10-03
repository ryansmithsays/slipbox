# Slipbox

A dump-in, notes-out Zettelkasten. Capture messy, keep atomic notes, review five a day.

## How it works

1. **Dump:** paste a highlight, transcript (for example from a Pocket recording), or rambling thought.
2. **Inbox:** Slipbox turns the dump into 1 to 3 atomic notes. You tap Keep or Toss.
3. **Daily 5:** each day, five notes get a suggested connection. You tap Link or Skip.
4. **Notes:** search, edit, tag, and see links and suggestions.

There are no folders, IDs, or rules to remember.

## Data and privacy

Notes are stored in your browser (localStorage). Nothing is sent anywhere except, if you add an Anthropic API key under More, the text of a dump is sent to api.anthropic.com for sorting. Use **More > Backup JSON** regularly. **Export Markdown** gives you a plain-text copy with `[[wiki links]]`.

## Hosting

It is a single `index.html`. Enable GitHub Pages (Settings > Pages > Deploy from branch > `main` / root) and open the URL on your phone. On iPhone, use Share > Add to Home Screen.
