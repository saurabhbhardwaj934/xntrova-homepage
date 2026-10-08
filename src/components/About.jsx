import { ABOUT } from '../data/content.js'
import Reveal from './ui/Reveal.jsx'
import SectionHead from './ui/SectionHead.jsx'
import Button from './ui/Button.jsx'
import Icon from './ui/Icon.jsx'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div>
          <SectionHead eyebrow={ABOUT.eyebrow} title={ABOUT.title} />
          {ABOUT.paragraphs.map((p, i) => (
            <Reveal key={i} delay={100 + i * 90}>
              <p className="about__text">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={300}>
            <Button href="#contact" variant="dark" className="about__cta">
              Let&rsquo;s Grow Together
              <Icon name="arrow-right" size={16} />
            </Button>
          </Reveal>
        </div>

        <div className="about__pillars">
          {ABOUT.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 100} className="pillar">
              <span className="pillar__icon">
                <Icon name={pillar.icon} size={22} />
              </span>
              <div>
                <h3 className="pillar__title">{pillar.title}</h3>
                <p className="pillar__text">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
