import AgentOrb from '../components/AgentOrb'
import MintPanel from '../components/MintPanel'
import Metrics from '../components/Metrics'

export default function MintPage() {
  return (
    <section className="hero-section" id="mint">
      <div className="hero-intro">
        {/* Tags */}
        <div className="tag-row">
          <span className="tag green">21M Hard Cap</span>
          <span className="tag coral">10% Genesis Burn</span>
          <span className="tag cyan">2.1M Floor</span>
        </div>

        {/* Title */}
        <h1 className="hero-title">
          <span className="highlight">AGENT</span> ZERO
        </h1>

        {/* Description */}
        <p className="hero-lede">
          <span className="prompt-prefix">$</span>
          A deflationary ERC-20 with an AI-native agent core. Supply is capped at
          21,000,000 — launches with a 2,100,000 genesis burn, and compresses from
          an 18,900,000 circulating base toward a permanent 2,100,000 floor.
          <br /><br />
          <span className="cmd">./agent --init --chain=ethereum</span>
          <span className="cursor-blink" />
        </p>

        {/* Orb */}
        <AgentOrb />
      </div>

      {/* Mint Panel */}
      <MintPanel />

      {/* Bottom Metrics */}
      <Metrics />
    </section>
  )
}
