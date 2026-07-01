import type { ArtifactCategory } from '../types'

export const categoryConfig: Record<
  ArtifactCategory,
  { label: string; iconName: string; description: string }
> = {
  lore: {
    label: 'Lore',
    iconName: 'BookOpen',
    description: 'Case studies and written narratives',
  },
  artifact: {
    label: 'Artifact',
    iconName: 'Box',
    description: 'Interactive demonstrations and working prototypes',
  },
}
