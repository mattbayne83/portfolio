import { useEffect } from 'react'
import { useAppStore } from '../store/useAppStore'

export function useHashSync() {
  const activeArtifactId = useAppStore((s) => s.activeArtifactId)
  const openArtifact = useAppStore((s) => s.openArtifact)
  const closeArtifact = useAppStore((s) => s.closeArtifact)

  // On mount: read hash → store
  useEffect(() => {
    const hash = window.location.hash.replace('#/', '').replace('#', '')
    if (hash && hash !== '/') {
      openArtifact(hash)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Store → hash
  useEffect(() => {
    const target = activeArtifactId ? `#/${activeArtifactId}` : '#/'
    if (window.location.hash !== target) {
      window.history.pushState(null, '', target)
    }
  }, [activeArtifactId])

  // Hash → store (browser back/forward)
  useEffect(() => {
    const handler = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '')
      if (!hash || hash === '/') {
        closeArtifact()
      } else {
        openArtifact(hash)
      }
    }
    window.addEventListener('hashchange', handler)
    return () => window.removeEventListener('hashchange', handler)
  }, [openArtifact, closeArtifact])
}
