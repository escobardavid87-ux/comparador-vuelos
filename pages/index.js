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
