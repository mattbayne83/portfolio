import { useState, useCallback } from 'react'

export function useCardFlip() {
  const [flippedId, setFlippedId] = useState<string | null>(null)

  const flip = useCallback((id: string) => {
    setFlippedId((prev) => (prev === id ? null : id))
  }, [])

  const isFlipped = useCallback((id: string) => flippedId === id, [flippedId])

  return { flip, isFlipped, flippedId }
}
