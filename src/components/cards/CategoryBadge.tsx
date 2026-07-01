import { BookOpen, Box } from 'lucide-react'
import type { ArtifactCategory } from '../../types'

const iconMap = {
  lore: BookOpen,
  artifact: Box,
} as const

const labelMap: Record<ArtifactCategory, string> = {
  lore: 'Lore',
  artifact: 'Artifact',
}

interface CategoryBadgeProps {
  category: ArtifactCategory
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const Icon = iconMap[category]

  return (
    <span className="inline-flex items-center gap-1.5 text-text-muted">
      <Icon size={12} />
      <span className="font-display text-[11px] font-semibold tracking-wider uppercase">
        {labelMap[category]}
      </span>
    </span>
  )
}
