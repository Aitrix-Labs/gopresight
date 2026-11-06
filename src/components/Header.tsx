import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { mainNav, type NavEntry } from '../data/site'
import Logo from './Logo'

function Chevron() {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" aria-hidden="true">
      <path d="M1 1l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function Icon({ src }: { src?: string }) {
  if (!src) return null
  return (
    <span className="menu-icon">
      <img src={src} alt="" />
    </span>
  )
}

function MenuPanel({ entry }: { entry: NavEntry }) {
  if (entry.layout === 'columns' && entry.groups) {
    return (
      <div className="mega-panel">
        <div className="mega-grid cols-6">
          {entry.groups.map((group) => (
            <div key={group.label} className="sol-col">
              <div className="sol-head">
                <Icon src={group.icon} />
                {group.to ? <Link to={group.to}>{group.label}</Link> : <strong>{group.label}</strong>}
              </div>
              {group.items.map((item) => (
                <Link key={item.to} to={item.to} className="sol-link">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mega-panel">
      <div className={`mega-grid cols-${entry.columns}`}>
        {entry.items?.map((item) => (
          <Link key={item.to} to={item.to} className="mega-card">
            <Icon src={item.icon} />
            <strong>{item.title}</strong>
            {item.desc ? <span>{item.desc}</span> : null}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [away, setAway] = useState(false)
  const [open, setOpen] = useState<string | null>(null)
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobile, setMobile] = useState(false)
  const [navHover, setNavHover] = useState(false)
  const [query, setQuery] = useState('')
  const location = useLocation()
  const menuOpen = open !== null || mobile || navHover
  const solid = scrolled || menuOpen
  const openEntry = mainNav.find((entry) => entry.label === open)

  useEffect(() => {
    let last = window.scrollY
    let frame = 0
    const apply = () => {
      frame = 0
      const y = window.scrollY
      const down = y > last + 4
      const up = y < last - 4
      const opening = last === y
      last = y
      setScrolled(y > 24)
      if (y <= 24) {
        setAway(false)
        return
      }
      if (down || opening) setAway(true)
      else if (up) setAway(false)
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(apply)
    }
    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    setOpen(null)
    setMobile(false)
    setNavHover(false)
    setSearchOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <header
        className={`site-header ${solid ? 'is-solid' : ''} ${away && !menuOpen ? 'is-away' : ''}`}
        onMouseLeave={() => setOpen(null)}
      >
        <div className="header-bar">
          <Link to="/" className="brand" aria-label="GoPresight home">
            <Logo />
          </Link>

          <nav
            className="desk-nav"
            aria-label="Primary"
            onMouseEnter={() => setNavHover(true)}
            onMouseLeave={() => setNavHover(false)}
          >
            {mainNav.map((entry) => (
              <div
                key={entry.label}
                className={`nav-item ${open === entry.label ? 'is-open' : ''}`}
                onMouseEnter={() => setOpen(entry.label)}
                onFocus={() => setOpen(entry.label)}
              >
                <button type="button" className="nav-btn" aria-expanded={open === entry.label}>
                  {entry.label}
                  <Chevron />
                </button>
              </div>
            ))}
            <Link to="/news" className="nav-text">
              News
            </Link>
            <Link to="/contact" className="nav-text">
              Contact Us
            </Link>
            <button
              type="button"
              className="icon-btn"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
                <path d="M16 16.5L20.5 21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
            </button>
          </nav>

          <button
            type="button"
            className={`burger${mobile ? ' is-open' : ''}`}
            aria-label={mobile ? 'Close menu' : 'Open menu'}
            aria-expanded={mobile}
            onClick={() => setMobile((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {openEntry ? <MenuPanel entry={openEntry} /> : null}

        {mobile ? (
          <div className="mobile-nav">
            {mainNav.map((entry) => (
              <details key={entry.label}>
                <summary>{entry.label}</summary>
                <div className="mobile-links">
                  {entry.items?.map((item) => (
                    <Link key={item.to} to={item.to}>
                      {item.title}
                    </Link>
                  ))}
                  {entry.groups?.map((group) => (
                    <div key={group.label}>
                      <p>{group.label}</p>
                      {group.items.map((item) => (
                        <Link key={item.to} to={item.to}>
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </details>
            ))}
            <Link to="/news">News</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        ) : null}
      </header>

      {searchOpen ? (
        <div className="search-layer" role="dialog" aria-label="Search">
          <button type="button" className="search-close" onClick={() => setSearchOpen(false)}>
            Close
          </button>
          <form
            onSubmit={(event) => {
              event.preventDefault()
              setSearchOpen(false)
            }}
          >
            <input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      ) : null}
    </>
  )
}
