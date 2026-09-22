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
    url.searchParams.set('token', process.env.TRAV
