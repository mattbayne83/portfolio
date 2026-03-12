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
    <div className="fixed inset-0 z-40 bg-bg">
      {children}

      {/* Floating close button */}
      <button
        onClick={handleClose}
        title={`Close ${title}`}
        className="fixed top-4 left-4 z-50 p-2.5 rounded-lg bg-primary/10 backdrop-blur-sm text-primary-light/60 hover:text-primary-light hover:bg-primary/20 transition-all duration-200 cursor-pointer"
      >
        <X size={18} />
      </button>
    </div>
  )
}
