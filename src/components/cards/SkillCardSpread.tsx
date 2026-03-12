import { skillCards } from '../../data/skills'
import { useCardFlip } from '../../hooks/useCardFlip'
import SkillCard from './SkillCard'

const fanRotations = [-3, -1.5, 0, 1.5, 3]

export default function SkillCardSpread() {
  const { flip, isFlipped } = useCardFlip()

  return (
    <>
      {/* Desktop: fan spread */}
      <div className="hidden sm:flex items-end justify-center gap-[-8px] py-4">
        {skillCards.map((skill, i) => (
          <div
            key={skill.id}
            className="transition-transform duration-300 hover:-translate-y-3 hover:z-10"
            style={{
              marginLeft: i === 0 ? 0 : '-8px',
              zIndex: isFlipped(skill.id) ? 20 : i + 1,
            }}
          >
            <SkillCard
              skill={skill}
              isFlipped={isFlipped(skill.id)}
              onFlip={() => flip(skill.id)}
              rotation={isFlipped(skill.id) ? 0 : fanRotations[i]}
              index={i}
            />
          </div>
        ))}
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-4 -mx-4 scrollbar-hide">
        {skillCards.map((skill, i) => (
          <div key={skill.id} className="snap-center shrink-0">
            <SkillCard
              skill={skill}
              isFlipped={isFlipped(skill.id)}
              onFlip={() => flip(skill.id)}
              rotation={0}
              index={i}
            />
          </div>
        ))}
      </div>
    </>
  )
}
