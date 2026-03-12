import { skillCards } from '../../data/skills'

interface SkillBadgeProps {
  skillId: string
}

const shortLabels: Record<string, string> = {
  belief: 'Belief',
  communication: 'Comm',
  woo: 'Woo',
  ideation: 'Idea',
  maximizer: 'Max',
}

export default function SkillBadge({ skillId }: SkillBadgeProps) {
  const skill = skillCards.find((s) => s.id === skillId)
  if (!skill) return null

  return (
    <span className="inline-flex items-center gap-1.5">
      <span
        className="w-1.5 h-1.5 rounded-full shrink-0"
        style={{ backgroundColor: skill.color }}
      />
      <span className="font-display text-[10px] font-medium text-text-muted">
        {shortLabels[skillId] ?? skill.name}
      </span>
    </span>
  )
}
