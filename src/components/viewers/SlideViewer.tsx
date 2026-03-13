import { useState, useEffect, useCallback, useRef, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface SlideViewerProps {
  slides: ReactNode[]
  title?: string
}

const DESIGN_WIDTH = 960
const DESIGN_HEIGHT = 540

export default function SlideViewer({ slides, title }: SlideViewerProps) {
  const [current, setCurrent] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)
  const total = slides.length

  const next = useCallback(() => setCurrent(i => Math.min(i + 1, total - 1)), [total])
  const prev = useCallback(() => setCurrent(i => Math.max(i - 1, 0)), [])

  // Scale slides to fit container
  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth
        setScale(width / DESIGN_WIDTH)
      }
    }
    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
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
        backgroundColor: '#1A1410',
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
        className="w-full max-w-5xl aspect-video relative overflow-hidden rounded-xl shadow-lg ring-1 ring-primary/10"
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-500 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              pointerEvents: i === current ? 'auto' : 'none',
            }}
          >
            {/* Fixed-size slide scaled to fit container */}
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
        {/* Progress dots */}
        <div className="flex gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-8 bg-primary'
                  : 'w-1.5 bg-text-on-dark-muted/30 hover:bg-text-on-dark-muted/60'
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            className="p-2 rounded-lg text-text-on-dark-muted hover:text-primary-light hover:bg-primary/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            disabled={current === total - 1}
            className="p-2 rounded-lg text-text-on-dark-muted hover:text-primary-light hover:bg-primary/10 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
