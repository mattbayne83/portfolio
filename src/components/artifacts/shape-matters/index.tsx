import { ExternalLink } from 'lucide-react'
import GoldDivider from '../../shared/GoldDivider'
import MetricGrid from '../../shared/MetricGrid'
import SkillBadge from '../../cards/SkillBadge'

const stats = [
  { value: '6', label: 'Interactive Sections' },
  { value: 'Live', label: 'Real-time Signal Model' },
  { value: '100%', label: 'Browser-Based' },
]

const techStack = ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'SVG Animations']
const skills = ['ideation', 'communication', 'maximizer']

export default function ShapeMattersArtifact() {
  return (
    <div>
      {/* Description — opens the page */}
      <p className="drop-cap font-serif text-text-on-dark leading-relaxed mb-8">
        An interactive research tool that explores how organizational depth drives
        signal decay and shapes institutional behavior. Based on academic theory
        from Bartlett, Deming, and organizational science, it lets you model your
        own organization and watch information fidelity degrade in real time as
        layers increase.
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
          href="https://mattbayne83.github.io/shape-matters/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-bg font-display font-bold rounded-lg px-6 py-3 transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
        >
          Enter the Lab
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  )
}
