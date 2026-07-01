import { useAppStore } from '../../store/useAppStore'
import { artifacts } from '../../data/artifacts'
import QuestCard from '../cards/QuestCard'

export default function QuestBoard() {
  const openArtifact = useAppStore((s) => s.openArtifact)

  const mainQuests = artifacts.filter((a) => a.questType === 'main')
  const sideQuests = artifacts.filter((a) => a.questType === 'side')

  return (
    <section id="quest-board" className="px-6 pb-20 scroll-mt-8">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <h2 className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6">
          Quest Log
        </h2>

        {/* Main Quests */}
        {mainQuests.length > 0 && (
          <div className="mb-10">
            <h3 className="font-display text-xs font-semibold tracking-widest uppercase text-text-on-dark-muted mb-4">
              Main Quests
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[600px] mx-auto">
              {mainQuests.map((artifact, i) => (
                <div
                  key={artifact.id}
                  className="w-full max-w-[280px] mx-auto"
                  style={{ animation: 'var(--animate-card-enter)', animationDelay: `${i * 80}ms` }}
                >
                  <QuestCard
                    artifact={artifact}
                    onClick={() => openArtifact(artifact.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Side Quests */}
        {sideQuests.length > 0 && (
          <div className="mb-10">
            <h3 className="font-display text-xs font-semibold tracking-widest uppercase text-text-on-dark-muted mb-4">
              Side Quests
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[600px] mx-auto">
              {sideQuests.map((artifact, i) => (
                <div
                  key={artifact.id}
                  className="w-full max-w-[280px] mx-auto"
                  style={{ animation: 'var(--animate-card-enter)', animationDelay: `${(mainQuests.length + i) * 80}ms` }}
                >
                  <QuestCard
                    artifact={artifact}
                    onClick={() => openArtifact(artifact.id)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
