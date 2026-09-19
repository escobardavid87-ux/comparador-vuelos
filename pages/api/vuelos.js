import { detectarDivisa } from '../../lib/divisa';

let cache = {}; // cache muy simple en memoria; sustituir por Redis en producción
const CACHE_TTL_MS = 1000 * 60 * 30; // 30 minutos

export default async function handler(req, res) {
  const { origin, destination, departDate } = req.query;

  if (!origin || !destination || !departDate) {
    return res.status(400).json({ error: 'Faltan parámetros: origin, destination, departDate' });
  }

  const currency = detectarDivisa(req);

  const cacheKey = `${origin}-${destination}-${departDate}-${currency}`;
  const cached = cache[cacheKey];
  if (cached && Date.now() - cached.time < CACHE_TTL_MS) {
    return res.status(200).json(cached.data);
  }

  try {
    const url = new URL('https://api.travelpayouts.com/aviasales/v3/prices_for_dates');
    url.searchParams.set('origin', origin);
    url.searchParams.set('destination', destination);
    url.searchParams.set('departure_at', departDate);
    url.searchParams.set('currency', currency);
    url.searchParams.set('limit', '30');
    url.searchParams.set('unique', 'false');
    url.searchParams.set('token', process.env.TRAVELPAYOUTS_TOKEN);

    const response = await fetch(url.toString());
    const json = await response.json();

    const marker = process.env.TRAVELPAYOUTS_MARKER;
    const vuelos = (json.data || []).map((v) => ({
      ...v,
      currency,
      link_afiliado: `https://www.aviasales.com${v.link}?marker=${marker}`,
      link_busqueda: `https://www.aviasales.com/search/${origin}${departDate.slice(8, 10)}${departDate.slice(5, 7)}${destination}1?marker=${marker}&currency=${currency}&locale=es`,
    }));

    cache[cacheKey] = { data: vuelos, time: Date.now() };
    res.status(200).json(vuelos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error consultando vuelos' });
  }
}
