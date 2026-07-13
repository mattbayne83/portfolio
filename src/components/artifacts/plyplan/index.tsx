import { ExternalLink } from 'lucide-react'
import GoldDivider from '../../shared/GoldDivider'
import MetricGrid from '../../shared/MetricGrid'
import ProductShot from '../../shared/ProductShot'
import SkillBadge from '../../cards/SkillBadge'
import resultShot from '../../../assets/artifacts/plyplan-result.png'

const stats = [
  { value: '30', label: 'Automated Tests' },
  { value: '1/8"', label: 'Kerf Modeled Per Cut' },
  { value: '2', label: 'Cutting Strategies' },
]

const techStack = ['React', 'TypeScript', 'Tailwind CSS', 'SVG Visualization']
const skills = ['ideation', 'maximizer', 'belief']

export default function PlyplanArtifact() {
  return (
    <div>
      {/* The Problem */}
      <section className="mb-10">
        <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          The Problem
        </h2>
        <div className="space-y-4">
          <p className="drop-cap font-serif text-text-on-dark leading-relaxed">
            Every project I build starts at the lumberyard with the same
            question: how many sheets do I need? I used to answer it with a
            pencil sketch and a guess - and I built Plyplan the weekend I
            realized that question is a bin-packing problem computer science
            solved decades ago.
          </p>
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            Type your pieces in - width, length, how many - and a simple nesting
            algorithm packs them onto standard sheets. The answer comes back as
            one bold number, with a cost estimate and a cut diagram you can take
            straight to the saw. No AI, no magic - a well-understood algorithm,
            applied where it earns its keep.
          </p>
        </div>
      </section>

      <ProductShot
        src={resultShot}
        alt="Plyplan on a phone: three pieces entered, one sheet needed, labeled cut diagram"
        caption="Three pieces in, one answer out - sheet count, cost, and the cut diagram."
        maxWidth={300}
      />

      {/* The Decision */}
      <section className="mb-10">
        <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          The Decision That Matters
        </h2>
        <div className="space-y-4">
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            Plyplan ships two optimizers because waste isn't the only cost.
            Minimum-waste packing gives the tightest sheets, but at the saw,
            every fence change is a chance to make a mistake. The second
            strategy packs pieces into shelves - same-height rows, same-width
            rips - so you set the fence once per row and just cut. Fewer perfect
            rectangles, fewer ruined ones.
          </p>
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            The physics is modeled honestly: the blade eats an eighth of an inch
            of material with every pass, so the packer charges kerf to the right
            and bottom edge of every placed piece - the way a real saw does. My
            accuracy bar for the whole tool:{' '}
            <em className="text-text-on-dark">
              if the optimizer says two sheets and the woodworker fits it on
              one, the tool is broken.
            </em>
          </p>
        </div>
      </section>

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
