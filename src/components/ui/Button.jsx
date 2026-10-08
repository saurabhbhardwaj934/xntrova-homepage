/**
 * Reusable button/link component.
 * Renders <a> when `href` is provided, otherwise <button>.
 * Variants: primary (amber), dark (ink), ghost (outline), light (on dark bg).
 */
export default function Button({
  as,
  href,
  variant = 'primary',
  size = '',
  className = '',
  children,
  external = false,
  ...rest
}) {
  const Tag = as || (href ? 'a' : 'button')
  const classes = ['btn', `btn--${variant}`, size ? `btn--${size}` : '', className]
    .filter(Boolean)
    .join(' ')

  if (Tag === 'a' && external) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    )
  }
  if (Tag === 'a') {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button type={rest.type || 'button'} className={classes} {...rest}>
      {children}
    </button>
  )
}
