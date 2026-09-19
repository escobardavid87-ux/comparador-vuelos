export function formatearPrecio(valor, moneda) {
  const code = (moneda || 'eur').toUpperCase();
  try {
    return new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: code,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(valor);
  } catch (e) {
    return `${valor} ${code}`;
  }
}
