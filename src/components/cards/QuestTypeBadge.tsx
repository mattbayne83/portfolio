import type { QuestType } from '../../types'

interface QuestTypeBadgeProps {
  questType: QuestType
}

export default function QuestTypeBadge({ questType }: QuestTypeBadgeProps) {
  return (
    <span
      className={`font-display text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full ${
        questType === 'main'
          ? 'bg-primary/15 text-primary'
          : 'bg-text-muted/10 text-text-muted'
      }`}
    >
      {questType === 'main' ? 'Main Quest' : 'Side Quest'}
    </span>
  )
}
