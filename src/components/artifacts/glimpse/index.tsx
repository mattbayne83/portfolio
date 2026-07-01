import { ExternalLink } from 'lucide-react'
import GoldDivider from '../../shared/GoldDivider'
import MetricGrid from '../../shared/MetricGrid'
import ProductShot from '../../shared/ProductShot'
import SkillBadge from '../../cards/SkillBadge'
import analysisShot from '../../../assets/artifacts/glimpse-analysis.png'

const stats = [
  { value: '0', label: 'Server Calls' },
  { value: '409', label: 'Lines Deleted in One Pass' },
  { value: '7', label: 'Attempts to Ship Dark Mode' },
]

const techStack = [
  'React 19',
  'TypeScript',
  'Pyodide (Python + WebAssembly)',
  'Tailwind CSS 4',
  'Zustand',
]
const skills = ['maximizer', 'ideation', 'belief']

export default function GlimpseArtifact() {
  return (
    <div>
      {/* The Premise */}
      <section className="mb-10">
        <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          The Premise
        </h2>
        <div className="space-y-4">
          <p className="drop-cap font-serif text-text-on-dark leading-relaxed">
            Every CSV-analysis tool on the web asks you to upload your data to
            someone else&rsquo;s servers &mdash; financial records, customer
            lists, proprietary datasets, all sent to strangers who promise not
            to look. I wanted the analysis without the upload, so I built
            Glimpse to run Python&rsquo;s pandas library entirely in the
            browser via WebAssembly.
          </p>
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            Drop in a CSV or Excel file and you get statistics, distributions,
            correlations, and quality checks &mdash; and not a single byte
            leaves your machine. The architecture stays deliberately small:
            React for the UI, Zustand for state, Pyodide executing pandas on
            the main thread.
          </p>
        </div>
      </section>

      <ProductShot
        src={analysisShot}
        alt="Glimpse analyzing a retail sales dataset in the browser: statistics, column structure, and quality checks"
        caption="A 731-row dataset profiled entirely in-browser &mdash; the file never leaves the machine."
      />

      {/* The Hard Bug */}
      <section className="mb-10">
        <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          The Bug That Took Seven Tries
        </h2>
        <div className="space-y-4">
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            Dark mode should have been trivial. It wasn&rsquo;t. My first
            implementation read CSS variables from the DOM via{' '}
            <code className="font-mono text-sm bg-bg-elevated px-1.5 py-0.5 rounded">getComputedStyle()</code>,
            which created a race: React state updated, the component
            re-rendered, a{' '}
            <code className="font-mono text-sm bg-bg-elevated px-1.5 py-0.5 rounded">useEffect</code>{' '}
            added the <code className="font-mono text-sm bg-bg-elevated px-1.5 py-0.5 rounded">.dark</code>{' '}
            class <em>after</em> the render &mdash; but the canvas code read
            CSS <em>during</em> the render. Wrong colors, every time.
          </p>
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            <strong className="text-text-on-dark">Seven attempts later</strong>, the
            insight: don&rsquo;t read the DOM. I hardcoded the theme colors in
            TypeScript, selected them via React state, and let the data flow
            through the tree. No race conditions, no timing bugs.
          </p>
        </div>
      </section>

      {/* The Deletion */}
      <section className="mb-10">
        <h2 className="font-display text-sm font-semibold tracking-widest uppercase text-primary mb-4">
          What I Deleted
        </h2>
        <div className="space-y-4">
          <p className="font-serif text-text-on-dark-muted leading-relaxed">
            The first version had a 3D data visualization (409 lines), four
            tabs, and 50MB file support. Impressive, unused, and slow. I
            questioned each requirement, deleted the 3D viz outright, merged
            correlation into the Overview tab, and cut the file limit to 10MB
            &mdash; the size real spreadsheets actually are. The tool got
            faster and clearer, and nobody has missed a single deleted
            feature.
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
          href="https://glimpse-e5e.pages.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-bg font-display font-bold rounded-lg px-6 py-3 transition-colors focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
        >
          Launch Demo
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  )
}
