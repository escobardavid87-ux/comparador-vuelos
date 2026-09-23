import Head from 'next/head';
import Link from 'next/link';
import AvisoAfiliados from '../../components/AvisoAfiliados';
import { RUTAS } from '../../lib/rutas';

export async function getStaticPaths() {
  return {
    paths: RUTAS.map((r) => ({ params: { ruta: r.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const ruta = RUTAS.find((r) => r.slug === params.ruta);
  if (!ruta) return { notFound: true };

  const fecha = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  let desde = null;

  try {
    const url = new URL('https://api.travelpayouts.com/aviasales/v3/prices_for_dates');
    url.searchParams.set('origin', ruta.origin);
    url.searchParams.set('destination', ruta.destination);
    url.searchParams.set('departure_at', fecha.slice(0, 7));
    url.searchParams.set('currency', 'eur');
    url.searchParams.set('sorting', 'price');
    url.searchParams.set('one_way', 'true');
    url.searchParams.set('limit', '1');
    url.searchParams.set('token', process.env.TRAVELPAYOUTS_TOKEN);
    const r = await fetch(url.toString());
    const json = await r.json();
    if (json.data && json.data[0]) desde = Math.round(json.data[0].price);
  } catch (e) {
    desde = null;
  }

  return { props: { ruta, fecha, desde }, revalidate: 60 * 60 * 24 };
}

export default function PaginaRuta({ ruta, fecha, desde }) {
  const titulo = `Vuelos baratos de ${ruta.from} a ${ruta.to}`;
  const descripcion = desde
    ? `Compara vuelos de ${ruta.from} a ${ruta.to}. Precios desde ${desde} € y calendario para encontrar el día más barato.`
    : `Compara vuelos de ${ruta.from} a ${ruta.to} y encuentra el día más barato con nuestro calendario de precios.`;
  const enlace = `/resultados?origin=${ruta.origin}&destination=${ruta.destination}&departDate=${fecha}`;

  const mismoOrigen = RUTAS.filter((r) => r.slug !== ruta.slug && r.origin === ruta.origin);
  const resto = RUTAS.filter((r) => r.slug !== ruta.slug && r.origin !== ruta.origin);
  const relacionadas = [...mismoOrigen, ...resto].slice(0, 8);

  const faqs = [
    {
      q: `¿Cuál es la mejor época para volar de ${ruta.from} a ${ruta.to}?`,
      a: `Los precios cambian según la temporada y la demanda del momento. En general, evitar los puentes, festivos y el verano en la ruta ${ruta.from}-${ruta.to} suele ayudar a encontrar billetes más baratos. Nuestro calendario de precios muestra el coste real de cada día para que compares antes de reservar.`,
    },
    {
      q: `¿Con cuánta antelación conviene reservar el vuelo ${ruta.from}-${ruta.to}?`,
      a: `Como norma general, reservar con entre 4 y 8 semanas de antelación suele dar buenos precios en la mayoría de rutas. Cuanto más cerca de la fecha de salida, más suben los precios, sobre todo en temporada alta.`,
    },
    {
      q: `¿Hay vuelos directos entre ${ruta.from} y ${ruta.to}?`,
      a: `Depende de la fecha y la aerolínea. En los resultados de búsqueda indicamos si cada vuelo es directo o tiene escalas, para que puedas elegir según tu prioridad: precio o duración del viaje.`,
    },
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <div>
      <Head>
        <title>{`${titulo} | Comparador de vuelos`}</title>
        <meta name="description" content={descripcion} />
        <link rel="canonical" href={`https://comparador-vuelos.vercel.app/vuelos/${ruta.slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </Head>

      <div
        className="franja"
        style={{
          background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-dark) 100%)',
          padding: '2rem 1rem 2.5rem',
        }}
      >
        <h1 style={{ fontSize: 26, color: 'white', margin: 0 }}>{titulo}</h1>
        <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 14, margin: '8px 0 0' }}>{descripcion}</p>
      </div>

      <div className="container" style={{ marginTop: '-1.25rem', position: 'relative' }}>
        <svg
          className="marca-agua-avion"
          width="220"
          height="220"
          viewBox="0 0 24 24"
          fill="var(--accent)"
        >
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2.5 1.5V22l4-1 4 1v-1.5L13 19v-5.5l8 2.5z" />
        </svg>

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="card">
            {desde && (
              <p style={{ fontWeight: 600, margin: 0, color: 'var(--accent)', fontSize: 17 }}>
                Desde {desde} € (solo ida, según búsquedas recientes)
              </p>
            )}
            <Link href={enlace}>
              <button className="btn-primary" style={{ marginTop: desde ? 12 : 0 }}>
                Ver precios y calendario de {ruta.from} a {ruta.to}
              </button>
            </Link>
          </div>

          <h2 style={{ fontSize: 16, fontWeight: 700, marginTop: 28 }}>
            Consejos para tu vuelo de {ruta.from} a {ruta.to}
          </h2>
          <ul>
            <li>Compara varios días con el calendario de precios antes de elegir fecha, ya que el precio puede variar mucho de un día a otro.</li>
            <li>Revisa si el billete incluye equipaje de mano y facturado, ya que algunas aerolíneas de bajo coste los cobran aparte.</li>
            <li>Los vuelos con escala suelen ser más baratos que los directos, pero alargan el viaje; valora qué te compensa más.</li>
            <li>Si tus fechas son flexibles, prueba a mover la salida uno o dos días para comparar precios.</li>
          </ul>

          <h2 style={{ fontSize: 16, fontWeight: 700, marginTop: 24 }}>Preguntas frecuentes</h2>
          {faqs.map((f, i) => (
            <div key={i} className="card" style={{ marginBottom: 10 }}>
              <p style={{ fontWeight: 600, margin: '0 0 4px' }}>{f.q}</p>
              <p style={{ margin: 0 }}>{f.a}</p>
            </div>
          ))}

          <h2 style={{ fontSize: 16, fontWeight: 700, marginTop: 24 }}>Otras rutas relacionadas</h2>
          <ul>
            {relacionadas.map((r) => (
              <li key={r.slug}>
                <Link href={`/vuelos/${r.slug}`}>
                  Vuelos de {r.from} a {r.to}
                </Link>
              </li>
            ))}
          </ul>

          <AvisoAfiliados />
        </div>
      </div>
    </div>
  );
}
