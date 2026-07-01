import { Suspense, useEffect } from 'react'
import { useAppStore } from './store/useAppStore'
import { useHashSync } from './hooks/useHashSync'
import { artifacts } from './data/artifacts'
import LandingPage from './components/landing/LandingPage'
import ArtifactShell from './components/viewers/ArtifactShell'
import ArtifactErrorBoundary from './components/shared/ArtifactErrorBoundary'

function BodyLoading() {
  return (
    <div className="flex justify-center py-16">
      <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  )
}

function App() {
  useHashSync()

  const activeArtifactId = useAppStore((s) => s.activeArtifactId)
  const closeArtifact = useAppStore((s) => s.closeArtifact)

  const artifact = activeArtifactId
    ? artifacts.find((a) => a.id === activeArtifactId)
    : undefined

  // Unknown hash → back to the board. Runs as an effect, not during render:
  // closeArtifact starts a View Transition and flushes synchronously.
  useEffect(() => {
    if (activeArtifactId && !artifact) closeArtifact()
  }, [activeArtifactId, artifact, closeArtifact])

  if (!artifact) {
    return <LandingPage />
  }

  const ArtifactComponent = artifact.component

  return (
    <ArtifactErrorBoundary onBack={closeArtifact}>
      {/* Suspense sits INSIDE the shell so the article frame — the view-
          transition morph target — commits synchronously on first visit;
          only the lazy body content waits for its chunk. */}
      <ArtifactShell artifact={artifact} onBack={closeArtifact}>
        <Suspense fallback={<BodyLoading />}>
          <ArtifactComponent />
        </Suspense>
      </ArtifactShell>
    </ArtifactErrorBoundary>
  )
}

export default App
