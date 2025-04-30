import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Router>
        <div className="app-wrapper">
          <header>
            <button className={`sidebar-toggle ${menuOpen ? 'hidden' : ''}`} onClick={() => setMenuOpen(true)}>
              ☰
            </button>

            <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
              <h1 className="logo">MiPortfolio</h1>
              <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
              <Link to="/skills" onClick={() => setMenuOpen(false)}>Skills</Link>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>Proyectos</Link>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
              <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle">
                {darkMode ? '☀️' : '🌙'}
              </button>
            </nav>

            <div
              className={`overlay ${menuOpen ? 'show' : ''}`}
              onClick={() => setMenuOpen(false)}
            ></div>
          </header>

          <main className="main-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </div>
  )
}

export default App;



