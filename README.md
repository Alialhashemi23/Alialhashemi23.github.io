# Ali Al-Hashemi — Software Engineering Portfolio

A static SvelteKit portfolio featuring résumé-backed professional experience and source-linked engineering case studies. Published at **https://alialhashemi23.github.io/**.

## Develop

Requires Node.js 22 or newer.

```sh
npm ci
npm run dev
```

## Validate and build

```sh
npm run check
npm run build
npm test
npm run preview
```

`build/` contains the complete static site. The homepage and case studies are prerendered, so their content and metadata are available without JavaScript. Fonts, screenshots, résumé, and social preview are served locally.

## Content

- `src/lib/data/portfolio.js`: experience, project summaries, case-study decisions, limitations, source snapshots, skills, and contact details.
- `src/routes/+page.svelte`: homepage.
- `src/routes/projects/[slug]/`: statically generated case studies.
- `static/resume/`: public résumé copy derived from the owner-supplied master; phone omitted.
- `docs/CONTENT-SOURCES.md`: provenance, project status, and image attribution.

Project links intentionally point to the reviewed implementation commit, including development-branch work. Do not update claims based on a README alone. Review status, implementation, and evidence together when publishing a new version.

## Hosting

The canonical source is `main`. GitHub Pages serves the built site. The original React implementation is retained in Git history, and the preceding Svelte implementation remains in the `master` history. See `docs/DEPLOYMENT.md` for publishing and rollback details.

This static site does not host the projects’ application servers or databases. Contact is a direct email link; no message form simulates delivery.
