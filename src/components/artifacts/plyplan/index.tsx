import { ExternalLink } from 'lucide-react'
import GoldDivider from '../../shared/GoldDivider'
import SkillBadge from '../../cards/SkillBadge'

const stats = [
  { value: '2', label: 'Packing Algorithms' },
  { value: 'AI', label: 'Gemini Vision Extraction' },
  { value: 'Phone', label: 'Built for the Job Site' },
]

const techStack = ['React', 'TypeScript', 'Gemini AI', 'Tailwind CSS', 'SVG Visualization']
const skills = ['ideation', 'maximizer', 'belief']

export default function PlyplanArtifact() {
  return (
    <div>
      {/* Hero */}
      <div className="mb-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-on-dark mb-3">
          Plyplan
        </h2>
        <p className="font-serif italic text-lg text-primary leading-relaxed max-w-2xl">
          Built for the workshop, not the office. Because measuring twice means
          cutting plywood once.
        </p>
      </div>

      {/* Description */}
      <p className="text-text-on-dark-muted leading-relaxed max-w-3xl mb-4">
        A phone-first plywood cut optimizer that answers the question every
        woodworker asks at the lumberyard: &ldquo;How many sheets do I need?&rdquo;
        Snap a photo of your hand-drawn cut list, and Gemini Vision AI extracts the
        dimensions automatically. Two bin-packing algorithms — guillotine for
        minimum waste, shelf for minimum saw changes — optimize the layout instantly.
      </p>
      <p className="text-text-on-dark-muted leading-relaxed max-w-3xl mb-8">
        The answer appears in a single bold number. Then tap into SawView for a
        full-screen, pinch-to-zoom cut diagram you can take straight to the shop.
      </p>

      <GoldDivider className="my-8" />

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-bg-elevated rounded-lg p-5 border-t-2 border-primary/30"
          >
            <div className="font-mono text-2xl text-primary mb-1">{stat.value}</div>
            <div className="text-sm text-text-on-dark-muted">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Tech stack */}
      <div className="mb-8">
        <h3 className="font-display text-xs font-semibold tracking-widest uppercase text-text-on-dark-muted mb-3">
          Tech Stack
        </h3>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-text-on-dark-muted/80 bg-bg-elevated rounded-full px-3 py-1 border border-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Skills used */}
      <div className="mb-8">
        <h3 className="font-display text-xs font-semibold tracking-widest uppercase text-text-on-dark-muted mb-3">
          Skills Used
        </h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((id) => (
            <SkillBadge key={id} skillId={id} />
          ))}
        </div>
      </div>

      <GoldDivider className="my-8" />

      {/* CTA */}
      <div className="flex justify-center">
        <a
          href="https://mattbayne83.github.io/plyplan/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-bg font-display font-bold rounded-lg px-6 py-3 transition-colors"
        >
          Launch App
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  )
}
