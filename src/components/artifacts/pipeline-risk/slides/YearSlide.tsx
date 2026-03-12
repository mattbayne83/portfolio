import { TrendingUp, TrendingDown } from 'lucide-react'

const more = [
  'Data recognized as an asset',
  'Meaningful metrics driving change',
  'Accessibility to AI / machine learning',
  'Competition for SME people resources',
  'Agile / iterative approaches',
  'Regulators driving maturity of models',
]

const less = [
  'Public tolerance for incidents',
  'Business tolerance for long cycle times',
  'Ability to defend qualitatively',
  'Regulator tolerance for industry lagging',
  'Appetite for siloed data',
]

export default function YearSlide() {
  return (
    <div className="w-full h-full bg-neutral-50 flex flex-col items-center justify-center px-8 sm:px-16">
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 mb-10">
        2025
      </h2>

      <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
        {/* More column */}
        <div className="bg-white rounded-xl border border-neutral-200 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-success/10 flex items-center justify-center">
              <TrendingUp size={16} className="text-success" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-success">+ More</h3>
          </div>
          <ul className="space-y-2">
            {more.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-success mt-2 shrink-0" />
                <span className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Less column */}
        <div className="bg-white rounded-xl border border-neutral-200 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
              <TrendingDown size={16} className="text-accent" />
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-accent">- Less</h3>
          </div>
          <ul className="space-y-2">
            {less.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                <span className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
