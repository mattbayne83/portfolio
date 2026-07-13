import {
  Compass,
  Feather,
  Magnet,
  Lightbulb,
  Gem,
  RotateCw,
} from 'lucide-react'
import type { SkillCard as SkillCardType } from '../../types'

/** Fixed portrait size — keep in sync with SkillCardSpread carousel math */
export const SKILL_CARD_WIDTH = 200
export const SKILL_CARD_HEIGHT = 280

const iconMap: Record<string, typeof Compass> = {
  Compass,
  Feather,
  Magnet,
  Lightbulb,
  Gem,
}

interface SkillCardProps {
  skill: SkillCardType
  isFlipped: boolean
  onFlip: () => void
  rotation?: number
  index?: number
  /** Scale applied on flip. <=1 avoids clipping inside the mobile scroll carousel. */
  flipScale?: number
}

export default function SkillCard({
  skill,
  isFlipped,
  onFlip,
  rotation = 0,
  index = 0,
  flipScale = 1.2,
}: SkillCardProps) {
  const Icon = iconMap[skill.iconName] ?? Gem

  return (
    <div
      className="group cursor-pointer select-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
      tabIndex={0}
      role="button"
      aria-pressed={isFlipped}
      aria-label={
        isFlipped
          ? `${skill.name} - showing details. Activate to flip back.`
          : `${skill.name}, ${skill.thematicTitle}. Activate to flip the card and read more.`
      }
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onFlip()
        }
      }}
      style={{
        perspective: '1000px',
        width: SKILL_CARD_WIDTH,
        height: SKILL_CARD_HEIGHT,
        animation: 'var(--animate-card-enter)',
        animationDelay: `${index * 80}ms`,
      }}
      onClick={onFlip}
    >
      <div
        className="relative w-full h-full transition-all duration-500 ease-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped
            ? `rotateY(180deg) scale(${flipScale})`
            : `rotate(${rotation}deg) translateY(0px)`,
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            padding: '2px',
            background: 'var(--gradient-gold-edge)',
          }}
        >
          <div className="rounded-[10px] bg-surface h-full flex flex-col items-center px-4 py-5 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: skill.color }}
            />

            <span
              className="absolute top-2.5 right-2.5 text-text-muted group-hover:text-primary group-focus-visible:text-primary transition-colors"
              aria-hidden="true"
            >
              <RotateCw size={13} strokeWidth={2} />
            </span>

            <div className="mt-4 mb-3">
              <Icon size={36} style={{ color: skill.color }} strokeWidth={1.5} opacity={0.8} />
            </div>

            <h3 className="font-display text-lg font-bold text-text-high text-center">
              {skill.name}
            </h3>

            <p className="font-serif italic text-sm text-text-body mt-0.5 text-center">
              {skill.thematicTitle}
            </p>

            <span
              className="mt-3 text-[11px] font-display font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${skill.color}15`,
                color: skill.color,
              }}
            >
              {skill.domainLabel}
            </span>

            <p className="mt-auto font-serif text-xs text-text-muted text-center leading-relaxed px-2">
              {skill.tagline}
            </p>

            <span className="mt-2 font-mono text-[11px] text-text-muted">
              #{skill.rank}
            </span>
          </div>
        </div>

        {/* Back Face — quiet reading surface: identity cue + one story. Front already owns icon, domain, rank, tagline. */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            padding: '2px',
            background: 'var(--gradient-gold-edge)',
          }}
        >
          <div className="rounded-[10px] bg-surface h-full flex flex-col justify-center px-5 py-6 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: skill.color }}
            />

            <h4 className="font-display text-sm font-semibold text-text-high text-center mb-3">
              {skill.name}
            </h4>

            <p className="font-serif italic text-xs text-text-body leading-relaxed text-center">
              {skill.flavorText}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
