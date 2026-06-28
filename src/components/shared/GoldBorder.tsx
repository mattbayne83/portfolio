import type { ReactNode } from 'react'

interface GoldBorderProps {
  children: ReactNode
  className?: string
  thickness?: number
  opacity?: number
}

export default function GoldBorder({
  children,
  className = '',
  thickness = 2,
  opacity = 1,
}: GoldBorderProps) {
  return (
    <div
      className={`rounded-xl ${className}`}
      style={{
        padding: `${thickness}px`,
        background: 'var(--gradient-gold-edge)',
        opacity,
      }}
    >
      <div className="rounded-[10px] bg-surface h-full">{children}</div>
    </div>
  )
}
