import { lazy } from 'react'
import type { ArtifactMeta } from '../types'

export const artifacts: ArtifactMeta[] = [
  {
    id: 'swift-leadership',
    title: 'Rags to Riches',
    subject: 'SWIFT Product Turnaround',
    subtitle: 'Case study · enterprise product leadership',
    description:
      'Senior PM for SWIFT since 2024: rebuilt intake before the feature factory, lifted usability from 3rd to 50th percentile, and funded a 0→1 storage product - 100+ companies, $1.5B revenue stream.',
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
      'From 3rd percentile to market standard - by fixing how work gets chosen.',
  },
  {
    id: 'shape-matters',
    title: 'Shape Shifter',
    subject: 'Org Shape & Signal Decay',
    subtitle: 'Research tool · org signal decay',
    description:
      "Model your org's depth and watch signal die on the way up - 15 reference companies, 223 tests.",
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
    subtitle: 'Mobile app · Bin-packing algorithm',
    description:
      'Know how many sheets to buy before you get in the truck. A phone-first plywood cut optimizer built on a classic bin-packing algorithm.',
    type: 'demo',
    category: 'artifact',
    categoryLabel: 'Artifact',
    tags: ['optimization', 'algorithms', 'mobile', 'woodworking'],
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
      'CSV analysis in the browser - pandas via WebAssembly, zero server calls.',
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
      'Analysis without the upload. Python stays on your machine.',
  },
]
