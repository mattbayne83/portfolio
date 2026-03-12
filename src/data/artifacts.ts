import { lazy } from 'react'
import type { ArtifactMeta } from '../types'

export const artifacts: ArtifactMeta[] = [
  {
    id: 'pipeline-risk-integrity',
    title: 'Pipeline Risk & Integrity',
    description:
      'Executive presentation on the future of pipeline safety, risk maturity models, and data-driven integrity programs.',
    type: 'deck',
    category: 'lore',
    categoryLabel: 'Lore',
    tags: ['pipeline', 'risk', 'energy', 'strategy'],
    date: '2020-03-11',
    featured: true,
    immersive: true,
    component: lazy(() => import('../components/artifacts/pipeline-risk')),
    questType: 'main',
    difficulty: 4,
    skillsUsed: ['communication', 'ideation', 'maximizer'],
    flavorText:
      'A vision of what pipeline safety could become when data replaces intuition and models replace spreadsheets.',
  },
  {
    id: 'swift-leadership',
    title: 'SWIFT Product Leadership',
    description:
      'Transformed a legacy authorization platform into a modern product serving 100+ companies and protecting $1.5B in revenue.',
    type: 'article',
    category: 'lore',
    categoryLabel: 'Lore',
    tags: ['product', 'leadership', 'transformation', 'enterprise'],
    date: '2024-06-01',
    featured: false,
    immersive: false,
    component: lazy(() => import('../components/artifacts/swift-leadership')),
    questType: 'main',
    difficulty: 4,
    skillsUsed: ['communication', 'maximizer', 'belief'],
    flavorText:
      'From 3rd percentile to market standard. The story of rebuilding a product that 100 companies depend on every day.',
  },
  {
    id: 'shape-matters',
    title: 'Shape Matters',
    description:
      'Interactive research tool exploring how organizational depth drives signal decay and shapes institutional behavior.',
    type: 'demo',
    category: 'artifact',
    categoryLabel: 'Artifact',
    tags: ['organization', 'research', 'interactive', 'visualization'],
    date: '2025-09-15',
    featured: false,
    immersive: false,
    component: lazy(() => import('../components/artifacts/shape-matters')),
    questType: 'main',
    difficulty: 5,
    skillsUsed: ['ideation', 'communication', 'maximizer'],
    flavorText:
      'What if the shape of an organization determines how much truth survives the climb to the top?',
  },
  {
    id: 'plyplan',
    title: 'Plyplan',
    description:
      'Know how many sheets to buy before you get in the truck. A phone-first plywood cut optimizer with AI-powered photo extraction.',
    type: 'demo',
    category: 'artifact',
    categoryLabel: 'Artifact',
    tags: ['optimization', 'AI', 'mobile', 'woodworking'],
    date: '2025-11-01',
    featured: false,
    immersive: false,
    component: lazy(() => import('../components/artifacts/plyplan')),
    questType: 'main',
    difficulty: 4,
    skillsUsed: ['ideation', 'maximizer', 'belief'],
    flavorText:
      'Built for the workshop, not the office. Because measuring twice means cutting plywood once.',
  },
]

export const allTags = [...new Set(artifacts.flatMap((a) => a.tags))]
export const allCategories = [...new Set(artifacts.map((a) => a.category))]
