import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Services from './components/Services.jsx'
import About from './components/About.jsx'
import WhyUs from './components/WhyUs.jsx'
import Process from './components/Process.jsx'
import Work from './components/Work.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import CtaBand from './components/CtaBand.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Preloader from './components/Preloader.jsx'
import { ScrollProgress, BackToTop, WhatsAppFab, CursorGlow } from './components/Floating.jsx'
import { CONTACT_INFO } from './data/content.js'

export default function App() {
  return (
    <>
      <Preloader />
      <CursorGlow />
      <a href="#top" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <Header />

      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <WhyUs />
        <Process />
        <Work />
        <Testimonials />
        <Faq />
        <CtaBand />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <WhatsAppFab href={CONTACT_INFO.whatsapp} />
    </>
  )
}
