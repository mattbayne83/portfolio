import type { ArtifactCategory } from '../types'

export const categoryConfig: Record<
  ArtifactCategory,
  { label: string; iconName: string; description: string }
> = {
  lore: {
    label: 'Lore',
    iconName: 'BookOpen',
    description: 'Presentations and decks — collections of knowledge',
  },
  scroll: {
    label: 'Scroll',
    iconName: 'Scroll',
    description: 'Written pieces — articles, analyses, narratives',
  },
  artifact: {
    label: 'Artifact',
    iconName: 'Box',
    description: 'Interactive demonstrations and working prototypes',
  },
  map: {
    label: 'Map',
    iconName: 'Map',
    description: 'Data visualizations and exploratory maps',
  },
}
