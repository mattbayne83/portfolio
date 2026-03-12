import { ExternalLink } from 'lucide-react'
import GoldDivider from '../../shared/GoldDivider'
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
      {/* Hero */}
      <div className="mb-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-on-dark mb-3">
          Shape Matters
        </h2>
        <p className="font-serif italic text-lg text-primary leading-relaxed max-w-2xl">
          What if the shape of an organization determines how much truth survives
          the climb to the top?
        </p>
      </div>

      {/* Description */}
      <p className="text-text-on-dark-muted leading-relaxed max-w-3xl mb-8">
        An interactive research tool that explores how organizational depth drives
        signal decay and shapes institutional behavior. Based on academic theory
        from Bartlett, Deming, and organizational science, it lets you model your
        own organization and watch information fidelity degrade in real time as
        layers increase.
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
        <h3 className="font-display text-xs font-medium tracking-widest uppercase text-text-on-dark-muted mb-3">
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
        <h3 className="font-display text-xs font-medium tracking-widest uppercase text-text-on-dark-muted mb-3">
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
          href="https://mattbayne83.github.io/shape-matters/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-bg font-display font-bold rounded-lg px-6 py-3 transition-colors"
        >
          Enter the Lab
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  )
}
