import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/theme.css'
import './styles/layout.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import MatrixRain from './components/MatrixRain'
import MintPage from './pages/MintPage'
import CurvePage from './pages/CurvePage'
import EnginesPage from './pages/EnginesPage'
import TokenomicsPage from './pages/TokenomicsPage'

function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <MatrixRain />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<MintPage />} />
            <Route path="/curve" element={<CurvePage />} />
            <Route path="/engines" element={<EnginesPage />} />
            <Route path="/tokenomics" element={<TokenomicsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
