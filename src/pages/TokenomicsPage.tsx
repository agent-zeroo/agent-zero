import '../styles/pages.css'

const ALLOCATIONS = [
  { name: 'Public Mint', pct: 70, color: 'green', tokens: '14,700,000' },
  { name: 'Genesis Burn', pct: 10, color: 'coral', tokens: '2,100,000' },
  { name: 'Agent Treasury', pct: 10, color: 'cyan', tokens: '2,100,000' },
  { name: 'Team (Vested)', pct: 5, color: 'purple', tokens: '1,050,000' },
  { name: 'Liquidity', pct: 5, color: 'green', tokens: '1,050,000' },
]

export default function TokenomicsPage() {
  return (
    <section className="page-section">
      <div className="page-content">
        <div className="tag-row">
          <span className="tag green">Deflationary</span>
          <span className="tag coral">Fixed Supply</span>
          <span className="tag cyan">On-Chain</span>
        </div>

        <h1 className="hero-title">
          <span className="highlight">Token</span>omics
        </h1>

        <p className="hero-lede">
          <span className="prompt-prefix">$</span>
          $AGZR is a fixed-supply, deflationary ERC-20 token. The compression
          mechanism permanently removes tokens from circulation, creating
          increasing scarcity over time.
          <span className="cursor-blink" />
        </p>

        {/* Terminal Output */}
        <div className="terminal-block">
          <div className="line">
            <span className="prompt">$</span>
            <span className="output">agzr token info --verbose</span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="output">Name ........... Agent Zero</span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="output">Symbol ......... $AGZR</span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="output">Decimals ....... 18</span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="output">Network ........ Ethereum Mainnet</span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="output">Total Supply ... 21,000,000 $AGZR</span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="output">Floor .......... 2,100,000 $AGZR</span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="output">Standard ....... ERC-20 + Uniswap V4 Hooks</span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="comment"># Contract verified on Etherscan ✓</span>
          </div>
        </div>

        {/* Token Stats */}
        <div className="tokenomics-grid">
          <div className="token-card green">
            <span className="token-label">Total Supply</span>
            <span className="token-value">21,000,000</span>
            <span className="token-desc">Hard cap. No more tokens can ever be minted.</span>
          </div>
          <div className="token-card coral">
            <span className="token-label">Genesis Burn</span>
            <span className="token-value">2,100,000</span>
            <span className="token-desc">10% of supply permanently burned at launch.</span>
          </div>
          <div className="token-card cyan">
            <span className="token-label">Floor Supply</span>
            <span className="token-value">2,100,000</span>
            <span className="token-desc">Minimum achievable circulating supply via compression.</span>
          </div>
          <div className="token-card purple">
            <span className="token-label">Compression</span>
            <span className="token-value">90%</span>
            <span className="token-desc">Total supply reduction from max to floor over full cycle.</span>
          </div>
        </div>

        {/* Allocation Breakdown */}
        <h2 style={{
          fontSize: '0.85rem',
          fontWeight: 700,
          color: 'var(--white)',
          marginTop: '30px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}>
          <span className="prompt-prefix">{'>'}</span>
          Token Allocation
        </h2>

        <div className="allocation-list">
          {ALLOCATIONS.map((a) => (
            <div key={a.name} className="allocation-item">
              <span className="allocation-name">{a.name}</span>
              <div className="allocation-bar">
                <div
                  className={`allocation-fill ${a.color}`}
                  style={{ width: `${a.pct}%` }}
                />
              </div>
              <span className="allocation-pct">{a.pct}%</span>
              <span style={{
                minWidth: '120px',
                textAlign: 'right',
                fontSize: '0.7rem',
                color: 'var(--gray-dim)',
              }}>
                {a.tokens}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
