export default async function handler(req, res) {
  const token = process.env.TRAVELPAYOUTS_TOKEN;
  const oculto = (t) => (token ? t.split(token).join('***') : t);

  const pruebas = {
    cache_https: `https://engine.hotellook.com/api/v2/cache.json?location=MAD&checkIn=2026-11-24&checkOut=2026-11-26&currency=eur&limit=5&token=${token}`,
    cache_http: `http://engine.hotellook.com/api/v2/cache.json?location=MAD&checkIn=2026-11-24&checkOut=2026-11-26&currency=eur&limit=5&token=${token}`,
    lookup: `https://engine.hotellook.com/api/v2/lookup.json?query=Madrid&lang=es&lookFor=both&limit=2&token=${token}`,
    estatico: `https://engine.hotellook.com/api/v2/static/countries.json?token=${token}`,
  };

  const resultado = {};
  for (const [nombre, url] of Object.entries(pruebas)) {
    try {
      const r = await fetch(url);
      const texto = await r.text();
      resultado[nombre] = { estado: r.status, inicio: oculto(texto.slice(0, 150)) };
    } catch (e) {
      resultado[nombre] = { error: oculto(String(e.message || e)) };
    }
  }

  res.status(200).json(resultado);
}
