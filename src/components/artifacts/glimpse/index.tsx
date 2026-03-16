import { ExternalLink, Shield, Cpu, Lightbulb, Zap } from 'lucide-react'
import GoldDivider from '../../shared/GoldDivider'
import SkillBadge from '../../cards/SkillBadge'

const stats = [
  { value: '10MB', label: 'Max File Size' },
  { value: '0', label: 'Server Calls' },
  { value: '100%', label: 'Client-Side Processing' },
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
      {/* Hero */}
      <div className="mb-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-on-dark mb-3">
          Glimpse
        </h2>
        <p className="font-serif italic text-lg text-primary leading-relaxed max-w-2xl">
          What if data analysis didn&rsquo;t require sending your data to strangers?
          Pyodide brings Python to the browser. Privacy stays with you.
        </p>
      </div>

      {/* The Vision */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="text-primary" size={20} />
          <h3 className="font-display text-xl font-semibold text-text-on-dark">
            The Vision
          </h3>
        </div>
        <p className="text-text-on-dark-muted leading-relaxed max-w-3xl mb-4">
          Every CSV analysis tool on the web asks you to upload your data to their
          servers. Financial records, customer lists, proprietary datasets — all sent
          to strangers who promise they won&rsquo;t look. What if we just… didn&rsquo;t?
        </p>
        <p className="text-text-on-dark-muted leading-relaxed max-w-3xl">
          Glimpse runs Python&rsquo;s pandas library entirely in your browser using
          WebAssembly. Upload a CSV, get correlation matrices and statistical insights,
          and never send a single byte to a server. Your data never leaves your machine.
        </p>
      </section>

      <GoldDivider className="my-8" />

      {/* The Stack */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="text-primary" size={20} />
          <h3 className="font-display text-xl font-semibold text-text-on-dark">
            The Stack
          </h3>
        </div>
        <p className="text-text-on-dark-muted leading-relaxed max-w-3xl mb-4">
          The technical challenge: run Python in a browser without a backend.
          Pyodide compiles Python and its scientific stack (pandas, numpy) to
          WebAssembly — a 30MB runtime that loads on-demand and executes
          statistical analysis in milliseconds.
        </p>
        <p className="text-text-on-dark-muted leading-relaxed max-w-3xl">
          The architecture is radically simple: React handles the UI, Zustand persists
          results, and Pyodide executes on the main thread. No workers, no servers,
          no complexity. Just upload, analyze, and export.
        </p>
      </section>

      <GoldDivider className="my-8" />

      {/* The Challenge */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Lightbulb className="text-primary" size={20} />
          <h3 className="font-display text-xl font-semibold text-text-on-dark">
            The Challenge: Seven Iterations
          </h3>
        </div>
        <p className="text-text-on-dark-muted leading-relaxed max-w-3xl mb-4">
          Dark mode should be trivial. It wasn&rsquo;t. The first implementation read
          CSS variables from the DOM via <code className="font-mono text-sm bg-bg-elevated px-1.5 py-0.5 rounded">getComputedStyle()</code>.
          It created race conditions: React state updated → component re-rendered →{' '}
          <code className="font-mono text-sm bg-bg-elevated px-1.5 py-0.5 rounded">useEffect</code> added the{' '}
          <code className="font-mono text-sm bg-bg-elevated px-1.5 py-0.5 rounded">.dark</code> class <em>after</em> the
          render, but canvas code read CSS <em>during</em> the render. Wrong colors, every time.
        </p>
        <p className="text-text-on-dark-muted leading-relaxed max-w-3xl">
          <strong className="text-text-on-dark">Seven attempts later</strong>, the insight:
          don&rsquo;t read the DOM. Hardcode theme colors in TypeScript, select via React
          state, and let data flow through the React tree. No race conditions. No timing
          bugs. Just pure, predictable state.
        </p>
      </section>

      <GoldDivider className="my-8" />

      {/* The Simplification */}
      <section className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Zap className="text-primary" size={20} />
          <h3 className="font-display text-xl font-semibold text-text-on-dark">
            The Simplification: Elon&rsquo;s Algorithm
          </h3>
        </div>
        <p className="text-text-on-dark-muted leading-relaxed max-w-3xl mb-4">
          The first version had 3D data visualizations (DataCube3D, 409 lines),
          four separate tabs, and 50MB file support. Impressive. Unused. Slow.
        </p>
        <p className="text-text-on-dark-muted leading-relaxed max-w-3xl">
          Applied Elon&rsquo;s 5-step algorithm: Question the requirement, delete the
          part, simplify what remains, accelerate the cycle, then automate. Deleted
          the 3D viz. Merged correlation into Overview (4 tabs → 3). Reduced file
          limit to 10MB. The result? Faster, clearer, and nobody missed the features.
        </p>
      </section>

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
          href="https://glimpse-e5e.pages.dev/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light text-bg font-display font-bold rounded-lg px-6 py-3 transition-colors"
        >
          Launch Demo
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  )
}
