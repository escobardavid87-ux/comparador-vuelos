import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CalendarioPrecios from '../components/CalendarioPrecios';

const AEROLINEAS = {
  W4: 'Wizz Air',
  W6: 'Wizz Air',
  FR: 'Ryanair',
  VY: 'Vueling',
  IB: 'Iberia',
  I2: 'Iberia Express',
  YW: 'Air Nostrum',
  UX: 'Air Europa',
  V7: 'Volotea',
  NT: 'Binter Canarias',
  U2: 'easyJet',
  EW: 'Eurowings',
  LH: 'Lufthansa',
  AF: 'Air France',
  KL: 'KLM',
  HV: 'Transavia',
  BA: 'British Airways',
  TP: 'TAP Air Portugal',
  AZ: 'ITA Airways',
  LX: 'Swiss',
  OS: 'Austrian',
  SN: 'Brussels Airlines',
  SK: 'SAS',
  AY: 'Finnair',
  EI: 'Aer Lingus',
  TK: 'Turkish Airlines',
  PC: 'Pegasus',
  DY: 'Norwegian',
  LS: 'Jet2',
  BT: 'airBaltic',
  A3: 'Aegean',
  LO: 'LOT',
  AT: 'Royal Air Maroc',
};

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

      {origin && destination && departDate && (
        <CalendarioPrecios
       import AvisoAfiliados from '../components/AvisoAfiliados';
          key={`${origin}-${destination}`}
          origin={origin}
          destination={destination}
          month={departDate.slice(0, 7)}
          selected={departDate}
          onSelect={(f) => router.push({ pathname: '/resultados', query: { origin, destination, departDate: f } }, undefined, { shallow: true })}
        />
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
        {vuelos.map((v, i) => (
          <div key={i} className="card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <p style={{ margin: 0, fontWeight: 500, fontSize: 14 }}>{AEROLINEAS[v.airline] || v.airline || 'Aerolínea'}</p>
              <p style={{ margin: '4px 0 0', fontSize: 12, color: 'var(--text-secondary)' }}>
                {v.transfers === 0 ? 'Directo' : `${v.transfers} escala(s)`}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p style={{ margin: 0, fontWeight: 500, fontSize: 18, color: 'var(--accent)' }}>{v.price}€</p>
              <a href={v.link_busqueda} target="_blank" rel="noreferrer" style={{ fontSize: 12 }}>
                Ver precios actuales →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
