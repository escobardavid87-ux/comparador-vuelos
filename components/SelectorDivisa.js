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
        <option value="eur">EUR (€)</option>
        <option value="usd">USD ($)</option>
        <option value="gbp">GBP (£)</option>
      </select>
    </label>
  );
}
