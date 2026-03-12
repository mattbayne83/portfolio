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
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center p-4 sm:p-8 font-sans">
      {title && (
        <div className="w-full max-w-5xl mb-4 flex items-center justify-between">
          <h1 className="font-display text-sm font-semibold text-neutral-400 tracking-widest uppercase">
            {title}
          </h1>
          <span className="text-xs text-neutral-500 font-mono">
            {current + 1} / {total}
          </span>
        </div>
      )}

      {/* Slide Area */}
      <div
        ref={containerRef}
        className="w-full max-w-5xl aspect-video relative overflow-hidden rounded-xl shadow-lg ring-1 ring-white/5"
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
                  : 'w-1.5 bg-neutral-700 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>

        {/* Arrow buttons */}
        <div className="flex gap-2">
          <button
            onClick={prev}
            disabled={current === 0}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            disabled={current === total - 1}
            className="p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/5 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
