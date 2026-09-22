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
        className="franja"
        style={{
          background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)',
          padding: '2.75rem 1rem 3.5rem',
          textAlign: 'center',
        }}
      >
        <svg
          className="avion-volando"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="white"
          style={{ transform: 'rotate(8deg)' }}
        >
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>

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
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>
        <h1
          style={{
            fontSize: 30,
            color: 'white',
            margin: 0,
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
