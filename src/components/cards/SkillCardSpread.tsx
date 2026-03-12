import { skillCards } from '../../data/skills'
import { useCardFlip } from '../../hooks/useCardFlip'
import SkillCard from './SkillCard'

const fanRotations = [-3, -1.5, 0, 1.5, 3]

export default function SkillCardSpread() {
  const { flip, isFlipped } = useCardFlip()

  return (
    <>
      {/* Desktop: fan spread — py-8 accommodates scale(1.2) on flip */}
      <div className="hidden sm:flex items-end justify-center gap-[-8px] py-8">
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

      {/* Mobile: horizontal scroll — py-8 accommodates scale(1.2) on flip */}
      <div className="sm:hidden relative">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory py-8 px-4 -mx-4 scrollbar-hide">
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
        {/* Right fade hint — signals more cards offscreen */}
        <div
          className="absolute right-0 top-0 bottom-0 w-12 pointer-events-none"
          style={{
            background: 'linear-gradient(to right, transparent, #1A1410)',
          }}
        />
      </div>
    </>
  )
}
