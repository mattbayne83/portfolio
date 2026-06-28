import type { DifficultyLevel } from '../../types'

interface DifficultyPipsProps {
  level: DifficultyLevel
  max?: number
}

export default function DifficultyPips({ level, max = 5 }: DifficultyPipsProps) {
  return (
    <span
      className="inline-flex items-center gap-0.5"
      role="img"
      aria-label={`Difficulty ${level} of ${max}`}
    >
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`text-[11px] ${
            i < level ? 'text-primary' : 'text-text-muted/40'
          }`}
        >
          {i < level ? '◆' : '◇'}
        </span>
      ))}
    </span>
  )
}
