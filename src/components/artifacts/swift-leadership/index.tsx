import GoldDivider from '../../shared/GoldDivider'
import SkillBadge from '../../cards/SkillBadge'

const metrics = [
  { value: '3rd → 50th', label: 'Usability Percentile' },
  { value: '60%', label: 'Cycle Time Improvement' },
  { value: '30% IRR', label: 'New Product Funded' },
  { value: '380%', label: 'First-Year Maturity Gain' },
  { value: '$1.5B', label: 'Revenue Stream' },
  { value: '400 WAU', label: 'Weekly Active Users' },
]

const skills = ['communication', 'maximizer', 'belief']

export default function SwiftLeadershipArtifact() {
  return (
    <div>
      {/* Hero */}
      <div className="mb-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-on-dark mb-3">
          SWIFT Product Leadership
        </h2>
        <p className="font-serif italic text-lg text-primary leading-relaxed max-w-2xl">
          From 3rd percentile to market standard. The story of rebuilding a product
          that 100 companies depend on every day.
        </p>
      </div>

      <GoldDivider className="my-8" />

      {/* The Challenge */}
      <div className="mb-10">
        <h3 className="font-display text-sm font-medium tracking-widest uppercase text-primary mb-4">
          The Challenge
        </h3>
        <div className="space-y-4 max-w-3xl">
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            SWIFT is the authorization platform behind ONEOK&rsquo;s natural gas
            liquids transportation network — a system that more than 100 companies
            and 400 weekly users depend on to move product worth $1.5 billion in
            annual revenue.
          </p>
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            When I took over as Senior Product Manager, the platform sat at the 3rd
            percentile for usability. Intake processes were ad-hoc, cycle times were
            bloated, and the team had no shared framework for measuring progress.
            Users tolerated the system because they had no alternative — not because
            it worked well.
          </p>
        </div>
      </div>

      {/* The Approach */}
      <div className="mb-10">
        <h3 className="font-display text-sm font-medium tracking-widest uppercase text-primary mb-4">
          The Approach
        </h3>
        <div className="space-y-4 max-w-3xl">
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            I started with the fundamentals: user research across the shipper
            ecosystem, a complete audit of pain points, and a prioritization
            framework that replaced gut-feel with data. The intake funnel was
            redesigned from scratch — reducing cycle time by 60% and giving the team
            a clear, repeatable process for evaluating and delivering work.
          </p>
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            To measure what mattered, I built the Foundations maturity model — a
            framework that tracked product health across dimensions like reliability,
            usability, and developer experience. It gave leadership visibility into
            progress and gave the team a shared language for prioritization.
          </p>
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            In parallel, I identified an unmet market need in digital storage
            management, designed the product concept, built the business case, and
            secured funding — delivering a positive NPV at 30% IRR.
          </p>
        </div>
      </div>

      <GoldDivider className="my-8" />

      {/* The Results */}
      <div className="mb-10">
        <h3 className="font-display text-sm font-medium tracking-widest uppercase text-primary mb-4">
          The Results
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="bg-bg-elevated rounded-lg p-5 border-l-2 border-primary/40"
            >
              <div className="font-mono text-xl sm:text-2xl text-primary mb-1">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm text-text-on-dark-muted">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills used */}
      <div className="mb-4">
        <h3 className="font-display text-xs font-medium tracking-widest uppercase text-text-on-dark-muted mb-3">
          Skills Used
        </h3>
        <div className="flex flex-wrap gap-4">
          {skills.map((id) => (
            <SkillBadge key={id} skillId={id} />
          ))}
        </div>
      </div>
    </div>
  )
}
