import { Gem } from 'lucide-react'

interface GoldDividerProps {
  className?: string
}

export default function GoldDivider({ className = '' }: GoldDividerProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <Gem size={14} className="text-primary/50" />
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </div>
  )
}
