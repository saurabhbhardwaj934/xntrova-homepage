import Reveal from './Reveal.jsx'

/**
 * Consistent section heading block: eyebrow chip + title + optional subtitle.
 * `dark` switches colors for dark sections, `align` centers when needed.
 */
export default function SectionHead({ eyebrow, title, subtitle, dark = false, center = false }) {
  return (
    <Reveal
      as="header"
      className={`section-head ${center ? 'section-head--center' : ''} ${dark ? 'section-head--dark' : ''}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </Reveal>
  )
}
