let cacheTasas = { data: null, time: 0 };
const TTL_MS = 1000 * 60 * 60 * 12; // 12 horas

export async function obtenerTasas() {
  if (cacheTasas.data && Date.now() - cacheTasas.time < TTL_MS) {
    return cacheTasas.data;
  }
  try {
    const r = await fetch('https://open.er-api.com/v6/latest/EUR');
    const json = await r.json();
    if (json.result === 'success' && json.rates) {
      cacheTasas = { data: json.rates, time: Date.now() };
      return json.rates;
    }
  } catch (e) {}
  return cacheTasas.data || { EUR: 1 };
}

export function convertir(valor, moneda, tasas) {
  const code = String(moneda || 'eur').toUpperCase();
  if (code === 'EUR') return { valor, moneda: 'eur' };
  const t = tasas && tasas[code];
  if (!t) return { valor, moneda: 'eur' };
  return { valor: Math.round(valor * t), moneda: code.toLowerCase() };
}
