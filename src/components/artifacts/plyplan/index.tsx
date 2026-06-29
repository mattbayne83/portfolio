import { ExternalLink } from 'lucide-react'
import GoldDivider from '../../shared/GoldDivider'
import MetricGrid from '../../shared/MetricGrid'
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
      {/* Description — opens the page */}
      <p className="drop-cap font-serif text-text-on-dark leading-relaxed mb-4">
        A phone-first plywood cut optimizer that answers the question every
        woodworker asks at the lumberyard: &ldquo;How many sheets do I need?&rdquo;
        Snap a photo of your hand-drawn cut list, and Gemini Vision AI extracts the
        dimensions automatically. Two bin-packing algorithms — guillotine for
        minimum waste, shelf for minimum saw changes — optimize the layout instantly.
      </p>
      <p className="font-serif text-text-on-dark-muted leading-relaxed mb-8">
        The answer appears in a single bold number. Then tap into SawView for a
        full-screen, pinch-to-zoom cut diagram you can take straight to the shop.
      </p>

      <GoldDivider className="my-8" />

      {/* Stats */}
      <MetricGrid metrics={stats} className="mb-8" />

      {/* Tech stack */}
      <section className="mb-8">
        <h2 className="font-display text-xs font-semibold tracking-widest uppercase text-text-on-dark-muted mb-3 text-center">
          Tech Stack
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-xs text-text-on-dark-muted/80 bg-bg-elevated rounded-full px-3 py-1 border border-primary/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Skills used */}
      <section className="mb-8">
        <h2 className="font-display text-xs font-semibold tracking-widest uppercase text-text-on-dark-muted mb-3 text-center">
          Skills Used
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((id) => (
            <SkillBadge key={id} skillId={id} />
          ))}
        </div>
      </section>

      <GoldDivider className="my-8" />

      {/* CTA */}
      <div className="flex justify-center">
        <a
          href="https://mattbayne83.github.io/plyplan/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-bg font-display font-bold rounded-lg px-6 py-3 transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
        >
          Launch App
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  )
}
