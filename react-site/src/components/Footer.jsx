import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="logo-mark">
                <svg viewBox="0 0 32 32" fill="none">
                  <path d="M16 3L3 26h26L16 3z" fill="currentColor" opacity="0.15"/>
                  <path d="M16 3L3 26h26L16 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                  <circle cx="16" cy="17" r="4" fill="currentColor"/>
                </svg>
              </div>
              <span className="mono">MNTN_Tech</span>
            </Link>
            <p className="footer-tagline">
              AI automation that saves you 10-20 hours per week. Serving businesses in Western North Carolina and nationwide.
            </p>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <Link to="/services#automation">Business Automation</Link>
            <Link to="/services#ai">Advanced AI Solutions</Link>
            <Link to="/services#security">IT & Security</Link>
            <Link to="/services#support">Ongoing Support</Link>
          </div>

          <div className="footer-links">
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <a href="mailto:mntntechsolutions@gmail.com">mntntechsolutions@gmail.com</a>
            <a href="tel:864-404-1054">864-404-1054</a>
            <span className="footer-location">Robbinsville, NC</span>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Mountain Tech Solutions. All rights reserved.</p>
          <p className="footer-service-area">
            Serving Western North Carolina locally & clients nationwide remotely
          </p>
        </div>
      </div>
    </footer>
  )
}

