export default async function handler(req, res) {
  const { origin, destination, month } = req.query;

  if (!origin || !destination || !month) {
    return res.status(400).json({ error: 'Faltan parámetros: origin, destination, month' });
  }

  try {
    const url = new URL('https://api.travelpayouts.com/v2/prices/month-matrix');
    url.searchParams.set('currency', 'eur');
    url.searchParams.set('origin', origin);
    url.searchParams.set('destination', destination);
    url.searchParams.set('show_to_affiliates', 'true');
    url.searchParams.set('month', `${month}-01`);
    url.searchParams.set('token', process.env.TRAVELPAYOUTS_TOKEN);

    const response = await fetch(url.toString());
    const json = await response.json();

    res.status(200).json(json.data || []);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error consultando calendario' });
  }
}
