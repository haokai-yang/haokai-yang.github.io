# Haokai's Portfolio Site

A simple, maintainable React site for Haokai's university application.
Built with Vite + React + React Router.

## How to edit the content

**Almost everything is in one file: `src/content.js`.**

It contains:
- `profile` — name, tagline, intro, contact info
- `skills` — skill tags grouped by category
- `journey` — the learning-timeline entries
- `projects` — each project's page content

Edit that file, save, and the site updates.

### Section types inside a project

Each project has a `sections` array. Every section has a `heading` plus
one or more of these fields:

- `body` — long-form paragraph text (newlines preserved)
- `list` — array of `{ label, text }` for labeled bullet points
- `body2` — more text after the list
- `timeline` — array of `{ phase, weeks, title, note }` for phase tables
- `metrics` — array of `{ value, label, sub }` for a big-number stat grid
- `callout` — a string rendered as an emphasized pull-quote

### To link a paper (PDF)

Put the PDF into the `public/` folder, then in `content.js` add
`paperUrl: "your-filename.pdf"` to the project. Optionally add
`paperNote: "..."` for a subtitle next to the download button.

The download button appears at the top of the project page and again at
the bottom.

### To add a new project

Copy an existing entry in the `projects` array, change the `slug` (must
be unique — used in the URL), and update the content. No other files
need editing; the home page and routing pick it up automatically.

### To change colors or fonts

Edit CSS variables at the top of `src/styles.css` (`--bg`, `--accent`,
`--serif`, etc.).

## Running locally

```bash
npm install
npm run dev
```

Then open `http://127.0.0.1:5173/` (or whatever URL is printed).

## Building for production

```bash
npm run build
```

Outputs a `dist/` folder.

## Hosting

- **Netlify Drop** (easiest, no account): drag `dist/` onto https://app.netlify.com/drop
- **GitHub Pages**: push to a repo, enable Pages → GitHub Actions, use the
  deploy workflow at `.github/workflows/deploy.yml`
- **Vercel**, **Cloudflare Pages**, **Surge.sh**: all work fine

The site uses HashRouter and relative `base` in `vite.config.js`, so it
works on any static host without server-side rewrites.

## File layout

```
public/
  paper-snake-equivariance.pdf    ← paper PDF (served as-is)
src/
  content.js                      ← edit for content
  styles.css                      ← edit for design
  main.jsx                        ← React entry
  App.jsx                         ← routing + nav
  pages/
    Home.jsx
    ProjectPage.jsx
    NotFound.jsx
```
