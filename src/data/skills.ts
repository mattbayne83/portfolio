import type { SkillCard } from '../types'

export const skillCards: SkillCard[] = [
  {
    id: 'belief',
    name: 'Belief',
    thematicTitle: 'The Compass',
    domain: 'executing',
    domainLabel: 'Executing',
    rank: 1,
    color: '#8B2E3A',
    iconName: 'Compass',
    tagline: 'Core values provide clarity and conviction.',
    flavorText:
      "Guided by unchanging core values, The Compass approaches every situation with a clarity that others find magnetic. Where others see ambiguity, he sees a clear path forward — not because the path is simple, but because the principles that light it never waver. This is the foundation upon which all other strengths are built.",
    relatedTraits: ['ENTP Thinking', 'Enneagram 3w2'],
  },
  {
    id: 'communication',
    name: 'Communication',
    thematicTitle: 'The Storyteller',
    domain: 'influencing',
    domainLabel: 'Influencing',
    rank: 2,
    color: '#2E5A8B',
    iconName: 'Feather',
    tagline: 'Puts thoughts into words that capture and hold attention.',
    flavorText:
      "The Storyteller possesses a rare gift: the ability to take ideas — complex, abstract, half-formed — and breathe them into vivid language. Every presentation is a performance, every explanation a narrative. He doesn't just inform; he makes people feel the weight and wonder of what he's describing.",
    relatedTraits: ['ENTP Expressive', 'Birkman Social Energy'],
  },
  {
    id: 'woo',
    name: 'Woo',
    thematicTitle: 'The Magnetist',
    domain: 'influencing',
    domainLabel: 'Influencing',
    rank: 3,
    color: '#2E6B4A',
    iconName: 'Users',
    tagline: 'Draws energy from meeting new people and winning them over.',
    flavorText:
      "Winning Others Over isn't a strategy — it's a reflex. The Magnetist walks into a room of strangers and feels a surge of energy where others feel dread. Every new face is an unread story, every introduction the opening line of a potential collaboration. This isn't shallow charm; it's genuine fascination with people.",
    relatedTraits: ['ENTP Extraversion', 'Birkman Gregarious'],
  },
  {
    id: 'ideation',
    name: 'Ideation',
    thematicTitle: 'The Architect',
    domain: 'strategic-thinking',
    domainLabel: 'Strategic Thinking',
    rank: 4,
    color: '#5E3A8B',
    iconName: 'Lightbulb',
    tagline: 'Fascinated by ideas and connections between disparate phenomena.',
    flavorText:
      "Where others see unrelated facts, The Architect sees a web of invisible threads connecting everything. New concepts aren't just interesting — they're intoxicating. The thrill of finding a hidden pattern, of connecting an insight from pipeline engineering to a principle from game design, is what makes every day feel like a puzzle worth solving.",
    relatedTraits: ['ENTP Intuition', 'Birkman Creative'],
  },
  {
    id: 'maximizer',
    name: 'Maximizer',
    thematicTitle: 'The Refiner',
    domain: 'influencing',
    domainLabel: 'Influencing',
    rank: 5,
    color: '#B8860B',
    iconName: 'Gem',
    tagline: "Transforms what's strong into something superb.",
    flavorText:
      '"Good enough" is a phrase that physically hurts. The Refiner doesn\'t fix what\'s broken — that\'s a different job. Instead, he takes what\'s already working and polishes it until it gleams. Excellence isn\'t a destination; it\'s a relentless process of asking "What if this were even better?"',
    relatedTraits: ['Enneagram 3w2', 'Birkman Insistence'],
  },
]
