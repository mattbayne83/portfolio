import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { withViewTransition } from '../utils/viewTransition'

interface AppState {
  activeArtifactId: string | null
}

interface AppActions {
  openArtifact: (id: string) => void
  closeArtifact: () => void
}

export const useAppStore = create<AppState & AppActions>()(
  persist(
    (set) => ({
      activeArtifactId: null,

      // Nav actions run inside a View Transition: the quest card and the
      // article page share a view-transition-name, so the card morphs into
      // the manuscript (and back). Scroll runs inside the snapshot window —
      // top for the article, back to the board on return so the reverse
      // morph has its target card on screen.
      openArtifact: (id) =>
        withViewTransition(
          () => set({ activeArtifactId: id }),
          () => window.scrollTo(0, 0)
        ),
      closeArtifact: () =>
        withViewTransition(
          () => set({ activeArtifactId: null }),
          () => document.getElementById('quest-board')?.scrollIntoView()
        ),
    }),
    {
      name: 'portfolio-storage',
      partialize: (state) => ({
        activeArtifactId: state.activeArtifactId,
      }),
    }
  )
)
