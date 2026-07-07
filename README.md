# Design System Atlas

A React presentation app that documents the Strata design system component library (`@avantodev/strata-design-system`). It serves as a live reference for KT sessions and onboarding — each section showcases a component category with usage examples, token values, and interactive demos. Deployed automatically to GitHub Pages on every push to `main`.

## Local development

```bash
npm install    # requires NODE_AUTH_TOKEN env var (see CI setup below)
npm run dev    # starts dev server at http://localhost:5173/design-system-atlas/
```

Set `NODE_AUTH_TOKEN` to a GitHub Personal Access Token with `read:packages` scope before running `npm install`.

## Adding a new section

1. Create a new component file in `src/sections/`, e.g. `src/sections/Buttons.tsx`
2. Add a route for it in `src/App.tsx`
3. Add a card linking to the new route on the index page (`src/pages/Index.tsx`)
4. Run `npm run dev` and verify the section renders correctly

## Deployment

Pushing any commit to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the app and deploys `dist/` to the `gh-pages` branch. The live site is available at:

```
https://socrates-manaure-adt.github.io/design-system-atlas/
```

### CI setup

The workflow requires a `NODE_AUTH_TOKEN` secret in the repository settings. This token must be a GitHub Personal Access Token with `read:packages` scope, with access to `@avantodev` packages on GitHub Package Registry. To configure:

1. Go to **Settings → Secrets and variables → Actions** in the GitHub repo
2. Add a secret named `NODE_AUTH_TOKEN` with a valid PAT value
