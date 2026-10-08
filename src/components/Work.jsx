import { CASE_STUDIES } from '../data/content.js'
import Reveal from './ui/Reveal.jsx'
import SectionHead from './ui/SectionHead.jsx'
import Icon from './ui/Icon.jsx'

export default function Work() {
  return (
    <section className="section section--cream work" id="work">
      <div className="container">
        <SectionHead
          eyebrow="Portfolio · Case Studies"
          title="Real Work, Real Results"
          subtitle="A snapshot of how we turn strategy into measurable outcomes across industries."
          center
        />

        <div className="work__grid">
          {CASE_STUDIES.map((cs, i) => (
            <Reveal key={cs.title} delay={i * 120} className="case-card">
              {/* Gradient cover stands in for a project screenshot */}
              <div className="case-card__cover" style={{ background: cs.gradient }}>
                <span className="case-card__industry">{cs.industry}</span>
                <span className="case-card__headline">{cs.headline}</span>
                <span className="case-card__headline-label">{cs.headlineLabel}</span>
              </div>

              <div className="case-card__body">
                <span className="case-card__service">{cs.service}</span>
                <h3 className="case-card__title">{cs.title}</h3>
                <p className="case-card__text">{cs.text}</p>

                <div className="case-card__metrics">
                  {cs.metrics.map((m) => (
                    <div key={m.label}>
                      <strong>{m.value}</strong>
                      <span>{m.label}</span>
                    </div>
                  ))}
                </div>

                <a href="#contact" className="case-card__link">
                  Start a project like this
                  <Icon name="arrow-right" size={16} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
