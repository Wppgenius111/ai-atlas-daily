# AI Atlas

A static AI Daily / Chronicle / Papers site for sharing and feedback.

Open `index.html` locally, or publish the repository with GitHub Pages.

## How data works

- The deployed page is static. Reading or refreshing it does not call an AI model and does not spend API tokens.
- Built-in daily entries live in `starterArticles()` in `app.js`.
- Personal additions, notes, filters and favorites are stored in that browser's `localStorage`; they are not synced to other devices.
- New built-in entries are merged into each visitor's local article pool without overwriting personal notes or deletions.

## Daily updates

The repository owner can use a Codex scheduled automation to research the last 24 hours and add only verified papers/news to `starterArticles()`; test the page; commit; and push to GitHub Pages. A category with no reliable new paper or news should remain empty.

Daily monitoring should cover five lanes:

- `AI Models`: OpenAI, Anthropic, Google DeepMind, Meta AI, Qwen, DeepSeek, Kimi/Moonshot and other frontier-model releases.
- `Embodied AI / Robotics`: Unitree, Tesla Optimus, Figure AI, Agility Robotics, Boston Dynamics, NVIDIA Robotics, Google DeepMind Robotics and Chinese humanoid-robot policy/deployment.
- `BCI / Neurotech`: Neuralink, Synchron, Precision Neuroscience, Paradromics, Science Corp, ClinicalTrials.gov and clinical BCI papers.
- `China AI Industry`: 机器之心, 量子位, 智东西, 新智元, DeepTech, 高工机器人 and official China policy/job signals.
- `Policy / Society`: EU AI Act, China MIIT/CAC, White House AI policy, AI jobs, education, safety, copyright and broader social impact.

X and social posts are radar only. A Daily item should cite an official page, a paper, a regulator, a clinical registry or a credible media report before being added.

For a separate copy, fork the repository and create the same automation in the fork. If an API-based updater is added later, keep `OPENAI_API_KEY` in a backend environment variable or GitHub Actions secret. Never put an API key in `index.html`, `app.js`, browser storage, or a public repository.
