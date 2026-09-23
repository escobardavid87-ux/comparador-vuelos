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

function TarjetaEsqueleto() {
  return (
    <div className="card" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div className="skeleton" style={{ width: 42, height: 42, borderRadius: '50%', flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <div className="skeleton" style={{ width: '60%', height: 14, marginBottom: 8 }} />
        <div className="skeleton" style={{ width: '35%', height: 12 }} />
      </div>
      <div className="skeleton" style={{ width: 50, height: 20 }} />
    </div>
  );
}

export default function Resultados() {
  const router = useRouter();
  const { origin, destination, departDate } = router.query;
  const [divisa, cambiarDivisa, listo] = useDivisa();
  const [vuelos, setVuelos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [copiado, setCopiado] = useState(false);

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

  const compartir = async () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const texto = `Vuelos de ${origin} a ${destination} el ${departDate}`;
    if (navigator.share) {
      try {
        await navigator.share({ title: texto, url });
      } catch (e) {}
    } else {
      await navigator.clipboard.writeText(url);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    }
  };

  return (
    <div>
      <div
        className="franja"
        style={{
          background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)',
          padding: '1.75rem 1rem 2.25rem',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <h1 style={{ fontSize: 22, color: 'white', margin: 0 }}>
              {origin} → {destination}
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 13, margin: '4px 0 0' }}>{departDate}</p>
          </div>
          <button
            onClick={compartir}
            style={{
              background: 'rgba(255,255,255,0.15)',
              border: 'none',
              borderRadius: 8,
              width: 36,
              height: 36,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              flexShrink: 0,
            }}
            aria-label="Compartir"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.6" y1="13.5" x2="15.4" y2="17.5" />
              <line x1="15.4" y1="6.5" x2="8.6" y2="10.5" />
            </svg>
          </button>
        </div>
        {copiado && (
          <p style={{ color: 'white', fontSize: 12, margin: '8px 0 0' }}>Enlace copiado</p>
        )}
      </div>

      <div className="container" style={{ marginTop: '-1.25rem' }}>
        <div className="card" style={{ marginBottom: 12 }}>
          <SelectorDivisa divisa={divisa} onChange={cambiarDivisa} />
        </div>

        {error && (
          <div className="card aparecer" style={{ borderColor: '#e0b4b4', marginBottom: 12 }}>
            <p style={{ margin: 0, color: '#a32d2d', fontWeight: 600 }}>No se pudo cargar</p>
            <p style={{ margin: '4px 0 0', fontSize: 13 }}>{error}</p>
          </div>
        )}

        {!cargando && !error && vuelos.length === 0 && (
          <div className="card aparecer" style={{ textAlign: 'center', marginBottom: 12 }}>
            <p style={{ margin: 0, fontWeight: 600 }}>No se encontraron vuelos</p>
            <p style={{ margin: '4px 0 0', fontSize: 13 }}>Prueba con otra fecha o revisa el calendario de precios.</p>
          </div>
        )}

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
          {cargando &&
            [1, 2, 3].map((i) => <TarjetaEsqueleto key={i} />)}

          {!cargando &&
            vuelos.map((v, i) => {
              const nombre = AEROLINEAS[v.airline] || v.airline || 'Aerolínea';
              const iniciales = (v.airline || nombre).slice(0, 2).toUpperCase();
              return (
                <div
                  key={i}
                  className="card aparecer"
                  style={{ display: 'flex', alignItems: 'center', gap: 12, animationDelay: `${Math.min(i, 8) * 40}ms` }}
                >
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
                        background: v.transfers === 0 ? 'var(--accent-light)' : 'var(--border)',
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
                    <a
                      href={v.link_busqueda}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                        marginTop: 4,
                        fontSize: 12,
                        fontWeight: 700,
                        textDecoration: 'none',
                      }}
                    >
                      Ver precios
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
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
