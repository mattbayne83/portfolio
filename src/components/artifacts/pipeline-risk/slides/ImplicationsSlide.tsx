import { Hammer, FlaskConical, ScrollText } from 'lucide-react'
import type { ReactNode } from 'react'

const bullets = [
  {
    text: 'Data alone holds no power unless it weaves a story that compels the realm to act',
  },
  {
    text: 'Our worth must be measured in coin and deed, not merely in words',
  },
  {
    text: 'The time from question to confident answer must be forged ever shorter',
  },
]

const stages: { icon: ReactNode; title: string }[] = [
  { icon: <Hammer size={18} />, title: 'Forge' },
  { icon: <FlaskConical size={18} />, title: 'Distill' },
  { icon: <ScrollText size={18} />, title: 'Proclaim' },
]

// Triangle vertex centers within a 240×220 viewbox
const vertices = [
  { x: 120, y: 30 },  // Forge — top center
  { x: 215, y: 180 }, // Distill — bottom right
  { x: 25, y: 180 },  // Proclaim — bottom left
]
const R = 26 // medallion radius

function CycleArrow({ from, to, controlOffset }: { from: { x: number; y: number }; to: { x: number; y: number }; controlOffset: { x: number; y: number } }) {
  // Compute start/end on circle edges
  const dx = to.x - from.x
  const dy = to.y - from.y
  const dist = Math.sqrt(dx * dx + dy * dy)
  const nx = dx / dist
  const ny = dy / dist

  const sx = from.x + nx * R
  const sy = from.y + ny * R
  const ex = to.x - nx * R
  const ey = to.y - ny * R

  const cx = (sx + ex) / 2 + controlOffset.x
  const cy = (sy + ey) / 2 + controlOffset.y

  // Arrowhead at end — compute tangent direction
  const t = 0.95
  const tangentX = 2 * (1 - t) * (cx - sx) + 2 * t * (ex - cx)
  const tangentY = 2 * (1 - t) * (cy - sy) + 2 * t * (ey - cy)
  const tLen = Math.sqrt(tangentX * tangentX + tangentY * tangentY)
  const tnx = tangentX / tLen
  const tny = tangentY / tLen
  const angle = Math.atan2(tny, tnx) * (180 / Math.PI)

  return (
    <g>
      <path
        d={`M${sx},${sy} Q${cx},${cy} ${ex},${ey}`}
        fill="none"
        stroke="#C8973E"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <polygon
        points="-4,-3 4,-3 0,4"
        fill="#C8973E"
        opacity="0.5"
        transform={`translate(${ex},${ey}) rotate(${angle + 90})`}
      />
    </g>
  )
}

export default function ImplicationsSlide() {
  return (
    <div className="w-full h-full bg-surface flex flex-col items-center justify-center px-8 sm:px-16">
      <h2 className="font-display text-4xl sm:text-5xl font-bold text-text-high mb-10">
        The Seer&rsquo;s Charge
      </h2>

      <div className="grid grid-cols-2 gap-10 w-full max-w-3xl items-center">
        {/* Bullets */}
        <ul className="space-y-4">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-primary font-mono text-xs font-bold">{i + 1}</span>
              </span>
              <span className="text-text-body font-serif text-sm leading-relaxed">{b.text}</span>
            </li>
          ))}
        </ul>

        {/* Triangle cycle diagram */}
        <div className="relative w-[240px] h-[240px] mx-auto">
          {/* SVG curved arrows */}
          <svg viewBox="0 0 240 220" className="absolute inset-0 w-full h-full" fill="none">
            {/* Forge → Distill (right side, curve outward right) */}
            <CycleArrow from={vertices[0]} to={vertices[1]} controlOffset={{ x: 30, y: -10 }} />
            {/* Distill → Proclaim (bottom, curve outward down) */}
            <CycleArrow from={vertices[1]} to={vertices[2]} controlOffset={{ x: 0, y: 30 }} />
            {/* Proclaim → Forge (left side, curve outward left) */}
            <CycleArrow from={vertices[2]} to={vertices[0]} controlOffset={{ x: -30, y: -10 }} />
          </svg>

          {/* Medallions */}
          {stages.map((stage, i) => {
            const v = vertices[i]
            return (
              <div
                key={i}
                className="absolute flex flex-col items-center"
                style={{
                  left: v.x,
                  top: v.y,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                {/* Gold ring medallion */}
                <div
                  className="w-[52px] h-[52px] rounded-full flex items-center justify-center"
                  style={{
                    padding: '2px',
                    background: 'linear-gradient(135deg, #C8973E 0%, #DEB668 50%, #8B6914 100%)',
                  }}
                >
                  <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                    <span className="text-primary">{stage.icon}</span>
                  </div>
                </div>
                <span className="font-display text-xs font-bold text-text-high mt-1">
                  {stage.title}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
