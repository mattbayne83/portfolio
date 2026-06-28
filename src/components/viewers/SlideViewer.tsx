import { useState, useEffect, useCallback, useRef, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SlideViewerProps {
  slides: ReactNode[]
  title?: string
}

const DESIGN_WIDTH = 960
const DESIGN_HEIGHT = 540
// Floor the fit-to-width scale so slide text stays legible on phones; below this
// the slide overflows its 16:9 frame and can be panned instead of shrinking away.
const MIN_SCALE = 0.6

export default function SlideViewer({ slides, title }: SlideViewerProps) {
  const [current, setCurrent] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const total = slides.length

  const next = useCallback(() => setCurrent(i => Math.min(i + 1, total - 1)), [total])
  const prev = useCallback(() => setCurrent(i => Math.max(i - 1, 0)), [])

  // Scale slides to fit container (rAF-throttled), floored for mobile legibility
  useEffect(() => {
    let raf = 0
    const updateScale = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth
          setScale(Math.max(width / DESIGN_WIDTH, MIN_SCALE))
        }
      })
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => {
      window.removeEventListener('resize', updateScale)
      cancelAnimationFrame(raf)
    }
  }, [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') { e.preventDefault(); next() }
      if (e.key === 'ArrowLeft') { e.preventDefault(); prev() }
      if (e.key === 'Home') { e.preventDefault(); setCurrent(0) }
      if (e.key === 'End') { e.preventDefault(); setCurrent(total - 1) }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev, total])

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-8 font-sans"
      style={{
        backgroundColor: 'var(--color-bg)',
        backgroundImage: [
          'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.008) 2px, rgba(255,255,255,0.008) 4px)',
          'radial-gradient(ellipse at 50% 30%, rgba(42,32,24,0.4) 0%, transparent 70%)',
        ].join(', '),
      }}
    >
      {title && (
        <div className="w-full max-w-5xl mb-4 flex items-center justify-between">
          <h1 className="font-display text-sm font-semibold text-text-on-dark-muted tracking-widest uppercase">
            {title}
          </h1>
          <span className="text-xs text-text-on-dark-muted font-mono">
            {current + 1} / {total}
          </span>
        </div>
      )}

      {/* Slide Area */}
      <div
        ref={containerRef}
        role="group"
        aria-label={`Slide ${current + 1} of ${total}`}
        className="w-full max-w-5xl aspect-video relative overflow-auto rounded-xl shadow-lg ring-1 ring-primary/10"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute top-0 left-0 transition-opacity duration-500 ease-in-out"
            style={{
              // Wrapper carries the *scaled* dimensions so the frame can scroll
              // when the slide is floored larger than the viewport on mobile.
              width: DESIGN_WIDTH * scale,
              height: DESIGN_HEIGHT * scale,
              opacity: i === current ? 1 : 0,
              pointerEvents: i === current ? 'auto' : 'none',
            }}
          >
            <div
              style={{
                width: DESIGN_WIDTH,
                height: DESIGN_HEIGHT,
                transform: `scale(${scale})`,
                transformOrigin: 'top left',
              }}
            >
              {slide}
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="w-full max-w-5xl mt-6 flex items-center justify-between">
        {/* Progress dots — small visual bar inside a comfortable hit area */}
        <div className="flex">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === current}
              className="group px-1 py-2 rounded focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none cursor-pointer"
            >
              <span
                className={`block h-1.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? 'w-8 bg-primary'
                    : 'w-1.5 bg-text-on-dark-muted/30 group-hover:bg-text-on-dark-muted/60'
                }`}
              />
            </button>
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            aria-label="Previous slide"
            className="p-2 rounded-lg text-text-on-dark-muted hover:text-primary-light hover:bg-primary/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            disabled={current === total - 1}
            aria-label="Next slide"
            className="p-2 rounded-lg text-text-on-dark-muted hover:text-primary-light hover:bg-primary/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
