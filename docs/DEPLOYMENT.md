# Deployment

The canonical source branch is `main`. The site is a prerendered SvelteKit build with no application server or database.

## GitHub Actions

`.github/workflows/pages.yml` checks types/Svelte diagnostics, builds, verifies static output, and runs Chromium visitor/accessibility checks. Main-branch builds upload a Pages artifact and deploy with GitHub's official Pages actions. Pull requests run the same checks without deploying.

The repository Pages source must be **GitHub Actions**. In Settings → Pages, choose GitHub Actions if reconfiguring the repository. The `github-pages` environment must allow deployment from `main`.

## Local verification

```sh
npm ci
npm run check
npm run build
npm test
npx playwright install chromium
npm run test:browser
```

If an existing Chromium installation is used, set `PLAYWRIGHT_CHROMIUM_EXECUTABLE` to its executable path for the browser-check command. This is optional; CI uses the Playwright-managed browser.

## Manual static deployment

If Actions is temporarily unavailable, `build/` is the complete website. It can be published to the previously configured `gh-pages` source branch. Include `.nojekyll`: SvelteKit assets live under `_app/` and must not be excluded by Jekyll.

## Rollback

Before this redesign, `gh-pages` pointed to `0bfa702f31976892a1e83e85a7d69ec645fde71c`. The preceding Svelte source is in `master` at `443f9533c6c7f861c7873a1b7969cdaf37caf21f`; the former default React source is retained in `main` history at `d74755a7b1827356bc90e1303a73b704c2170e09`.

For a normal rollback after adoption of Actions, revert the source change on `main` to a known-good revision and let the workflow redeploy. To restore the pre-redesign site, restore the old `gh-pages` tree in a new commit and set Pages back to publishing `gh-pages` at `/`. Preserve newer history; a force push is unnecessary.

## Post-deployment checks

Verify the homepage and each `/projects/<slug>/` URL by direct navigation and refresh, résumé response, locally served fonts/media, mobile navigation, contact links, metadata, and unknown-page handling. The sitemap is generated from the same project catalogue as the pages.
