import { create } from 'zustand'
import { persist } from 'zustand/middleware'

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

      openArtifact: (id) => set({ activeArtifactId: id }),
      closeArtifact: () => set({ activeArtifactId: null }),
    }),
    {
      name: 'portfolio-storage',
      partialize: (state) => ({
        activeArtifactId: state.activeArtifactId,
      }),
    }
  )
)
