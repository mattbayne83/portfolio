import GoldFiligree from '../../../shared/GoldFiligree'

export default function TitleSlide() {
  return (
    <div className="relative w-full h-full bg-bg flex items-center overflow-hidden">
      {/* Gold-tinted geometric accent */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <svg viewBox="0 0 960 540" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          <pattern id="title-dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(200,151,62,0.12)" />
          </pattern>
          <rect x="500" y="0" width="460" height="540" fill="url(#title-dots)" />
          <line x1="680" y1="0" x2="960" y2="280" stroke="#C8973E" strokeWidth="3" opacity="0.4" />
          <line x1="720" y1="0" x2="960" y2="240" stroke="#DEB668" strokeWidth="1.5" opacity="0.2" />
          <line x1="700" y1="540" x2="960" y2="380" stroke="#C8973E" strokeWidth="2" opacity="0.3" />
          <circle cx="800" cy="270" r="120" fill="url(#title-glow)" />
          <defs>
            <radialGradient id="title-glow">
              <stop offset="0%" stopColor="#C8973E" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#C8973E" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Filigree corners */}
      <GoldFiligree className="absolute top-4 left-4 w-12 h-12 opacity-40" />
      <GoldFiligree className="absolute top-4 right-4 w-12 h-12 opacity-40 -scale-x-100" />
      <GoldFiligree className="absolute bottom-4 left-4 w-12 h-12 opacity-40 -scale-y-100" />
      <GoldFiligree className="absolute bottom-4 right-4 w-12 h-12 opacity-40 rotate-180" />

      {/* Content */}
      <div className="relative z-10 px-12 sm:px-16 lg:px-20 max-w-[70%]">
        <p className="text-primary-light font-display text-sm sm:text-base font-semibold tracking-widest uppercase mb-4">
          A Vision Foretold
        </p>
        <h1 className="font-display text-text-on-dark leading-none">
          <span className="block text-4xl sm:text-5xl lg:text-6xl font-medium text-text-on-dark-muted font-serif italic mb-1">
            The
          </span>
          <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold">
            Prophecy
          </span>
        </h1>
        <div className="mt-6 flex items-baseline gap-3">
          <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold italic text-text-on-dark-muted">
            Scribed in the year
          </span>
          <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary">
            2020
          </span>
        </div>
        <p className="mt-8 text-text-on-dark-muted text-sm sm:text-base max-w-md font-serif italic">
          A vision of what pipeline safety would become when data replaces intuition and models replace spreadsheets
        </p>
      </div>
    </div>
  )
}
