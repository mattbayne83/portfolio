const bullets = [
  {
    text: 'Data alone has no value if it doesn\'t tell us a story that drives action',
  },
  {
    text: '"Value-added" must be quantified if we want to continue competing',
  },
  {
    text: 'Cycle time to reach quality decisions must be decreased',
  },
]

const segments = [
  { label: 'Get it\ndone', color: '#4F46E5' },
  { label: 'Synthesize\nit', color: '#818CF8' },
  { label: 'Sell it', color: '#F43F5E' },
]

export default function ImplicationsSlide() {
  return (
    <div className="w-full h-full bg-neutral-50 flex flex-col items-center justify-center px-8 sm:px-16">
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 mb-10">
        Implications
      </h2>

      <div className="grid grid-cols-2 gap-10 w-full max-w-3xl items-center">
        {/* Bullets */}
        <ul className="space-y-4">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-primary font-mono text-xs font-bold">{i + 1}</span>
              </span>
              <span className="text-neutral-600 text-sm leading-relaxed">{b.text}</span>
            </li>
          ))}
        </ul>

        {/* Cycle Diagram */}
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 200 200" className="w-48 h-48 sm:w-56 sm:h-56">
            {segments.map((seg, i) => {
              const angle = (i * 120 - 90) * (Math.PI / 180)
              const endAngle = ((i + 1) * 120 - 90) * (Math.PI / 180)
              const r = 75
              const cx = 100
              const cy = 100
              const x1 = cx + r * Math.cos(angle)
              const y1 = cy + r * Math.sin(angle)
              const x2 = cx + r * Math.cos(endAngle)
              const y2 = cy + r * Math.sin(endAngle)
              const textAngle = ((i * 120 + 60) - 90) * (Math.PI / 180)
              const tx = cx + r * 0.6 * Math.cos(textAngle)
              const ty = cy + r * 0.6 * Math.sin(textAngle)

              return (
                <g key={i}>
                  <path
                    d={`M${cx},${cy} L${x1},${y1} A${r},${r} 0 0,1 ${x2},${y2} Z`}
                    fill={seg.color}
                    opacity={0.85}
                    stroke="white"
                    strokeWidth="2"
                  />
                  {seg.label.split('\n').map((line, li) => (
                    <text
                      key={li}
                      x={tx}
                      y={ty + li * 12 - (seg.label.includes('\n') ? 4 : 0)}
                      textAnchor="middle"
                      fill="white"
                      fontSize="10"
                      fontWeight="600"
                      fontFamily="'Space Grotesk', sans-serif"
                    >
                      {line}
                    </text>
                  ))}
                </g>
              )
            })}
            {/* Center circle */}
            <circle cx="100" cy="100" r="22" fill="white" />
            {/* Arrows */}
            {[0, 1, 2].map((i) => {
              const angle = (i * 120 + 50 - 90) * (Math.PI / 180)
              const ax = 100 + 82 * Math.cos(angle)
              const ay = 100 + 82 * Math.sin(angle)
              const rot = i * 120 + 50
              return (
                <polygon
                  key={i}
                  points="-4,-3 4,-3 0,4"
                  fill="white"
                  transform={`translate(${ax},${ay}) rotate(${rot})`}
                />
              )
            })}
          </svg>
        </div>
      </div>
    </div>
  )
}
