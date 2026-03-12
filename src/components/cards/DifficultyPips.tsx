import type { DifficultyLevel } from '../../types'

interface DifficultyPipsProps {
  level: DifficultyLevel
  max?: number
}

export default function DifficultyPips({ level, max = 5 }: DifficultyPipsProps) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`text-[10px] ${
            i < level ? 'text-primary' : 'text-text-muted/30'
          }`}
        >
          ◆
        </span>
      ))}
    </span>
  )
}
