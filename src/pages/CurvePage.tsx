import '../styles/pages.css'

export default function CurvePage() {
  return (
    <section className="page-section full-width">
      <div className="page-content">
        <div className="tag-row">
          <span className="tag green">Compression Active</span>
          <span className="tag cyan">Real-time</span>
        </div>

        <h1 className="hero-title">
          <span className="highlight">Squeeze</span> Curve
        </h1>

        <p className="hero-lede">
          <span className="prompt-prefix">$</span>
          The deflation curve compresses supply from 18.9M toward the 2.1M floor.
          Each epoch reduces circulating supply by a decay factor powered by
          Uniswap V4 hooks. The curve is immutable and on-chain.
          <span className="cursor-blink" />
        </p>

        {/* ASCII Curve Visualization */}
        <pre className="ascii-chart">
{`
  18.9M ┤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
        │                                                          ╲
  16.0M ┤                                                           ╲
        │                                                            ╲
  13.0M ┤                                                             ╲
        │                                                              ╲
  10.0M ┤                                                               ╲
        │                                                                ╲
   7.0M ┤                                                                 ╲
        │                                                                  ╲
   4.0M ┤                                                                   ╲
        │                                                                    ╲
   2.1M ┤━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━● FLOOR
        │
   0.0M ┼────────┬────────┬────────┬────────┬────────┬────────┬────────┬──────
        E0       E1       E2       E3       E4       E5       E6       E7
                                              EPOCH →`}
        </pre>

        {/* Curve Stats */}
        <div className="mini-metrics">
          <div className="mini-metric green">
            <span>Current Epoch</span>
            <strong>E0</strong>
          </div>
          <div className="mini-metric coral">
            <span>Current Supply</span>
            <strong>18,900,000</strong>
          </div>
          <div className="mini-metric cyan">
            <span>Next Decay</span>
            <strong>-5%</strong>
          </div>
        </div>
      </div>
    </section>
  )
}
