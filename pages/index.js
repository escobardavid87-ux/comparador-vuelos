import { useState } from 'react';
import { useRouter } from 'next/router';
import BuscadorLugar from '../components/BuscadorLugar';
import AvisoAfiliados from '../components/AvisoAfiliados';

export default function Home() {
  const router = useRouter();
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [departDate, setDepartDate] = useState('');

  const buscar = (e) => {
    e.preventDefault();
    if (!origin || !destination || !departDate) return;
    router.push(`/resultados?origin=${origin}&destination=${destination}&departDate=${departDate}`);
  };

  return (
    <div>
      <div
        style={{
          background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)',
          padding: '2.75rem 1rem 3.5rem',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            width: 52,
            height: 52,
            borderRadius: 14,
            background: 'rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 14px',
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
            <path
              d="M12.5 3.5c.3 0 .55.2.63.48l1.2 4.24 4.6 2.66c.3.17.47.52.4.86-.07.35-.36.6-.72.6h-4l-1.3 4.55c-.1.34-.4.57-.75.57h-.32c-.35 0-.65-.23-.75-.57l-1.3-4.55h-4c-.36 0-.65-.25-.72-.6-.07-.34.1-.69.4-.86l4.6-2.66 1.2-4.24c.08-.28.33-.48.63-.48h.2z"
              fill="white"
            />
          </svg>
        </div>
        <h1
          style={{
            fontSize: 28,
            fontWeight: 700,
            color: 'white',
            margin: 0,
            letterSpacing: '-0.02em',
          }}
        >
          Encuentra el vuelo más barato
        </h1>
        <p
          style={{
            color: 'rgba(255,255,255,0.85)',
            fontSize: 15,
            marginTop: 8,
            marginBottom: 0,
          }}
        >
          Comparamos precios de cientos de aerolíneas
        </p>
      </div>

      <div className="container" style={{ marginTop: '-2rem' }}>
        <form
          onSubmit={buscar}
          className="card"
          style={{ display: 'flex', flexDirection: 'column', gap: 14 }}
        >
          <BuscadorLugar etiqueta="Origen" onSelect={setOrigin} />
          <BuscadorLugar etiqueta="Destino" onSelect={setDestination} />
          <div>
            <label style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Fecha de salida</label>
            <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
          </div>
          <button className="btn-primary" type="submit" style={{ marginTop: 4 }}>
            Buscar vuelos
          </button>
        </form>

        <AvisoAfiliados />
      </div>
    </div>
  );
}
