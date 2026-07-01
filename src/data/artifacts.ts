import { lazy } from 'react'
import type { ArtifactMeta } from '../types'

export const artifacts: ArtifactMeta[] = [
  {
    id: 'swift-leadership',
    title: 'Rags to Riches',
    subject: 'SWIFT Product Turnaround',
    subtitle: 'Case study · enterprise product leadership',
    description:
      'Transformed a legacy authorization platform into a modern product serving 100+ companies and protecting $1.5B in revenue.',
    type: 'article',
    category: 'lore',
    categoryLabel: 'Lore',
    tags: ['product', 'leadership', 'transformation', 'enterprise'],
    date: '2024-06-01',
    component: lazy(() => import('../components/artifacts/swift-leadership')),
    questType: 'main',
    difficulty: 4,
    skillsUsed: ['communication', 'maximizer', 'belief'],
    flavorText:
      'From 3rd percentile to market standard. The story of rebuilding a product that 100 companies depend on every day.',
  },
  {
    id: 'shape-matters',
    title: 'Shape Shifter',
    subject: 'Org Shape & Signal Decay',
    subtitle: 'Interactive research tool',
    description:
      'Interactive research tool exploring how organizational depth drives signal decay and shapes institutional behavior.',
    type: 'demo',
    category: 'artifact',
    categoryLabel: 'Artifact',
    tags: ['organization', 'research', 'interactive', 'visualization'],
    date: '2025-09-15',
    component: lazy(() => import('../components/artifacts/shape-matters')),
    questType: 'main',
    difficulty: 5,
    skillsUsed: ['ideation', 'communication', 'maximizer'],
    flavorText:
      'What if the shape of an organization determines how much truth survives the climb to the top?',
  },
  {
    id: 'plyplan',
    title: 'Pocket Sage',
    subject: 'Plywood Cut Optimizer',
    subtitle: 'Mobile app · AI photo extraction',
    description:
      'Know how many sheets to buy before you get in the truck. A phone-first plywood cut optimizer with AI-powered photo extraction.',
    type: 'demo',
    category: 'artifact',
    categoryLabel: 'Artifact',
    tags: ['optimization', 'AI', 'mobile', 'woodworking'],
    date: '2025-11-01',
    component: lazy(() => import('../components/artifacts/plyplan')),
    questType: 'main',
    difficulty: 4,
    skillsUsed: ['ideation', 'maximizer', 'belief'],
    flavorText:
      'Built for the workshop, not the office. Because measuring twice means cutting plywood once.',
  },
  {
    id: 'glimpse',
    title: 'The Scrying Glass',
    subject: 'Private Data Explorer',
    subtitle: 'Browser EDA · Python / WebAssembly',
    description:
      'Privacy-first exploratory data analysis. Upload CSV files and glimpse the truth in your data — all processed locally in your browser using Python.',
    type: 'demo',
    category: 'artifact',
    categoryLabel: 'Artifact',
    tags: ['data', 'privacy', 'analytics', 'python', 'webassembly'],
    date: '2026-03-15',
    component: lazy(() => import('../components/artifacts/glimpse')),
    questType: 'main',
    difficulty: 5,
    skillsUsed: ['maximizer', 'ideation', 'belief'],
    flavorText:
      "What if data analysis didn't require sending your data to strangers? Pyodide brings Python to the browser. Privacy stays with you.",
  },
]

