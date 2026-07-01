interface ProductShotProps {
  src: string
  alt: string
  caption?: string
  /** Cap the frame width (px) — used for phone-format screenshots */
  maxWidth?: number
}

/** Framed product screenshot for shell-mode artifact pages. */
export default function ProductShot({ src, alt, caption, maxWidth }: ProductShotProps) {
  return (
    <figure className="my-8">
      <div
        className="rounded-xl overflow-hidden mx-auto"
        style={{
          padding: '2px',
          background: 'var(--gradient-gold-edge)',
          maxWidth: maxWidth ? `${maxWidth}px` : undefined,
        }}
      >
        <img src={src} alt={alt} loading="lazy" className="block w-full rounded-[10px]" />
      </div>
      {caption && (
        <figcaption className="mt-3 text-center font-serif italic text-sm text-text-on-dark-muted">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}
