const headwinds = ['Visible Value', 'Entropy', 'M&A']
const tailwinds = ['Accessibility of Technology', 'Competition', 'Regulations', 'Social Expectations']

function Chip({ label, variant }: { label: string; variant: 'headwind' | 'tailwind' }) {
  const styles = variant === 'headwind'
    ? 'bg-accent/10 text-accent border-accent/20'
    : 'bg-primary/10 text-primary border-primary/20'
  return (
    <span className={`inline-block px-3 py-1.5 rounded-lg border text-xs sm:text-sm font-medium ${styles}`}>
      {label}
    </span>
  )
}

export default function DynamicsSlide() {
  return (
    <div className="w-full h-full bg-neutral-50 flex flex-col items-center justify-center px-8 sm:px-16">
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 mb-12">
        Driving Dynamics
      </h2>

      <div className="w-full max-w-3xl">
        {/* Labels */}
        <div className="flex justify-between mb-6 px-4">
          <span className="font-display text-sm font-medium text-accent tracking-widest uppercase">
            Headwinds
          </span>
          <span className="font-display text-sm font-medium text-primary tracking-widest uppercase">
            Tailwinds
          </span>
        </div>

        {/* Balance beam */}
        <div className="relative">
          {/* Beam */}
          <div className="h-px bg-neutral-300 w-full relative">
            {/* Fulcrum */}
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-3">
              <svg width="24" height="16" viewBox="0 0 24 16" fill="none">
                <path d="M12 0L24 16H0L12 0Z" className="fill-neutral-300" />
              </svg>
            </div>
          </div>

          {/* Chip columns */}
          <div className="flex justify-between mt-8">
            <div className="flex flex-col gap-2 items-start">
              {headwinds.map((h, i) => (
                <Chip key={i} label={h} variant="headwind" />
              ))}
            </div>
            <div className="flex flex-col gap-2 items-end">
              {tailwinds.map((t, i) => (
                <Chip key={i} label={t} variant="tailwind" />
              ))}
            </div>
          </div>
        </div>

        {/* Insight */}
        <p className="text-center text-neutral-500 text-sm mt-10 max-w-md mx-auto">
          Tailwinds outnumber headwinds — the industry is being pushed toward data-driven maturity
        </p>
      </div>
    </div>
  )
}
