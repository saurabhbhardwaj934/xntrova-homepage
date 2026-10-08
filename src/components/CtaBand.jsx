import { CONTACT_INFO } from '../data/content.js'
import Reveal from './ui/Reveal.jsx'
import Button from './ui/Button.jsx'
import Icon from './ui/Icon.jsx'

/** High-contrast conversion band between the content and the lead form. */
export default function CtaBand() {
  return (
    <section className="cta-band-wrap" aria-label="Call to action">
      <div className="container">
        <Reveal className="cta-band">
          <div className="cta-band__blob" aria-hidden="true" />
          <div className="cta-band__grid" aria-hidden="true" />
          <div className="cta-band__content">
            <h2 className="cta-band__title">
              Boost your brand growth with <span className="grad">Delhi&rsquo;s best</span> digital marketing company
            </h2>
            <p className="cta-band__text">
              We improve your online visibility so you can reach your ideal customers and boost
              conversions. Start with a free, no-obligation digital audit.
            </p>
            <div className="cta-band__actions">
              <Button href="#contact" variant="primary" size="lg">
                Get Free Digital Audit
                <Icon name="arrow-right" size={18} />
              </Button>
              <Button
                href={CONTACT_INFO.whatsapp}
                external
                variant="light"
                size="lg"
              >
                <Icon name="whatsapp" size={18} />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
          <div className="cta-band__stat" aria-hidden="true">
            <span>24h</span>
            <small>Average response time for new enquiries</small>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
