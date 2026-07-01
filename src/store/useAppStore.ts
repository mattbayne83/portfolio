import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ArtifactCategory } from '../types'

interface AppState {
  activeArtifactId: string | null
  filterCategory: ArtifactCategory | null
}

interface AppActions {
  openArtifact: (id: string) => void
  closeArtifact: () => void
  setFilterCategory: (category: ArtifactCategory | null) => void
  clearFilters: () => void
}

export const useAppStore = create<AppState & AppActions>()(
  persist(
    (set) => ({
      activeArtifactId: null,
      filterCategory: null,

      openArtifact: (id) => set({ activeArtifactId: id }),
      closeArtifact: () => set({ activeArtifactId: null }),

      setFilterCategory: (category) => set({ filterCategory: category }),
      clearFilters: () => set({ filterCategory: null }),
    }),
    {
      name: 'portfolio-storage',
      partialize: (state) => ({
        activeArtifactId: state.activeArtifactId,
      }),
    }
  )
)
