import { writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const BASE_URL = 'https://italiancardgames.com';

const ROUTES = [
  '/',
  '/play-scopa-online',
  '/play-briscola-online',
  '/how-to-play-scopa',
  '/how-to-play-briscola',
  '/briscola-strategy',
  '/scopa-rules',
  '/scopa-strategy',
  '/italian-solitaire',
  '/rules',
  '/privacy-policy',
  '/terms',
  '/contact',
];

const today = new Date().toISOString().split('T')[0];

const urls = ROUTES.map(route => `
  <url>
    <loc>${BASE_URL}${route}</loc>
    <lastmod>${today}</lastmod>
  </url>`).join('');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}
</urlset>
`;

const outPath = resolve(__dirname, '../public/sitemap.xml');
writeFileSync(outPath, xml, 'utf-8');
console.log(`Sitemap written to ${outPath} (${ROUTES.length} URLs)`);
