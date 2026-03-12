import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import type { ArtifactMeta } from '../../types'

interface ArtifactShellProps {
  artifact: ArtifactMeta
  onBack: () => void
  children: ReactNode
}

export default function ArtifactShell({ artifact, onBack, children }: ArtifactShellProps) {
  return (
    <div className="min-h-screen bg-bg font-sans">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-bg-elevated/90 backdrop-blur-sm border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-text-on-dark-muted hover:text-primary transition-colors text-sm cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Quest Board
          </button>
          <h1 className="font-display text-sm font-medium text-text-on-dark truncate ml-4">
            {artifact.title}
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-8">
        {children}
      </main>
    </div>
  )
}
