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
  const otras = RUTAS.filter((r) => r.slug !== ruta.slug);

  return (
    <div className="container">
      <Head>
        <title>{`${titulo} | Comparador de vuelos`}</title>
        <meta name="description" content={descripcion} />
        <link rel="canonical" href={`https://comparador-vuelos.vercel.app/vuelos/${ruta.slug}`} />
      </Head>

      <h1 style={{ fontSize: 22, fontWeight: 500 }}>{titulo}</h1>
      <p>{descripcion}</p>

      {desde && (
        <p style={{ fontWeight: 500 }}>
          Precio orientativo desde {desde} € (solo ida, según búsquedas recientes).
        </p>
      )}

      <p>
        <Link href={enlace}>Ver precios y calendario de {ruta.from} a {ruta.to} →</Link>
      </p>

      <h2 style={{ fontSize: 16, fontWeight: 500, marginTop: 24 }}>Otras rutas populares</h2>
      <ul>
        {otras.map((r) => (
          <li key={r.slug}>
            <Link href={`/vuelos/${r.slug}`}>
              Vuelos de {r.from} a {r.to}
            </Link>
          </li>
        ))}
      </ul>

      <AvisoAfiliados />
    </div>
  );
}
