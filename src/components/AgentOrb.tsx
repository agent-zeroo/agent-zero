export default function AgentOrb() {
  return (
    <div className="compression-chamber">
      <div className="chamber-orb">
        <span className="orb-ring orb-ring-a" />
        <span className="orb-ring orb-ring-b" />
        <span className="orb-ring orb-ring-c" />
        <div className="orb-core">
          <span style={{ fontSize: '1.4rem' }}>0</span>
        </div>
      </div>
      <div className="signal-bars">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className="signal-bar" />
        ))}
      </div>
    </div>
  )
}
