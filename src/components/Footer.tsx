import { Link } from 'react-router-dom'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link to="/" className="footer-logo" aria-label="GoPresight home">
          <Logo />
        </Link>
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/about">About</Link>
          <Link to="/news">News</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/investors">Investor Relations</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
        <div className="footer-social">
          <a href="https://www.linkedin.com/company/presight-ai/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.7 3.3A1.8 1.8 0 1 0 4.7 6.9 1.8 1.8 0 0 0 4.7 3.3zM3.2 8.4h3V20.7h-3V8.4zM9.1 8.4h2.9v1.7h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.7 2 3.7 4.7v7.5h-3v-6.6c0-1.6 0-3.6-2.2-3.6s-2.5 1.7-2.5 3.5v6.7h-3V8.4z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/presightai/" target="_blank" rel="noreferrer" aria-label="Instagram">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth="1.7" />
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} GoPresight. All rights reserved.</p>
        <nav>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/cookies">Cookies Settings</Link>
        </nav>
      </div>
    </footer>
  )
}
