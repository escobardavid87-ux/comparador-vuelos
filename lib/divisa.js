const DOLAR = ['US', 'PR', 'EC', 'SV', 'PA'];
const PERMITIDAS = ['eur', 'usd', 'gbp'];

export function detectarDivisa(req) {
  const forzada = String(req.query.currency || '').toLowerCase();
  if (PERMITIDAS.includes(forzada)) return forzada;

  const pais = String(req.headers['x-vercel-ip-country'] || '').toUpperCase();
  if (pais === 'GB') return 'gbp';
  if (DOLAR.includes(pais)) return 'usd';
  return 'eur';
}
