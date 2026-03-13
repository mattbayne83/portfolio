import { Shield, Swords } from 'lucide-react'

const opposing = [
  { name: 'The Fog of Visible Value', rank: 'Captain' },
  { name: 'The Creep of Entropy', rank: 'Lieutenant' },
  { name: 'The Upheaval of Mergers', rank: 'Sergeant' },
]

const allied = [
  { name: 'The Spread of Artifice', rank: 'General' },
  { name: 'The Fires of Competition', rank: 'Captain' },
  { name: 'The Weight of Council Edicts', rank: 'Captain' },
  { name: 'The Will of the People', rank: 'Lieutenant' },
]

function Banner({ label, variant, rank, index }: { label: string; variant: 'opposing' | 'allied'; rank: string; index: number }) {
  const isOpposing = variant === 'opposing'
  return (
    <div
      className={`flex items-center gap-3 ${isOpposing ? 'flex-row' : 'flex-row-reverse'}`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Shield/rank icon */}
      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
        isOpposing ? 'bg-error/15' : 'bg-primary/15'
      }`}>
        <Shield size={14} className={isOpposing ? 'text-error' : 'text-primary'} />
      </div>
      {/* Name + rank */}
      <div className={isOpposing ? 'text-left' : 'text-right'}>
        <p className={`text-xs sm:text-sm font-medium ${isOpposing ? 'text-error' : 'text-primary-dark'}`}>
          {label}
        </p>
        <p className="text-[10px] text-text-muted font-mono uppercase tracking-wider">
          {rank}
        </p>
      </div>
    </div>
  )
}

export default function DynamicsSlide() {
  return (
    <div className="w-full h-full bg-surface flex flex-col items-center justify-center px-8 sm:px-14">
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-high mb-10">
        Forces in the Balance
      </h2>

      <div className="w-full max-w-3xl">
        {/* Army headers */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 mb-6">
          <div className="text-left">
            <span className="font-display text-sm font-semibold text-error tracking-widest uppercase">
              Opposing Forces
            </span>
            <p className="text-[10px] text-text-muted font-mono mt-0.5">3 battalions</p>
          </div>

          {/* Center crossed swords */}
          <div className="w-10 h-10 rounded-full bg-surface-muted border border-primary/20 flex items-center justify-center">
            <Swords size={18} className="text-primary" />
          </div>

          <div className="text-right">
            <span className="font-display text-sm font-semibold text-primary tracking-widest uppercase">
              Allied Winds
            </span>
            <p className="text-[10px] text-text-muted font-mono mt-0.5">4 battalions</p>
          </div>
        </div>

        {/* Battle line divider */}
        <div className="h-px bg-gradient-to-r from-error/30 via-primary/40 to-primary/30 mb-6" />

        {/* Two armies facing each other */}
        <div className="grid grid-cols-[1fr_24px_1fr] gap-4 items-start">
          {/* Left army — opposing */}
          <div className="flex flex-col gap-3">
            {opposing.map((f, i) => (
              <Banner key={i} label={f.name} variant="opposing" rank={f.rank} index={i} />
            ))}
          </div>

          {/* Center battle line */}
          <div className="flex flex-col items-center h-full pt-2">
            <div className="w-px h-full bg-gradient-to-b from-error/20 via-primary/30 to-primary/20" />
          </div>

          {/* Right army — allied */}
          <div className="flex flex-col gap-3">
            {allied.map((f, i) => (
              <Banner key={i} label={f.name} variant="allied" rank={f.rank} index={i} />
            ))}
          </div>
        </div>

        {/* Insight */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent mt-6 mb-4" />
        <p className="text-center text-text-muted font-serif italic text-sm max-w-md mx-auto">
          The allied winds outnumber the opposing forces — the realm marches inexorably toward data-driven mastery
        </p>
      </div>
    </div>
  )
}
