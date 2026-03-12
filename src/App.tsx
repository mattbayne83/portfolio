import { Suspense } from 'react'
import { useAppStore } from './store/useAppStore'
import { useHashSync } from './hooks/useHashSync'
import { artifacts } from './data/artifacts'
import LandingPage from './components/landing/LandingPage'
import ArtifactShell from './components/viewers/ArtifactShell'
import ImmersiveWrapper from './components/viewers/ImmersiveWrapper'

function LoadingScreen() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: '#1A1410' }}
    >
      <div className="w-6 h-6 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
    </div>
  )
}

function App() {
  useHashSync()

  const activeArtifactId = useAppStore((s) => s.activeArtifactId)
  const closeArtifact = useAppStore((s) => s.closeArtifact)

  if (!activeArtifactId) {
    return <LandingPage />
  }

  const artifact = artifacts.find((a) => a.id === activeArtifactId)
  if (!artifact) {
    closeArtifact()
    return <LandingPage />
  }

  const ArtifactComponent = artifact.component

  if (artifact.immersive) {
    return (
      <Suspense fallback={<LoadingScreen />}>
        <ImmersiveWrapper onClose={closeArtifact} title={artifact.title}>
          <ArtifactComponent />
        </ImmersiveWrapper>
      </Suspense>
    )
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <ArtifactShell artifact={artifact} onBack={closeArtifact}>
        <ArtifactComponent />
      </ArtifactShell>
    </Suspense>
  )
}

export default App
