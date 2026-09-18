import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  const [origin, setOrigin] = useState('MAD');
  const [destination, setDestination] = useState('BCN');
  const [departDate, setDepartDate] = useState('');

  const buscar = (e) => {
    e.preventDefault();
    if (!departDate) return;
    router.push(`/resultados?origin=${origin}&destination=${destination}&departDate=${departDate}`);
  };

  return (
    <div className="container">
      <h1 style={{ fontSize: 22, fontWeight: 500 }}>Encuentra el vuelo más barato</h1>
      <p style={{ color: 'var(--text-secondary)', marginTop: -8 }}>
        Comparamos precios de cientos de aerolíneas
      </p>

      <form onSubmit={buscar} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12, marginTop: 16 }}>
        <div>
          <label style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Origen (código IATA)</label>
          <input value={origin} onChange={(e) => setOrigin(e.target.value.toUpperCase())} maxLength={3} required />
        </div>
        <div>
          <label style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Destino (código IATA)</label>
          <input value={destination} onChange={(e) => setDestination(e.target.value.toUpperCase())} maxLength={3} required />
        </div>
        <div>
          <label style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Fecha de salida</label>
          <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} required />
        </div>
        <button className="btn-primary" type="submit">Buscar vuelos</button>
      </form>
    </div>
  );
}
