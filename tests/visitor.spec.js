import { test, expect } from '@playwright/test';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);

test('A recruiter can explore the work, read direct case-study links, and access the résumé', async ({
  page,
  request
}) => {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Full-stack engineer'
  );
  await page.getByRole('link', { name: 'Explore my work' }).click();
  await expect(page).toHaveURL(/#work$/);
  await page.getByRole('link', { name: 'Read the case study' }).first().click();
  await expect(
    page.getByRole('heading', { name: 'Settle It', exact: true })
  ).toBeVisible();
  for (const [slug, title] of [
    ['settle-it', 'Settle It'],
    ['pokemon-team-builder', 'Pokémon Team Builder'],
    ['game-boy-emulator', 'Game Boy Emulator']
  ]) {
    const response = await page.goto(`/projects/${slug}/`);
    expect(response.status()).toBe(200);
    await page.reload();
    await expect(page).toHaveTitle(`${title} — Ali Al-Hashemi`);
    await expect(
      page.getByRole('heading', { name: 'Current scope' })
    ).toBeVisible();
    await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
    const violations = await page.evaluate(async () =>
      (
        await window.axe.run(document, {
          runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] }
        })
      ).violations.map((v) => ({
        id: v.id,
        targets: v.nodes.map((n) => n.target)
      }))
    );
    expect(violations).toEqual([]);
  }
  const resume = await request.get('/resume/Ali-AlHashemi-Resume.pdf');
  expect(resume.status()).toBe(200);
  expect((await resume.body()).subarray(0, 5).toString()).toBe('%PDF-');
  expect(errors).toEqual([]);
});

test('Mobile navigation, assets, keyboard entry, and contrast work without horizontal overflow', async ({
  page
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(
    page.getByRole('link', { name: 'Skip to content' })
  ).toBeFocused();
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Experience' })
    .click();
  await expect(
    page.getByRole('button', { name: 'Open navigation' })
  ).toHaveAttribute('aria-expanded', 'false');
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth
    )
  ).toBe(true);
  await page.getByText('Curiosity, shipped.').scrollIntoViewIfNeeded();
  for (const image of await page.locator('.supporting-image img').all()) {
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() => image.evaluate((img) => img.complete && img.naturalWidth > 0))
      .toBe(true);
  }
  await page.addScriptTag({ path: require.resolve('axe-core/axe.min.js') });
  const violations = await page.evaluate(async () =>
    (
      await window.axe.run(document, {
        runOnly: { type: 'tag', values: ['wcag2a', 'wcag2aa', 'wcag21aa'] }
      })
    ).violations.map((v) => ({
      id: v.id,
      targets: v.nodes.map((n) => n.target)
    }))
  );
  expect(violations).toEqual([]);
  await expect(
    page.getByRole('link', { name: /alialh01@gmail.com/ })
  ).toHaveAttribute('href', 'mailto:alialh01@gmail.com');
});
