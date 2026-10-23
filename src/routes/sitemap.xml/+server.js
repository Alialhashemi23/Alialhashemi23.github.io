import { projects, person } from '$lib/data/portfolio';
export const prerender = true;
export function GET() {
  const paths = [
    '/',
    ...projects.map((project) => `/projects/${project.slug}/`)
  ];
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map((path) => `<url><loc>${person.site}${path}</loc></url>`).join('')}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } }
  );
}
