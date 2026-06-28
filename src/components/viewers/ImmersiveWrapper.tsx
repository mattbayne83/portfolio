import { useCallback, type ReactNode } from 'react'
import { X } from 'lucide-react'
import { useEscapeKey } from '../../hooks/useEscapeKey'

interface ImmersiveWrapperProps {
  onClose: () => void
  title: string
  children: ReactNode
}

export default function ImmersiveWrapper({ onClose, title, children }: ImmersiveWrapperProps) {
  const handleClose = useCallback(() => onClose(), [onClose])
  useEscapeKey(handleClose)

  return (
    <div className="fixed inset-0 z-40 bg-bg" style={{ animation: 'var(--animate-fade-in)' }}>
      {children}

      {/* Floating close button */}
      <button
        onClick={handleClose}
        aria-label={`Close ${title}`}
        title={`Close ${title}`}
        className="fixed top-4 right-4 z-50 p-2.5 rounded-lg bg-primary/15 text-primary-light/80 hover:text-primary-light hover:bg-primary/25 transition-all duration-200 cursor-pointer focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:outline-none"
      >
        <X size={18} />
      </button>
    </div>
  )
}
