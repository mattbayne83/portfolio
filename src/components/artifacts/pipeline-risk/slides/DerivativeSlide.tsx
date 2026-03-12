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
    quote: 'Supporting pipeline conversion as new construction becomes more difficult.',
  },
  {
    title: 'Risk Aggregation & ERM',
    quote: 'Enterprise-level risk rollup and maturity toward performance-based integrity.',
  },
  {
    title: 'Robotic Process Automation',
    quote: 'How can I automate common integrity questions & processes?',
  },
  {
    title: 'Performance-based Integrity',
    quote: 'Risk tolerance & ALARP — moving toward mature, measurable programs.',
  },
]

export default function DerivativeSlide() {
  return (
    <div className="w-full h-full bg-neutral-50 flex flex-col items-center justify-center px-8 sm:px-14">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-neutral-900 mb-8">
        Derivative Opportunities
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full max-w-3xl">
        {opportunities.map((o, i) => (
          <div
            key={i}
            className="bg-white border border-neutral-200 rounded-xl p-3 sm:p-3.5 flex flex-col"
          >
            <h4 className="font-display text-xs sm:text-sm font-bold text-neutral-800 mb-1.5">
              {o.title}
            </h4>
            <p className="text-[10px] sm:text-xs text-neutral-500 italic leading-relaxed flex-1">
              &ldquo;{o.quote}&rdquo;
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
