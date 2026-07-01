import type { ArtifactMeta } from '../../types'
import CategoryBadge from './CategoryBadge'
import DifficultyPips from './DifficultyPips'
import GoldFiligree from '../shared/GoldFiligree'

interface QuestCardProps {
  artifact: ArtifactMeta
  onClick: () => void
}

export default function QuestCard({ artifact, onClick }: QuestCardProps) {
  const isMain = artifact.questType === 'main'

  return (
    <button
      onClick={onClick}
      className="group text-left w-full aspect-[5/7] cursor-pointer rounded-xl transition-all duration-300 hover:-translate-y-1 will-change-transform focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
      style={{
        padding: isMain ? '2px' : '1.5px',
        background: 'var(--gradient-gold-edge)',
        boxShadow:
          '0 1px 2px rgba(26, 20, 16, 0.3), 0 4px 8px rgba(26, 20, 16, 0.15), 0 12px 24px rgba(26, 20, 16, 0.1)',
        // Shared with the ArtifactShell page — the card morphs into the manuscript
        viewTransitionName: `quest-${artifact.id}`,
      }}
    >
      <div className="rounded-[10px] bg-surface h-full p-5 sm:p-6 relative overflow-hidden flex flex-col group-hover:shadow-[0_0_30px_rgba(200,151,62,0.1)]">
        {/* Filigree corners for main quests */}
        {isMain && (
          <>
            <GoldFiligree className="absolute top-1 left-1 w-8 h-8 opacity-60" />
            <GoldFiligree className="absolute bottom-1 right-1 w-8 h-8 opacity-60 rotate-180" />
          </>
        )}

        {/* Header row */}
        <div className="flex items-start justify-between mb-3">
          <CategoryBadge category={artifact.category} />
          <span className="font-mono text-[11px] text-text-muted">
            {new Date(artifact.date).getFullYear()}
          </span>
        </div>

        {/* Text block — vertically centered so the portrait whitespace stays balanced */}
        <div className="flex-1 flex flex-col justify-center min-h-0">
          {/* Themed name — small kicker above the real subject */}
          <p className="font-display text-[11px] font-semibold tracking-[0.18em] uppercase text-primary-dark mb-1">
            {artifact.title}
          </p>

          {/* Subject — the scannable headline */}
          <h3
            className={`font-display font-bold text-text-high leading-tight ${
              isMain ? 'text-xl sm:text-2xl' : 'text-lg'
            }`}
          >
            {artifact.subject}
          </h3>

          {/* Plain descriptor */}
          <p className="font-sans text-xs text-text-muted mt-1 mb-3">
            {artifact.subtitle}
          </p>

          {/* Flavor text */}
          <p className="font-serif italic text-sm text-text-body leading-relaxed line-clamp-5">
            &ldquo;{artifact.flavorText}&rdquo;
          </p>
        </div>

        {/* Footer */}
        <div className="mt-4">
          {/* Footer divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-3" />

          <div className="flex items-center justify-between">
            <DifficultyPips level={artifact.difficulty} />
            <span className="inline-flex items-center gap-1.5 font-display text-[11px] font-bold tracking-[0.15em] uppercase text-primary-dark group-hover:text-primary group-focus-visible:text-primary transition-colors">
              Begin Quest
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-0.5"
              >
                →
              </span>
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}
