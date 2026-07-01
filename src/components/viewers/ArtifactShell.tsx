import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import type { ArtifactMeta } from '../../types'
import GoldDivider from '../shared/GoldDivider'

interface ArtifactShellProps {
  artifact: ArtifactMeta
  onBack: () => void
  children: ReactNode
}

/**
 * Shell-mode reading view: a single centered column on a warm "page" surface,
 * opened by an illuminated chapter header (gold kicker, title, italic flavor
 * line, ornamental divider). Every text element shares one measure so the page
 * reads like a manuscript rather than a ragged stack of differing widths.
 */
export default function ArtifactShell({ artifact, onBack, children }: ArtifactShellProps) {
  return (
    <div className="min-h-screen bg-bg font-sans">
      {/* Header — inner content aligned to the reading column */}
      <header className="sticky top-0 z-30 bg-bg-elevated border-b border-primary/20">
        <div className="max-w-2xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-text-on-dark-muted hover:text-primary transition-colors text-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none rounded"
          >
            <ArrowLeft size={16} />
            Back to Quest Board
          </button>
          <span className="font-display text-sm font-semibold text-text-on-dark truncate ml-4">
            {artifact.title}
          </span>
        </div>
      </header>

      {/* Content */}
      <main className="px-6 py-12 sm:py-16" style={{ animation: 'var(--animate-fade-in)' }}>
        <article
          className="max-w-2xl mx-auto rounded-2xl border border-primary/15 px-6 py-10 sm:px-12 sm:py-14"
          style={{
            // Shared with this artifact's quest card — the card morphs into this page
            viewTransitionName: `quest-${artifact.id}`,
            backgroundColor: 'var(--color-bg-elevated)',
            // Faint warm glow — candlelit vellum, not a hard parchment flip
            backgroundImage:
              'radial-gradient(120% 80% at 50% 0%, rgba(242, 234, 217, 0.05) 0%, transparent 60%)',
            boxShadow:
              '0 1px 2px rgba(26, 20, 16, 0.4), 0 12px 32px rgba(26, 20, 16, 0.35)',
          }}
        >
          {/* Illuminated chapter opener */}
          <header className="text-center mb-10">
            <p className="font-display text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-3">
              {artifact.title}
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-text-on-dark leading-[1.1]">
              {artifact.subject}
            </h1>
            <p className="font-serif italic text-lg text-primary/90 leading-relaxed mt-4 mx-auto max-w-md">
              {artifact.flavorText}
            </p>
            <GoldDivider className="w-40 mx-auto mt-8" />
          </header>

          {children}
        </article>
      </main>
    </div>
  )
}
