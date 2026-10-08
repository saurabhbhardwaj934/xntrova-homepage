import { useState } from 'react'
import { SERVICE_OPTIONS, CONTACT_INFO } from '../data/content.js'
import SectionHead from './ui/SectionHead.jsx'
import Reveal from './ui/Reveal.jsx'
import Button from './ui/Button.jsx'
import Icon from './ui/Icon.jsx'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_RE = /^[+]?[\d\s()-]{8,15}$/

const INITIAL = { name: '', email: '', phone: '', service: '', message: '' }

/** Contact details column shown next to the lead form. */
function ContactInfo() {
  const items = [
    { icon: 'phone', label: 'Call us', value: CONTACT_INFO.phone, href: CONTACT_INFO.phoneHref },
    { icon: 'mail', label: 'Email us', value: CONTACT_INFO.email, href: CONTACT_INFO.emailHref },
    { icon: 'map-pin', label: 'Visit us', value: CONTACT_INFO.address },
    { icon: 'clock', label: 'Working hours', value: 'Mon–Sat · 10:00 AM – 7:00 PM IST' },
  ]

  return (
    <ul className="contact__info">
      {items.map((item) => (
        <li key={item.label}>
          <span className="contact__info-icon">
            <Icon name={item.icon} size={18} />
          </span>
          <div>
            <small>{item.label}</small>
            {item.href ? <a href={item.href}>{item.value}</a> : <span>{item.value}</span>}
          </div>
        </li>
      ))}
      <li className="contact__whatsapp">
        <Button href={CONTACT_INFO.whatsapp} external variant="dark">
          <Icon name="whatsapp" size={18} />
          Chat with Xntrova on WhatsApp
        </Button>
      </li>
    </ul>
  )
}

/**
 * Lead form with client-side validation.
 * Submission is simulated here — wire the `handleSubmit` body to your
 * backend / CRM / email service (Formspree, Resend, etc.) when deploying.
 */
export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const set = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }))
  }

  const validate = () => {
    const er = {}
    if (form.name.trim().length < 2) er.name = 'Please enter your name.'
    if (!EMAIL_RE.test(form.email)) er.email = 'Please enter a valid email address.'
    if (form.phone && !PHONE_RE.test(form.phone)) er.phone = 'Please enter a valid phone number.'
    if (!form.service) er.service = 'Please choose a service.'
    if (form.message.trim().length < 10)
      er.message = 'Tell us a little about your goals (10+ characters).'
    return er
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const er = validate()
    setErrors(er)
    if (Object.keys(er).length) return

    setStatus('sending')
    // Simulated network request — replace with a real endpoint when deploying.
    window.setTimeout(() => setStatus('sent'), 900)
  }

  const reset = () => {
    setForm(INITIAL)
    setErrors({})
    setStatus('idle')
  }

  return (
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div>
          <SectionHead
            eyebrow="Contact Us"
            title="Get Your Free Digital Audit"
            subtitle="Tell us about your business and we'll get back to you within one working day with actionable next steps."
          />
          <Reveal delay={120}>
            <ContactInfo />
          </Reveal>
        </div>

        <Reveal delay={150} className="contact__form-card">
          {status === 'sent' ? (
            <div className="contact__success" role="status">
              <span className="contact__success-icon">
                <Icon name="check" size={30} strokeWidth={3} />
              </span>
              <h3>Thank you, {form.name.split(' ')[0]}!</h3>
              <p>
                Your request has been received. Our strategists will review it and reach out
                within 24 hours with your free digital audit.
              </p>
              <Button variant="dark" onClick={reset}>
                Send another enquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate aria-label="Lead form">
              <div className="form-row">
                <div className="field">
                  <label htmlFor="lead-name">Full name *</label>
                  <input
                    id="lead-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Your name"
                    value={form.name}
                    onChange={set('name')}
                    aria-invalid={Boolean(errors.name)}
                  />
                  {errors.name && <span className="field__error">{errors.name}</span>}
                </div>

                <div className="field">
                  <label htmlFor="lead-email">Email *</label>
                  <input
                    id="lead-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={set('email')}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && <span className="field__error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-row">
                <div className="field">
                  <label htmlFor="lead-phone">Phone (optional)</label>
                  <input
                    id="lead-phone"
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="+91"
                    value={form.phone}
                    onChange={set('phone')}
                    aria-invalid={Boolean(errors.phone)}
                  />
                  {errors.phone && <span className="field__error">{errors.phone}</span>}
                </div>

                <div className="field">
                  <label htmlFor="lead-service">Which service are you interested in? *</label>
                  <select
                    id="lead-service"
                    name="service"
                    value={form.service}
                    onChange={set('service')}
                    aria-invalid={Boolean(errors.service)}
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    {SERVICE_OPTIONS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  {errors.service && <span className="field__error">{errors.service}</span>}
                </div>
              </div>

              <div className="field">
                <label htmlFor="lead-message">Tell us about your project *</label>
                <textarea
                  id="lead-message"
                  name="message"
                  rows="4"
                  placeholder="Your goals, current challenges, timelines…"
                  value={form.message}
                  onChange={set('message')}
                  aria-invalid={Boolean(errors.message)}
                />
                {errors.message && <span className="field__error">{errors.message}</span>}
              </div>

              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="contact__submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  'Sending…'
                ) : (
                  <>
                    Request My Free Audit
                    <Icon name="send" size={17} />
                  </>
                )}
              </Button>
              <p className="contact__note">
                <Icon name="shield" size={14} />
                No spam, ever. Your details stay confidential.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  )
}
