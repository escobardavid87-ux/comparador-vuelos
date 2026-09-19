import { useEffect, useState } from 'react';
import { formatearPrecio } from '../lib/formato';

export default function CalendarioPrecios({ origin, destination, month: inicial, selected, onSelect, divisa }) {
  const [month, setMonth] = useState(inicial);
  const [precios, setPrecios] = useState({});
  const [moneda, setMoneda] = useState('eur');
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    if (!origin || !destination) return;
    setCargando(true);
    const extra = divisa ? `&currency=${divisa}` : '';
    fetch(`/api/calendario?origin=${origin}&destination=${destination}&month=${month}${extra}`)
      .then((r) => r.json())
      .then((data) => {
        const mapa = {};
        let mon = 'eur';
        if (Array.isArray(data)) {
          data.forEach((d) => {
            if (d.currency) mon = d.currency;
            if (!(d.depart_date in mapa) || d.value < mapa[d.depart_date]) {
              mapa[d.depart_date] = d.value;
            }
          });
        }
        setPrecios(mapa);
        setMoneda(mon);
      })
      .catch(() => setPrecios({}))
      .finally(() => setCargando(false));
  }, [origin, destination, month, divisa]);

  const [y, m] = month.split('-').map(Number);
  const diasMes = new Date(y, m, 0).getDate();
  const primerDia = (new Date(y, m - 1, 1).getDay() + 6) % 7;
  const valores = Object.values(precios);
  const minimo = valores.length ? Math.min(...valores) : null;
  const titulo = new Date(y, m - 1, 1)
    .toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })
    .replace(/^./, (c) => c.toUpperCase());

  const cambiarMes = (n) => {
    const f = new Date(y, m - 1 + n, 1);
    setMonth(`${f.getFullYear()}-${String(f.getMonth() + 1).padStart(2, '0')}`);
  };

  const celdas = [];
  for (let i = 0; i < primerDia; i++) celdas.push(null);
  for (let d = 1; d <= diasMes; d++) celdas.push(d);

  return (
    <div style={{ maxWidth: 420, margin: '16px auto', fontFamily: 'sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <button onClick={() => cambiarMes(-1)}>‹</button>
        <strong>{titulo}</strong>
        <button onClick={() => cambiarMes(1)}>›</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4, textAlign: 'center' }}>
        {['L', 'M', 'X', 'J', 'V', 'S', 'D'].map((d) => (
          <div key={d} style={{ fontSize: 12, color: '#777' }}>{d}</div>
        ))}
        {celdas.map((dia, i) => {
          if (!dia) return <div key={i} />;
          const fecha = `${month}-${String(dia).padStart(2, '0')}`;
          const precio = precios[fecha];
          const hayPrecio = precio !== undefined;
          const barato = hayPrecio && precio === minimo;
          const elegido = fecha === selected;
          return (
            <button
              key={i}
              onClick={() => hayPrecio && onSelect && onSelect(fecha)}
              style={{
                padding: '6px 0',
                borderRadius: 6,
                border: elegido ? '2px solid #2563eb' : '1px solid #ddd',
                background: barato ? '#d4f5dd' : '#fff',
                fontSize: 12,
                fontFamily: 'inherit',
                color: 'inherit',
                cursor: hayPrecio ? 'pointer' : 'default',
              }}
            >
              <div>{dia}</div>
              <div style={{ fontWeight: 'bold', color: barato ? '#0a7a2f' : '#333' }}>
                {hayPrecio ? formatearPrecio(precio, moneda, true) : '-'}
              </div>
            </button>
          );
        })}
      </div>

      <p style={{ fontSize: 12, color: '#777' }}>
        {cargando ? 'Cargando precios…' : 'Precios orientativos, basados en búsquedas recientes. El precio final puede ser más alto.'}
      </p>
    </div>
  );
}
