import '../styles/pages.css'
import { Cpu, Shield, Zap, Bot, Database, GitBranch } from 'lucide-react'

const ENGINES = [
  {
    icon: <Bot size={22} />,
    name: 'Agent Deployer',
    desc: 'Spawn autonomous on-chain agents that execute predefined strategies. Each agent burns $AGZR on deployment.',
    status: 'active' as const,
    color: 'green',
  },
  {
    icon: <Cpu size={22} />,
    name: 'Inference Oracle',
    desc: 'AI model inference results verified on-chain via ZK proofs. Enables trustless AI decision-making for DeFi.',
    status: 'active' as const,
    color: 'cyan',
  },
  {
    icon: <Shield size={22} />,
    name: 'Compression Engine',
    desc: 'Automated supply compression via Uniswap V4 hooks. Burns tokens on every swap epoch, driving toward the 2.1M floor.',
    status: 'active' as const,
    color: 'coral',
  },
  {
    icon: <Zap size={22} />,
    name: 'Flash Agent',
    desc: 'Sub-second MEV-aware agent execution. Agents compete for arbitrage and liquidation opportunities across L2s.',
    status: 'pending' as const,
    color: 'purple',
  },
  {
    icon: <Database size={22} />,
    name: 'State Committer',
    desc: 'Batch-commit agent state transitions to L1. Reduces gas costs by 90% via calldata compression.',
    status: 'pending' as const,
    color: 'green',
  },
  {
    icon: <GitBranch size={22} />,
    name: 'Fork Manager',
    desc: 'Agent versioning and forking. Deploy new agent variants from existing templates. Community-contributed strategies.',
    status: 'pending' as const,
    color: 'cyan',
  },
]

export default function EnginesPage() {
  return (
    <section className="page-section">
      <div className="page-content">
        <div className="tag-row">
          <span className="tag green">6 Engines</span>
          <span className="tag coral">3 Live</span>
          <span className="tag cyan">3 Coming</span>
        </div>

        <h1 className="hero-title">
          <span className="highlight">Agent</span> Engines
        </h1>

        <p className="hero-lede">
          <span className="prompt-prefix">$</span>
          The engine registry powers all on-chain agent operations.
          Each engine is a modular smart contract that can be composed,
          upgraded, and governed by $AGZR holders.
          <span className="cursor-blink" />
        </p>

        {/* Terminal Output */}
        <div className="terminal-block">
          <div className="line">
            <span className="prompt">$</span>
            <span className="output">agzr engines list --status</span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="comment"># Scanning engine registry on mainnet...</span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="output" style={{ color: 'var(--green)' }}>
              [LIVE] agent-deployer @ 0x7a2e...f1c9
            </span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="output" style={{ color: 'var(--green)' }}>
              [LIVE] inference-oracle @ 0x3b8d...a4e2
            </span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="output" style={{ color: 'var(--green)' }}>
              [LIVE] compression-engine @ 0x9f1c...d7b3
            </span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="output" style={{ color: 'var(--amber)' }}>
              [PENDING] flash-agent @ 0x0000...0000
            </span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="output" style={{ color: 'var(--amber)' }}>
              [PENDING] state-committer @ 0x0000...0000
            </span>
          </div>
          <div className="line">
            <span className="prompt">&gt;</span>
            <span className="output" style={{ color: 'var(--amber)' }}>
              [PENDING] fork-manager @ 0x0000...0000
            </span>
          </div>
        </div>

        {/* Engines Grid */}
        <div className="engines-grid">
          {ENGINES.map((engine) => (
            <div key={engine.name} className={`engine-card ${engine.color}`}>
              <div className="engine-icon" style={{ color: `var(--${engine.color === 'coral' ? 'amber' : engine.color})` }}>
                {engine.icon}
              </div>
              <h3>{engine.name}</h3>
              <p>{engine.desc}</p>
              <span className={`engine-status ${engine.status}`}>
                <span className="dot" />
                {engine.status === 'active' ? 'Live on Mainnet' : 'Coming Soon'}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
