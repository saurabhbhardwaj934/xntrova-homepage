import { useEffect, useState } from 'react'
import Icon from './ui/Icon.jsx'

/** Thin scroll-progress bar fixed to the top of the viewport. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="scroll-progress"
      style={{ transform: `scaleX(${progress / 100})` }}
      aria-hidden="true"
    />
  )
}

/** Back-to-top button that fades in after scrolling past one viewport. */
export function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <button
      type="button"
      className={`to-top ${show ? 'is-visible' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <Icon name="arrow-up" size={18} />
    </button>
  )
}

/** Soft amber glow that follows the cursor on desktop. */
export function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return undefined
    const el = document.createElement('div')
    el.className = 'cursor-glow'
    document.body.appendChild(el)
    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.setProperty('--cx', `${e.clientX}px`)
        el.style.setProperty('--cy', `${e.clientY}px`)
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
      el.remove()
    }
  }, [])

  return null
}

/** Floating WhatsApp action button (matches the original site's CTA). */
export function WhatsAppFab({ href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Chat with Xntrova on WhatsApp"
    >
      <Icon name="whatsapp" size={24} />
    </a>
  )
}
