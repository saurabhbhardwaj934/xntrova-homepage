import { CONTACT_INFO, NAV_LINKS } from '../data/content.js'
import { Logo } from './Header.jsx'
import Icon from './ui/Icon.jsx'

const FOOTER_SERVICES = [
  'Search Engine Optimization',
  'Paid Advertising',
  'Social Media Optimization',
  'E-Commerce Marketing',
  'Content Marketing',
  'Website Development',
]

const SOCIALS = [
  { name: 'linkedin', label: 'LinkedIn', icon: 'linkedin' },
  { name: 'instagram', label: 'Instagram', icon: 'instagram' },
  { name: 'facebook', label: 'Facebook', icon: 'facebook' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo />
          <p>
            Xntrova is a results-driven digital marketing and technology agency in Delhi NCR.
            Creative ideas, strategic planning and data-driven decisions — built to deliver
            measurable growth.
          </p>
          <div className="footer__socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href="#top" aria-label={`Xntrova on ${s.label}`}>
                <Icon name={s.icon} size={16} />
              </a>
            ))}
          </div>
        </div>

        <nav className="footer__col" aria-label="Services">
          <h4>Services</h4>
          <ul>
            {FOOTER_SERVICES.map((s) => (
              <li key={s}>
                <a href="#services">{s}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="footer__col" aria-label="Company">
          <h4>Company</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        <div className="footer__col">
          <h4>Get in touch</h4>
          <ul className="footer__contact">
            <li>
              <Icon name="phone" size={15} />
              <a href={CONTACT_INFO.phoneHref}>{CONTACT_INFO.phone}</a>
            </li>
            <li>
              <Icon name="mail" size={15} />
              <a href={CONTACT_INFO.emailHref}>{CONTACT_INFO.email}</a>
            </li>
            <li>
              <Icon name="map-pin" size={15} />
              <span>{CONTACT_INFO.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {new Date().getFullYear()} Xntrova Technologies. All rights reserved.</p>
          <p>Homepage redesign concept — built with React + Vite.</p>
        </div>
      </div>
    </footer>
  )
}
