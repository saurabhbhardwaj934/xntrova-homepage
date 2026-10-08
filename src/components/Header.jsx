import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../data/content.js'
import Button from './ui/Button.jsx'
import Icon from './ui/Icon.jsx'

/** Brand logo: amber monogram tile + wordmark. */
export function Logo() {
  return (
    <a href="#top" className="logo" aria-label="Xntrova — home">
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" width="20" height="20">
          <path
            d="M14 12l18 20-18 20h10l12-14 12 14h10L40 32l18-20H48L36 26 24 12z"
            fill="currentColor"
          />
        </svg>
      </span>
      <span className="logo__text">
        Xntrova<span className="logo__dot">.</span>
      </span>
    </a>
  )
}

/**
 * Sticky site header.
 * - Adds a shadow/background state after scrolling.
 * - Highlights the nav link of the section currently in view.
 * - Collapses into an animated slide-down menu on mobile.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  // Header background state + lock body scroll while the mobile menu is open.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Track which section is in view so the nav can highlight it.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    if (!sections.length) return undefined

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="container site-header__inner">
        <Logo />

        <nav className="nav" aria-label="Primary">
          <ul className="nav__links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav__link ${active === link.href ? 'is-active' : ''}`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="site-header__cta">
          <Button href="#contact" variant="primary" className="nav-cta">
            Get Free Audit
            <Icon name="arrow-right" size={16} />
          </Button>

          <button
            type="button"
            className="hamburger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <Icon name={open ? 'x' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {/* Mobile slide-down menu */}
      <div id="mobile-menu" className={`mobile-menu ${open ? 'is-open' : ''}`}>
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button href="#contact" variant="primary" className="mobile-menu__cta" onClick={() => setOpen(false)}>
          Get Free Digital Audit
          <Icon name="arrow-right" size={16} />
        </Button>
      </div>
    </header>
  )
}
