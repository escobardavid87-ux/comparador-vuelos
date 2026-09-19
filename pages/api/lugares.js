export default async function handler(req, res) {
  const { term } = req.query;
  if (!term || term.length < 2) {
    return res.status(200).json([]);
  }

  try {
    const url = new URL('https://autocomplete.travelpayouts.com/places2');
    url.searchParams.set('term', term);
    url.searchParams.set('locale', 'es');
    url.searchParams.append('types[]', 'city');
    url.searchParams.append('types[]', 'airport');

    const response = await fetch(url.toString());
    const data = await response.json();

    const lugares = (Array.isArray(data) ? data : []).slice(0, 8).map((p) => ({
      code: p.code,
      type: p.type,
      name: p.name,
      country: p.country_name || '',
    }));

    res.status(200).json(lugares);
  } catch (err) {
    console.error(err);
    res.status(200).json([]);
  }
}
