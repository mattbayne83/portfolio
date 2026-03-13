const opportunities = [
  {
    title: 'M&A Support',
    quote: 'How does this risk fit within my current & desired portfolio?',
  },
  {
    title: 'Contract Risk',
    quote: 'What clauses can I live with / live without?',
  },
  {
    title: 'Permitting Risk',
    quote: 'What are the biggest risks to getting / maintaining my permit?',
  },
  {
    title: 'Investment Management',
    quote: 'How can I manage a large portfolio of potential investments?',
  },
  {
    title: 'Conversion of Service',
    quote: 'Support as new pipelines become more difficult to construct.',
  },
  {
    title: 'Risk Aggregation & ERM',
    quote: 'Enterprise-wide risk aggregation and enterprise risk management.',
  },
  {
    title: 'Robotic Process Automation',
    quote: 'How can I automate common integrity questions & processes?',
  },
  {
    title: 'Risk Maturity',
    quote: 'Performance-based integrity management (ex: risk tolerance & ALARP).',
  },
]

export default function DerivativeSlide() {
  return (
    <div className="w-full h-full bg-surface flex flex-col items-center justify-center px-8 sm:px-14">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-high mb-8">
        Derivative Opportunities
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
