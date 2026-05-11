import { Link, useLocation } from 'react-router-dom'
import { Zap } from 'lucide-react'

const NAV_ITEMS = [
  { path: '/', label: 'Mint' },
  { path: '/curve', label: 'Curve' },
  { path: '/engines', label: 'Engines' },
  { path: '/tokenomics', label: 'Tokenomics' },
]

export default function Navbar() {
  const location = useLocation()

  return (
    <header className="site-header">
      <Link to="/" className="brand-lockup">
        <span className="brand-mark">{'>'}_</span>
        <span className="brand-text">
          <strong>AGENT ZERO</strong>
          <small>$AGZR Protocol</small>
        </span>
      </Link>

      <nav className="nav-links">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <a
          href="https://x.com"
          target="_blank"
          rel="noreferrer"
          className="social-link"
          aria-label="Open on X"
        >
          X
        </a>
        <button className="wallet-btn">
          <Zap size={14} />
          <span>Connect</span>
        </button>
      </div>
    </header>
  )
}
