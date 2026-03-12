import type { ArtifactMeta } from '../../types'
import CategoryBadge from './CategoryBadge'
import QuestTypeBadge from './QuestTypeBadge'
import SkillBadge from './SkillBadge'
import DifficultyPips from './DifficultyPips'
import GoldFiligree from '../shared/GoldFiligree'

interface QuestCardProps {
  artifact: ArtifactMeta
  onClick: () => void
  index: number
}

export default function QuestCard({ artifact, onClick, index }: QuestCardProps) {
  const isMain = artifact.questType === 'main'

  return (
    <button
      onClick={onClick}
      className="group text-left w-full cursor-pointer rounded-xl transition-all duration-300 hover:-translate-y-1 will-change-transform"
      style={{
        padding: isMain ? '2px' : '1.5px',
        background:
          'linear-gradient(135deg, #C8973E 0%, #DEB668 25%, #C8973E 50%, #8B6914 75%, #C8973E 100%)',
        opacity: 1,
        boxShadow:
          '0 1px 2px rgba(26, 20, 16, 0.3), 0 4px 8px rgba(26, 20, 16, 0.15), 0 12px 24px rgba(26, 20, 16, 0.1)',
        animationDelay: `${index * 80}ms`,
      }}
    >
      <div className="rounded-[10px] bg-surface h-full p-5 sm:p-6 relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(200,151,62,0.1)]">
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
          <QuestTypeBadge questType={artifact.questType} />
        </div>

        {/* Title */}
        <h3
          className={`font-display font-bold text-text-high mb-2 ${
            isMain ? 'text-xl' : 'text-base'
          }`}
        >
          {artifact.title}
        </h3>

        {/* Flavor text */}
        <p className="font-serif italic text-sm text-text-body leading-relaxed mb-4">
          &ldquo;{artifact.flavorText}&rdquo;
        </p>

        {/* Skills used */}
        <div className="flex flex-wrap gap-3 mb-4">
          {artifact.skillsUsed.map((skillId) => (
            <SkillBadge key={skillId} skillId={skillId} />
          ))}
        </div>

        {/* Footer divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mb-3" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <DifficultyPips level={artifact.difficulty} />
          <span className="font-mono text-[11px] text-text-muted">
            {new Date(artifact.date).getFullYear()}
          </span>
        </div>
      </div>
    </button>
  )
}
