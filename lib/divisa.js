const POR_PAIS = {
  US: 'usd', PR: 'usd', EC: 'usd', SV: 'usd', PA: 'usd',
  GB: 'gbp', CH: 'chf', LI: 'chf', SE: 'sek', NO: 'nok', DK: 'dkk', IS: 'isk',
  PL: 'pln', CZ: 'czk', HU: 'huf', RO: 'ron', RS: 'rsd', UA: 'uah', TR: 'try',
  RU: 'rub', GE: 'gel', KZ: 'kzt',
  CA: 'cad', AU: 'aud', NZ: 'nzd',
  JP: 'jpy', CN: 'cny', HK: 'hkd', TW: 'twd', SG: 'sgd', MY: 'myr', TH: 'thb',
  ID: 'idr', PH: 'php', VN: 'vnd', IN: 'inr', PK: 'pkr', BD: 'bdt', LK: 'lkr', KR: 'krw',
  AE: 'aed', SA: 'sar', QA: 'qar', KW: 'kwd', IL: 'ils', EG: 'egp', MA: 'mad',
  ZA: 'zar', NG: 'ngn', KE: 'kes',
  MX: 'mxn', BR: 'brl', AR: 'ars', CL: 'clp', CO: 'cop', PE: 'pen', UY: 'uyu',
  DO: 'dop', CR: 'crc', GT: 'gtq',
};

export function detectarDivisa(req) {
  const forzada = String(req.query.currency || '').toLowerCase();
  if (/^[a-z]{3}$/.test(forzada)) return forzada;

  const pais = String(req.headers['x-vercel-ip-country'] || '').toUpperCase();
  return POR_PAIS[pais] || 'eur';
}
