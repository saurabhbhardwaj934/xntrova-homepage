import { PROCESS_STEPS } from '../data/content.js'
import Reveal from './ui/Reveal.jsx'
import SectionHead from './ui/SectionHead.jsx'
import Icon from './ui/Icon.jsx'

export default function Process() {
  return (
    <section className="section process" id="process">
      <div className="container">
        <SectionHead
          eyebrow="How We Work"
          title="A Proven Process, From First Call to Compounding Growth"
          subtitle="Four focused stages keep every engagement transparent, fast and accountable."
          center
        />

        <ol className="process__steps">
          {PROCESS_STEPS.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 120} className="step">
              <div className="step__head">
                <span className="step__icon">
                  <Icon name={step.icon} size={22} />
                </span>
                <span className="step__num">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="step__title">{step.title}</h3>
              <p className="step__text">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
