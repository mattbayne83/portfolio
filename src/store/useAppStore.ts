import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { ArtifactCategory } from '../types'

interface AppState {
  activeArtifactId: string | null
  filterCategory: ArtifactCategory | null
  currentSlide: number
}

interface AppActions {
  openArtifact: (id: string) => void
  closeArtifact: () => void
  setFilterCategory: (category: ArtifactCategory | null) => void
  clearFilters: () => void
  setCurrentSlide: (slide: number) => void
}

export const useAppStore = create<AppState & AppActions>()(
  persist(
    (set) => ({
      activeArtifactId: null,
      filterCategory: null,
      currentSlide: 0,

      openArtifact: (id) => set({ activeArtifactId: id }),
      closeArtifact: () => set({ activeArtifactId: null }),

      setFilterCategory: (category) => set({ filterCategory: category }),
      clearFilters: () => set({ filterCategory: null }),

      setCurrentSlide: (slide) => set({ currentSlide: slide }),
    }),
    {
      name: 'portfolio-storage',
      partialize: (state) => ({
        activeArtifactId: state.activeArtifactId,
        currentSlide: state.currentSlide,
      }),
    }
  )
)
