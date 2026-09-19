import { useEffect, useRef, useState } from 'react';

export default function BuscadorLugar({ etiqueta, onSelect }) {
  const [texto, setTexto] = useState('');
  const [opciones, setOpciones] = useState([]);
  const elegido = useRef(false);

  useEffect(() => {
    if (elegido.current) {
      elegido.current = false;
      return;
    }
    if (texto.trim().length < 2) {
      setOpciones([]);
      return;
    }
    const t = setTimeout(() => {
      fetch(`/api/lugares?term=${encodeURIComponent(texto.trim())}`)
        .then((r) => r.json())
        .then((d) => setOpciones(Array.isArray(d) ? d : []))
        .catch(() => setOpciones([]));
    }, 250);
    return () => clearTimeout(t);
  }, [texto]);

  const elegir = (o) => {
    elegido.current = true;
    setTexto(`${o.name} (${o.code})`);
    setOpciones([]);
    onSelect(o.code);
  };

  return (
    <div style={{ position: 'relative', marginBottom: 12 }}>
      <label style={{ fontSize: 12, color: '#777' }}>{etiqueta}</label>
      <input
        value={texto}
        onChange={(e) => {
          setTexto(e.target.value);
          onSelect('');
        }}
        placeholder="Ciudad o aeropuerto"
        style={{ display: 'block', width: '100%', padding: 10, fontSize: 16, border: '1px solid #ddd', borderRadius: 8, boxSizing: 'border-box' }}
      />
      {opciones.length > 0 && (
        <div style={{ position: 'absolute', left: 0, right: 0, background: '#fff', border: '1px solid #ddd', borderRadius: 8, zIndex: 10, maxHeight: 260, overflowY: 'auto' }}>
          {opciones.map((o, i) => (
            <button
              key={i}
              onClick={() => elegir(o)}
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: 10, border: 'none', background: 'transparent', fontSize: 14, fontFamily: 'inherit', cursor: 'pointer' }}
            >
              <strong>{o.name}</strong> ({o.code}) · {o.type === 'airport' ? 'Aeropuerto' : 'Ciudad'}
              <div style={{ fontSize: 12, color: '#777' }}>{o.country}</div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
          }
