import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CalendarioPrecios from '../components/CalendarioPrecios';
export default function Resultados() {
  const router = useRouter();
  const { origin, destination, departDate } = router.query;
  const [vuelos, setVuelos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [calendario, setCalendario] = useState([]);

  useEffect(() => {
    if (!origin || !destination || !departDate) return;
    const month = departDate.slice(0, 7);
    fetch(`/api/calendario?origin=${origin}&destination=${destination}&month=${month}`)
      .then((r) => r.json())
      .then((data) => setCalendario(Array.isArray(data) ? data : []))
      .catch(() => setCalendario([]));
  }, [origin, destination, departDate]);
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
       {origin && destination && departDate && (
  <CalendarioPrecios
    key={`${origin}-${destination}`}
    origin={origin}
    destination={destination}
    month={departDate.slice(0, 7)}
       selected={departDate}
    onSelect={(f) => router.push({ pathname: '/resultados', query: { origin, destination, departDate: f } }, undefined, { shallow: true })}
  />
)}
        {false && (
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>Otros días de este mes</p>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto' }}>
              {calendario.slice(0, 10).map((d, i) => (
                <div key={i} className="card" style={{ minWidth: 70, textAlign: 'center', padding: 8 }}>
                  <p style={{ fontSize: 11, margin: 0, color: 'var(--text-secondary)' }}>
                    {new Date(d.depart_date).getDate()}
                  </p>
                  <p style={{ fontSize: 13, margin: '4px 0 0', fontWeight: 500 }}>{d.value}€</p>
                </div>
              ))}
            </div>
          </div>
        )}
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
