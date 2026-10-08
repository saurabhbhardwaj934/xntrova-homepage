import { useEffect, useState } from 'react'

/** Full-screen brand preloader — fades out shortly after first paint. */
export default function Preloader() {
  const [done, setDone] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100)
    return () => clearTimeout(t)
  }, [])

  return (
    <div className={`preloader ${done ? 'is-done' : ''}`} aria-hidden={done}>
      <div className="preloader__inner">
        <span className="preloader__mark">
          <svg viewBox="0 0 64 64" width="34" height="34" aria-hidden="true">
            <path
              d="M14 12l18 20-18 20h10l12-14 12 14h10L40 32l18-20H48L36 26 24 12z"
              fill="currentColor"
            />
          </svg>
        </span>
        <p className="preloader__word">
          Xntrova<span>.</span>
        </p>
        <span className="preloader__bar" aria-hidden="true">
          <i />
        </span>
      </div>
    </div>
  )
}
