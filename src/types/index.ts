import type { LazyExoticComponent, ComponentType } from 'react'

export type ArtifactType = 'deck' | 'article' | 'demo' | 'viz'
export type ArtifactCategory = 'lore' | 'scroll' | 'artifact' | 'map'
export type QuestType = 'main' | 'side'
export type DifficultyLevel = 1 | 2 | 3 | 4 | 5
export type StrengthDomain = 'executing' | 'influencing' | 'strategic-thinking'

export interface SkillCard {
  id: string
  name: string
  thematicTitle: string
  domain: StrengthDomain
  domainLabel: string
  rank: number
  color: string
  iconName: string
  tagline: string
  flavorText: string
  relatedTraits: string[]
}

export interface ArtifactMeta {
  id: string
  title: string
  description: string
  type: ArtifactType
  category: ArtifactCategory
  categoryLabel: string
  tags: string[]
  date: string
  featured: boolean
  immersive: boolean
  thumbnail?: string
  component: LazyExoticComponent<ComponentType>
  questType: QuestType
  difficulty: DifficultyLevel
  skillsUsed: string[]
  flavorText: string
}
