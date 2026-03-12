import { BookOpen, Scroll, Box, Map } from 'lucide-react'
import type { ArtifactCategory } from '../../types'

const iconMap = {
  lore: BookOpen,
  scroll: Scroll,
  artifact: Box,
  map: Map,
} as const

const labelMap: Record<ArtifactCategory, string> = {
  lore: 'Lore',
  scroll: 'Scroll',
  artifact: 'Artifact',
  map: 'Map',
}

interface CategoryBadgeProps {
  category: ArtifactCategory
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  const Icon = iconMap[category]

  return (
    <span className="inline-flex items-center gap-1.5 text-text-muted">
      <Icon size={12} />
      <span className="font-display text-[10px] font-medium tracking-wider uppercase">
        {labelMap[category]}
      </span>
    </span>
  )
}
