import { useEffect, useRef } from 'react'
import { SERVICES } from '../data/content.js'
import Reveal from './ui/Reveal.jsx'
import SectionHead from './ui/SectionHead.jsx'
import Icon from './ui/Icon.jsx'

/**
 * Services grid with mouse-tracking spotlight cards.
 * Each card exposes --mx/--my CSS vars so the CSS radial glow
 * follows the cursor — premium interactive feel, zero dependencies.
 */
export default function Services() {
  const gridRef = useRef(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid || window.matchMedia('(hover: none)').matches) return undefined

    const onMove = (e) => {
      const card = e.target.closest('.service-card')
      if (!card || !grid.contains(card)) return
      const rect = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - rect.left}px`)
      card.style.setProperty('--my', `${e.clientY - rect.top}px`)
    }
    grid.addEventListener('mousemove', onMove, { passive: true })
    return () => grid.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="section section--cream services" id="services">
      <div className="container">
        <SectionHead
          eyebrow="Our Services"
          title="Digital Marketing Services Built for Sustainable Growth"
          subtitle="Full-funnel solutions that unlock long-term growth — from first click to loyal customer."
          center
        />

        <div className="services__grid" ref={gridRef}>
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={(i % 3) * 110} className="service-card">
              <span className="service-card__tag">{service.tag}</span>
              <span className="service-card__icon">
                <Icon name={service.icon} size={24} />
              </span>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__text">{service.text}</p>
              <a href="#contact" className="service-card__link" aria-label={`Get started with ${service.title}`}>
                Learn more
                <Icon name="arrow-up-right" size={16} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
