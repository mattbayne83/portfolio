const opportunities = [
  {
    title: 'Alliance Counsel',
    quote: 'How does this risk reshape our holdings and alliances?',
  },
  {
    title: 'The Binding Scrolls',
    quote: 'Which contractual bonds can the realm endure \u2014 and which must be severed?',
  },
  {
    title: 'The Royal Seals',
    quote: 'What threatens the granting or keeping of the realm\u2019s permits?',
  },
  {
    title: 'Treasury Stewardship',
    quote: 'How shall a vast portfolio of potential ventures be managed?',
  },
  {
    title: 'The Great Conversion',
    quote: 'Repurposing existing routes as new construction grows ever harder.',
  },
  {
    title: 'The Grand Ledger',
    quote: 'Enterprise-wide risk consolidated into a single tome of truth.',
  },
  {
    title: "The Automaton's Aid",
    quote: 'How might we delegate the routine questions to tireless machines?',
  },
  {
    title: 'The Measure of Worth',
    quote: 'Risk tolerance and fitness for service \u2014 toward mature, measurable guardianship.',
  },
]

export default function DerivativeSlide() {
  return (
    <div className="w-full h-full bg-surface flex flex-col items-center justify-center px-8 sm:px-14">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-high mb-8">
        Paths Yet Untrodden
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-3xl">
        {opportunities.map((o, i) => (
          <div
            key={i}
            className="relative bg-surface-muted border border-primary/20 rounded-xl px-3 sm:px-3.5 pb-3 sm:pb-3.5 pt-8 flex flex-col"
          >
            <span className="absolute top-2.5 right-3 w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center">
              <span className="text-primary-dark font-mono text-[9px] font-bold">{i + 1}</span>
            </span>
            <h4 className="font-display text-xs sm:text-sm font-bold text-text-high mb-1.5">
              {o.title}
            </h4>
            <p className="text-[10px] sm:text-xs text-text-body font-serif italic leading-relaxed flex-1">
              &ldquo;{o.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
