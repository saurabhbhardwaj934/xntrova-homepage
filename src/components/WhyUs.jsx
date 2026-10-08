import { BENEFITS, STATS } from '../data/content.js'
import useCountUp from '../hooks/useCountUp.js'
import Reveal from './ui/Reveal.jsx'
import SectionHead from './ui/SectionHead.jsx'
import Icon from './ui/Icon.jsx'

/** One animated counter card. */
function StatCard({ stat, delay }) {
  const [ref, value] = useCountUp(stat.end, { decimals: stat.decimals || 0 })
  return (
    <Reveal delay={delay} className="stat-card">
      <span ref={ref} className="stat-card__value">
        {stat.prefix}
        {stat.decimals ? value.toFixed(stat.decimals) : Math.round(value)}
        {stat.suffix}
      </span>
      <span className="stat-card__label">{stat.label}</span>
    </Reveal>
  )
}

export default function WhyUs() {
  return (
    <section className="section section--dark why" id="why-us">
      <div className="container why__grid">
        <div>
          <SectionHead
            dark
            eyebrow="Why Choose Xntrova"
            title="Turning Potential Into Performance"
          />
          <Reveal delay={120}>
            <p className="why__text">
              Every brand has potential — but potential alone doesn&rsquo;t drive growth. We
              transform ideas into action and strategies into measurable results through a
              creative, data-backed approach, complete transparency and continuous improvement.
            </p>
          </Reveal>

          <ul className="why__list">
            {BENEFITS.map((benefit, i) => (
              <Reveal as="li" key={benefit.title} delay={140 + i * 80} className="benefit">
                <span className="benefit__check">
                  <Icon name="check" size={13} strokeWidth={3} />
                </span>
                <div>
                  <strong>{benefit.title}</strong>
                  <p>{benefit.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <div className="why__stats" aria-label="Key results">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
