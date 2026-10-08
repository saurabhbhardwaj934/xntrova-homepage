import { useEffect, useRef, useState } from 'react'

/**
 * Animates a number from 0 to `end` the first time the returned ref
 * scrolls into view. Uses requestAnimationFrame + ease-out cubic,
 * and respects the user's reduced-motion preference.
 */
export default function useCountUp(end, { duration = 1800, decimals = 0 } = {}) {
  const ref = useRef(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const run = () => {
      if (started.current) return
      started.current = true

      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        setValue(end)
        return
      }

      const t0 = performance.now()
      const tick = (now) => {
        const p = Math.min((now - t0) / duration, 1)
        const eased = 1 - Math.pow(1 - p, 3)
        setValue(parseFloat((end * eased).toFixed(decimals)))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run()
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [end, duration, decimals])

  return [ref, value]
}
