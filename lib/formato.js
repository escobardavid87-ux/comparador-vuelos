export function formatearPrecio(valor, moneda) {
  const code = (moneda || 'eur').toUpperCase();
  const idioma = code === 'USD' ? 'en-US' : code === 'GBP' ? 'en-GB' : 'es-ES';
  try {
    return new Intl.NumberFormat(idioma, {
      style: 'currency',
      currency: code,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(valor);
  } catch (e) {
    return `${valor} ${code}`;
  }
}
