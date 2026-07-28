# AI Atlas

A static AI Daily / Chronicle / Papers site for sharing and feedback.

Open `index.html` locally, or publish the repository with GitHub Pages.

## How data works

- The deployed page is static. Reading or refreshing it does not call an AI model and does not spend API tokens.
- Built-in daily entries live in `starterArticles()` in `app.js`.
- Personal additions, notes, filters and favorites are stored in that browser's `localStorage`; they are not synced to other devices.
- New built-in entries are merged into each visitor's local article pool without overwriting personal notes or deletions.

## Daily updates

The repository owner can use a Codex scheduled automation to research the last 24 hours across AI, robotics, embodied AI, and BCI; add only verified papers/news to `starterArticles()`; test the page; commit; and push to GitHub Pages. A category with no reliable new paper or news should remain empty.

For a separate copy, fork the repository and create the same automation in the fork. If an API-based updater is added later, keep `OPENAI_API_KEY` in a backend environment variable or GitHub Actions secret. Never put an API key in `index.html`, `app.js`, browser storage, or a public repository.
