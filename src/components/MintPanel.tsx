import { useState } from 'react'
import { Minus, Plus, Zap, Sparkles } from 'lucide-react'

const UNIT_PRICE = 0.001
const TOKENS_PER_UNIT = 750
const TOTAL_SUPPLY = 21_000_000
const TOTAL_MINTED = 700_140

export default function MintPanel() {
  const [qty, setQty] = useState(1)

  const total = (qty * UNIT_PRICE).toFixed(4)
  const receive = qty * TOKENS_PER_UNIT
  const progress = ((TOTAL_MINTED / TOTAL_SUPPLY) * 100).toFixed(1)

  return (
    <aside className="mint-panel">
      {/* Header */}
      <div className="panel-heading">
        <span className="panel-kicker">{'>'} Fair Mint Console</span>
        <strong style={{ color: 'var(--gray-dim)' }}>Not connected</strong>
      </div>

      {/* Quantity */}
      <div className="quantity-block">
        <span>Mint units</span>
        <div className="stepper">
          <button disabled={qty <= 1} onClick={() => setQty(q => q - 1)}>
            <Minus size={16} />
          </button>
          <strong>{qty}</strong>
          <button onClick={() => setQty(q => q + 1)}>
            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* Price Grid */}
      <div className="quote-grid">
        <div className="quote-item">
          <span>Unit price</span>
          <strong>{UNIT_PRICE} ETH</strong>
        </div>
        <div className="quote-item">
          <span>Receive</span>
          <strong className="text-green">{receive.toLocaleString()} $AGZR</strong>
        </div>
      </div>

      {/* Supply */}
      <div className="supply-block">
        <div className="supply-header">
          <span>Public mint</span>
          <strong>{TOTAL_MINTED.toLocaleString()} / {TOTAL_SUPPLY.toLocaleString()}</strong>
          <b>{progress}%</b>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="supply-track" aria-label={`${progress}% minted`}>
        <div className="supply-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* Total */}
      <div className="mint-footnote">
        <span>Total</span>
        <strong>{total} ETH</strong>
      </div>

      {/* Action */}
      <button className="primary-action">
        <Zap size={16} />
        <span>Connect Wallet</span>
      </button>

      {/* Status */}
      <p className="status-line">
        <Sparkles size={14} className="icon" style={{ color: 'var(--green)' }} />
        <span>Connect a wallet to mint on Ethereum Mainnet.</span>
      </p>
    </aside>
  )
}
