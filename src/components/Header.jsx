import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

export default function Header({ scrolled }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <a className="brand" href="#top">Sunny Prabhakar</a>
      
      <button className="menu-btn" onClick={toggleMenu} aria-expanded={menuOpen}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#timeline" onClick={closeMenu}>Timeline</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
    </header>
  )
}
