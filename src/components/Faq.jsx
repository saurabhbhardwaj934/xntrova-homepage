import { useState } from 'react'
import { FAQS } from '../data/content.js'
import SectionHead from './ui/SectionHead.jsx'
import Reveal from './ui/Reveal.jsx'
import Icon from './ui/Icon.jsx'

/**
 * FAQ accordion. Uses the CSS grid `0fr -> 1fr` height trick so panels
 * animate open/closed smoothly without measuring heights in JS.
 * Opening one item closes the others.
 */
export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="section section--cream faq" id="faq">
      <div className="container container--narrow">
        <SectionHead
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Resolve your general queries and concerns before we even talk."
          center
        />

        <div className="faq__list">
          {FAQS.map((faq, i) => {
            const open = openIndex === i
            return (
              <Reveal key={faq.q} delay={i * 70} className={`faq-item ${open ? 'is-open' : ''}`}>
                <h3 className="faq-item__q-wrap">
                  <button
                    type="button"
                    className="faq-item__q"
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpenIndex(open ? -1 : i)}
                  >
                    {faq.q}
                    <span className="faq-item__chevron">
                      <Icon name="chevron-down" size={18} />
                    </span>
                  </button>
                </h3>
                <div id={`faq-panel-${i}`} className="faq-item__panel" role="region">
                  <div className="faq-item__panel-inner">
                    <p>{faq.a}</p>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
