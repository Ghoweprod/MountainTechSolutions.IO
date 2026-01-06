import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <motion.nav
        className={`nav ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="nav-container container">
          <Link to="/" className="nav-logo">
            <div className="logo-mark">
              <svg viewBox="0 0 32 32" fill="none">
                <path d="M16 3L3 26h26L16 3z" fill="currentColor" opacity="0.15"/>
                <path d="M16 3L3 26h26L16 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                <circle cx="16" cy="17" r="4" fill="currentColor"/>
              </svg>
            </div>
            <span className="logo-text mono">
              MNTN<span className="logo-accent">_Tech</span>
            </span>
          </Link>

          <div className="nav-links">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="nav-actions">
            <Link to="/contact" className="btn btn-primary btn-sm">
              Free Consultation
            </Link>
          </div>

          <button 
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mobile-menu-content">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`mobile-link ${location.pathname === link.to ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                Free Consultation
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

