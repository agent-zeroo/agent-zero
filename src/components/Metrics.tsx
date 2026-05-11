export default function Metrics() {
  const metrics = [
    { label: 'Total Supply', value: '21,000,000', color: 'green' },
    { label: 'Genesis Burn', value: '2,100,000', color: 'coral' },
    { label: 'Effective Circulating', value: '18,900,000', color: 'cyan' },
  ]

  return (
    <div className="mini-metrics">
      {metrics.map((m) => (
        <div key={m.label} className={`mini-metric ${m.color}`}>
          <span>{m.label}</span>
          <strong>{m.value}</strong>
        </div>
      ))}
    </div>
  )
}
