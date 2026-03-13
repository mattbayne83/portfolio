const bullets = [
  'Digitization unveils a mountain of uncharted data to mine',
  'Integration with other knowledge domains multiplies insight',
  'Risk becomes the compass by which the realm prioritizes its campaigns',
  'Why guard only the roads? Venture inside the fortress walls',
  'From relative to absolute, from siloed to integrated \u2014 the models must evolve',
  'Benchmarking: a mirror for every steward to measure their readiness',
]

const pyramid = [
  { level: 1, label: 'No Defenses', color: 'bg-surface-muted text-text-muted' },
  { level: 2, label: 'Scattered Watchtowers', color: 'bg-surface-muted text-text-muted' },
  { level: 3, label: 'Unified Ramparts', color: 'bg-primary/10 text-primary' },
  { level: 4, label: 'The War Room', color: 'bg-primary/20 text-primary-dark' },
  { level: 5, label: 'Mastery & Dominion', color: 'bg-primary/30 text-primary-dark' },
]

export default function OpportunitiesSlide() {
  return (
    <div className="w-full h-full bg-surface flex flex-col items-center justify-center px-8 sm:px-14">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-high mb-8">
        Treasures Discovered
      </h2>

      <div className="grid grid-cols-2 gap-8 w-full max-w-3xl items-center">
        {/* Bullets */}
        <ul className="space-y-2.5">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              <span className="text-text-body font-serif text-xs sm:text-sm leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>

        {/* Maturity Pyramid */}
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-xs text-text-muted font-medium tracking-widest uppercase mb-2">
            Path to Mastery
          </p>
          {[...pyramid].reverse().map((p) => {
            const widthPercent = 40 + (p.level - 1) * 15
            return (
              <div
                key={p.level}
                className={`${p.color} rounded-lg py-1.5 px-3 text-center text-[10px] sm:text-xs font-medium transition-all`}
                style={{ width: `${widthPercent}%` }}
              >
                <span className="opacity-60 mr-1">{p.level}.</span>
                {p.label}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
