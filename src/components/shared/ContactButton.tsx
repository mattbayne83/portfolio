import type { ReactNode } from 'react'

export const CONTACT_EMAIL = 'mattbayne@gmail.com'

interface ContactButtonProps {
  label: string
  /** Optional prefilled email subject line */
  subject?: string
  /** Optional leading icon (e.g. a Mail glyph) */
  icon?: ReactNode
}

/** The page's single primary action — solid burnished gold, used sparingly. */
export default function ContactButton({ label, subject, icon }: ContactButtonProps) {
  const href = `mailto:${CONTACT_EMAIL}${subject ? `?subject=${encodeURIComponent(subject)}` : ''}`

  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 font-display text-sm font-semibold tracking-wide px-6 py-3 rounded-full text-bg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-visible:outline-none"
      style={{
        background: 'linear-gradient(135deg, #DEB668 0%, #C8973E 50%, #8B6914 100%)',
        boxShadow: '0 2px 8px rgba(200,151,62,0.25)',
      }}
    >
      {icon}
      {label}
    </a>
  )
}
