import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { projects, supporting, person } from '../src/lib/data/portfolio.js';

const html = (path) => readFileSync(`build/${path}`, 'utf8');
test('Recruiters can read experience and project summaries without JavaScript', () => {
  const page = html('index.html');
  for (const text of [
    'United Wholesale Mortgage',
    'JATO Dynamics',
    'Georgia Institute of Technology',
    ...projects.map((p) => p.title)
  ])
    assert.ok(page.includes(text), `Missing prerendered content: ${text}`);
  for (const placeholder of [
    'hello@example.com',
    '(555)',
    'Happy Clients',
    'Satisfaction Rate',
    'via.placeholder.com',
    'images.unsplash.com'
  ])
    assert.ok(
      !page.includes(placeholder),
      `Template content remains: ${placeholder}`
    );
  assert.ok(page.includes(`mailto:${person.email}`));
});
test('Every case study is a direct-loadable static page with its own metadata and source evidence', () => {
  for (const project of projects) {
    const page = html(`projects/${project.slug}/index.html`);
    assert.ok(
      page.includes(`<title>${project.title} — Ali Al-Hashemi</title>`)
    );
    assert.ok(page.includes(`${person.site}/projects/${project.slug}/`));
    assert.ok(page.includes(project.source.ref));
    assert.ok(page.includes('Current scope'));
    assert.ok(page.includes('Decisions &amp; tradeoffs'));
    assert.ok(html('sitemap.xml').includes(`/projects/${project.slug}/`));
  }
});
test('Local project media and the downloadable résumé ship with the deployment', () => {
  assert.equal(
    readFileSync(`build${person.resume}`).subarray(0, 5).toString(),
    '%PDF-'
  );
  for (const project of supporting)
    assert.ok(existsSync(`build${project.image}`));
  assert.ok(existsSync('build/social-preview.png'));
  assert.ok(existsSync('build/robots.txt'));
});
