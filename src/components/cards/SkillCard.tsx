import {
  Compass,
  Feather,
  Magnet,
  Lightbulb,
  Gem,
} from 'lucide-react'
import type { SkillCard as SkillCardType } from '../../types'

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
}

export default function SkillCard({
  skill,
  isFlipped,
  onFlip,
  rotation = 0,
  index = 0,
}: SkillCardProps) {
  const Icon = iconMap[skill.iconName] ?? Gem

  return (
    <div
      className="group cursor-pointer select-none rounded-xl focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
      tabIndex={0}
      role="button"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onFlip() } }}
      style={{
        perspective: '1000px',
        width: '200px',
        height: '280px',
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
            ? 'rotateY(180deg) scale(1.2)'
            : `rotate(${rotation}deg) translateY(0px)`,
        }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            padding: '2px',
            background:
              'linear-gradient(135deg, #C8973E 0%, #DEB668 25%, #C8973E 50%, #8B6914 75%, #C8973E 100%)',
          }}
        >
          <div className="rounded-[10px] bg-surface h-full flex flex-col items-center px-4 py-5 relative overflow-hidden">
            {/* Accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: skill.color }}
            />

            {/* Icon */}
            <div className="mt-4 mb-3">
              <Icon size={36} style={{ color: skill.color }} strokeWidth={1.5} opacity={0.8} />
            </div>

            {/* Name */}
            <h3 className="font-display text-lg font-bold text-text-high text-center">
              {skill.name}
            </h3>

            {/* Thematic title */}
            <p className="font-serif italic text-sm text-text-body mt-0.5 text-center">
              {skill.thematicTitle}
            </p>

            {/* Domain badge */}
            <span
              className="mt-3 text-[11px] font-display font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: `${skill.color}15`,
                color: skill.color,
              }}
            >
              {skill.domainLabel}
            </span>

            {/* Tagline */}
            <p className="mt-auto font-serif text-xs text-text-muted text-center leading-relaxed px-2">
              {skill.tagline}
            </p>

            {/* Rank */}
            <span className="mt-2 font-mono text-[11px] text-text-muted/50">
              #{skill.rank}
            </span>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 rounded-xl overflow-hidden"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            padding: '2px',
            background:
              'linear-gradient(135deg, #C8973E 0%, #DEB668 25%, #C8973E 50%, #8B6914 75%, #C8973E 100%)',
          }}
        >
          <div className="rounded-[10px] bg-surface h-full flex flex-col px-3 py-3 relative overflow-hidden">
            {/* Accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1"
              style={{ backgroundColor: skill.color }}
            />

            {/* Name */}
            <h4 className="font-display text-xs font-semibold text-text-high text-center mt-1 mb-2">
              {skill.name}
            </h4>

            {/* Flavor text */}
            <p className="font-serif italic text-[11px] text-text-body leading-relaxed flex-1">
              {skill.flavorText}
            </p>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-2" />

            {/* Related traits */}
            <div className="flex flex-wrap gap-1.5 justify-center">
              {skill.relatedTraits.map((trait) => (
                <span
                  key={trait}
                  className="font-mono text-[11px] text-text-muted/60 bg-surface-muted px-1.5 py-0.5 rounded"
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
