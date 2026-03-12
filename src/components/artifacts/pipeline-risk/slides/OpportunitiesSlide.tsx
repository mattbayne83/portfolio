const bullets = [
  'Digitization + NLP provides a mountain of data to mine',
  'Integration & comparison with other asset & operational data',
  'Risk = Decision Support Tool — we must prioritize',
  'Why just pipelines? Move inside the fence',
  'Risk model maturity: relative → absolute, siloed → integrated',
  'Benchmarking for operators',
]

const pyramid = [
  { level: 1, label: 'No Risk Systems', color: 'bg-neutral-200 text-neutral-600' },
  { level: 2, label: 'Disparate Risk Systems', color: 'bg-neutral-200 text-neutral-600' },
  { level: 3, label: 'Integrated Risk System', color: 'bg-primary/10 text-primary' },
  { level: 4, label: 'Actionable Risk System', color: 'bg-primary/20 text-primary-dark' },
  { level: 5, label: 'Risk as Competitive Advantage', color: 'bg-accent/15 text-accent' },
]

export default function OpportunitiesSlide() {
  return (
    <div className="w-full h-full bg-neutral-50 flex flex-col items-center justify-center px-8 sm:px-14">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-8">
        Core Opportunities
      </h2>

      <div className="grid grid-cols-2 gap-8 w-full max-w-3xl items-center">
        {/* Bullets */}
        <ul className="space-y-2.5">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
              <span className="text-neutral-600 text-xs sm:text-sm leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>

        {/* Maturity Pyramid */}
        <div className="flex flex-col items-center gap-1.5">
          <p className="text-xs text-neutral-400 font-medium tracking-widest uppercase mb-2">
            Maturity Model
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
