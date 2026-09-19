export function formatearPrecio(valor, moneda, corto = false) {
  const code = (moneda || 'eur').toUpperCase();
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: code,
      currencyDisplay: corto ? 'narrowSymbol' : 'symbol',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(valor);
  } catch (e) {
    return `${valor} ${code}`;
  }
}
