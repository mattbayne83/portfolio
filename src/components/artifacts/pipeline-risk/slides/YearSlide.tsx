import { TrendingUp, TrendingDown } from 'lucide-react'

const rising = [
  'Data shall be recognized as a kingdom\u2019s greatest asset',
  'Meaningful metrics shall drive transformation',
  'The tools of artificers shall become accessible to all',
  'Competition for master craftsmen shall intensify',
  'Swift, iterative methods shall prevail',
  'The governing councils shall demand maturity of models',
]

const ebbing = [
  'The realm\u2019s tolerance for incidents shall wane',
  'Patience for slow campaign cycles shall vanish',
  'The ability to defend with words alone shall fail',
  'Council tolerance for laggards shall expire',
  'Appetite for isolated knowledge hoards shall perish',
]

export default function YearSlide() {
  return (
    <div className="w-full h-full bg-surface flex flex-col items-center justify-center px-8 sm:px-16">
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-high mb-10">
        The World to Come
      </h2>

      <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
        {/* Rising Tides */}
        <div className="bg-surface-muted rounded-xl border border-primary/20 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-success/15 flex items-center justify-center">
              <TrendingUp size={16} className="text-success" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-success">Rising Tides</h3>
          </div>
          <ul className="space-y-2">
            {rising.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 shrink-0" />
                <span className="text-text-body font-serif text-xs sm:text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Ebbing Waters */}
        <div className="bg-surface-muted rounded-xl border border-primary/20 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-error/15 flex items-center justify-center">
              <TrendingDown size={16} className="text-error" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-error">Ebbing Waters</h3>
          </div>
          <ul className="space-y-2">
            {ebbing.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-error mt-2 shrink-0" />
                <span className="text-text-body font-serif text-xs sm:text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
