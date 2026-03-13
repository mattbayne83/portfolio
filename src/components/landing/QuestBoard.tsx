import { useAppStore } from '../../store/useAppStore'
import { artifacts, allCategories } from '../../data/artifacts'
import { categoryConfig } from '../../data/categories'
import QuestCard from '../cards/QuestCard'
import type { ArtifactCategory } from '../../types'

export default function QuestBoard() {
  const filterCategory = useAppStore((s) => s.filterCategory)
  const setFilterCategory = useAppStore((s) => s.setFilterCategory)
  const openArtifact = useAppStore((s) => s.openArtifact)

  const filtered = filterCategory
    ? artifacts.filter((a) => a.category === filterCategory)
    : artifacts

  const mainQuests = filtered.filter((a) => a.questType === 'main')
  const sideQuests = filtered.filter((a) => a.questType === 'side')

  return (
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <h2 className="font-display text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6">
          Quest Log
        </h2>

        {/* Category filters — only show if more than one category exists */}
        {allCategories.length > 1 && (
          <div className="flex gap-2 mb-8">
            <button
              onClick={() => setFilterCategory(null)}
              className={`px-3.5 py-1.5 rounded-full text-sm font-display font-semibold transition-colors cursor-pointer border focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none ${
                filterCategory === null
                  ? 'bg-primary/15 text-primary border-primary/30'
                  : 'bg-transparent text-text-on-dark-muted border-text-on-dark-muted/20 hover:border-primary/30 hover:text-primary'
              }`}
            >
              All
            </button>
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() =>
                  setFilterCategory(filterCategory === cat ? null : (cat as ArtifactCategory))
                }
                className={`px-3.5 py-1.5 rounded-full text-sm font-display font-semibold transition-colors cursor-pointer border focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none ${
                  filterCategory === cat
                    ? 'bg-primary/15 text-primary border-primary/30'
                    : 'bg-transparent text-text-on-dark-muted border-text-on-dark-muted/20 hover:border-primary/30 hover:text-primary'
                }`}
              >
                {categoryConfig[cat as ArtifactCategory]?.label ?? cat}
              </button>
            ))}
          </div>
        )}

        {/* Main Quests */}
        {mainQuests.length > 0 && (
          <div className="mb-10">
            <h3 className="font-display text-xs font-semibold tracking-widest uppercase text-text-on-dark-muted mb-4">
              Main Quests
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {mainQuests.map((artifact, i) => (
                <div
                  key={artifact.id}
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {sideQuests.map((artifact, i) => (
                <div
                  key={artifact.id}
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

        {/* Empty state */}
        {filtered.length === 0 && (
          <p className="text-center text-text-on-dark-muted py-16 font-serif italic">
            No quests match the current filter.
          </p>
        )}
      </div>
    </section>
  )
}
