import GoldFiligree from '../../../shared/GoldFiligree'
import GoldDivider from '../../../shared/GoldDivider'

const points = [
  { topic: 'The World to Come', emphasis: 'Holistic data reigns supreme' },
  { topic: 'Forces in the Balance', emphasis: 'Social will and competitive fire' },
  { topic: 'Treasures Discovered', emphasis: 'Integration, absolute truth, earned confidence' },
  { topic: 'Paths Yet Untrodden', emphasis: 'Alliance counsel, royal seals, the grand ledger' },
  { topic: "The Seer's Charge", emphasis: 'Demonstrate worth, accelerate insight, prioritize campaigns' },
]

export default function ConclusionSlide() {
  return (
    <div className="relative w-full h-full bg-bg flex flex-col items-center justify-center px-12 sm:px-20 overflow-hidden">
      {/* Subtle gold dot bg */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 960 540" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <pattern id="conclusion-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(200,151,62,0.08)" />
          </pattern>
          <rect width="960" height="540" fill="url(#conclusion-dots)" />
        </svg>
      </div>

      {/* Filigree corners */}
      <GoldFiligree className="absolute top-4 left-4 w-12 h-12 opacity-40" />
      <GoldFiligree className="absolute top-4 right-4 w-12 h-12 opacity-40 -scale-x-100" />
      <GoldFiligree className="absolute bottom-4 left-4 w-12 h-12 opacity-40 -scale-y-100" />
      <GoldFiligree className="absolute bottom-4 right-4 w-12 h-12 opacity-40 rotate-180" />

      <div className="relative z-10 w-full max-w-2xl">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-on-dark mb-4 text-center">
          The Prophecy Fulfilled
        </h2>

        <GoldDivider className="w-64 mx-auto mb-8" />

        <div className="space-y-5">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-primary-light font-mono text-xs font-bold">{i + 1}</span>
              </span>
              <div>
                <span className="text-text-on-dark-muted text-sm">{p.topic} — </span>
                <span className="text-primary-light font-display font-bold text-sm">{p.emphasis}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-serif italic text-text-on-dark-muted text-sm mt-10 max-w-lg mx-auto">
          Written in 2020, these prophecies have largely come to pass. The realm now lives in the world this document foretold.
        </p>
      </div>
    </div>
  )
}
