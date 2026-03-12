const points = [
  { topic: 'Our world in 2025', emphasis: 'Holistic Data is King' },
  { topic: 'Dynamics driving these changes', emphasis: 'Social expectations, competition' },
  { topic: 'Core opportunities created', emphasis: 'Integration, Absolute results, Confidence' },
  { topic: 'Derivative opportunities', emphasis: 'Transaction support, Permitting risk, ERM' },
  { topic: 'What this means for us', emphasis: 'Demonstrate Value, Cycle Time, Prioritization' },
]

export default function ConclusionSlide() {
  return (
    <div className="relative w-full h-full bg-neutral-950 flex flex-col items-center justify-center px-12 sm:px-20 overflow-hidden">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 pointer-events-none">
        <svg viewBox="0 0 960 540" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <pattern id="conclusion-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(79,70,229,0.1)" />
          </pattern>
          <rect width="960" height="540" fill="url(#conclusion-dots)" />
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-2xl">
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-10 text-center">
          Conclusion
        </h2>

        <div className="space-y-5">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-4">
              <span className="w-7 h-7 rounded-lg bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-primary-light font-mono text-xs font-bold">{i + 1}</span>
              </span>
              <div>
                <span className="text-neutral-400 text-sm">{p.topic} — </span>
                <span className="text-white font-display font-bold text-sm">{p.emphasis}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
