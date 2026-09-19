const DIVISAS = [
  ['eur', 'EUR - Euro'],
  ['usd', 'USD - Dólar estadounidense'],
  ['gbp', 'GBP - Libra esterlina'],
  ['chf', 'CHF - Franco suizo'],
  ['sek', 'SEK - Corona sueca'],
  ['nok', 'NOK - Corona noruega'],
  ['dkk', 'DKK - Corona danesa'],
  ['pln', 'PLN - Esloti polaco'],
  ['czk', 'CZK - Corona checa'],
  ['huf', 'HUF - Forinto húngaro'],
  ['ron', 'RON - Leu rumano'],
  ['try', 'TRY - Lira turca'],
  ['cad', 'CAD - Dólar canadiense'],
  ['aud', 'AUD - Dólar australiano'],
  ['nzd', 'NZD - Dólar neozelandés'],
  ['jpy', 'JPY - Yen japonés'],
  ['cny', 'CNY - Yuan chino'],
  ['hkd', 'HKD - Dólar de Hong Kong'],
  ['sgd', 'SGD - Dólar de Singapur'],
  ['inr', 'INR - Rupia india'],
  ['krw', 'KRW - Won surcoreano'],
  ['thb', 'THB - Baht tailandés'],
  ['aed', 'AED - Dírham de EAU'],
  ['sar', 'SAR - Riyal saudí'],
  ['ils', 'ILS - Nuevo séquel israelí'],
  ['zar', 'ZAR - Rand sudafricano'],
  ['mxn', 'MXN - Peso mexicano'],
  ['brl', 'BRL - Real brasileño'],
  ['ars', 'ARS - Peso argentino'],
  ['clp', 'CLP - Peso chileno'],
  ['cop', 'COP - Peso colombiano'],
  ['pen', 'PEN - Sol peruano'],
];

export default function SelectorDivisa({ divisa, onChange }) {
  return (
    <label style={{ fontSize: 12, color: '#777' }}>
      Divisa{' '}
      <select
        value={divisa}
        onChange={(e) => onChange(e.target.value)}
        style={{ fontSize: 14, padding: 4 }}
      >
        <option value="">Automática</option>
        {DIVISAS.map(([codigo, nombre]) => (
          <option key={codigo} value={codigo}>{nombre}</option>
        ))}
      </select>
    </label>
  );
}
