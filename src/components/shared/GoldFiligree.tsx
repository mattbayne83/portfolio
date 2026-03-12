interface GoldFiligreeProps {
  className?: string
}

export default function GoldFiligree({ className = '' }: GoldFiligreeProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 38 V8 C2 4 4 2 8 2 H38"
        stroke="url(#gold-filigree-grad)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M6 32 V12 C6 9 9 6 12 6 H32"
        stroke="url(#gold-filigree-grad)"
        strokeWidth="0.75"
        opacity="0.5"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="8" cy="8" r="2" fill="#C8973E" opacity="0.6" />
      <defs>
        <linearGradient id="gold-filigree-grad" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%" stopColor="#DEB668" />
          <stop offset="50%" stopColor="#C8973E" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
      </defs>
    </svg>
  )
}
