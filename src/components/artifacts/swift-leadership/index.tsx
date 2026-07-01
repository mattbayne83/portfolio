import GoldDivider from '../../shared/GoldDivider'
import MetricGrid from '../../shared/MetricGrid'
import SkillBadge from '../../cards/SkillBadge'
import ContactButton from '../../shared/ContactButton'

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
      {/* The Challenge */}
      <section className="mb-10">
        <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          The Challenge
        </h2>
        <div className="space-y-4">
          <p className="drop-cap font-serif text-text-on-dark leading-relaxed">
            Behind ONEOK&rsquo;s natural gas liquids transportation network sits
            SWIFT — the authorization platform that more than 100 companies and
            400 weekly users depend on to move product worth $1.5 billion in
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
      </section>

      {/* The Approach */}
      <section className="mb-10">
        <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          The Approach
        </h2>
        <div className="space-y-4">
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
      </section>

      <GoldDivider className="my-8" />

      {/* The Results */}
      <section className="mb-10">
        <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-primary mb-4 text-center">
          The Results
        </h2>
        <MetricGrid metrics={metrics} />
      </section>

      {/* Skills used */}
      <section className="mb-4">
        <h2 className="font-display text-xs font-semibold tracking-widest uppercase text-text-on-dark-muted mb-3 text-center">
          Skills Used
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((id) => (
            <SkillBadge key={id} skillId={id} />
          ))}
        </div>
      </section>

      {/* Closing CTA — catch intent at its peak */}
      <GoldDivider className="my-8" />
      <div className="text-center">
        <p className="font-serif italic text-text-on-dark-muted mb-4">
          Want the full story behind these numbers?
        </p>
        <ContactButton label="Let&rsquo;s talk" subject="SWIFT — let's talk" />
      </div>
    </div>
  )
}
