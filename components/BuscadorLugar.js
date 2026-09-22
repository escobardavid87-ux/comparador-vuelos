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
    <div style={{ position: 'relative' }}>
      <label style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{etiqueta}</label>
      <input
        value={texto}
        onChange={(e) => {
          setTexto(e.target.value);
          onSelect('');
        }}
        placeholder="Ciudad o aeropuerto"
      />
      {opciones.length > 0 && (
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            background: 'var(--surface)',
            border: '1px solid var(--border)',
            borderRadius: 10,
            marginTop: 4,
            boxShadow: 'var(--shadow-hover)',
            zIndex: 20,
            overflow: 'hidden',
            maxHeight: 260,
            overflowY: 'auto',
          }}
        >
          {opciones.map((o, i) => (
            <button
              key={i}
              onClick={() => elegir(o)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '10px 13px',
                border: 'none',
                borderBottom: i < opciones.length - 1 ? '1px solid var(--border)' : 'none',
                background: 'transparent',
                cursor: 'pointer',
                fontFamily: 'inherit',
              }}
            >
              <strong style={{ fontSize: 14 }}>{o.name}</strong>{' '}
              <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>({o.code})</span>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                {o.type === 'airport' ? 'Aeropuerto' : 'Ciudad'} · {o.country}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
