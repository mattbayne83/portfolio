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
        background: `linear-gradient(135deg, #C8973E 0%, #DEB668 25%, #C8973E 50%, #8B6914 75%, #C8973E 100%)`,
        opacity,
      }}
    >
      <div className="rounded-[10px] bg-surface h-full">{children}</div>
    </div>
  )
}
