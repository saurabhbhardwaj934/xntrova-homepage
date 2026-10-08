import { useEffect, useState } from 'react'
import { TESTIMONIALS } from '../data/content.js'
import SectionHead from './ui/SectionHead.jsx'
import Reveal from './ui/Reveal.jsx'
import Icon from './ui/Icon.jsx'

const AUTOPLAY_MS = 6000

/**
 * Client testimonial slider.
 * Auto-advances every 6s, pauses on hover/focus, and supports
 * arrows, dots, swipe and keyboard navigation.
 */
export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = TESTIMONIALS.length

  useEffect(() => {
    if (paused) return undefined
    const id = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, count])

  const go = (i) => setIndex(((i % count) + count) % count)

  const onTouchStart = (e) => {
    setPaused(true)
    e.currentTarget.dataset.x = e.touches[0].clientX
  }
  const onTouchEnd = (e) => {
    const startX = Number(e.currentTarget.dataset.x || 0)
    const dx = e.changedTouches[0].clientX - startX
    if (Math.abs(dx) > 48) go(index + (dx < 0 ? 1 : -1))
    setPaused(false)
  }

  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <SectionHead
          eyebrow="Client Testimonials"
          title="Words from Our Valued Clients"
          subtitle="What founders and business leaders say about partnering with Xntrova."
          center
        />

        <Reveal>
          <div
            className="t-slider"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="t-slider__track" style={{ transform: `translateX(-${index * 100}%)` }}>
              {TESTIMONIALS.map((t) => (
                <figure className="t-slide" key={t.name}>
                  <Icon name="quote" size={34} className="t-slide__quote-icon" />
                  <div className="t-slide__stars" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Icon key={s} name="star" size={15} />
                    ))}
                  </div>
                  <blockquote className="t-slide__text">&ldquo;{t.quote}&rdquo;</blockquote>
                  <figcaption className="t-slide__author">
                    <span className="t-slide__avatar" aria-hidden="true">
                      {t.name.charAt(0)}
                    </span>
                    <span>
                      <strong>{t.name}</strong>
                      <small>{t.role}</small>
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="t-slider__controls">
              <button
                type="button"
                className="t-slider__btn"
                aria-label="Previous testimonial"
                onClick={() => go(index - 1)}
              >
                <Icon name="chevron-left" size={18} />
              </button>

              <div className="t-slider__dots" role="tablist" aria-label="Choose testimonial">
                {TESTIMONIALS.map((t, i) => (
                  <button
                    key={t.name}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Testimonial ${i + 1} of ${count}`}
                    className={`t-slider__dot ${i === index ? 'is-active' : ''}`}
                    onClick={() => go(i)}
                  />
                ))}
              </div>

              <button
                type="button"
                className="t-slider__btn"
                aria-label="Next testimonial"
                onClick={() => go(index + 1)}
              >
                <Icon name="chevron-right" size={18} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
