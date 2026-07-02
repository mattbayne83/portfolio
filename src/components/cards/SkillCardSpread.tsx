import { useEffect, useRef, useState } from 'react'
import { skillCards } from '../../data/skills'
import { useCardFlip } from '../../hooks/useCardFlip'
import SkillCard from './SkillCard'

const fanRotations = [-3, -1.5, 0, 1.5, 3]

/* Mobile arc geometry — must match the card's fixed 200px width in SkillCard */
const CARD_WIDTH = 200
const CARD_PITCH = CARD_WIDTH + 16 // width + gap-4

const edgeMask =
  'linear-gradient(to right, transparent, black 44px, black calc(100% - 44px), transparent)'

export default function SkillCardSpread() {
  const { flip, isFlipped } = useCardFlip()

  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)

  // Scroll-driven fan: the centered card stands upright; neighbors sink along
  // a parabolic arc, tilt outward, and shrink — a hand of cards, not a strip.
  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let raf = 0

    const update = () => {
      raf = 0
      const mid = scroller.scrollLeft + scroller.clientWidth / 2
      let nearest = 0
      let nearestDist = Infinity
      slideRefs.current.forEach((slide, i) => {
        if (!slide) return
        // offsetLeft is layout position — unaffected by the transforms we set
        const dist = slide.offsetLeft + CARD_WIDTH / 2 - mid
        if (Math.abs(dist) < nearestDist) {
          nearestDist = Math.abs(dist)
          nearest = i
        }
        if (reduceMotion) return
        const n = Math.max(-1.5, Math.min(1.5, dist / CARD_PITCH))
        slide.style.transform = `translateY(${(n * n * 14).toFixed(2)}px) rotate(${(n * 6).toFixed(2)}deg) scale(${(1 - Math.abs(n) * 0.08).toFixed(3)})`
      })
      setActiveIndex(nearest)
    }
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    scroller.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      scroller.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  const scrollToCard = (i: number) => {
    const scroller = scrollerRef.current
    const slide = slideRefs.current[i]
    if (!scroller || !slide) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    scroller.scrollTo({
      left: slide.offsetLeft + CARD_WIDTH / 2 - scroller.clientWidth / 2,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <>
      {/* Desktop: fan spread — py-8 accommodates scale(1.2) on flip */}
      <div className="hidden sm:flex items-end justify-center gap-[-8px] py-8">
        {skillCards.map((skill, i) => (
          <div
            key={skill.id}
            className="transition-transform duration-300 hover:-translate-y-3 hover:z-10"
            style={{
              marginLeft: i === 0 ? 0 : '-8px',
              zIndex: isFlipped(skill.id) ? 20 : i + 1,
            }}
          >
            <SkillCard
              skill={skill}
              isFlipped={isFlipped(skill.id)}
              onFlip={() => flip(skill.id)}
              rotation={isFlipped(skill.id) ? 0 : fanRotations[i]}
              index={i}
            />
          </div>
        ))}
      </div>

      {/* Mobile: fanned-hand carousel. Full-bleed (-mx-6 cancels the section's
          px-6) so the mask fade lines up with the true scroll edges; inline
          padding lets the first and last cards snap to center. */}
      <div className="sm:hidden">
        <div
          ref={scrollerRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pt-8 pb-12 -mx-6 scrollbar-hide"
          style={{
            paddingInline: `calc(50vw - ${CARD_WIDTH / 2}px)`,
            maskImage: edgeMask,
            WebkitMaskImage: edgeMask,
          }}
        >
          {skillCards.map((skill, i) => (
            <div
              key={skill.id}
              ref={(el) => {
                slideRefs.current[i] = el
              }}
              className="snap-center shrink-0 will-change-transform"
            >
              <SkillCard
                skill={skill}
                isFlipped={isFlipped(skill.id)}
                onFlip={() => flip(skill.id)}
                rotation={0}
                index={i}
                flipScale={1.06}
              />
            </div>
          ))}
        </div>

        {/* Gem pips — position marker + tap-to-navigate */}
        <div className="flex items-center justify-center gap-2 -mt-3">
          {skillCards.map((skill, i) => (
            <button
              key={skill.id}
              type="button"
              aria-label={`Go to ${skill.name} card`}
              aria-current={activeIndex === i}
              onClick={() => scrollToCard(i)}
              className="p-1.5 cursor-pointer rounded focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
            >
              <span
                className="block h-2 w-2 transition-all duration-300"
                style={{
                  backgroundColor: activeIndex === i ? skill.color : 'transparent',
                  border: `1px solid ${activeIndex === i ? skill.color : 'rgba(200, 151, 62, 0.45)'}`,
                  transform: activeIndex === i ? 'rotate(45deg) scale(1.3)' : 'rotate(45deg)',
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
