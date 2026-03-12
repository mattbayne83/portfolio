export default function TitleSlide() {
  return (
    <div className="relative w-full h-full bg-neutral-950 flex items-center overflow-hidden">
      {/* Geometric accent — diagonal stripe */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <svg viewBox="0 0 960 540" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
          {/* Grid dots */}
          <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="rgba(79,70,229,0.15)" />
          </pattern>
          <rect x="500" y="0" width="460" height="540" fill="url(#dots)" />
          {/* Accent lines */}
          <line x1="680" y1="0" x2="960" y2="280" stroke="#4F46E5" strokeWidth="3" opacity="0.6" />
          <line x1="720" y1="0" x2="960" y2="240" stroke="#818CF8" strokeWidth="1.5" opacity="0.3" />
          <line x1="700" y1="540" x2="960" y2="380" stroke="#4F46E5" strokeWidth="2" opacity="0.4" />
          {/* Glow circle */}
          <circle cx="800" cy="270" r="120" fill="url(#glow)" />
          <defs>
            <radialGradient id="glow">
              <stop offset="0%" stopColor="#4F46E5" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#4F46E5" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 px-12 sm:px-16 lg:px-20 max-w-[70%]">
        <p className="text-primary-light font-display text-sm sm:text-base font-semibold tracking-widest uppercase mb-4">
          Executive Presentation
        </p>
        <h1 className="font-display text-white leading-none">
          <span className="block text-4xl sm:text-5xl lg:text-6xl font-medium text-neutral-300 mb-1">
            Pipeline
          </span>
          <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold">
            Risk & Integrity
          </span>
        </h1>
        <div className="mt-6 flex items-baseline gap-3">
          <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold italic text-neutral-400">
            in the year
          </span>
          <span className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-primary">
            2025
          </span>
        </div>
        <p className="mt-8 text-neutral-500 text-sm sm:text-base max-w-md">
          A look into the future of pipeline safety
        </p>
      </div>
    </div>
  )
}
