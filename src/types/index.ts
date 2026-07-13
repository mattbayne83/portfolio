import type { LazyExoticComponent, ComponentType } from 'react'

export type ArtifactType = 'article' | 'demo'
export type ArtifactCategory = 'lore' | 'artifact'
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
  /** Scene + outcome receipt shown on the card back body */
  flavorText: string
  /** Optional closing line under the body - italic, muted (aphorism / pivot) */
  echo?: string
  relatedTraits: string[]
}

export interface ArtifactMeta {
  id: string
  /** Themed name shown as a small kicker (e.g. "Rags to Riches") */
  title: string
  /** Plain, scannable subject — the card's real headline (e.g. "SWIFT Product Turnaround") */
  subject: string
  /** One-line plain descriptor (e.g. "Case study · enterprise product leadership") */
  subtitle: string
  description: string
  type: ArtifactType
  category: ArtifactCategory
  categoryLabel: string
  tags: string[]
  date: string
  thumbnail?: string
  component: LazyExoticComponent<ComponentType>
  questType: QuestType
  difficulty: DifficultyLevel
  skillsUsed: string[]
  flavorText: string
}
