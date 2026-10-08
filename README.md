# Slipbox

A dump-in, notes-out Zettelkasten. Capture messy, keep atomic notes, review five a day. Ask it big questions and keep the questions as notes.

## How it works

1. **Dump:** paste a highlight, transcript (for example from a Pocket recording), or rambling thought.
2. **Inbox:** Slipbox turns the dump into 1 to 3 atomic notes. You tap Keep or Toss.
3. **Daily 5:** each day, five notes get a suggested connection. You tap Link or Skip.
4. **Notes:** search, edit, tag, and see links and suggestions.
5. **Ask:** in Notes, switch to Ask and put a question to your own notes. The answer cites the notes it used.

There are no folders, IDs, or rules to remember.

## Note types (v1.1)

- **My idea:** what you think.
- **Source note:** what a source said.
- **Question:** something you are still asking. It has a status, open or answered. Answers link to it as you find them.
- **Hub:** a theme, claim, or project that gathers other notes.

Still true: any note can gather links. The types just say which notes you treat as gathering points.

## Ask (v1.1)

After an answer you can tap:

- **Keep as open question:** saves the question as a question note, linked to any notes the answer cited.
- **Save answer as note:** saves the answer as an idea note, linked to the notes it cited and to the question note if you kept one. Its source reads "Slipbox Ask (synthesized from my notes)" so it is never mistaken for your own thinking or a source's. Review and edit it before you rely on it.

Question notes are left out of Ask's evidence, since a question is not an answer.

## Offline (v1.2)

Slipbox works with no connection, for example on a plane.

- **Dumping offline:** the dump is saved on your device and shows in the Inbox as "Saved offline". The status line at the top shows how many items are waiting.
- **Back online:** queued dumps are sorted automatically, then everything is uploaded to your notes repo, and the waiting list clears itself. The Inbox card also has Try now, Use basic draft (skip the AI), and Delete.
- **Editing offline:** edits, links, and Keep or Toss all save on your device and upload when you reconnect.
- **Opening offline:** the app caches itself the first time you open it online. Open it once with a connection after installing or updating. A new version of the page appears the next time you open the app.

Airplane wifi that is connected but not yet on the internet is handled too: Slipbox retries every minute.

## Data and privacy

Notes are stored in your browser (localStorage). Nothing is sent anywhere except, if you add an Anthropic API key under More, the text of a dump is sent to api.anthropic.com for sorting, and the notes Ask selects are sent along with your question. Use **More > Backup JSON** regularly. **Export Markdown** gives you a plain-text copy with `[[wiki links]]`.

## Hosting

It is `index.html` plus a small `sw.js` (the service worker that lets the app open offline). Keep both in the same folder. Enable GitHub Pages (Settings > Pages > Deploy from branch > `main` / root) and open the URL on your phone. On iPhone, use Share > Add to Home Screen.
