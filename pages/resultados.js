import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Resultados() {
  const router = useRouter();
  const { origin, destination, departDate } = router.query;
  const [vuelos, setVuelos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!origin || !destination || !departDate) return;

    setCargando(true);
    fetch(`/api/vuelos?origin=${origin}&destination=${destination}&departDate=${departDate}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setVuelos(data.sort((a, b) => a.price - b.price));
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [origin, destination, departDate]);

  return (
    <div className="container">
      <h1 style={{ fontSize: 18, fontWeight: 500 }}>
        {origin} → {destination}
      </h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: 13, marginTop: -8 }}>{departDate}</p>

      {cargando && <p>Buscando los mejores precios…</p>}
      {error && <p style={{ color: '#a32d2d' }}>No se pudo cargar: {error}</p>}
      {!cargando && !error && vuelos.length === 0 && <p>No se encontraron vuelos para esta ruta y fecha.</p>}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
        {vuelos.map((v, i) => (
          <div key={i} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ margin: 0, fontWeight: 500, fontSize: 14 }}>{v.airline || 'Aerolínea'}</p>
              <p style={{ margin: '4px 0 0', fontSize: 12, color: 'var(--text-secondary)' }}>
                {v.transfers === 0 ? 'Directo' : `${v.transfers} escala(s)`}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, fontWeight: 500, fontSize: 18, color: 'var(--accent)' }}>{v.price}€</p>
              <a href={v.link_afiliado} target="_blank" rel="noreferrer" style={{ fontSize: 12 }}>
                Ver oferta →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
        }
