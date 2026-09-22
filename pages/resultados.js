import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CalendarioPrecios from '../components/CalendarioPrecios';
import AvisoAfiliados from '../components/AvisoAfiliados';
import SelectorDivisa from '../components/SelectorDivisa';
import { formatearPrecio } from '../lib/formato';
import { useDivisa } from '../lib/useDivisa';

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

const COLORES_BADGE = ['#0f6e56', '#1d4ed8', '#b45309', '#7c3aed', '#be123c', '#0e7490', '#4d7c0f', '#9333ea'];

function colorPara(codigo) {
  let hash = 0;
  for (let i = 0; i < codigo.length; i++) hash = codigo.charCodeAt(i) + ((hash << 5) - hash);
  return COLORES_BADGE[Math.abs(hash) % COLORES_BADGE.length];
}

export default function Resultados() {
  const router = useRouter();
  const { origin, destination, departDate } = router.query;
  const [divisa, cambiarDivisa, listo] = useDivisa();
  const [vuelos, setVuelos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!listo || !origin || !destination || !departDate) return;

    setCargando(true);
    setError(null);
    const extra = divisa ? `&currency=${divisa}` : '';
    fetch(`/api/vuelos?origin=${origin}&destination=${destination}&departDate=${departDate}${extra}`)
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error);
        setVuelos(data.sort((a, b) => a.price - b.price));
      })
      .catch((err) => setError(err.message))
      .finally(() => setCargando(false));
  }, [listo, origin, destination, departDate, divisa]);

  return (
    <div>
      <div
        style={{
          background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)',
          padding: '1.75rem 1rem 2.25rem',
        }}
      >
        <h1 style={{ fontSize: 22, fontWeight: 700, color: 'white', margin: 0 }}>
          {origin} → {destination}
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, margin: '4px 0 0' }}>{departDate}</p>
      </div>

      <div className="container" style={{ marginTop: '-1.25rem' }}>
        <div className="card" style={{ marginBottom: 12 }}>
          <SelectorDivisa divisa={divisa} onChange={cambiarDivisa} />
        </div>

        {cargando && <p>Buscando los mejores precios…</p>}
        {error && <p style={{ color: '#a32d2d' }}>No se pudo cargar: {error}</p>}
        {!cargando && !error && vuelos.length === 0 && <p>No se encontraron vuelos para esta ruta y fecha.</p>}

        {listo && origin && destination && departDate && (
          <CalendarioPrecios
            key={`${origin}-${destination}`}
            origin={origin}
            destination={destination}
            month={departDate.slice(0, 7)}
            selected={departDate}
            divisa={divisa}
            onSelect={(f) => router.push({ pathname: '/resultados', query: { origin, destination, departDate: f } }, undefined, { shallow: true })}
          />
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
          {vuelos.map((v, i) => {
            const nombre = AEROLINEAS[v.airline] || v.airline || 'Aerolínea';
            const iniciales = (v.airline || nombre).slice(0, 2).toUpperCase();
            return (
              <div key={i} className="card" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: '50%',
                    background: colorPara(v.airline || nombre),
                    color: 'white',
                    fontSize: 13,
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {iniciales}
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: 14 }}>{nombre}</p>
                  <span
                    style={{
                      display: 'inline-block',
                      marginTop: 4,
                      fontSize: 11,
                      fontWeight: 600,
                      padding: '2px 8px',
                      borderRadius: 999,
                      background: v.transfers === 0 ? 'var(--accent-light)' : '#f1efe6',
                      color: v.transfers === 0 ? 'var(--accent-dark)' : 'var(--text-secondary)',
                    }}
                  >
                    {v.transfers === 0 ? 'Directo' : `${v.transfers} escala(s)`}
                  </span>
                </div>

                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p style={{ margin: 0, fontWeight: 700, fontSize: 20, color: 'var(--accent)' }}>
                    {formatearPrecio(v.price, v.currency)}
                  </p>
                  <a href={v.link_busqueda} target="_blank" rel="noreferrer" style={{ fontSize: 12, fontWeight: 600 }}>
                    Ver precios →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <AvisoAfiliados />
      </div>
    </div>
  );
}
