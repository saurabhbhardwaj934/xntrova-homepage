import { useEffect, useRef } from 'react'
import { HERO } from '../data/content.js'
import Button from './ui/Button.jsx'
import Icon from './ui/Icon.jsx'

const ROTATING_WORDS = ['SEO Growth', 'Paid Ads', 'Social Media', 'E-Commerce', 'Web Design']

/** Rotating gradient words — pure CSS animation, duplicated list for a loop. */
function Rotator() {
  const words = [...ROTATING_WORDS, ROTATING_WORDS[0]]
  return (
    <span className="rotator" aria-hidden="true">
      <span className="rotator__inner">
        {words.map((w, i) => (
          <span key={`${w}-${i}`}>{w}</span>
        ))}
      </span>
    </span>
  )
}

/** Lightweight floating-particle canvas for the hero background. */
function Particles() {
  const ref = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const canvas = ref.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    let raf = 0
    let w = 0
    let h = 0
    const N = 42
    const dots = Array.from({ length: N }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: 1 + Math.random() * 2.2,
      s: 0.0004 + Math.random() * 0.0012,
      o: 0.15 + Math.random() * 0.4,
      drift: Math.random() * Math.PI * 2,
    }))

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      w = canvas.width = rect.width
      h = canvas.height = rect.height
    }
    resize()
    window.addEventListener('resize', resize)

    const tick = () => {
      ctx.clearRect(0, 0, w, h)
      dots.forEach((d) => {
        d.y -= d.s
        d.drift += 0.008
        d.x += Math.sin(d.drift) * 0.0004
        if (d.y < -0.02) {
          d.y = 1.02
          d.x = Math.random()
        }
        const x = d.x * w
        const y = d.y * h
        ctx.beginPath()
        ctx.arc(x, y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(224, 138, 12, ${d.o})`
        ctx.fill()
      })
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} className="hero__particles" aria-hidden="true" />
}

/** Animated growth chart + KPI dashboard with 3D mouse tilt. */
function DashboardCard() {
  const tiltRef = useRef(null)

  useEffect(() => {
    const el = tiltRef.current
    if (!el || window.matchMedia('(hover: none)').matches) return undefined

    let raf = 0
    const onMove = (e) => {
      const rect = el.getBoundingClientRect()
      const px = (e.clientX - rect.left) / rect.width - 0.5
      const py = (e.clientY - rect.top) / rect.height - 0.5
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `rotateY(${px * 10}deg) rotateX(${-py * 10}deg)`
      })
    }
    const onLeave = () => {
      cancelAnimationFrame(raf)
      el.style.transform = 'rotateY(0deg) rotateX(0deg)'
    }
    const zone = el.closest('.hero__visual')
    zone.addEventListener('mousemove', onMove)
    zone.addEventListener('mouseleave', onLeave)
    return () => {
      zone.removeEventListener('mousemove', onMove)
      zone.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="hero__visual" aria-hidden="true">
      <div className="dash tilt" ref={tiltRef}>
        <div className="dash__top">
          <div>
            <p className="dash__title">Campaign Performance</p>
            <p className="dash__sub">Last 6 months · All channels</p>
          </div>
          <span className="dash__live">
            <span className="dash__pulse" /> Growing
          </span>
        </div>

        <svg className="dash__chart" viewBox="0 0 420 170" role="img" aria-hidden="true">
          <defs>
            <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#faae39" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#faae39" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[34, 68, 102, 136].map((y) => (
            <line key={y} x1="0" y1={y} x2="420" y2={y} className="dash__grid" />
          ))}
          <path
            d="M0 150 C 45 142, 70 128, 105 118 S 175 104, 210 84 S 285 46, 320 38 S 390 20, 420 14 L 420 170 L 0 170 Z"
            fill="url(#heroArea)"
          />
          <path
            d="M0 150 C 45 142, 70 128, 105 118 S 175 104, 210 84 S 285 46, 320 38 S 390 20, 420 14"
            className="dash__line"
            pathLength="1000"
          />
          <circle cx="420" cy="14" r="5" fill="#faae39" className="dash__dot" />
        </svg>

        <div className="dash__kpis">
          <div className="dash__kpi">
            <span className="dash__kpi-value up">+250%</span>
            <span className="dash__kpi-label">Organic traffic</span>
          </div>
          <div className="dash__kpi">
            <span className="dash__kpi-value up">4.8×</span>
            <span className="dash__kpi-label">ROAS</span>
          </div>
          <div className="dash__kpi">
            <span className="dash__kpi-value up">+120%</span>
            <span className="dash__kpi-label">Leads / month</span>
          </div>
        </div>
      </div>

      <div className="chip chip--a">
        <span className="chip__icon">
          <Icon name="trending-up" size={16} />
        </span>
        <div>
          <strong>+312%</strong>
          <small>SEO growth · 6 mo</small>
        </div>
      </div>
      <div className="chip chip--b">
        <span className="chip__icon chip__icon--stars">
          <Icon name="star" size={14} />
        </span>
        <div>
          <strong>500+ clients</strong>
          <small>Rated 4.9/5</small>
        </div>
      </div>
    </div>
  )
}

const AVATARS = [
  { letter: 'A', bg: 'linear-gradient(135deg,#faae39,#ff8a1a)' },
  { letter: 'N', bg: 'linear-gradient(135deg,#104155,#0a2a38)' },
  { letter: 'R', bg: 'linear-gradient(135deg,#159a52,#0b5c31)' },
  { letter: 'P', bg: 'linear-gradient(135deg,#7c4dff,#3d1fa8)' },
]

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="hero__aurora" aria-hidden="true">
        <span className="hero__blob hero__blob--1" />
        <span className="hero__blob hero__blob--2" />
        <span className="hero__blob hero__blob--3" />
      </div>
      <div className="hero__grid-bg" aria-hidden="true" />
      <Particles />

      <div className="container hero__grid">
        <div className="hero__copy">
          <span className="hero__badge">
            <span className="hero__badge-dot" aria-hidden="true" />
            <Icon name="sparkles" size={15} />
            {HERO.badge}
          </span>

          <h1 className="hero__title">
            {HERO.titleTop} <span className="hero__accent">{HERO.titleAccent}</span>{' '}
            {HERO.titleBottom}
            <br />
            <span style={{ fontSize: '0.52em', fontWeight: 700, color: 'var(--body)' }}>
              Experts in <Rotator />
            </span>
            <span className="sr-only">Experts in SEO Growth, Paid Ads, Social Media, E-Commerce, Web Design</span>
          </h1>

          <p className="hero__lead">{HERO.lead}</p>

          <div className="hero__actions">
            <Button href="#contact" variant="primary" size="lg">
              Get Free Digital Audit
              <Icon name="arrow-right" size={18} />
            </Button>
            <Button href="#services" variant="ghost" size="lg">
              Explore Services
            </Button>
          </div>

          <div className="hero__proof">
            <div className="hero__avatars" aria-hidden="true">
              {AVATARS.map((a) => (
                <span key={a.letter} style={{ background: a.bg }}>
                  {a.letter}
                </span>
              ))}
            </div>
            <div>
              <span className="hero__stars" aria-label="Rated 4.9 out of 5">
                {'★★★★★'}
              </span>
              <p>
                Trusted by 500+ brands <small>4.9/5 average client rating</small>
              </p>
            </div>
          </div>

          <ul className="hero__trust">
            {HERO.stats.map((s) => (
              <li key={s.label}>
                <strong>
                  {s.value.replace('★', '')}
                  {s.value.includes('★') && <em>★</em>}
                </strong>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <DashboardCard />
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <i />
        Scroll
      </div>
    </section>
  )
}
