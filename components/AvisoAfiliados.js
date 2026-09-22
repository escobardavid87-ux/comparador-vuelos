export default function AvisoAfiliados() {
  return (
    <div
      style={{
        fontSize: 12,
        color: 'var(--text-secondary)',
        marginTop: 28,
        paddingTop: 20,
        borderTop: '1px solid var(--border)',
        textAlign: 'center',
      }}
    >
      <p style={{ margin: 0 }}>
        Somos un comparador de vuelos. Si reservas a través de nuestros enlaces, podemos recibir una comisión sin coste adicional para ti.
      </p>
      <p style={{ margin: '8px 0 0' }}>
        Los precios en otras divisas son aproximados.{' '}
        <a href="https://www.exchangerate-api.com" target="_blank" rel="noreferrer">
          Rates By Exchange Rate API
        </a>
      </p>
    </div>
  );
}
