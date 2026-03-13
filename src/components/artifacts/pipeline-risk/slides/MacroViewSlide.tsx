import { Globe, TrendingUp, Lightbulb, GitBranch, Target } from 'lucide-react'
import type { ReactNode } from 'react'
import GoldDivider from '../../../shared/GoldDivider'

const items: { icon: ReactNode; label: string; color: string }[] = [
  { icon: <Globe size={20} />, label: 'Our world in 2025', color: 'text-primary' },
  { icon: <TrendingUp size={20} />, label: 'Dynamics driving these changes', color: 'text-primary-dark' },
  { icon: <Lightbulb size={20} />, label: 'Core opportunities created', color: 'text-primary-light' },
  { icon: <GitBranch size={20} />, label: 'Derivative opportunities', color: 'text-primary' },
  { icon: <Target size={20} />, label: 'What this means for us', color: 'text-primary' },
]

export default function MacroViewSlide() {
  return (
    <div className="w-full h-full bg-surface flex flex-col items-center justify-center px-12 sm:px-20">
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-high mb-2">
        Macro View
      </h2>
      <p className="font-serif italic text-text-muted text-sm mb-6 text-center">
        Five perspectives on the future of pipeline risk &amp; integrity
      </p>
      <GoldDivider className="w-48 mx-auto mb-8" />
      <div className="space-y-4 w-full max-w-lg">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-4 group"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-surface-muted group-hover:bg-primary/10 transition-colors shrink-0">
              <span className={item.color}>{item.icon}</span>
            </div>
            <div className="flex items-center gap-3 flex-1">
              <span className="font-mono text-xs text-text-muted w-5">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="text-text-body text-base sm:text-lg font-medium">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
