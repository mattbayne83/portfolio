import { Globe, TrendingUp, Lightbulb, GitBranch, Target } from 'lucide-react'
import type { ReactNode } from 'react'

const items: { icon: ReactNode; label: string; color: string }[] = [
  { icon: <Globe size={20} />, label: 'Our world in 2025', color: 'text-primary' },
  { icon: <TrendingUp size={20} />, label: 'Dynamics driving these changes', color: 'text-accent' },
  { icon: <Lightbulb size={20} />, label: 'Core opportunities created', color: 'text-accent-warm' },
  { icon: <GitBranch size={20} />, label: 'Derivative opportunities', color: 'text-success' },
  { icon: <Target size={20} />, label: 'What this means for us', color: 'text-primary-light' },
]

export default function MacroViewSlide() {
  return (
    <div className="w-full h-full bg-neutral-50 flex flex-col items-center justify-center px-12 sm:px-20">
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 mb-12">
        Macro View
      </h2>
      <div className="space-y-4 w-full max-w-lg">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-100 group-hover:bg-neutral-200 transition-colors shrink-0">
              <span className={item.color}>{item.icon}</span>
            </div>
            <div className="flex items-center gap-3 flex-1">
              <span className="font-mono text-xs text-neutral-400 w-5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-neutral-700 text-base sm:text-lg font-medium">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
