import { ExternalLink } from 'lucide-react'
import GoldDivider from '../../shared/GoldDivider'
import MetricGrid from '../../shared/MetricGrid'
import ProductShot from '../../shared/ProductShot'
import SkillBadge from '../../cards/SkillBadge'
import modelShot from '../../../assets/artifacts/shape-matters-model.png'

const stats = [
  { value: '223', label: 'Unit Tests' },
  { value: '15', label: 'Reference Companies' },
  { value: '17%', label: 'Signal Left at 9 Layers' },
]

const techStack = ['React', 'TypeScript', 'Zustand', 'Tailwind CSS', 'SVG Animations']
const skills = ['ideation', 'communication', 'maximizer']

export default function ShapeMattersArtifact() {
  return (
    <div>
      {/* The Question */}
      <section className="mb-10">
        <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          The Question
        </h2>
        <div className="space-y-4">
          <p className="drop-cap font-serif text-text-on-dark leading-relaxed">
            Most "communication problems" inside big companies are geometry
            problems. I've spent my career in large enterprises watching good
            information die on its way up the chain, and I built Shape Matters
            to test whether the org chart itself - not the people on it -
            predicts the loss.
          </p>
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            The core mechanic is Bartlett's 1932 serial-reproduction finding,
            applied to hierarchy: every management layer is a lossy relay. At
            82% retention per relay, an organization nine layers deep delivers
            17% of the original signal to the CEO. Ask a question back down the
            chain and the round trip keeps 4%.
          </p>
        </div>
      </section>

      <ProductShot
        src={modelShot}
        alt="Shape Matters org-modeling workbench: four levers, three pillar health scores, and lever exchange rates"
        caption="The workbench - set your org's depth and levers, get pillar scores and what to move first."
      />

      {/* The Model */}
      <section className="mb-10">
        <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          The Model
        </h2>
        <div className="space-y-4">
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            Three pillars, each with an explicit formula: Fidelity (signal
            decays geometrically per relay), Latency (decision delay grows with
            the square of depth), and Autonomy (decision rights, anchored to
            Bloom &amp; Van Reenen's World Management Survey of ~15,000 firms).
            You model your own org with four sliders, then compare it against 15
            reference companies - from Valve's handbook to GAO audits of the
            USPS to Gerstner's account of pre-turnaround IBM - each scored from
            documented sources, not vibes.
          </p>
        </div>
      </section>

      {/* Keeping It Honest */}
      <section className="mb-10">
        <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          Keeping It Honest
        </h2>
        <div className="space-y-4">
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            A model like this is easy to bend toward the answer you wanted, so
            the discipline is the point: 223 unit tests, and a diagnostic rule
            ("which pillar is binding?") that I replaced with a theorem-backed
            version after exhaustively verifying it across every one of the
            1,030,301 possible score combinations. When experiments showed a
            congestion parameter changed results by less than 1.1 points
            anywhere, I deleted it.{' '}
            <em className="text-text-on-dark">
              The model earns each mechanism or loses it.
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
