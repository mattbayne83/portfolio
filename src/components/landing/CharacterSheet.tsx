import SkillCardSpread from '../cards/SkillCardSpread'
import GoldDivider from '../shared/GoldDivider'

export default function CharacterSheet() {
  return (
    <section className="pt-16 sm:pt-24 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Top ornamental line */}
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent mb-12" />

        {/* Character header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-12">
          {/* Monogram seal */}
          <div className="shrink-0 relative" style={{ width: '96px', height: '96px' }}>
            {/* Outer decorative ring */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 96 96"
              fill="none"
            >
              <circle cx="48" cy="48" r="46.5" stroke="url(#sealGold)" strokeWidth="1" opacity="0.6" />
              {/* Cardinal accents */}
              <circle cx="48" cy="2.5" r="1.5" fill="#C8973E" />
              <circle cx="93.5" cy="48" r="1.5" fill="#C8973E" />
              <circle cx="48" cy="93.5" r="1.5" fill="#C8973E" />
              <circle cx="2.5" cy="48" r="1.5" fill="#C8973E" />
              {/* Intercardinal accents */}
              <circle cx="80.5" cy="15.5" r="1" fill="#8B6914" opacity="0.5" />
              <circle cx="80.5" cy="80.5" r="1" fill="#8B6914" opacity="0.5" />
              <circle cx="15.5" cy="80.5" r="1" fill="#8B6914" opacity="0.5" />
              <circle cx="15.5" cy="15.5" r="1" fill="#8B6914" opacity="0.5" />
              <defs>
                <linearGradient id="sealGold" x1="0" y1="0" x2="96" y2="96">
                  <stop offset="0%" stopColor="#C8973E" />
                  <stop offset="40%" stopColor="#DEB668" />
                  <stop offset="100%" stopColor="#8B6914" />
                </linearGradient>
              </defs>
            </svg>
            {/* Inner emblem */}
            <div
              className="absolute rounded-full flex items-center justify-center"
              style={{
                inset: '8px',
                padding: '2.5px',
                background:
                  'linear-gradient(135deg, #C8973E 0%, #DEB668 40%, #8B6914 100%)',
              }}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center"
                style={{
                  background:
                    'radial-gradient(ellipse at 40% 35%, #2E2820 0%, #1A1410 70%)',
                  boxShadow:
                    'inset 0 2px 8px rgba(0,0,0,0.5), inset 0 -1px 4px rgba(200,151,62,0.08)',
                }}
              >
                <span
                  className="text-2xl font-semibold"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    background:
                      'linear-gradient(180deg, #DEB668 0%, #C8973E 50%, #8B6914 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    letterSpacing: '0.1em',
                  }}
                >
                  MB
                </span>
              </div>
            </div>
          </div>

          {/* Name and title */}
          <div className="text-center sm:text-left">
            <h1
              className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-text-on-dark tracking-tight"
              style={{ textShadow: '0 2px 20px rgba(200, 151, 62, 0.15)' }}
            >
              Matt Bayne
            </h1>
            <p className="font-serif italic text-xl sm:text-2xl text-primary mt-2">
              The Synthesizer
            </p>
            <p className="font-serif text-base sm:text-lg text-text-on-dark-muted mt-4 max-w-lg leading-relaxed">
              Strategist, pattern finder, and relentless refiner. Takes vast
              information, sees themes and connections, and builds things that are
              beautiful, functional, and enduring.
            </p>
            <p className="font-serif italic text-sm text-text-on-dark-muted/80 mt-3 max-w-lg">
              Started in the field. Built risk models. Now ships product.
              Still builds furniture on weekends.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Engineer', 'Builder', 'Podcast Host', 'Woodworker', 'F3 Tulsa'].map((badge) => (
                <span
                  key={badge}
                  className="font-display text-[11px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-full border border-primary/20 text-text-on-dark-muted/70 bg-primary/5"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Skill card spread */}
        <SkillCardSpread />

        {/* Divider into quest board */}
        <GoldDivider className="mt-10 mb-4" />
      </div>
    </section>
  )
}
