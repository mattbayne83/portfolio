import GoldDivider from '../../shared/GoldDivider'
import MetricGrid from '../../shared/MetricGrid'
import SkillBadge from '../../cards/SkillBadge'
import ContactButton from '../../shared/ContactButton'

const metrics = [
  { value: '3rd → 50th', label: 'Usability Percentile' },
  { value: '60%', label: 'Cycle Time Improvement' },
  { value: '220+', label: 'Requests Triaged' },
  { value: '2×', label: 'Key Feature Adoption' },
  { value: '30% IRR', label: 'New Product Funded' },
  { value: '$1.5B', label: 'Revenue Stream' },
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
            In 2022 I became Senior Product Manager for SWIFT - ONEOK's B2B
            authorization and logistics platform that more than 100 companies
            and 400 weekly users depend on to move product worth $1.5 billion in
            annual revenue. I led a cross-functional team of roughly 10-15 across
            engineering, operations, and support.
          </p>
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            When I took over, the platform sat at the 3rd percentile for
            usability. Intake was ad-hoc: whoever shouted loudest got work.
            Cycle times were bloated, and the team had no shared language for
            measuring progress. Users tolerated the system because they had no
            alternative - not because it worked well.
          </p>
        </div>
      </section>

      {/* The Hard Call */}
      <section className="mb-10">
        <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          The Hard Call: Intake Over Features
        </h2>
        <div className="space-y-4">
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            The pressure was to ship features. Stakeholders had a long list of
            asks, and a feature factory would have looked productive. I chose
            the unglamorous path:{' '}
            <strong className="text-text-on-dark font-medium">
              rebuild the intake and prioritization funnel first
            </strong>
            .
          </p>
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            That meant saying no - or not yet - while we installed a repeatable
            engine for evaluating work. Over twelve months the team and I
            triaged 220+ requests and cut cycle time 60%. The tradeoff was real:
            less visible shipping theater early on, in exchange for a system
            that could actually decide what deserved engineering time.
          </p>
          <p className="font-serif italic text-text-on-dark leading-relaxed">
            When everything is a P0, rebuild intake before the next feature.
          </p>
        </div>
      </section>

      {/* What We Built Next */}
      <section className="mb-10">
        <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          Foundations, Then the Storage Bet
        </h2>
        <div className="space-y-4">
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            With intake under control, I went after what we still couldn't see.
            I built the Foundations maturity model - a scorecard across nine
            dimensions of reliability, service, and usability - so leadership
            and the team shared a language for product health. It is{' '}
            <em className="text-text-on-dark">our</em> yardstick, not a
            third-party benchmark: the value is how we prioritize, not a vanity
            percentage on a slide.
          </p>
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            In parallel, I put a 0→1 digital storage product in front of
            leadership. The business case underwrote at just 3% adoption and
            still cleared a positive NPV at 30% IRR. That bar was the point:
            fund the bet only if it worked thin. The team then shipped the
            turnaround work that moved usability and key-feature adoption - the
            numbers are below.
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

      <GoldDivider className="my-8" />
      <div className="text-center">
        <p className="font-serif italic text-text-on-dark-muted mb-4">
          Curious about the intake system - or the storage bet?
        </p>
        <ContactButton label="Let's talk" subject="SWIFT - let's talk" />
      </div>
    </div>
  )
}
