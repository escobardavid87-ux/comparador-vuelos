import { RUTAS } from '../lib/rutas';

const BASE = 'https://comparador-vuelos.vercel.app';

export async function getServerSideProps({ res }) {
  const urls = [BASE, ...RUTAS.map((r) => `${BASE}/vuelos/${r.slug}`)];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url><loc>${u}</loc></url>`).join('\n')}
</urlset>`;
  res.setHeader('Content-Type', 'text/xml');
  res.write(xml);
  res.end();
  return { props: {} };
}

export default function Sitemap() {
  return null;
}
