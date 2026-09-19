import { useState } from 'react';
import { useRouter } from 'next/router';
import BuscadorLugar from '../components/BuscadorLugar';

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
    <div className="container">
      <h1 style={{ fontSize: 22, fontWeight: 500 }}>Encuentra el vuelo más barato</h1>
      <p style={{ color: 'var(--text-secondary)', marginTop: -8 }}>
        Comparamos precios de cientos de aerolíneas
      </p>

      <form onSubmit={buscar} className="card" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <BuscadorLugar etiqueta="Origen" onSelect={setOrigin} />
        <BuscadorLugar etiqueta="Destino" onSelect={setDestination} />
        <div>
          <label style={{ fontSize: 13, color: 'var(--text-secondary)' }}>Fecha de salida</label>
          <input type="date" value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
        </div>
        <button className="btn-primary" type="submit">Buscar vuelos</button>
      </form>
    </div>
  );
}
