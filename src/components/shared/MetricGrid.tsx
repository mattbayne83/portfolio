import GoldBorder from './GoldBorder'

export interface Metric {
  value: string
  label: string
}

interface MetricGridProps {
  metrics: Metric[]
  className?: string
}

/**
 * Result/stat callouts in the brand's material language: gold gradient-border
 * parchment cards with Cormorant numerals. Shared across artifact interiors so
 * they inherit the landing's premium feel instead of flat dark metric grids.
 */
export default function MetricGrid({ metrics, className = '' }: MetricGridProps) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-4 ${className}`}>
      {metrics.map((metric) => (
        <GoldBorder key={metric.label} thickness={1.5} className="h-full">
          <div className="flex h-full flex-col justify-center px-5 py-4 text-center">
            <div className="font-display text-2xl sm:text-3xl font-bold leading-none text-text-high break-words">
              {metric.value}
            </div>
            <div className="mt-2 font-sans text-[0.7rem] uppercase tracking-wider leading-snug text-text-muted">
              {metric.label}
            </div>
          </div>
        </GoldBorder>
      ))}
    </div>
  )
}
