import { CLIENTS, TOOLS } from '../data/content.js'

/**
 * Two infinite logo/text marquees: clients + tools.
 * Pure CSS animation (translateX -50% on a doubled track) — no JS cost,
 * pauses on hover and respects reduced-motion.
 */
function Track({ items, reverse = false, label }) {
  return (
    <div className="marquee" role="presentation">
      <span className="marquee__label">{label}</span>
      <div className={`marquee__viewport ${reverse ? 'marquee__viewport--reverse' : ''}`}>
        <div className="marquee__track">
          {[...items, ...items].map((item, i) => (
            <span className="marquee__item" key={`${item}-${i}`}>
              {item}
              <span className="marquee__sep" aria-hidden="true" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Marquee() {
  return (
    <section className="marquees" aria-label="Clients and tools">
      <div className="container">
        <Track items={CLIENTS} label="Trusted by 500+ growing brands" />
        <Track items={TOOLS} reverse label="Powered by industry-leading tools" />
      </div>
    </section>
  )
}
