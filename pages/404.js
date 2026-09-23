import Link from 'next/link';

export default function Custom404() {
  return (
    <div>
      <div
        className="franja"
        style={{
          background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)',
          padding: '3rem 1rem',
          textAlign: 'center',
        }}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="white" style={{ opacity: 0.85 }}>
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>
        <h1 style={{ fontSize: 28, color: 'white', marginTop: 16, marginBottom: 8 }}>
          Esta ruta no existe
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 15, margin: 0 }}>
          Parece que te has desviado del plan de vuelo
        </p>
      </div>

      <div className="container" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link href="/">
          <button className="btn-primary" style={{ maxWidth: 280, margin: '0 auto' }}>
            Volver al inicio
          </button>
        </Link>
      </div>
    </div>
  );
            }
